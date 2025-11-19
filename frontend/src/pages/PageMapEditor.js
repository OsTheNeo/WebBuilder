import React, { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from '../components/CustomNode';
import NodeTemplatesSidebar from '../components/NodeTemplatesSidebar';
import { getTemplateById } from '../constants/nodeTypes';

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'custom',
    position: { x: 400, y: 50 },
    data: {
      label: 'Home',
      path: '/',
      type: 'landing',
      enabled: true,
      isHome: true,
      onUpdate: () => {},
      onDelete: () => {},
      onToggleVisibility: () => {},
      onDesign: () => {}
    },
  },
];

const PageMapEditor = () => {
  const navigate = useNavigate();
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(110);
  const nodeIdCounter = useRef(2);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#94a3b8', strokeWidth: 2 } }, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onMove = useCallback((_, viewport) => {
    setZoomLevel(Math.round(viewport.zoom * 100));
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const templateData = event.dataTransfer.getData('application/reactflow');
      if (!templateData) return;

      const template = JSON.parse(templateData);
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNodeId = `node-${nodeIdCounter.current++}`;
      const newNode = {
        id: newNodeId,
        type: 'custom',
        position,
        data: {
          label: template.name,
          path: `/${template.id}`,
          type: template.type,
          enabled: true,
          isHome: false,
          onUpdate: handleUpdateNode,
          onDelete: handleDeleteNode,
          onToggleVisibility: handleToggleVisibility,
          onDesign: handleDesignPage
        },
      };

      setNodes((nds) => nds.concat(newNode));

      // If template has default children, create them
      if (template.defaultChildren && template.defaultChildren.length > 0) {
        const childNodes = [];
        const childEdges = [];

        template.defaultChildren.forEach((child, index) => {
          const childId = `node-${nodeIdCounter.current++}`;
          const childNode = {
            id: childId,
            type: 'custom',
            position: {
              x: position.x + (index - template.defaultChildren.length / 2) * 300,
              y: position.y + 200
            },
            data: {
              label: child.name,
              path: child.path,
              type: template.type,
              enabled: child.enabled,
              isHome: false,
              onUpdate: handleUpdateNode,
              onDelete: handleDeleteNode,
              onToggleVisibility: handleToggleVisibility,
              onDesign: handleDesignPage
            },
          };

          childNodes.push(childNode);
          childEdges.push({
            id: `e-${newNodeId}-${childId}`,
            source: newNodeId,
            target: childId,
            animated: true,
            style: { stroke: template.color || '#94a3b8', strokeWidth: 2 }
          });
        });

        setTimeout(() => {
          setNodes((nds) => nds.concat(childNodes));
          setEdges((eds) => eds.concat(childEdges));
        }, 100);
      }
    },
    [reactFlowInstance, setNodes, setEdges]
  );

  const handleUpdateNode = useCallback((nodeId, updates) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            data: {
              ...node.data,
              ...updates,
            },
          };
        }
        return node;
      })
    );
  }, [setNodes]);

  const handleDeleteNode = useCallback((nodeId) => {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
  }, [setNodes, setEdges]);

  const handleToggleVisibility = useCallback((nodeId) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            data: {
              ...node.data,
              enabled: !node.data.enabled,
            },
          };
        }
        return node;
      })
    );
  }, [setNodes]);

  const handleDesignPage = useCallback((nodeId) => {
    navigate(`/builder/${nodeId}`);
  }, [navigate]);

  // Update callbacks for initial node
  React.useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        data: {
          ...node.data,
          onUpdate: handleUpdateNode,
          onDelete: handleDeleteNode,
          onToggleVisibility: handleToggleVisibility,
          onDesign: handleDesignPage,
        },
      }))
    );
  }, [handleUpdateNode, handleDeleteNode, handleToggleVisibility, handleDesignPage, setNodes]);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Left Sidebar */}
      <NodeTemplatesSidebar />

      {/* Main Canvas */}
      <div className="flex-grow flex flex-col">
        {/* Header */}
        <div className="bg-white border-b shadow-sm px-6 py-4 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Site Structure</h1>
              <p className="text-sm text-gray-500 mt-1">Drag templates from the left to build your site hierarchy</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="px-2 py-1 bg-blue-50 border border-blue-200 rounded font-semibold text-blue-700">
                {zoomLevel}%
              </span>
              <span className="px-2 py-1 bg-gray-100 rounded">
                {nodes.filter(n => n.data.enabled).length} active pages
              </span>
              <span className="px-2 py-1 bg-gray-100 rounded">
                {nodes.length} total nodes
              </span>
            </div>
          </div>
        </div>

        {/* React Flow Canvas */}
        <div ref={reactFlowWrapper} className="flex-grow">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onMove={onMove}
            nodeTypes={nodeTypes}
            defaultViewport={{ x: 0, y: 0, zoom: 1.1 }}
            attributionPosition="bottom-right"
            className="bg-gray-50"
            defaultEdgeOptions={{
              animated: true,
              style: { stroke: '#94a3b8', strokeWidth: 2 }
            }}
          >
            <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#e5e7eb" />
            <Controls className="bg-white border border-gray-200 rounded-lg shadow-lg" />
            <MiniMap
              className="bg-white border border-gray-200 rounded-lg shadow-lg"
              nodeColor={(node) => {
                const template = getTemplateById(node.data.type);
                return node.data.enabled ? (template?.color || '#6B7280') : '#D1D5DB';
              }}
              maskColor="rgba(0, 0, 0, 0.05)"
            />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
};

export default PageMapEditor;

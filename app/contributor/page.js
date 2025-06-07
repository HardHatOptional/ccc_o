"use client";
import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
  Handle,
  Position
} from "reactflow";
import "reactflow/dist/style.css";

// Custom Node Component
const CustomNode = ({ data }) => {
  return (
    <div className="p-4 bg-blue-500 text-white rounded shadow-lg border border-white">
      {data.label}
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

// Initial Nodes
const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "📝 Vision Note" },
    type: "custom",
  },
  {
    id: "2",
    position: { x: 300, y: 200 },
    data: { label: "✅ Task 1" },
    type: "custom",
  },
];

export default function ContributorBoard() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-6">🚀 Contributor Vision Board</h1>
      <p className="text-gray-400">Drag, connect, and organize your vision</p>

      <div className="w-full h-full mt-6 bg-gray-800 rounded-lg shadow-lg p-4">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={{ custom: CustomNode }}
          fitView
        >
          <Background />
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}


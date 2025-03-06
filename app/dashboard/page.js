"use client";
import { useState } from "react";

const dummyProjects = [
  { id: 1, name: "AI Resume Parser", status: "Ongoing", funding: "80%" },
  { id: 2, name: "Job Bot 2.0", status: "Funding Needed", funding: "45%" },
  { id: 3, name: "Open Source Applicant Tracker", status: "Completed", funding: "100%" },
];

export default function Dashboard() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? dummyProjects
      : dummyProjects.filter((p) => p.status.includes(filter));

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-6 glow">Project Dashboard</h1>

      <div className="flex space-x-4 mb-6">
        {["All", "Ongoing", "Funding Needed", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg transition transform hover:scale-105 ${
              filter === status ? "bg-yellow-400 text-black" : "bg-gray-700 text-white"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-xl font-bold">{project.name}</h2>
            <p className="text-gray-400 mt-2">Status: {project.status}</p>
            <p className="text-yellow-400 mt-2">Funding: {project.funding}</p>
            {project.status === "Funding Needed" && (
              <button className="mt-4 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition transform hover:scale-105">
                Fund Project
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


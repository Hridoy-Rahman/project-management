"use client";
import React from "react";
import { useQuery } from "react-query";
import { fetchProjects } from "../lib/fetchProjects";
import { EditOutlined, EyeFilled, DeleteOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Link from "next/link";
const { Meta } = Card;

const ProjectsOverview = () => {
  const { data, isLoading, error } = useQuery("projects", fetchProjects);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-5">All Projects</h1>
      <div className="flex flex-col lg:flex-row gap-4 ">
        {data.map((project) => (
          <div key={project.id} className="flex ">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
              <p className="text-gray-600">{project.description}</p>
              <p className="text-gray-600 text-sm">
                Status :{" "}
                <span
                  className={`text-${
                    project.status === "In Progress" ? "blue" : "green"
                  }-500 font-bold`}
                >
                  {project.status}
                </span>
              </p>
              <hr className="my-4" />
              <div className="flex items-center justify-between space-x-4">
                <Link
                  href={`/projects/${project.id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <EyeFilled className="w-6 h-6" />
                </Link>
                <Link
                  href={`/projects/${project.id}`}
                  className="text-green-500 hover:text-green-700"
                >
                  <EditOutlined className="w-6 h-6" />
                </Link>

                <DeleteOutlined className="w-6 h-6 text-red-500 hover:text-red-700" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsOverview;

"use client";
import ProjectsOverview from "./projects/page";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ProjectsOverview />
      </QueryClientProvider>
    </div>
  );
}

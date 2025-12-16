import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Project } from "../types";
import { Loader2Icon } from "lucide-react";


const Projects = () => {
  const {projectId} = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(true);
  const [device, setDevice] = useState<'phone' | 'tablet' | 'desktop'>("desktop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
 

const fetchProjects = async () => {

 
};

useEffect(() => {
  fetchProjects();
}, []);

if (loading) {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Loader2Icon className="animate-spin text-indigo-200 size-7" />
      </div>
    </>
  );
}

  return (
    <div>Projects</div>
  )
}

export default Projects
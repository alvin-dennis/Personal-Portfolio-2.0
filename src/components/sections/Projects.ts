import {PROJECTS} from '@/lib/constants';

export interface Project {
  name: string;
  description: string;
  html_url: string;
  hosted_url: string;
  languages: string[];
}

export async function getProjects(): Promise<Project[]> {
  try {
    return PROJECTS.map((repo: any) => ({
      name: repo.name,
      description: repo.description || "No description provided",
      html_url: repo.html_url,
      hosted_url: repo.hosted_url || "No hosted link available",
      languages: repo.languages || ["Not specified"]
    }));
  } catch (error) {
    console.error("Error loading projects data:", error);
    return [];
  }
}

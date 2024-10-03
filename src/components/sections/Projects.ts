export interface Project {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
  }
  
  export async function getProjects(username: string): Promise<Project[]> {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
  
      return data.map((repo: any) => ({
        name: repo.name,
        description: repo.description || "No description provided",
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
        language: repo.language || "Not specified"
      }));
    } catch (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
  }
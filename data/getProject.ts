import { projectsData } from "./projects-data";

export async function getProject(projectId: string) {
    const projects = projectsData

    const projectSelected = projects.filter(project => project.id === projectId )

    return projectSelected
}
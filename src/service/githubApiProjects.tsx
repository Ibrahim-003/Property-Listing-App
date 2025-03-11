import { BASE_URL } from "../config/api";

export const getProjects = async () => {
    const response = await fetch(`${BASE_URL}?per_page=6&sort=updated&direction=desc`)
    return response;
}
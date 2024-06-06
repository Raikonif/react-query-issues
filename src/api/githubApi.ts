import axios from "axios";

export const githubApi = axios.create({ baseURL: "https://api.github.com/repos/facebook/react", headers: { Authorization: "Bearer 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" } })
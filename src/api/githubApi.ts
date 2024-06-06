import axios from "axios";
import { VITE_BEARER_TOKEN } from "../constants/api.constants";

export const githubApi = axios.create({ baseURL: "https://api.github.com/repos/facebook/react", headers: { Authorization: `Bearer ${VITE_BEARER_TOKEN}` } })
import axios, { AxiosResponse } from "axios";
import { PlayerResponse } from "./interfaces/ListAllPlayersResponse";
import { GetPlayerResponse } from "./interfaces/GetPlayerResponse";

const baseUrl = axios.create({
  baseURL: "http://localhost:8888",
});

export function player() {
  async function getAllPlayers(): Promise<AxiosResponse<PlayerResponse[]>> {
    return await baseUrl.get("/player");
  }

  async function getPlayerById(
    id: number
  ): Promise<AxiosResponse<GetPlayerResponse>> {
    return await baseUrl.get(`/player/${id}`);
  }

  return { getAllPlayers, getPlayerById };
}

export interface GetPlayerResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  observations: string;
  createdAt: Date;
  updatedAt: Date;
  available: boolean;
  playerStats: {
    walking: number;
    jogging: number;
    running: number;
    high_speed_running: number;
    sprinting: number;
  };
}

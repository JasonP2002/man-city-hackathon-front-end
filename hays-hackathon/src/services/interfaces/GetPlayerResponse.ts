export interface GetPlayerResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  observations: string;
  createdAt: Date;
  updatedAt: Date;
  playerStats: {
    walking: number;
    jogging: number;
    running: number;
    high_speed_running: number;
    sprinting: number;
  };
}

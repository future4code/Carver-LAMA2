import { ShowsDay } from "../../enum/showsDay";

export interface ShowsInputDTO{
    week_day: string;
    start_time: number;
    end_time: number;
    band_id: string;
}
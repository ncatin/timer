import { DairyCount } from "./dairy-count";

export interface Day {
    date: Date;
    startTime: string;
    endTime: string;
    time: number;
    rate: number;
    count: number;
    dairy: boolean;
    totalDairyCount: number;
    dairyCounts: DairyCount[];
}

import { DairyCount } from "./dairy-count";

export interface Day {
    date: Date;
    startTime: string;
    endtime: string;
    count: number;
    dairy: boolean;
    totalDairyCount: number;
    dairyCounts: DairyCount[];
}

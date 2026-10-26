import { DairyCount } from "./dairy-count";

export interface Day {
    date: Date;
    startDate: Date;
    endDate: Date;
    startTimeString: string;
    endTimeString: string;
    time: number;
    rate: number;
    count: number;
    dairy: boolean;
    totalDairyCount: number;
    dairyCounts: DairyCount[];
}

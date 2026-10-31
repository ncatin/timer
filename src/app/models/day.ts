import { DairyCount } from "./dairy-count";
import { Aisle } from "./aisle";

export interface Day {
    id: number;
    date?: Date;
    dairy?: boolean;
    totalDairyCount?: number;
    dairyCounts?: DairyCount[];
    aisles?: Aisle[];
}

import { ProgressBarStatus } from './progress-bar-status.enum';

export interface ProgressBarStepItem {
    name: string;
    status: ProgressBarStatus;
}

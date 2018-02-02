import { ProgressBarStatus } from './progress-bar-status.enum';
import { ProgressBarStepItem } from './progress-bar-step-item.model';

export interface ProgressBarStep extends ProgressBarStepItem {
    stepIndex: number;
    listStepItem: ProgressBarStepItem[];
}

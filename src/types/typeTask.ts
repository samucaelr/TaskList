
export type typeTask = {
  title: string;
  detail?: string;
  dateFinish?: string;
  priority: number;
  tags?: string[];
  complete: boolean;
  owner: string;
};

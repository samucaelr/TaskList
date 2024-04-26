import { SetStateAction } from "react";
import { typeTask } from "../../types/typeTask";

export type propsTaskItemEdit = {
  task: typeTask;
  setTask: React.Dispatch<SetStateAction<typeTask>>;
};

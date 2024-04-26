import { typeTask } from "../../types/typeTask";

export type propsTaskItem = {
  item: typeTask;
  index: number;
  handleRemove: () => void;
  handleSave: (item: typeTask, index: number) => void;
};

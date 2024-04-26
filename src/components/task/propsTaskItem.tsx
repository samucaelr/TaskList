export type propsTaskItem = {
  title: string;
  index: number;
  handleRemove: () => void;
  handleSave: (title: string, index: number) => void;
};

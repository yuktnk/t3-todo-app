import create from "zustand";
import { UpdateTaskInput } from "../schema/todo";

type State = {
  editedTask: UpdateTaskInput;
  updateEditedTask: (payload: UpdateTaskInput) => void;
  resetEditedTask: () => void;
};

const useStore = create<State>((set) => ({
  editedTask: { taskId: "", title: "", body: "" }, // initial state みたいなもん？

  updateEditedTask: (payload) => {
    set({
      editedTask: payload,
    });
  },
  resetEditedTask: () => {
    set({ editedTask: { taskId: "", title: "", body: "" } });
  },
}));

export default useStore;

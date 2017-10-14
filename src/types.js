export type Todo = {
  id: number,
  isComplete: boolean,
  description: string,
};

export type TodoCollection = {
  todos: Todo[],
};

export type EventHandler = Event => void;

import { v4 as uuidv4 } from 'uuid';

export const TODO_TYPE = 'todos';

export interface ITodo {
  id: string;
  label: string;
  isCompleted: boolean;
}

export const buildTodo = (label: string): ITodo => ({
  id: uuidv4(),
  label,
  isCompleted: false
});

import { v4 as uuidv4 } from 'uuid';

export const TODO_TYPE = 'todos';

export interface ITodo {
  id: string;
  label: string;
  isCompleted: boolean;
}

export const buildTodo = (label: string, id: string = uuidv4()): ITodo => ({
  id,
  label,
  isCompleted: false
});

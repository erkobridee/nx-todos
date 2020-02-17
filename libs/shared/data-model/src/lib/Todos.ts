import uuidv4 from 'uuid/v4';

export const TYPE = 'todos';

export interface ITodos {
  id: string;
  label: string;
  isCompleted: boolean;
}

export const buildTodo = (label: string): ITodos => ({
  id: uuidv4(),
  label,
  isCompleted: false
});

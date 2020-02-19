import { ITodo, buildTodo } from '@nx-todos/shared/data-model';

//----------------------------------------------------------------------------//

const findTodo = (id: string) => (item: ITodo) => item.id === id;

const mapToggleCompleted = (id: string, flag?: boolean) => (item: ITodo) => {
  if (item.id === id) {
    return {
      ...item,
      isCompleted: flag !== undefined ? flag : !item.isCompleted
    };
  }
  return item;
};

const filterNotTodo = (id: string) => (item: ITodo) => item.id !== id;

//----------------------------------------------------------------------------//

let todos: ITodo[] = [
  buildTodo('my first todo'),
  buildTodo('my second todo'),
  buildTodo('my third todo')
] as ITodo[];

export const list = () => [...todos];

export const get = (id: string) => todos.find(findTodo(id));

export const add = (label: string) => {
  const todo = buildTodo(label);
  todos = [...todos, todo];
  return todo;
};

export const toggleCompleted = (id: string, flag?: boolean) => {
  todos = todos.map(mapToggleCompleted(id, flag));
  return get(id);
};

export const remove = (id: string) => {
  const todo = get(id);
  if (todo) {
    todos = todos.filter(filterNotTodo(id));
  }
  return todo;
};

export const removeAll = () => {
  todos = [];
  return todos;
};

import * as Todos from './Todos';

describe('api / data > Todos', () => {
  it('should have an empty array', () => {
    expect(Todos.list()).toHaveLength(0);
  });

  it('should have one item after add', () => {
    expect(Todos.list()).toHaveLength(0);
    Todos.add('hello world');
    expect(Todos.list()).toHaveLength(1);
  });

  it('should remove the added one', () => {
    expect(Todos.list()).toHaveLength(1);
    const secondItem = Todos.add('world hello');
    expect(Todos.list()).toHaveLength(2);
    const fistItem = Todos.list()[0];
    expect(fistItem.id).not.toEqual(secondItem.id);
    expect(Todos.remove(fistItem.id).id).toEqual(fistItem.id);
    expect(Todos.list()).toHaveLength(1);
    expect(Todos.remove(secondItem.id).id).toEqual(secondItem.id);
    expect(Todos.list()).toHaveLength(0);
  });

  it('should add 3, change the status of second one and finally remove the first one', () => {
    let list = Todos.list();
    expect(list).toHaveLength(0);
    Todos.add('a');
    Todos.add('b');
    Todos.add('c');
    list = Todos.list();
    expect(list).toHaveLength(3);
    expect(list.map(item => item.label).join('')).toEqual('abc');
    let todo = list[1];
    const updatedTodo = Todos.toggleCompleted(todo.id);
    expect(updatedTodo.isCompleted).not.toEqual(todo.isCompleted);
    expect(updatedTodo.isCompleted).toBeTruthy();
    expect(todo.isCompleted).toBeFalsy();
    list = Todos.list();
    expect(list.map(item => item.isCompleted).join('|')).toEqual(
      'false|true|false'
    );
    todo = list[0];
    expect(Todos.remove(todo.id).id).toEqual(todo.id);
    expect(Todos.list()).toHaveLength(2);
  });

  it('should remove all', () => {
    expect(Todos.list()).toHaveLength(2);
    Todos.removeAll();
    expect(Todos.list()).toHaveLength(0);
  });
});

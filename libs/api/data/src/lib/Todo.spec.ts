import * as Todo from './Todo';

describe('api / data > Todo', () => {
  beforeEach(() => {
    Todo.removeAll();
  });

  it('should have an empty array', () => {
    expect(Todo.list()).toHaveLength(0);
  });

  it('should have one item after add', () => {
    expect(Todo.list()).toHaveLength(0);
    Todo.add('hello world');
    expect(Todo.list()).toHaveLength(1);
  });

  it('should get one by its id', () => {
    expect(Todo.list()).toHaveLength(0);
    Todo.add('a');
    const b = Todo.add('b');
    Todo.add('c');
    expect(Todo.list()).toHaveLength(3);
    expect(JSON.stringify(Todo.get(b.id))).toEqual(JSON.stringify(b));
  });

  it('should remove the added one', () => {
    expect(Todo.list()).toHaveLength(0);
    const todo = Todo.add('a');
    expect(Todo.list()).toHaveLength(1);
    expect(Todo.remove(todo.id).id).toEqual(todo.id);
    expect(Todo.list()).toHaveLength(0);
  });

  it('should add 3, change the status of second one and finally remove the first one', () => {
    let list = Todo.list();
    expect(list).toHaveLength(0);
    Todo.add('a');
    Todo.add('b');
    Todo.add('c');
    list = Todo.list();
    expect(list).toHaveLength(3);
    expect(list.map(item => item.label).join('')).toEqual('abc');
    let todo = list[1];
    const updatedTodo = Todo.toggleCompleted(todo.id);
    expect(updatedTodo.isCompleted).not.toEqual(todo.isCompleted);
    expect(updatedTodo.isCompleted).toBeTruthy();
    expect(todo.isCompleted).toBeFalsy();
    list = Todo.list();
    expect(list.map(item => item.isCompleted).join('|')).toEqual(
      'false|true|false'
    );
    todo = list[0];
    expect(Todo.remove(todo.id).id).toEqual(todo.id);
    expect(Todo.list()).toHaveLength(2);
  });

  it('should update the todo label', () => {
    let list = Todo.list();
    expect(list).toHaveLength(0);
    Todo.add('a');
    const second = Todo.add('b');
    Todo.add('c');
    list = Todo.list();
    expect(list).toHaveLength(3);
    expect(list.map(item => item.label).join('')).toEqual('abc');

    const secondUpdated = Todo.updateLabel(second.id, 'BBB');
    expect(secondUpdated.label).not.toEqual(second.label);

    list = Todo.list();
    expect(list.map(item => item.label).join('')).toEqual('aBBBc');
  });

  it('should remove all', () => {
    Todo.add('a');
    Todo.add('b');
    expect(Todo.list()).toHaveLength(2);
    Todo.removeAll();
    expect(Todo.list()).toHaveLength(0);
  });
});

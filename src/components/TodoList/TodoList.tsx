import React from 'react';
import { Todo } from '../../types/Todo';
import classnames from 'classnames';

type Prop = {
  todos: Todo[];
  onTodoSelect: (todo: Todo) => void;
  showModal: boolean;
};

export const TodoList: React.FC<Prop> = ({
  todos,
  showModal,
  onTodoSelect,
}) => {
  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {todos.map(todo => {
          return (
            <tr
              data-cy="todo"
              className={classnames({
                'has-background-info-light': showModal,
              })}
              key={todo.id}
            >
              <td className="is-vcentered">{todo.id}</td>
              <td className="is-vcentered">
                {todo.completed && (
                  <span className="icon" data-cy="iconCompleted">
                    <i className="fas fa-check" />
                  </span>
                )}
              </td>
              <td className="is-vcentered is-expanded">
                <p
                  className={classnames({
                    'has-text-success': todo.completed,
                    'has-text-danger': !todo.completed,
                  })}
                >
                  {todo.title}
                </p>
              </td>
              <td className="has-text-right is-vcentered">
                <button
                  data-cy="selectButton"
                  className="button"
                  type="button"
                  onClick={() => onTodoSelect(todo)}
                >
                  <span className="icon">
                    <i
                      className={classnames('far', {
                        'fa-eye-slash': showModal,
                        'fa-eye': !showModal,
                      })}
                    />
                  </span>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

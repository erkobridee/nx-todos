import * as React from 'react';
import cn from 'classnames';

import './_styles.scss';

export interface IInputTextProps<T = HTMLInputElement>
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<T>, T> {
  inputRef?: React.Ref<T>;
  className?: string;
  renderBorder?: boolean;
}

export const InputText: React.FunctionComponent<IInputTextProps> = ({
  className,
  renderBorder = true,
  inputRef,
  type,
  ...otherProps
}) => {
  // force the type
  type = 'text';
  return (
    <div
      className={cn('input-text', className, {
        'input-text--border': renderBorder
      })}
    >
      <input ref={inputRef} type={type} {...otherProps} />
    </div>
  );
};

export default InputText;

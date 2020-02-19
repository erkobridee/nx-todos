import * as React from 'react';
import cn from 'classnames';

import './_styles.scss';

export interface IInputTextProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  renderBorder?: boolean;
}

export const InputText: React.FunctionComponent<IInputTextProps> = ({
  className,
  renderBorder = true,
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
      <input type={type} {...otherProps} />
    </div>
  );
};

export default InputText;

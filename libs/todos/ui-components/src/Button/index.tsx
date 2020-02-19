import * as React from 'react';
import cn from 'classnames';

import './_styles.scss';

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  active?: boolean;
}

export const Button: React.FunctionComponent<IButtonProps> = ({
  className,
  active = false,
  ...otherProps
}) => {
  return (
    <button
      className={cn('btn', className, { 'btn--active': active })}
      {...otherProps}
    />
  );
};

export default Button;

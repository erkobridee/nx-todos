import * as React from 'react';
import cn from 'classnames';

import './_styles.scss';

export interface ICheckerProps<T = HTMLInputElement>
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<T>, T> {
  inputRef?: React.Ref<T>;
  className?: string;
}

export const Checker: React.FunctionComponent<ICheckerProps> = ({
  className,
  inputRef,
  ...otherProps
}) => (
  <label className={cn('checker', className)}>
    <input
      className="checkbox"
      type="checkbox"
      ref={inputRef}
      {...otherProps}
    />
    <div className="check-bg"></div>
    <div className="checkmark">
      <svg viewBox="0 0 100 100">
        <path
          d="M20,55 L40,75 L77,27"
          fill="none"
          stroke="#FFF"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </label>
);

export default Checker;

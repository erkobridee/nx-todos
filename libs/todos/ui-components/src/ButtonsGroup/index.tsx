import * as React from 'react';
import cn from 'clsx';

import './_styles.scss';

export interface IButtonsGroupProps {
  className?: string;
}

export const ButtonsGroup: React.FunctionComponent<IButtonsGroupProps> = ({
  className,
  children,
}) => <div className={cn('btns-group', className)}>{children}</div>;

export default ButtonsGroup;

import * as React from 'react';
import cn from 'clsx';

import NxLogo from '@nx-todos/todos/ui-components/NxLogo';

import './_styles.scss';

export interface ILayoutHeaderProps {
  className?: string;
  logoWidth?: string;
}

export const LayoutHeader: React.FunctionComponent<ILayoutHeaderProps> = ({
  className,
  logoWidth = '100',
}) => (
  <div className={cn('layout-header', className)}>
    <NxLogo className="layout-header__logo" width={logoWidth} />
    <h1 className="layout-header__greetings">
      Welcome to the nx-todos application!
    </h1>
  </div>
);

export default LayoutHeader;

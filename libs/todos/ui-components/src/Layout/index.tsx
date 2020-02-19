import * as React from 'react';
import cn from 'classnames';

import LayoutHeader from './Header';

import './_styles.scss';

export interface ILayoutProps {
  className?: string;
}

export const Layout: React.FunctionComponent<ILayoutProps> = ({
  children,
  className
}) => (
  <div className={cn('layout', className)}>
    <div className="layout__container">
      <LayoutHeader className="layout__header" />
      <div className="layout__content">{children}</div>
      <div className="layout__footer">???</div>
    </div>
  </div>
);

export default Layout;

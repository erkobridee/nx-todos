import * as React from 'react';
import cn from 'clsx';

import LayoutHeader from './Header';
import LayoutFooter from './Footer';

import './_styles.scss';

export interface ILayoutProps {
  className?: string;
}

export const Layout: React.FunctionComponent<
  React.PropsWithChildren<ILayoutProps>
> = ({ children, className }) => (
  <div className={cn('layout', className)}>
    <div className="layout__container">
      <LayoutHeader className="layout__header" />
      <div className="layout__content">{children}</div>
      <LayoutFooter className="layout__footer" />
    </div>
  </div>
);

export default Layout;

import * as React from 'react';
import cn from 'clsx';

import NxLogo from '@nx-todos/todos/ui-components/NxLogo';

import './_styles.scss';

export interface ILayoutFooterProps {
  className?: string;
}

export const LayoutFooter: React.FunctionComponent<ILayoutFooterProps> = ({
  className,
}) => (
  <div className={cn('layout-footer', className)}>
    <div>
      © {new Date().getFullYear()}, Built with
      {` `}{' '}
      <a href="https://nx.dev/react" target="_blank">
        Nx (Extensible Dev Tools for Monorepos)
      </a>
    </div>
    <NxLogo width="25" className="layout-footer__logo" />
  </div>
);

export default LayoutFooter;

import * as React from 'react';
import cn from 'clsx';

import './_styles.scss';

export interface INxLogoProps {
  className?: string;
  width?: string;
}

export const NxLogo: React.FunctionComponent<INxLogoProps> = ({
  className,
  width = '25',
}) => (
  <a
    href="https://nx.dev/react/"
    target="_blank"
    className={cn('nx-logo', className)}
  >
    <img
      width={width}
      src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
    />
  </a>
);

export default NxLogo;

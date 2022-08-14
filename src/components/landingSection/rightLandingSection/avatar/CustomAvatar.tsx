import React from 'react';
import { useMediaQuery, useViewportSize } from '@mantine/hooks';

export const CustomAvatar: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { width } = useViewportSize();
  return (
    <img
      src={
        isMobile
          ? '/assets/images/mobileAvatar.png'
          : '/assets/images/avatar.svg'
      }
      width={width * (isMobile ? 750 / 768 : 600 / 1920)}
      height={width * (isMobile ? 750 / 768 : 600 / 1920)}
      alt=""
    />
  );
};

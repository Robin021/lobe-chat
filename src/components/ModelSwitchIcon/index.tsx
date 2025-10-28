"use client";

import { ModelIcon } from '@lobehub/icons';
import Image from 'next/image';
import { memo } from 'react';

import { appEnv } from '@/envs/app';

interface Props {
  model: string;
  size?: number;
}

// If NEXT_PUBLIC_MODEL_SWITCH_ICON_URL is provided, use it.
// Otherwise fallback to the default ModelIcon from @lobehub/icons.
const ModelSwitchIcon = memo<Props>(({ model, size = 22 }) => {
  const url = (appEnv as any).NEXT_PUBLIC_MODEL_SWITCH_ICON_URL as
    | string
    | undefined;

  if (url) {
    return (
      <Image
        alt={model}
        height={size}
        src={url}
        style={{ display: 'block' }}
        width={size}
      />
    );
  }

  return <ModelIcon model={model} size={size} />;
});

export default ModelSwitchIcon;

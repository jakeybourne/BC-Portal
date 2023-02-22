import { memo, SVGProps } from 'react';

const _3LayersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 15L10 20L20 15M0 10L10 15L20 10M10 0L0 5L10 10L20 5L10 0Z'
      stroke='#101828'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(_3LayersIcon);
export { Memo as _3LayersIcon };

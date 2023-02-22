import { memo, SVGProps } from 'react';

const FlagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 13C0 13 1 12 4 12C7 12 9 14 12 14C15 14 16 13 16 13V1C16 1 15 2 12 2C9 2 7 0 4 0C1 0 0 1 0 1V13ZM0 13V20'
      stroke='#101828'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(FlagIcon);
export { Memo as FlagIcon };

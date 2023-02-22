import { memo, SVGProps } from 'react';

const BarChart2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M12 16V6M6 16V0M0 16V10' stroke='#101828' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(BarChart2Icon);
export { Memo as BarChart2Icon };

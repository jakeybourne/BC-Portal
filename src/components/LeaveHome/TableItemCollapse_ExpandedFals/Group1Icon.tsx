import { memo, SVGProps } from 'react';

const Group1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M5 0.2V9.8' stroke='black' strokeOpacity={0.88} />
    <path d='M9.8 5L0.2 5' stroke='black' strokeOpacity={0.88} />
  </svg>
);

const Memo = memo(Group1Icon);
export { Memo as Group1Icon };

import { memo, SVGProps } from 'react';

const Group1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M9.6 0L-1.19209e-07 0' stroke='black' strokeOpacity={0.88} />
  </svg>
);

const Memo = memo(Group1Icon);
export { Memo as Group1Icon };

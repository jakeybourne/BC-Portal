import { memo, SVGProps } from 'react';

const DividerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1 960' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M1 960H0V0H1V960Z' fill='#7F56D9' />
  </svg>
);

const Memo = memo(DividerIcon);
export { Memo as DividerIcon };

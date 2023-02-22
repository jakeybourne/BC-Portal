import { memo, SVGProps } from 'react';

const DividerIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 247 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M247 1H0V0H247V1Z' fill='#475467' />
  </svg>
);

const Memo = memo(DividerIcon2);
export { Memo as DividerIcon2 };

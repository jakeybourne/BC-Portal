import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.086 0.5H10.0606C9.99084 0.5 9.92521 0.53418 9.8842 0.590234L6.00002 5.94414L2.11584 0.590234C2.07482 0.53418 2.0092 0.5 1.93947 0.5H0.91408C0.825213 0.5 0.77326 0.601172 0.825213 0.673633L5.64592 7.31953C5.82092 7.56016 6.17912 7.56016 6.35275 7.31953L11.1735 0.673633C11.2268 0.601172 11.1748 0.5 11.086 0.5V0.5Z'
      fill='#1677FF'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };

import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.53125 0.37499H6.46875C6.55208 0.37499 6.59375 0.416656 6.59375 0.49999V11.5C6.59375 11.5833 6.55208 11.625 6.46875 11.625H5.53125C5.44792 11.625 5.40625 11.5833 5.40625 11.5V0.49999C5.40625 0.416656 5.44792 0.37499 5.53125 0.37499Z'
      fill='#344054'
    />
    <path
      d='M0.75 5.40624H11.25C11.3333 5.40624 11.375 5.44791 11.375 5.53124V6.46874C11.375 6.55207 11.3333 6.59374 11.25 6.59374H0.75C0.666667 6.59374 0.625 6.55207 0.625 6.46874V5.53124C0.625 5.44791 0.666667 5.40624 0.75 5.40624Z'
      fill='#344054'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };

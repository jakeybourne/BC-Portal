import { memo, SVGProps } from 'react';

const FiltersLinesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3 5H13M0.5 0H15.5M5.5 10H10.5'
      stroke='#344054'
      strokeWidth={1.67}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(FiltersLinesIcon);
export { Memo as FiltersLinesIcon };

import { memo, SVGProps } from 'react';

const FiltersLinesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M3 6H15M0 0H18M6 12H12' stroke='#101828' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(FiltersLinesIcon);
export { Memo as FiltersLinesIcon };

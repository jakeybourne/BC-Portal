import { memo, SVGProps } from 'react';

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M10 0L0 10M0 0L10 10' stroke='#6941C6' strokeWidth={1.67} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(XIcon);
export { Memo as XIcon };

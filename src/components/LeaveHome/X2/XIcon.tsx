import { memo, SVGProps } from 'react';

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M12 0L0 12M0 0L12 12' stroke='#101828' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(XIcon);
export { Memo as XIcon };

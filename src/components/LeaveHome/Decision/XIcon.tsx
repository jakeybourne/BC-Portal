import { memo, SVGProps } from 'react';

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.81818 0.272727L0.272727 6.81818M0.272727 0.272727L6.81818 6.81818'
      stroke='#F04438'
      strokeWidth={1.09091}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(XIcon);
export { Memo as XIcon };

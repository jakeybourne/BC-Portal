import { memo, SVGProps } from 'react';

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.90909 0.272727L2.90909 6.27273L0.181818 3.54545'
      stroke='#039855'
      strokeWidth={1.09091}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(CheckIcon);
export { Memo as CheckIcon };

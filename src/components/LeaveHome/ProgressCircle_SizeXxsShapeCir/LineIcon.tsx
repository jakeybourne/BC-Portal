import { memo, SVGProps } from 'react';

const LineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 58 58' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M29 0C35.1242 7.30303e-08 41.0912 1.93879 46.0458 5.53851C51.0004 9.13822 54.6882 14.214 56.5806 20.0385C58.4731 25.863 58.4731 32.137 56.5806 37.9615C54.6882 43.786 51.0004 48.8618 46.0458 52.4615'
      stroke='#7F56D9'
      strokeWidth={6}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(LineIcon);
export { Memo as LineIcon };

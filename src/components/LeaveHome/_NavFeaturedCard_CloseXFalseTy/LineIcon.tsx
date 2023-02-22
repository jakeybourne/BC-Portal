import { memo, SVGProps } from 'react';

const LineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 58 58' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M29 0C35.1242 7.30303e-08 41.0912 1.93879 46.0458 5.53851C51.0004 9.13822 54.6882 14.214 56.5806 20.0385C58.4731 25.863 58.4731 32.137 56.5806 37.9615C54.6882 43.786 51.0004 48.8618 46.0458 52.4615C41.0912 56.0612 35.1242 58 29 58C22.8758 58 16.9088 56.0612 11.9542 52.4615C6.99964 48.8618 3.31184 43.7859 1.41936 37.9615C-0.473121 32.137 -0.47312 25.863 1.41936 20.0385'
      stroke='#F2F4F7'
      strokeWidth={6}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(LineIcon);
export { Memo as LineIcon };

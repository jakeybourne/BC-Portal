import { memo, SVGProps } from 'react';

const CheckboxInactiveDefaultIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={16} height={16} rx={4} fill='white' stroke='black' strokeOpacity={0.15} />
  </svg>
);

const Memo = memo(CheckboxInactiveDefaultIcon);
export { Memo as CheckboxInactiveDefaultIcon };

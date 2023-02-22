import { memo, SVGProps } from 'react';

const SortIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.94189 4.57036L4.21022 0.0960542C4.1034 -0.0320181 3.89773 -0.0320181 3.78978 0.0960542L0.0581151 4.57036C-0.0805157 4.7372 0.0444792 4.9816 0.268334 4.9816H7.73167C7.95552 4.9816 8.08052 4.7372 7.94189 4.57036Z'
      fill='black'
      fillOpacity={0.25}
    />
    <path
      d='M7.73167 7.0184H0.268334C0.0444792 7.0184 -0.0805157 7.2628 0.0581151 7.42964L3.78978 11.9039C3.89659 12.032 4.10227 12.032 4.21022 11.9039L7.94189 7.42964C8.08052 7.2628 7.95552 7.0184 7.73167 7.0184Z'
      fill='black'
      fillOpacity={0.25}
    />
  </svg>
);

const Memo = memo(SortIcon2);
export { Memo as SortIcon2 };

import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.29688 0.562485H9.70312C9.82812 0.562485 9.89062 0.624985 9.89062 0.749985V17.25C9.89062 17.375 9.82812 17.4375 9.70312 17.4375H8.29688C8.17188 17.4375 8.10938 17.375 8.10938 17.25V0.749985C8.10938 0.624985 8.17188 0.562485 8.29688 0.562485Z'
      fill='black'
      fillOpacity={0.45}
    />
    <path
      d='M1.125 8.10936H16.875C17 8.10936 17.0625 8.17186 17.0625 8.29686V9.70311C17.0625 9.82811 17 9.89061 16.875 9.89061H1.125C1 9.89061 0.9375 9.82811 0.9375 9.70311V8.29686C0.9375 8.17186 1 8.10936 1.125 8.10936Z'
      fill='black'
      fillOpacity={0.45}
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };

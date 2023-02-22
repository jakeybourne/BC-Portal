import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.31283 1.41058V0.202767C8.31283 0.0980799 8.19252 0.0402674 8.11127 0.10433L1.06752 5.60589C1.00767 5.65243 0.959243 5.71203 0.925932 5.78013C0.892621 5.84824 0.875305 5.92305 0.875305 5.99886C0.875305 6.07467 0.892621 6.14949 0.925932 6.21759C0.959243 6.28569 1.00767 6.34529 1.06752 6.39183L8.11127 11.8934C8.19408 11.9575 8.31283 11.8996 8.31283 11.795V10.5871C8.31283 10.5106 8.27689 10.4371 8.21752 10.3903L2.59252 5.99964L8.21752 1.60745C8.27689 1.56058 8.31283 1.48714 8.31283 1.41058V1.41058Z'
      fill='black'
      fillOpacity={0.45}
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };

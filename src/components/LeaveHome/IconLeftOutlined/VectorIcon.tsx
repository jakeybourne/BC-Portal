import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.9692 2.11587V0.304151C11.9692 0.14712 11.7888 0.0604011 11.6669 0.156495L1.10127 8.40884C1.0115 8.47865 0.938865 8.56804 0.888898 8.6702C0.838932 8.77235 0.812958 8.88457 0.812958 8.99829C0.812958 9.11201 0.838932 9.22423 0.888898 9.32639C0.938865 9.42854 1.0115 9.51793 1.10127 9.58774L11.6669 17.8401C11.7911 17.9362 11.9692 17.8495 11.9692 17.6924V15.8807C11.9692 15.7659 11.9153 15.6557 11.8263 15.5854L3.38877 8.99946L11.8263 2.41118C11.9153 2.34087 11.9692 2.23071 11.9692 2.11587V2.11587Z'
      fill='black'
      fillOpacity={0.45}
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
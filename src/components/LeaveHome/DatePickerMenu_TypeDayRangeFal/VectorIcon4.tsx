import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.96398 5.60626L0.920252 0.104698C0.901847 0.0902073 0.879727 0.0812022 0.856434 0.0787164C0.833142 0.0762306 0.80962 0.080365 0.788571 0.0906447C0.767522 0.100924 0.7498 0.116933 0.737439 0.136831C0.725078 0.156729 0.718579 0.17971 0.71869 0.203135V1.41095C0.71869 1.48751 0.754628 1.56095 0.814003 1.60782L6.43899 6.00001L0.814003 10.3922C0.753065 10.4391 0.71869 10.5125 0.71869 10.5891V11.7969C0.71869 11.9016 0.839002 11.9594 0.920252 11.8953L7.96398 6.39376C8.02385 6.34706 8.07228 6.28733 8.10559 6.21909C8.1389 6.15086 8.15622 6.07594 8.15622 6.00001C8.15622 5.92408 8.1389 5.84916 8.10559 5.78093C8.07228 5.7127 8.02385 5.65296 7.96398 5.60626Z'
      fill='black'
      fillOpacity={0.45}
    />
  </svg>
);

const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
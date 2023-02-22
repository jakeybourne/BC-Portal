import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17.7188 0H15.961C15.8414 0 15.7289 0.0585939 15.6586 0.154688L9.00003 9.33281L2.34144 0.154688C2.27112 0.0585939 2.15862 0 2.03909 0H0.28128C0.128936 0 0.0398736 0.173438 0.128936 0.297657L8.393 11.6906C8.693 12.1031 9.30706 12.1031 9.60472 11.6906L17.8688 0.297657C17.9602 0.173438 17.8711 0 17.7188 0V0Z'
      fill='black'
      fillOpacity={0.45}
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };

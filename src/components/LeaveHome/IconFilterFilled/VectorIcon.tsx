import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.17961 16.6406C6.17961 17.0555 6.51243 17.3906 6.92493 17.3906H13.0749C13.4874 17.3906 13.8202 17.0555 13.8202 16.6406V12.0469H6.17961V16.6406ZM18.6273 0.609375H1.37258C0.798363 0.609375 0.439769 1.23516 0.728051 1.73438L5.91477 10.5469H14.0898L19.2765 1.73438C19.5601 1.23516 19.2015 0.609375 18.6273 0.609375V0.609375Z'
      fill='black'
      fillOpacity={0.45}
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };

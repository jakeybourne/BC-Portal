import { memo, SVGProps } from 'react';

const UsersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16 18V16C16 14.9391 15.5786 13.9217 14.8284 13.1716C14.0783 12.4214 13.0609 12 12 12H4C2.93913 12 1.92172 12.4214 1.17157 13.1716C0.421427 13.9217 0 14.9391 0 16V18M22 18V16C21.9993 15.1137 21.7044 14.2528 21.1614 13.5523C20.6184 12.8519 19.8581 12.3516 19 12.13M15 0.13C15.8604 0.350301 16.623 0.850701 17.1676 1.55231C17.7122 2.25392 18.0078 3.11683 18.0078 4.005C18.0078 4.89317 17.7122 5.75608 17.1676 6.45769C16.623 7.1593 15.8604 7.6597 15 7.88M12 4C12 6.20914 10.2091 8 8 8C5.79086 8 4 6.20914 4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4Z'
      stroke='#D0D5DD'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(UsersIcon);
export { Memo as UsersIcon };

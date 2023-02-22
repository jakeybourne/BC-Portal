import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.5 0.5H0.5C0.223437 0.5 0 0.723437 0 1V11C0 11.2766 0.223437 11.5 0.5 11.5H13.5C13.7766 11.5 14 11.2766 14 11V1C14 0.723437 13.7766 0.5 13.5 0.5ZM12.875 2.23125V10.375H1.125V2.23125L0.69375 1.89531L1.30781 1.10625L1.97656 1.62656H12.025L12.6938 1.10625L13.3078 1.89531L12.875 2.23125V2.23125ZM12.025 1.625L7 5.53125L1.975 1.625L1.30625 1.10469L0.692188 1.89375L1.12344 2.22969L6.46094 6.37969C6.61444 6.49894 6.80328 6.56367 6.99766 6.56367C7.19203 6.56367 7.38088 6.49894 7.53438 6.37969L12.875 2.23125L13.3062 1.89531L12.6922 1.10625L12.025 1.625Z'
      fill='black'
      fillOpacity={0.88}
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
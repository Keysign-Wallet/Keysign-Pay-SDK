import React from 'react';

const ScanIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
    >
      <path
        d="M17.46 5.42857H16.2C16.101 5.42857 16.02 5.35223 16.02 5.25893V1.52679H12.06C11.961 1.52679 11.88 1.45045 11.88 1.35714V0.169643C11.88 0.0763393 11.961 0 12.06 0H16.11C16.956 0 17.64 0.644643 17.64 1.44196V5.25893C17.64 5.35223 17.559 5.42857 17.46 5.42857ZM5.94 1.52679H1.98V5.25893C1.98 5.35223 1.899 5.42857 1.8 5.42857H0.539999C0.440999 5.42857 0.359999 5.35223 0.359999 5.25893V1.44196C0.359999 0.644643 1.044 0 1.89 0H5.94C6.039 0 6.12 0.0763393 6.12 0.169643V1.35714C6.12 1.45045 6.039 1.52679 5.94 1.52679ZM12.06 14.7589H16.02V11.0268C16.02 10.9335 16.101 10.8571 16.2 10.8571H17.46C17.559 10.8571 17.64 10.9335 17.64 11.0268V14.8438C17.64 15.6411 16.956 16.2857 16.11 16.2857H12.06C11.961 16.2857 11.88 16.2094 11.88 16.1161V14.9286C11.88 14.8353 11.961 14.7589 12.06 14.7589ZM0.539999 10.8571H1.8C1.899 10.8571 1.98 10.9335 1.98 11.0268V14.7589H5.94C6.039 14.7589 6.12 14.8353 6.12 14.9286V16.1161C6.12 16.2094 6.039 16.2857 5.94 16.2857H1.89C1.044 16.2857 0.359999 15.6411 0.359999 14.8438V11.0268C0.359999 10.9335 0.440999 10.8571 0.539999 10.8571ZM0.179999 7.37946H17.82C17.919 7.37946 18 7.4558 18 7.54911V8.73661C18 8.82991 17.919 8.90625 17.82 8.90625H0.179999C0.0809993 8.90625 -7.15256e-07 8.82991 -7.15256e-07 8.73661V7.54911C-7.15256e-07 7.4558 0.0809993 7.37946 0.179999 7.37946Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ScanIcon;

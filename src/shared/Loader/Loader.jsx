import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="100"
      width="100"
      radius="9"
      color="#5d7dd6"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      visible={true}
    />
  );
};

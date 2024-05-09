import { ThreeDots } from 'react-loader-spinner';

import './assets/index.css';

export const Loader = () => {
  return (
    <div className="loader-container">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#1866CCC6"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

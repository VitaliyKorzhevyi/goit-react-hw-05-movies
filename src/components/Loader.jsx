import { Puff } from 'react-loader-spinner';

import './styled/Loader.css';

const Loader = () => {
  return (
    <div className='container-loader'>
      <Puff
        height="80"
        width="80"
        radius="9"
        color="white"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loader;

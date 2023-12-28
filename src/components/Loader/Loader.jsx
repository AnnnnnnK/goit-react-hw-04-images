import { ThreeCircles } from 'react-loader-spinner';
import css from 'components/Loader/Loader.module.css';

const Loader = () => {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#000066"
      innerCircleColor="#EC83BB"
      middleCircleColor="#000066"
    />
  );
};

export default Loader;

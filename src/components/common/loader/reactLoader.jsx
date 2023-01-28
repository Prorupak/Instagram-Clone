import Loader from 'react-loader-spinner';

export const ReactLoader = () => {
  return (
    <Loader
      type="TailSpin"
      color="#00000059"
      height={70}
      width={70}
      className="flex justify-center mt-12"
    />
  );
}

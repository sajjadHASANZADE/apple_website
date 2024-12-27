import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="top-0 left-0 absolute flex justify-center items-center w-full h-full">
        <div id="loading-screen" className="rounded-full w-[10vw] h-[10vw]">
          Loading...
        </div>
      </div>
    </Html>
  );
};

export default Loader;

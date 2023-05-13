import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../stylesheets/Home.scss'

const Home = () => {
  const buttonAnimation = useSpring({
    transform: 'translateY(0)', // Starting position
    from: { transform: 'translateY(3000px)' }, // Initial position
  });

  return (
    <>
      <div id="homepage">
        <h1 className="fa-fade">Add Cluster</h1>
        <animated.button
          id="cluster-btn"
          className="fa-thin fa-plus fa-fade fa-xl"
          style={buttonAnimation}
        ></animated.button>
      </div>
    </>
  );
};

export default Home;
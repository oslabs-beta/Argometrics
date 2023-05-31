import React from 'react';
import { useSpring, animated } from 'react-spring';
import ClusterEditor from './ClusterEditor';
import '../stylesheets/Home.scss'
import { Cluster } from '../../../types';

interface HomeProps {
  userId: string;
  cluster: Array<Cluster>
  setCluster: React.Dispatch<React.SetStateAction<Array<Cluster>>>;
  showClusterEditor: boolean;
  setShowClusterEditor: React.Dispatch<React.SetStateAction<boolean>>;
}
const Home = ({ userId, cluster, setCluster, showClusterEditor, setShowClusterEditor}: HomeProps) => {
  
  // animated button that on click, opens the cluster editor
  const buttonAnimation = useSpring({
    transform: 'translateY(0)', // Starting position
    from: { transform: 'translateY(3000px)' }, // Initial position
  });

  return (
    <>
      <div id="homepage">
        <h1 className="fa-fade">Add Cluster</h1>
        {!showClusterEditor && <animated.button onClick={ () => setShowClusterEditor(true) } 
          id="cluster-btn"
          className="fa-thin fa-plus fa-fade fa-xl"
          style={buttonAnimation}
        >+</animated.button>}
        {showClusterEditor && <ClusterEditor cluster={cluster} setShowClusterEditor={ setShowClusterEditor } />}
      </div>
    </>
  );
};

export default Home;
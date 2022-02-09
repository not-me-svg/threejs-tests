import React from 'react';
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Background } from './components/Background';
import { Title } from './components/Title';
import { Box } from './components/Box';
import { AnimatedSphere as Sphere } from './components/AnimatedSphere';
import { BuiltIphone } from "./components/BuiltIphone";


function App() {
  const location = useLocation();

  return (
    <div className="h-100vh d-flex flex-column ai-center jc-center">
      <Title />

      <div className="tjs__canvas-wrapper">
        <TransitionGroup component={null}>
          <CSSTransition 
              key={location.key} classNames="fade" timeout={300}>

            <Routes location={location}>
              <Route path="/" exact element={ <Box /> } />
              <Route path="/sphere" exact element={ <Sphere /> } />
              <Route path="/iphone" exact element={ <BuiltIphone /> } />
            </Routes>

          </CSSTransition>
        </TransitionGroup>
      </div>

      <div className="d-flex">
        <button class="btn btn--primary">
          <Link to="/">Box</Link>
        </button>
        <button class="btn btn--primary ml--sm">
          <Link to="/sphere">Sphere</Link>
        </button>
        <button class="btn btn--primary ml--sm">
          <Link to="/iphone">Iphone</Link>
        </button>
      </div>

      <Background />
    </div>
    // <div className="App h-100vh d-flex flex-column ai-center jc-center">
    //   <Title />

    //   <Canvas className="tjs__canvas">
    //     <OrbitControls enableZoom={ false } />
    //     <ambientLight intensity={ 0.5 } />
    //     <directionalLight position={ [-2, 5, 2] } intensity={ 1 } />

    //     <Suspense fallback={ null }>

    //       <Routes>
    //         <Route path="/" exact component={ <Box /> } />
    //         <Route path="/sphere" exact component={ <AnimatedSphere /> } />
    //         <Route path="/phone" exact component={ <Iphone /> } />
    //       </Routes>

    //     </Suspense>
    //   </Canvas>
      
      /* <Link to="/">home</Link>
      <Link to="/sphere">sphere</Link>
      <Link to="/phone">phone</Link> */
      /* <Canvas className="tjs__canvas">
        <OrbitControls enableZoom={ false } />
        <ambientLight intensity={ 0.5 } />
        <directionalLight position={ [-2, 5, 2] } intensity={ 1 } />

        <Suspense fallback={ null }>
          <Sphere />
        </Suspense>
      </Canvas>

      <Canvas className="tjs__canvas">
        <OrbitControls enableZoom={ false } />
        <ambientLight intensity={ 0.5 } />
        <directionalLight position={ [-2, 5, 2] } intensity={ 1 } />

        <Suspense fallback={ null }>
          <Iphone />
        </Suspense>
      </Canvas> */
      
    //   <Background />
    // </div>
  );
}

export default App;

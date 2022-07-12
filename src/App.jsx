import { Fragment, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Three from './component/three'
import './App.css'

function App() {
  return (
    <Fragment> 
    <Canvas id="three-canvas-container" shadows>
      <Suspense fallback={null}>
      <Three />
      </Suspense>
    </Canvas>
    </Fragment>
   
  )
}

export default App
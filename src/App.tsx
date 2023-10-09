import { Circle } from './components/shapes/Circle'

function App() {

  return (
    <>
      <svg className="circles" viewBox="0 0 1 100" width="600" height="600" xmlns="http://www.w3.org/2000/svg">
        <Circle cy={20} r={10} fillColor='red' />
        <Circle cy={50} r={10} fillColor='green' />
      </svg>

    </>
  )
}

export default App

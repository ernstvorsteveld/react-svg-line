import React, {useRef} from 'react';
import {Circle} from './components/shapes/Circle'

function App() {

    const first: React.RefObject<SVGCircleElement> = useRef<SVGCircleElement>(null);
    const second:React.RefObject<SVGCircleElement> = useRef<SVGCircleElement>(null);

    const clickedFirst = () => {
        alert(first.current?.cy.baseVal.value);
    };

    const clickedSecond = () => {
        alert(second.current?.cy.baseVal.value);
    };

    return (
        <>
            <svg className="circles" viewBox="0 0 1 100" width="600" height="600" xmlns="http://www.w3.org/2000/svg">
                <Circle cy={20} r={10} stroke={'green'} fillColor='red' ref={first}/>
                <Circle cy={50} r={10} stroke={'red'} fillColor='green' ref={second}/>
            </svg>
            <button onClick={clickedFirst}>First</button>
            <button onClick={clickedSecond}>Second</button>
        </>
    )
}

export default App

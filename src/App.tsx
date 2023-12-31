import React, {useRef} from 'react';
import {Circle, CircleProps} from './components/shapes/Circle'
import Line, {LineProps} from "./components/shapes/Line.tsx";
import styles from './components/shapes/circle.module.css'

function App() {

    const first: React.RefObject<SVGCircleElement> = useRef<SVGCircleElement>(null);
    const second: React.RefObject<SVGCircleElement> = useRef<SVGCircleElement>(null);

    const firstCircle: CircleProps = {
        cx: 20,
        cy: 20,
        r: 10,
        stroke: 'green',
        fillColor: 'red',
        className: styles.draggable
    }
    const secondCircle: CircleProps = {
        cx: 20,
        cy: 50,
        r: 10,
        stroke: 'red',
        fillColor: 'green',
        className: styles.draggable
    }
    const line: LineProps = {x1: 0, y1: 0, x2: 0, y2: 0, stroke: 'black', strokeWidth: 2}

    const clickedFirst = () => {
        alert(first.current?.cy.baseVal.value);
    };

    const clickedSecond = () => {
        alert(second.current?.cy.baseVal.value);
    };

    const calcLineCoords = (first: CircleProps, second: CircleProps) => {
        line.x1 = first.cx;
        line.y1 = first.cy + first.r;

        line.x2 = second.cx;
        line.y2 = second.cy - second.r;
    }

    calcLineCoords(firstCircle, secondCircle);

    return (
        <>
            <svg className="circles" viewBox="0 0 200 200" width="900" height="900" xmlns="http://www.w3.org/2000/svg">
                <Circle cx={firstCircle.cx} cy={firstCircle.cy} r={firstCircle.r} stroke={firstCircle.stroke}
                        fillColor={firstCircle.fillColor} className={firstCircle.className} ref={first}/>
                <Circle cx={secondCircle.cx} cy={secondCircle.cy} r={secondCircle.r} stroke={secondCircle.stroke}
                        fillColor={secondCircle.fillColor} className={secondCircle.className} ref={second}/>
                <Line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke={line.stroke}
                      strokeWidth={line.strokeWidth}/>
            </svg>
            <button onClick={clickedFirst}>First</button>
            <button onClick={clickedSecond}>Second</button>
        </>
    )
}

export default App

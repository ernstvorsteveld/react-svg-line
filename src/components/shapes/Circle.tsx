import React, {forwardRef, MouseEventHandler, useRef, useState} from 'react';

export type CircleProps = {
    cx: number
    cy: number
    r: number
    stroke: string
    fillColor: string
    className: string
}

export const Circle: React.ForwardRefExoticComponent<CircleProps & React.RefAttributes<SVGCircleElement>> =
    forwardRef((props: CircleProps, circleRef: React.ForwardedRef<SVGCircleElement>) => {

        const [position, setPosition] =
            useState({x: props.cx, y: props.cy, coords: {x: props.cx, y: props.cy}})

        const handleMouseMove: React.MutableRefObject<(e: MouseEvent) => void> = useRef(e => {
            console.log("handleMouseMove")

            setPosition(position => {
                const xDiff = position.coords.x - e.pageX
                const yDiff = position.coords.y - e.pageY
                return {
                    x: position.x - xDiff,
                    y: position.y - yDiff,
                    coords: {
                        x: e.pageX,
                        y: e.pageY,
                    },
                }
            });
            document.addEventListener('mouseup', handleMouseUp);
        });

        const handleMouseDown: MouseEventHandler<SVGCircleElement> = e => {
            console.log("handleMouseDown")
            const pageX = e.pageX
            const pageY = e.pageY
            setPosition(position =>
                Object.assign({}, position, {
                    coords: {
                        x: pageX,
                        y: pageY,
                    },
                }),
            )
            document.addEventListener('mousemove', handleMouseMove.current);
        }

        const handleMouseUp = () => {
            console.log("handleMouseUp")

            document.removeEventListener('mousemove', handleMouseMove.current)
            setPosition(position => Object.assign({}, position, {coords: {}}))
        }

        return <circle className={props.className}
                       cx={position.x}
                       cy={position.y}
                       r={props.r}
                       stroke={props.stroke}
                       fill={props.fillColor}
                       ref={circleRef}
                       onMouseDown={handleMouseDown}
        >
        </circle>
    });

import React, {forwardRef} from 'react';

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
    return <circle className={props.className}
        cx={props.cx}
        cy={props.cy}
        r={props.r}
        stroke={props.stroke}
        fill={props.fillColor}
        ref={circleRef}
    >
    </circle>
});

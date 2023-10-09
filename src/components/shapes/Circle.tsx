import React, {forwardRef} from 'react';

type CircleProps = {
    cy: number
    r: number
    stroke: string
    fillColor: string
}

export const Circle = forwardRef((props: CircleProps, circleRef: React.ForwardedRef<SVGCircleElement>) => {
    return <circle
        cy={props.cy}
        r={props.r}
        stroke={props.stroke}
        fill={props.fillColor}
        ref={circleRef}
    >
    </circle>;
});

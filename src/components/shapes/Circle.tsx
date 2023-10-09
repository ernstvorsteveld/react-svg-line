import React, { FunctionComponent } from 'react';

type CircleProps = {
  cy: number
  r: number
  fillColor: string
}

export const Circle: FunctionComponent<CircleProps> = ({ cy, r, fillColor }) =>
  <circle
    cy={cy}
    r={r}
    stroke="black"
    fill={fillColor} >
  </circle>

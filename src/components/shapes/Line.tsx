export type LineProps = {
    x1: number
    y1: number
    x2: number
    y2: number
    stroke: string
    strokeWidth: number
}

const Line = (props: LineProps) => {
    return <line
        x1={props.x1}
        y1={props.y1}
        x2={props.x2}
        y2={props.y2}
        stroke={props.stroke}
        strokeWidth={props.strokeWidth}
    >
    </line>
}

export default Line;

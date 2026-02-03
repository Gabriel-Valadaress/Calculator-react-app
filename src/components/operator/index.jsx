import Button from "../button";

export default function Operator(props) {
    return <Button
        name={props.name}
        isIcon={props.isIcon}
        isOperator={true}
        onClick={props.onClick}
    />
}
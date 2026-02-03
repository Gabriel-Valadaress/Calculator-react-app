import Button from "../button";

export default function Digit(props){
    return <Button 
        name={props.name} 
        isIcon={props.isIcon}
        onClick={props.onClick}
    />
}
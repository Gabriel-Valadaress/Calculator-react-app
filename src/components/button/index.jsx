import "./styles.css";

export default function Button(props) {
    return (
        <div
            className="buttonContainer"
            style={{
                backgroundColor: props.isOperator ? "orange" : "white",
                color: props.isOperator ? "white" : "black"
            }}
        >
            {props.isIcon ?
                <div className="icon">{props.name}</div> :
                <p>{props.name}</p>}
        </div >
    );
}
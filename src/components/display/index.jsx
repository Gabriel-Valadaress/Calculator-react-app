import "./styles.css";

export default function Display({ currentValue, previousValue, operation, result }) {
    const displayExpression = () => {
        if (previousValue && operation) {
            return `${previousValue} ${operation}`;
        }
        return "";
    };

    return (
        <div className="display-container">
            <div className="expression">{displayExpression()}</div>
            <div className="current-value">{currentValue || "0"}</div>
        </div>
    );
}
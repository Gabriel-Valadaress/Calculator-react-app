import "./styles.css";

import { useRef, useEffect } from 'react';

export default function Display() {

    const textareaRef = useRef(null);

    const adjustHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    };

    useEffect(() => {
        adjustHeight();
    }, []);

    return (
        <div className="display-container">
            <textarea
                ref={textareaRef}
                onInput={adjustHeight} />
            <p></p>
        </div>
    );
}
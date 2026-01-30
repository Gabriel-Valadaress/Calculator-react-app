import "./styles.css";

import Digit from "../digit";
import Operator from "../operator";

export default function Board() {
    return (
        <div className="board-container">
            <Operator name="AC" />
            <Operator isIcon={true} name={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z" /></svg>} />
            <Operator isIcon={true} name={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M300-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm360 440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm-444 80-56-56 584-584 56 56-584 584Z" /></svg>} />
            <Operator isIcon={true} name={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true"><path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM128,84a20,20,0,1,0-20-20A20.0226,20.0226,0,0,0,128,84Zm0,88a20,20,0,1,0,20,20A20.0226,20.0226,0,0,0,128,172Z" /></svg>} />
            <Digit name="7" />
            <Digit name="8" />
            <Digit name="9" />
            <Operator isIcon={true} name={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>} />
            <Digit name="4" />
            <Digit name="5" />
            <Digit name="6" />
            <Operator isIcon={true} name={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-440v-80h560v80H200Z" /></svg>} />
            <Digit name="1" />
            <Digit name="2" />
            <Digit name="3" />
            <Operator isIcon={true} name={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>} />
            <Digit isIcon={true} name={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M4,5V7H6V19H8V7H14V16A3,3 0 0,0 17,19A3,3 0 0,0 20,16H18A1,1 0 0,1 17,17A1,1 0 0,1 16,16V7H18V5" /></svg>} />
            <Digit name="0" />
            <Digit name="," />
            <Operator isIcon={true} name={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M160-280v-120h640v120H160Zm0-280v-120h640v120H160Z" /></svg>} />
        </div>
    );
}
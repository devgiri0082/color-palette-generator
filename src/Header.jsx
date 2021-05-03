
import "./styles.css"
import Palette from "./Palette"
import { useState } from "react";
function Header(props) {
    let [color, setColor] = useState(randomColor());
    let box = new Array(5).fill(0);
    return (
        <div className="container">
            <div className="header">
                <h1 className="title">Color Palette Generator</h1>
                <button onClick= {(() => setColor(randomColor()))}>Generate</button>
            </div>
            <div className="body">
            <div className="big-box">
                {
                   box.map((elem, index) => <Palette color = {color} index = {index /10 * 2 + 0.2}/>)
                }
            </div>
            </div>
        </div>
    )
}

function randomColor() {
    let r = getRandomInt(0,256);
    let  g = getRandomInt(0, 256);
    let b = getRandomInt(0, 256);
    return `rgb(${r},${g},${b})`
}

function getRandomInt(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}


export default Header;
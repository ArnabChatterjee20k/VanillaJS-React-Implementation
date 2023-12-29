import App from "./App";
import { myreact } from "./ReactImplementation/MyReact";
import "./style.css"
const renderCB =()=>{
    const root = document.getElementById("root") as Element;
    myreact.init(root,App)
}

renderCB()
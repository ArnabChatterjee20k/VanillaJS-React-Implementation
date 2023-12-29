import "./style.css";
import { h } from "start-dom-jsx";

// alternative of innerhtml
const root = document.getElementById("root");

const w = "world";
const helloWorld = (
  <p>
    Hello <strong>{w}</strong>
  </p>
);
root?.querySelectorAll("*").forEach((element) => element.remove());
root?.append(helloWorld);
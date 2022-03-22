import "./style.css";
import { add } from "./math";

const x = { foo: 1 };

console.log(add(1, Math.random()), { ...x, bar: 2 });

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";

// 2. Создать компонент Message, отображающий переданный ему
// пропсом текст.

const reactProps = (
  <div className="reactProps">
    <h2>React</h2>
  </div>
);

const FunctionMessage = () => {
  return reactProps;
};

// 3. Изменить компонент App так, чтобы
// тот рендерил Message и передавал ему пропсом текст (константу).
// {/* <App react={reactProps} />
// export function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">hello {props.react} </header>
//     </div>
//   );
// } */}

// 5. Установить расширение React Devtools.
// Установил в браузере хром, ссылка была в методичке

ReactDOM.render(
  <React.StrictMode>
    <FunctionMessage />
    <hr />
    <App react={reactProps} />
  </React.StrictMode>,
  document.getElementById("root")
);

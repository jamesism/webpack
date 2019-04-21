import { hot } from "react-hot-loader/root";
import * as React from "react";
import style from "./App.scss";
import wombat from "./images/wombat.jpg";
import smallWombat from "./images/wombat-smol.jpg";

function AppComponent() {
  return (
    <main className={style.Main}>
      <h1>Hello wombats!! --App</h1>
      <img src={wombat} height="480" alt="cute wombat" />
      <img src={smallWombat} alt="smaller cute wombat" />
    </main>
  );
}

export const App = hot(AppComponent);

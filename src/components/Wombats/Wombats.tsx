import { hot } from "react-hot-loader/root";
import React from "react";
import wombat from "./images/wombat.jpg";
import smallWombat from "./images/wombat-smol.jpg";

function WombatsComponent() {
  return (
    <section>
      <img src={wombat} height="480" alt="cute wombat" />
      <img src={smallWombat} alt="smaller cute wombat" />
    </section>
  );
}

export const Wombats = hot(WombatsComponent);

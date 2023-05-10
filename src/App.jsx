import { useState } from "react";

import "./App.css";
import Logo_3m from "./logos/3m.svg";
import Logo_barstool from "./logos/barstool-store.svg";
import Logo_budweiser from "./logos/budweiser.svg";
import Logo_buzz from "./logos/buzzfeed.svg";
import Logo_forbes from "./logos/forbes.svg";
import Logo_macys from "./logos/macys.svg";
import Logo_mens from "./logos/menshealth.svg";
import Logo_beast from "./logos/mrbeast.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="logos">
      <div className="logos-slide">
        <img src={Logo_3m} />
        <img src={Logo_barstool} />
        <img src={Logo_budweiser} />
        <img src={Logo_buzz} />
        <img src={Logo_beast} />
        <img src={Logo_forbes} />
        <img src={Logo_macys} />
        <img src={Logo_mens} />
      </div>

      <div className="logos-slide">
        <img src={Logo_3m} />
        <img src={Logo_barstool} />
        <img src={Logo_budweiser} />
        <img src={Logo_buzz} />
        <img src={Logo_beast} />
        <img src={Logo_forbes} />
        <img src={Logo_macys} />
        <img src={Logo_mens} />
      </div>
    </div>
  );
}

export default App;

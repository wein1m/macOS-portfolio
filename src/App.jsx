import Dock from "@components/Dock";
import Navbar from "@components/Navbar";
import Welcome from "@components/Welcome";
// import Terminal from "@windows/terminal";
import TerminalWindow from "@windows/terminal";

import gsap from "gsap";
import { Draggable } from "gsap/all";
gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <TerminalWindow />
      {/* <Terminal /> */}
    </main>
  );
};

export default App;

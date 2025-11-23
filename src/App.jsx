import Dock from "@components/Dock";
import Navbar from "@components/Navbar";
import Welcome from "@components/Welcome";
import FinderWindow from "@windows/Finder";
import ResumeWindow from "@windows/Resume";
import TerminalWindow from "@windows/terminal";
import TextWindow from "@windows/Text";

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
      <ResumeWindow />
      <FinderWindow />

      <TextWindow />
    </main>
  );
};

export default App;

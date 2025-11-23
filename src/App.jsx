import Dock from "@components/Dock";
import Navbar from "@components/Navbar";
import Welcome from "@components/Welcome";
import FinderWindow from "@windows/Finder";
import ResumeWindow from "@windows/Resume";
import TerminalWindow from "@windows/terminal";
import TextViewer from "@windows/TextViewer";
import ImageViewerWindow from "@windows/ImageViewer";

import gsap from "gsap";
import { Draggable } from "gsap/all";
import ContactWindow from "@windows/Contact";
import Home from "@components/Home";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Home />

      <TerminalWindow />
      <ResumeWindow />
      <FinderWindow />
      <ContactWindow />

      <TextViewer />
      <ImageViewerWindow />
    </main>
  );
};

export default App;

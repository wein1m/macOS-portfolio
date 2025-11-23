import Controls from "@components/Controls";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";
import { clsx } from "clsx";

const ImageViewer = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return;

  const { id, name, imageUrl } = data;
  return (
    <>
      <div id="window-header">
        <Controls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="preview">
        {/* <div
        className={clsx(id === 2 ? "h-[70vh]" : "max-h-[70vh]") + " preview"}
      > */}
        <img src={imageUrl} className={clsx(id === 2 && "h-[70vh]")} />
      </div>
    </>
  );
};

const ImageViewerWindow = WindowWrapper(ImageViewer, "imgfile");

export default ImageViewerWindow;

import Controls from "@components/Controls";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <Controls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="content">
        {image ? (
          <div className="image">
            <img src={image} alt={name} />
          </div>
        ) : null}

        <div className="w-92">
          {subtitle ? <h3>{subtitle}</h3> : null}
          {Array.isArray(description) && description.length > 0 ? (
            <div className="space-y-3 leading-relaxed text-base text-black/70">
              {description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;

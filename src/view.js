import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import Theme from "./Components/Common/theme/theme";

document.addEventListener("DOMContentLoaded", () => {
  const audioThemeEls = document.querySelectorAll(".wp-block-raat-audio-theme");
  audioThemeEls.forEach((audioThemeEl) => {
    const attributes = JSON.parse(audioThemeEl.dataset.attributes);

    createRoot(audioThemeEl).render(
      <>
        <Style attributes={attributes} id={audioThemeEl.id} />
        <div className="audio-player">
          <Theme attributes={attributes} />
        </div>{" "}
      </>
    );

    audioThemeEl?.removeAttribute("data-attributes");
  });
});

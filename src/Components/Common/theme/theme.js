import AudioPlayer1 from "./AudioPlayer1";
import AudioPlayer2 from "./AudioPlayer2";
import AudioPlayer3 from "./AudioPlayer3";

const Theme = ({ attributes }) => {
  const { theme } = attributes;
  switch (theme) {
    case "theme2":
      return <AudioPlayer2 attributes={attributes} />;

    case "theme3":
      return <AudioPlayer3 attributes={attributes} />;

    default:
      return <AudioPlayer1 attributes={attributes} />;
  }
};

export default Theme;


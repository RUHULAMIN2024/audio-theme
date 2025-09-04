import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl, TextControl } from "@wordpress/components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { IconLibrary, Label } from "../../../../../../bpl-tools/Components";
import { themeOptions } from "../../../../utils/options";
import { themeSwitch } from "../../../../utils/functions";


const General = ({ attributes, setAttributes }) => {
  const {theme, audioData } = attributes;
  const { title, artist } = audioData;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Themes", "audio-theme")}
        initialOpen={true}
      >
        <SelectControl
          value={theme}
          options={themeOptions}
          onChange={(val) => setAttributes(themeSwitch(val, attributes))}
          help={__("Some settings will be change when you will change the player.", "audio-player-showcase")}

        />
        
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Audio Data", "audio-theme")}
        initialOpen={false}
      >
        <Label>Audio Title</Label>

        <TextControl
          value={title}
          onChange={(v) =>
            setAttributes({ audioData: updateData(audioData, v, "title") })
          }
        />
        <Label>Artist Name</Label>

        <TextControl
          value={artist}
          onChange={(v) =>
            setAttributes({ audioData: updateData(audioData, v, "artist") })
          }
        />

        <IconLibrary
          className="mt10"
          label="Back Icon"
          onChange={(v) =>
            setAttributes({
              audioData: updateData(audioData, v, "SkipBack"),
            })
          }
        />
        <IconLibrary
          className="mt10"
          label="play Icon"
          onChange={(v) =>
            setAttributes({
              audioData: updateData(audioData, v, "playBtn"),
            })
          }
        />
        <IconLibrary
          className="mt10"
          label="Pause Icon"
          onChange={(v) =>
            setAttributes({
              audioData: updateData(audioData, v, "pauseBtn"),
            })
          }
        />
        <IconLibrary
          className="mt10"
          label="Forward Icon"
          onChange={(v) =>
            setAttributes({
              audioData: updateData(audioData, v, "SkipForward"),
            })
          }
        />
      </PanelBody>
    </>
  );
};

export default General;

import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  PanelRow,
  __experimentalBorderControl as BorderControl,
  __experimentalUnitControl as UnitControl,
  RangeControl,
} from "@wordpress/components";

import {
  Background,
  BButtonGroup,
  BoxControl,
  ColorControl,
  ColorsControl,
  Device,
  Label,
  Typography,
} from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";

const Style = ({ attributes, setAttributes, device }) => {
  const { audioData, styles } = attributes;
  const { container, content } = styles;
  const { textAlign, title, artist, statusIndicator, playBg } = content;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Container", "audio-theme")}
        initialOpen={false}
      >
        <Background
          className="mt10"
          value={container?.bg}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "container", "bg"),
            })
          }
        />

        {/* container margin  */}
        <PanelRow>
          <Label className="">Margin</Label> <Device />
        </PanelRow>
        <BoxControl
          className="mt10"
          values={container?.margin?.[device]}
          resetValues={{
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, "container", "margin", device),
            });
          }}
        />

        {/* container padding  */}

        <PanelRow>
          <Label className="">Padding</Label> <Device />
        </PanelRow>
        <BoxControl
          className="mt10"
          values={container?.padding?.[device]}
          resetValues={{
            top: "1.5rem",
            right: "1.5rem",
            bottom: "1.5rem",
            left: "1.5rem",
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, "container", "padding", device),
            });
          }}
        />

        <BorderControl
          className="mt10"
          label={__("Border", "audio-theme")}
          value={container?.border}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "container", "border"),
            })
          }
        />

        {/* container border radius  */}
        <BoxControl
          className="mt10"
          label="Border Radius"
          values={container?.radius}
          resetValues={{
            top: "1rem",
            right: "1rem",
            bottom: "1rem",
            left: "1rem",
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, "container", "radius"),
            });
          }}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Text Content", "audio-theme")}
        initialOpen={false}
      >
        <BButtonGroup
          label={__("Text align", "audio-theme")}
          options={[
            { label: __("Left", "audio-theme"), value: "left" },
            { label: __("Center", "audio-theme"), value: "center" },
            { label: __("Right", "audio-theme"), value: "right" },
          ]}
          value={textAlign}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "textAlign"),
            })
          }
          activeBg="#007cba"
          inactiveColor="#555"
          activeColor="#fff"
          borderRadius="4px"
          paddingX="12px"
          paddingY="6px"
          fontSize="13px"
          fontWeight={500}
        />

        {/* title  */}
        <Typography
          className="mt10"
          label={__("Title Typo", "audio-theme")}
          value={title?.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "title", "typo"),
            })
          }
        />
        <ColorControl
          className="mt10"
          label={__("Title Color", "audio-theme")}
          value={title?.color}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "title", "color"),
            })
          }
          defaults={title?.color}
        />
        <PanelRow>
          <Label>Title Margin</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={title?.margin?.[device]}
          resetValues={{
            top: "8px",
            right: "0px",
            bottom: "8px",
            left: "0px",
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(
                styles,
                v,
                "content",
                "title",
                "margin",
                device
              ),
            });
          }}
        />

        <Typography
          className="mt10"
          label={__("Artist Typo", "audio-theme")}
          value={artist?.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "artist", "typo"),
            })
          }
        />
        <ColorControl
          className="mt10"
          label={__("Artist Color", "audio-theme")}
          value={artist?.color}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "artist", "color"),
            })
          }
          defaults={artist?.color}
        />
        <PanelRow>
          <Label>Artist Margin</Label>
          <Device />
        </PanelRow>
        <BoxControl
          className="mt10"
          values={artist?.margin?.[device]}
          resetValues={{
            top: "8px",
            right: "0px",
            bottom: "10px",
            left: "0px",
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(
                styles,
                v,
                "content",
                "artist",
                "margin",
                device
              ),
            });
          }}
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Status Indicator", "audio-theme")}
        initialOpen={false}
      >
        <UnitControl
          className="mt20"
          label={__("Width", "audio-theme")}
          value={statusIndicator?.width}
          onChange={(v) => {
            setAttributes({
              styles: updateData(
                styles,
                v,
                "content",
                "statusIndicator",
                "width"
              ),
            });
          }}
        />
        {/* height  */}

        <UnitControl
          className="mt10"
          label={__("Height", "audio-theme")}
          value={statusIndicator?.height}
          onChange={(v) => {
            setAttributes({
              styles: updateData(
                styles,
                v,
                "content",
                "statusIndicator",
                "height"
              ),
            });
          }}
        />
        {/* padding  */}

        <PanelRow>
          <Label>Padding</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={statusIndicator?.padding?.[device]}
          resetValues={{
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          }}
          onChange={(v) =>
            setAttributes({
              styles: updateData(
                styles,
                v,
                "content",
                "statusIndicator",
                "padding",
                device
              ),
            })
          }
        />

        <BorderControl
          className="mt10"
          label={__("Border", "audio-theme")}
          value={statusIndicator?.border}
          onChange={(v) =>
            setAttributes({
              styles: updateData(
                styles,
                v,
                "content",
                "statusIndicator",
                "border"
              ),
            })
          }
        />

        <BoxControl
          className="mt10"
          label="Border Radius"
          values={statusIndicator?.radius}
          resetValues={{
            top: "50%",
            right: "50%",
            bottom: "50%",
            left: "50%",
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(
                styles,
                v,
                "content",
                "statusIndicator",
                "radius"
              ),
            });
          }}
        />

        <ColorsControl
          className="mt10"
          label={__("Colors", "audio-theme")}
          value={statusIndicator?.colors}
          onChange={(v) =>
            setAttributes({
              styles: updateData(
                styles,
                v,
                "content",
                "statusIndicator",
                "colors"
              ),
            })
          }
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Play Pause BG", "audio-theme")}
        initialOpen={false}
      >
        <Background
        isImage = {false}
          className="mt10"
          value={playBg}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "playBg"),
            })
          }
        />
      </PanelBody>
    </>
  );
};

export default Style;

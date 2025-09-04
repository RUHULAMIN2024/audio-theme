import { __ } from "@wordpress/i18n";
import {
  InspectorControls,
  BlockControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { tabController } from "../../../../../bpl-tools/utils/functions";
import General from "./General/General";
import Style from "./Style/Style";
import { blocks, generalStyleTabs } from "../../../utils/options";
import { BplBlockPreview } from "../../../../../bpl-tools/Components";

const Settings = ({ attributes, setAttributes, clientId, device }) => {
  const { alignment, theme } = attributes;

  return (
    <>
      <InspectorControls>
        <div className="bBlocksInspectorInfo">
          Need more block like this? Checkout the bundle ➡{" "}
          <a
            href="https://wordpress.org/plugins/b-blocks"
            target="_blank"
            rel="noopener noreferrer"
          >
            B Blocks
          </a>
        </div>

        <TabPanel
          className="bPlTabPanel wp-block-raat-audio-theme"
          activeClass="activeTab"
          tabs={generalStyleTabs}
          onSelect={tabController}
        >
          {(tab) => (
            <>
              {"general" === tab.name && (
                <General
                  attributes={attributes}
                  setAttributes={setAttributes}
                  device={device}
                />
              )}

              {"style" === tab.name && (
                <Style
                  attributes={attributes}
                  setAttributes={setAttributes}
                  device={device}
                />
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>

      <BlockControls>
        
        <BplBlockPreview blocks={blocks} clientId={clientId} value={theme} />
      </BlockControls>
    </>
  );
};
export default Settings;

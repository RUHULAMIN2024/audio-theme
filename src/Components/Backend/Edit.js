import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import { withSelect } from "@wordpress/data";
import Theme from "../Common/theme/theme";

const Edit = (props) => {
  const { attributes, setAttributes, clientId,device } = props;
  console.log(device)

  return (
    <>
      <Settings {...{ attributes, setAttributes, device, clientId }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} device={device} />

<div className="audio-player">
              <Theme attributes={attributes} />
            </div>
        
        
      </div>
    </>
  );
};




export default withSelect((select) => {
  const { getDeviceType } = select("core/editor");
  return {

    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);
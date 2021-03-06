import { DxcLink } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <p>
        This is a text with a <DxcLink 
          href="#" 
          underlined={false} 
          inheritColor={true}
          newWindow={true}
          text="Link">
        </DxcLink> to another page in a new window.
    </p>
  );
}`;

const scope = {
  DxcLink
};

export default { code, scope };

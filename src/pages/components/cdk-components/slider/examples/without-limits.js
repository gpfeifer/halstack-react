import { DxcSlider } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(0);
  const onChange = newValue => {
    changeValue(newValue);
  };
  const onDragEnd = ()=> {};

  return (
    <DxcSlider
      minValue={0}
      maxValue={100}
      value={value}
      name="input"
      step={1}
      onChange={onChange}
      onDragEnd={onDragEnd}
    />
  );
}`;

const scope = {
  DxcSlider,
  useState
};

export default { code, scope };

import { BaseNode } from "./BaseNode";
import { GoArrowSwitch } from "react-icons/go";

export const IntegrationNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type="Input"
      label="Integration"
      icon={GoArrowSwitch}
    />
  );
};

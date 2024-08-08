import { BaseNode } from "./BaseNode";
import { MdOutlineLanguage } from "react-icons/md";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type="target"
      label="LLM"
      icon={MdOutlineLanguage}
    />
  );
};

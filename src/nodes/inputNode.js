import { BaseNode } from "./BaseNode";
import { MdInput } from "react-icons/md";

export const InputNode = ({ id, data }) => {
  return (
    <BaseNode id={id} data={data} type="Input" label="Input" icon={MdInput} />
  );
};

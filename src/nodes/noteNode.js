import { BaseNode } from "./BaseNode";
import { MdOutlineChat } from "react-icons/md";

export const NoteNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type="target"
      label="Note"
      icon={MdOutlineChat}
    />
  );
};

import {BaseNode} from './BaseNode';
import {MdOutlineTextSnippet} from "react-icons/md";

export const TextNode = ({ id, data }) => {
  return (
    <BaseNode id={id} data={data} type="target" label="Text"  icon={MdOutlineTextSnippet}/>
  );
};


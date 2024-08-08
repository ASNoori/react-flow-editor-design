import {BaseNode} from './BaseNode';
import {MdOutput} from "react-icons/md";

export const OutputNode = ({ id, data }) => {
  return (
    <BaseNode id={id} data={data} type="target" label="Output" icon={MdOutput}/>
  );
};


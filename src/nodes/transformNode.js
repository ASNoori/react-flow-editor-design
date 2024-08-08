import {BaseNode} from './BaseNode';
import {MdOutlineTransform} from "react-icons/md";

export const TransformNode = ({ id, data }) => {
  return (
    <BaseNode id={id} data={data} type="target" label="Transform" icon={MdOutlineTransform}/>
  );
};

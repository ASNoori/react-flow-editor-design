import { BaseNode } from './BaseNode';
import {MdOutlinePlayCircle} from "react-icons/md";

export const PipelineNode = (props) => {
  return (
    <BaseNode 
      {...props}
      type="Input"
      label="Pipeline"
      icon={MdOutlinePlayCircle}
    />
  );
};


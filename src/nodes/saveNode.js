import {BaseNode} from './BaseNode';
import {FaSave} from "react-icons/fa";

export const SaveNode = ({ id, data }) => {
  return (
    <BaseNode id={id} data={data} type="Input" label="Save" icon={FaSave}/>
  );
};


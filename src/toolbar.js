// toolbar.js

import { DraggableNode } from "./draggableNode";
import {
  MdInput,
  MdOutlineLanguage,
  MdOutput,
  MdOutlineTextSnippet,
  MdOutlinePlayCircle,
  MdOutlineTransform,
  MdOutlineChat,
} from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";
import { FaSave } from "react-icons/fa";
import "./style/toolbar.css";

export const PipelineToolbar = () => {
  return (
    <div className="toolbar-container">
      <div className="toolbar">
        <DraggableNode type="customInput" label="Input" icon={MdInput} />
        <DraggableNode type="llm" label="LLM" icon={MdOutlineLanguage} />
        <DraggableNode type="customOutput" label="Output" icon={MdOutput} />
        <DraggableNode
          type="customText"
          label="Text"
          icon={MdOutlineTextSnippet}
        />
        <DraggableNode
          type="pipeline"
          label="Pipeline"
          icon={MdOutlinePlayCircle}
        />
        <DraggableNode
          type="integration"
          label="Integration"
          icon={GoArrowSwitch}
        />
        <DraggableNode
          type="transform"
          label="Transform"
          icon={MdOutlineTransform}
        />
        <DraggableNode type="save" label="File Save" icon={FaSave} />
        <DraggableNode type="note" label="Note" icon={MdOutlineChat} />
      </div>
    </div>
  );
};

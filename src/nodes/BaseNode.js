import React, { useState, useEffect, useRef } from "react";
import { Handle, Position } from "reactflow";
import "../style/baseNode.css";
import useAutosizeTextArea from "../autosizeHook";

const variablePattern = /\{\{(\w+)\}\}/g;

export const BaseNode = ({ id, data, type, label, icon: Icon }) => {
  const [nodeName, setNodeName] = useState(
    data?.nodeName || id.replace(`custom${type}-`, `${type.toLowerCase()}_`)
  );
  const nodeType = data?.nodeType;
  const [containerWidth, setContainerWidth] = useState(250);
  const [containerHeight, setContainerHeight] = useState(150);
  const [variables, setVariables] = useState([]);
  const textAreaRef = useRef(null);
  const isTextNode = nodeType === "customText";

  // Autosize hook
  useAutosizeTextArea(textAreaRef.current, nodeName, setContainerHeight);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setNodeName(value);

    if (isTextNode) {
      const textLength = value.length * 8;
      const newWidth = Math.min(500, Math.max(250, textLength));
      setContainerWidth(newWidth);
    }

    // Extract variables
    const matches = [...value.matchAll(variablePattern)].map(
      (match) => match[1]
    );
    setVariables(matches);
  };

  useEffect(() => {
    if (isTextNode) {
      const initialTextLength = nodeName.length * 8;
      const initialWidth = Math.min(500, Math.max(250, initialTextLength));
      setContainerWidth(initialWidth);

      // Extract variables
      const matches = [...nodeName.matchAll(variablePattern)].map(
        (match) => match[1]
      );
      setVariables(matches);
    }
  }, [isTextNode, nodeName]);

  return (
    <div
      className={`node-container`}
      style={{ width: `${containerWidth}px`, height: `${containerHeight}px` }}
    >
      <div className="heading-wrapper">
        {Icon && <Icon className="icon" />}
        <span className="label-heading">{label}</span>
      </div>
      <div className="full-input">
        <label>Name</label>
        {isTextNode ? (
          <textarea
            ref={textAreaRef}
            value={nodeName}
            onChange={handleNameChange}
          />
        ) : (
          <input
            type="text"
            value={nodeName}
            onChange={(e) => setNodeName(e.target.value)}
          />
        )}
      </div>
      {variables.map((variable, index) => (
        <Handle
          key={`${id}-${variable}-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}-handle`}
          style={{ background: "#36454F", top: 50 + index * 30 }}
        />
      ))}
      <Handle
        type={type === "Input" ? "source" : "target"}
        position={type === "Input" ? Position.Right : Position.Left}
        id={`${id}-${type.toLowerCase()}-handle`}
        style={{ background: "#36454F" }}
      />
    </div>
  );
};

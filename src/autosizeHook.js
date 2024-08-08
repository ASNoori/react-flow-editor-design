import { useEffect } from "react";

const useAutosizeTextArea = (textAreaRef, value, setContainerHeight) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = `${scrollHeight}px`;

      // container height based on textarea's scroll height
      setContainerHeight(Math.max(150, scrollHeight + 110));
    }
  }, [textAreaRef, value, setContainerHeight]);
};

export default useAutosizeTextArea;

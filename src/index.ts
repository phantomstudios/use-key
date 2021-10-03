import { useEffect, useState } from "react";

const useKey = (
  targetKey: string,
  onChange: (pressed: boolean, event: KeyboardEvent) => void
) => {
  const [keyPressed, setKeyPressed] = useState<boolean>();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        setKeyPressed(true);
        onChange(true, event);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        setKeyPressed(false);
        onChange(false, event);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [onChange, targetKey]);

  return keyPressed;
};

export default useKey;

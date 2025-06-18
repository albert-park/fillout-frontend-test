import React, { useEffect, RefObject } from "react";

type UseOutsideAlerterProps = {
  ref: RefObject<any>;
  callback: (event?: MouseEvent) => void;
};

export const useOutsideAlerter = ({
  ref,
  callback
}: UseOutsideAlerterProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

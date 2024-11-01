"use client";

import { useCallback, useEffect, useState } from "react";
import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  name: string;
  children: ReactNode;
  title?: string;
}

export const useModal = () => {
  const [modalName, setModalName] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);

  const openModal = (name: string) => {
    setModalName(name);
  };

  const closeModal = () => {
    setModalName("");
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      addEventListener("resize", handleResize);
      return () => removeEventListener("resize", handleResize);
    }
  }, []);

  const Modal = useCallback(
    ({ name, children }: ModalProps) => {
      if (typeof document === "undefined") return null;

      return ReactDOM.createPortal(
        name === modalName ? (
          <div
            className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.6)] z-50 flex justify-center items-center"
            onClick={closeModal}
          >
            <div
              className={`${
                windowWidth >= 1500 ? "w-[60%]" : "w-[85%]"
              } h-[90%] p-[24px] bg-white rounded-[12px] relative`}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>
        ) : null,
        document.body
      );
    },
    [modalName, windowWidth]
  );

  return { Modal, openModal, closeModal };
};

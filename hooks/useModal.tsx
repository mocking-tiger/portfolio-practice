"use client";

import { useCallback, useState } from "react";
import { ReactNode } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

interface ModalProps {
  name: string;
  children: ReactNode;
  title?: string;
}

export const useModal = () => {
  const [modalName, setModalName] = useState("");

  const openModal = (name: string) => {
    setModalName(name);
  };

  const closeModal = () => {
    setModalName("");
  };

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
              className="w-[60%] h-[90%] p-[24px] bg-white rounded-[12px] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>
        ) : null,
        document.body
      );
    },
    [modalName]
  );

  return { Modal, openModal, closeModal };
};

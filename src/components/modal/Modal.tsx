"use client";

import { useEffect } from "react";

interface ModalProps {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
}

const modalStyles =
  "fixed bottom-0 left-0 right-0 top-0 isolate z-[999999] flex h-screen w-screen flex-col items-center justify-center overflow-y-auto";

export default function Modal({ open, close, children }: ModalProps) {
  useEffect(() => {
    if (open === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [open]);

  return (
    <>
      {open ? (
        <div className={modalStyles} role="Modal" aria-details="Modal">
          <div
            className={`${modalStyles} -z-10 bg-black opacity-40`}
            onClick={() => close()}
            role="Modal background overlay"
            aria-details="Modal background overlay"
          ></div>
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      ) : null}
    </>
  );
}

import { MouseEvent, PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import cn from "classnames";
import { TModalContentProps } from "./Modal.types";
import s from "./style.module.scss";

const Root = ({ children }: PropsWithChildren) => {
  const modalRoot = document.getElementById("modal-portal");

  if (!modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(children, modalRoot);
};

const Content = ({ children, onClose, className = "" }: TModalContentProps) => {
  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onClose();
  };
  const handleWrapperClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className={cn(s.modalWrapper, className)} onClick={handleClose}>
      <div onClick={handleWrapperClick} className={cn(s.inner)}>
        {children}
      </div>
    </div>
  );
};

export const Modal = {
  Root,
  Content,
};

import React, { Fragment } from "react";
import Backdrop from "./Backdrop";
import CreateChat from "./CreateChat";
import "./Modal.css";
import { useStateValue } from "./StateProvider";

const Modal = ({ showModal, closeModal }) => {
  let isVisible = "";

  const [{modalShow}, dispatch] = useStateValue();

  if (modalShow === null) {
    isVisible = "modal";
  } else if (modalShow === true) {
    isVisible = "modal__show";
  } else if (modalShow === false) {
    isVisible = "modal__close";
  }
  const closeHandler = (data) => {
    closeModal(data);
  };

  return (
    <Fragment>
      <Backdrop showBackdrop={showModal} backdropClose={closeHandler} />
      <div className={isVisible}>
        <CreateChat />
      </div>
    </Fragment>
  );
};

export default Modal;

import React, { ReactNode } from "react";
import "../styles/ErrorModal.css"
interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

const ErrorModal = (props:ModalType) => {
    // Two divs - full width and height 
    // First div for the full overlay, second for the modal 
    return (
        <>
        {props.isOpen &&
            <div className="modal-overlay">
                <button onClick={props.toggle}>x</button>
                <div className="modal-box">
                    {props.children}
                </div>
            </div>}
        </>
    )
}

export default ErrorModal;
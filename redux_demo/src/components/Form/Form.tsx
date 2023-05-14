import React from "react"; 
import ErrorModal from "../ErrorModal/ErrorModal";
import useErrorModal from "../hooks/useErrorModal";

const Form = ()=>{
    const {isOpen, toggle} = useErrorModal();
    return(
    <>
    <ErrorModal isOpen={isOpen} toggle={toggle}/>
    <form>
        <input onChange={toggle}/>
    </form>
    </>
)}

export default Form; 
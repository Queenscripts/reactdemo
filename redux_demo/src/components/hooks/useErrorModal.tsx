// Pure function 

import {useState} from 'react';


const useErrorModal = ()=>{
    const [isOpen, setisOpen] = useState(false)

    // refactor to use prevState 
    const toggle = ()=>{
        setisOpen(!isOpen)
    }
    return {
        isOpen, 
        toggle
    }
}

export default useErrorModal;
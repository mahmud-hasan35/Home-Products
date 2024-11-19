import { useState } from "react";


export default function useInput(initValue) {
    const [value, setValue] = useState(initValue);

    const handleChange = (e) => {
        setValue(e.target.value)
    };
    return [value, handleChange]
        
    
}
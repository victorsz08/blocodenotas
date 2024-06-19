import { useEffect, useState } from 'react';

export default function Note() {
    const [value, setValue] = useState(localStorage.getItem('notepad_value') || "");

    useEffect(() => {
        localStorage.setItem('notepad_value', value)
    },[value]);


    return (
    <textarea value={value} onChange={e => setValue(e.target.value)} 
    style={{ height: '48.5rem', width: '580px', resize: 'none', 
        fontWeight: '500', border: 'none',boxShadow: '0 0 15px #d6d6d6' , padding:'1.2rem', fontSize: '.9rem', borderRadius: '1.2rem'}}/>
)}
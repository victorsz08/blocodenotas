import { useEffect, useState } from 'react';

export default function Note() {
    const [value, setValue] = useState(localStorage.getItem('notepad_value') || "");

    useEffect(() => {
        localStorage.setItem('notepad_value', value)
    },[value]);


    return (
    <textarea value={value} onChange={e => setValue(e.target.value)} 
    style={{ height: '50rem', width: '580px', resize: 'none', color: '#3f3f3f',
        fontWeight: '600', border: '1px solid #d6d6d6', outline:"0", borderTop: "8px solid #e90000",borderBottom: "8px solid #e90000", padding:'1.2rem', fontSize: '.9rem'}}/>
)}
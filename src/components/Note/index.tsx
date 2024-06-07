import { useEffect, useState } from 'react';

export default function Note() {
    const [value, setValue] = useState(localStorage.getItem('notepad_value') || "");

    useEffect(() => {
        localStorage.setItem('notepad_value', value)
    },[value])


    return (
    <textarea value={value} onChange={e => setValue(e.target.value)} className='background-accent' 
    style={{ height: '560px', width: '580px', resize: 'none', fontWeight: '700', border: 'none', padding:'1.2rem', fontSize: '.9rem'}}/>
)}
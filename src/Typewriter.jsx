import React, { useState, useEffect } from 'react';

const Typewriter = ({ text,delay }) => {
    const[currentText,setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1)
            }, delay=150);

            return () => clearTimeout(timeout);
        }
    })

    return <span>{currentText}</span>
}

export default Typewriter;
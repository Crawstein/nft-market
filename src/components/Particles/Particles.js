import React, { useState, useEffect} from 'react'
import styles from './Particles.module.scss'

function Particles() {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => setHeight(document.body.clientHeight);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.lines} style={{ height: height + 'px' }}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
    )
}

export default Particles
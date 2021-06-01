import React, { Children, useState } from 'react'
import styles from './Button.module.scss'
export default function Button({ Children }) {
    const [positionX, setpositionX] = useState(0)
    const [positionY, setpositionY] = useState(0)

    const cursorPosition = (e) => {
        const rect = e.target.getBoundingClientRect()
        setpositionX(e.clientX - rect.left)
        setpositionY(e.clientY - rect.top)
    }
    return (
        <div className={styles.button}>
            <button
                className={styles.btn}
                style={{
                    '--x': positionX + 'px',
                    '--y': positionY + 'px',
                    '--size': positionX > 0 ? '100px' : '0px',
                }}
                onMouseMove={(e) => cursorPosition(e)}
            >
                {' '}
                {Children}
            </button>
        </div>
    )
}

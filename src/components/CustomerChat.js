import React, { useEffect } from 'react'

export default function CustomerChat() {
    useEffect(() => {
        console.log(window.FB.CustomerChat.show);
        window.FB.CustomerChat.show(true)
    }, [])
    return (
        <div className="customerChat">

        </div>
    )
}

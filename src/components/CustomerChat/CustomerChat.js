import React, { useEffect } from 'react'
import styles from './CustomerChat.module.scss'
export default function CustomerChat() {

    useEffect(() => {
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "1470277913016171");
        chatbox.setAttribute("attribution", "biz_inbox");
        window.fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: 'v10.0'
            });
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, [])
    return (
        <div className={styles.customerChat}>
            <div id="fb-root"></div>
            <div id="fb-customer-chat" className="fb-customerchat">
            </div>
        </div>
    )
}

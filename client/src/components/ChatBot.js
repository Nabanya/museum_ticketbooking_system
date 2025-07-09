// import React, { useState } from 'react';
// import './ChatBot.css';

// const ChatBot = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [messages, setMessages] = useState([
//         { from: 'bot', text: 'Hi! Need help booking tickets? 😊' }
//     ]);
//     const [input, setInput] = useState('');

//     const toggleChat = () => {
//         setIsOpen(!isOpen);
//     };

//     const sendMessage = () => {
//         if (!input.trim()) return;

//         const userMessage = { from: 'user', text: input };
//         const botReply = {
//             from: 'bot',
//             text: input.toLowerCase().includes('price') ? 'General: ₹200, VIP: ₹500' : input.toLowerCase().includes('timing') ? 'We are open from 10 AM to 6 PM daily.' : input.toLowerCase().includes('location') ? 'We are located in Chennai City Museum 🏛️' : 'I’m not sure. You can email us at help@museum.com for more details.'
//         };

//         setMessages([...messages, userMessage, botReply]);
//         setInput('');
//     };

//     return ( <
//         div >
//         <
//         div className = "chatbot-toggle"
//         onClick = { toggleChat } > 💬 < /div> {
//             isOpen && ( <
//                 div className = "chatbot-box" >
//                 <
//                 div className = "chatbot-header" > Assistant Bot🤖 < /div> <
//                 div className = "chatbot-messages" > {
//                     messages.map((msg, index) => ( <
//                         div key = { index }
//                         className = { `msg ${msg.from}` } > { msg.text } < /div>
//                     ))
//                 } <
//                 /div> <
//                 div className = "chatbot-input" >
//                 <
//                 input value = { input }
//                 onChange = {
//                     (e) => setInput(e.target.value) }
//                 placeholder = "Ask something..." /
//                 >
//                 <
//                 button onClick = { sendMessage } > Send < /button> <
//                 /div> <
//                 /div>
//             )
//         } <
//         /div>
//     );
// };

// export default ChatBot;


import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Hi! Need help booking tickets? 😊' }
    ]);
    const [input, setInput] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const getBotReply = (userText) => {
        const lowerText = userText.toLowerCase();

        if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('ticket'))
            return '🎟️ Ticket Prices:\n- General: ₹200\n- VIP: ₹500';

        if (lowerText.includes('timing') || lowerText.includes('open'))
            return '⏰ We are open from 10 AM to 6 PM, Monday to Sunday!';

        if (lowerText.includes('location') || lowerText.includes('where'))
            return '📍 We are located at Chennai City Museum 🏛️';

        if (lowerText.includes('cancel') || lowerText.includes('refund'))
            return '❌ Tickets can be canceled 24 hours before the visit for a full refund.';

        if (lowerText.includes('parking'))
            return '🅿️ Yes! Free parking is available near the main entrance.';

        if (lowerText.includes('group') || lowerText.includes('school'))
            return '👨‍👩‍👧‍👦 Group discounts are available for bookings of 20+ people. Contact help@museum.com for more!';

        if (lowerText.includes('weekend') || lowerText.includes('saturday') || lowerText.includes('sunday'))
            return '🗓️ We are OPEN on weekends from 10 AM to 6 PM!';

        if (lowerText.includes('history') || lowerText.includes('museum'))
            return '🏛️ Our museum showcases over 5,000 years of world history through art, artifacts, and exhibitions.';

        if (lowerText.includes('food') || lowerText.includes('cafeteria') || lowerText.includes('eat'))
            return '☕ Yes! A cafeteria is available inside the museum for snacks and meals. 🍽️';

        return '🤔 I’m not sure. You can email us at help@museum.com for more details!';
    };

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMessage = { from: 'user', text: input };
        const botReply = { from: 'bot', text: getBotReply(input) };

        setMessages([...messages, userMessage, botReply]);
        setInput('');
    };

    return ( <
        div >
        <
        div className = "chatbot-toggle"
        onClick = { toggleChat } > 💬 < /div> {
        isOpen && ( <
            div className = "chatbot-box" >
            <
            div className = "chatbot-header" > Assistant Bot🤖 < /div>  <
            div className = "chatbot-messages" > {
                messages.map((msg, index) => ( <
                    div key = { index }
                    className = { `msg ${msg.from}` } > { msg.text } < /div>
                ))
            } <
            /div>  <
            div className = "chatbot-input" >
            <
            input value = { input }
            onChange = {
                (e) => setInput(e.target.value)
            }
            placeholder = "Ask something..." / >
            <
            button onClick = { sendMessage } > Send < /button> </div >
            <
            /div>
        )
    } < /div>
);
};

export default ChatBot;
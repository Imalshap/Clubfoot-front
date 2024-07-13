import React, { useState } from 'react';
import send_icon from '../../../../../assets/chat/send.png';
import user_1_icon from '../../../../../assets/chat/user_1.png';
import user_2_icon from '../../../../../assets/chat/user_2.png';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ChatShoemaker = () => {
    const [chats, setChats] = useState([
        { id: 1, name: 'Damon Salvatore', profile: user_1_icon, messages: [{ text: 'How are you today?', time: '14:54', sender: 'user' }] },
        { id: 2, name: 'Elena Gilbert', profile: user_2_icon, messages: [{ text: 'Hello!', time: '14:50', sender: 'user' }] }
    ]);
    const [selectedChatId, setSelectedChatId] = useState(1);
    const [message, setMessage] = useState('');

    const selectedChat = chats.find(chat => chat.id === selectedChatId);

    const handleSendMessage = () => {
        if (message.trim()) {
            const updatedChats = chats.map(chat => {
                if (chat.id === selectedChatId) {
                    return {
                        ...chat,
                        messages: [...chat.messages, { text: message, time: new Date().toLocaleTimeString(), sender: 'me' }]
                    };
                }
                return chat;
            });

            setChats(updatedChats);
            setMessage('');
        }
    };

    return (
        <div className="flex flex-col mx-5 shadow-custom-medium rounded-lg mt-16 md:mt-20 h-[85vh]">
            <div className="flex-1 flex flex-col">

                {selectedChat && (
                    <>
                        <div className="flex items-center px-4 py-4 bg-gray-100 border-b border-gray-300">
                            <Link to="/shoemaker-request">
                                <div className="bg-[#E8E8E8] rounded-full p-1 mr-2 md:mr-4 w-10 h-10 flex justify-center items-center">
                                    <IoIosArrowBack size={20} />
                                </div>
                            </Link>
                            <img src={selectedChat.profile} alt="avatar" className="rounded-full mr-4 w-10 h-10" />
                            <div className='flex flex-col justify-start'>
                                <h3 className="text-sm md:text-lg font-mplus_1p font-bold">{selectedChat.name}</h3>
                                <p className='text-xs font-mplus_1p text-start text-buttonBlue'>Online</p>
                            </div>
                        </div>
                        <div className="flex-1 p-4 responsive-height overflow-y-auto bg-white">
                            {selectedChat.messages.map((msg, index) => (
                                <div key={index} className={`mb-4 ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
                                    <div className={`inline-block py-2 max-w-[80%] px-3 rounded ${msg.sender === 'me' ? 'bg-blue-200 text-black' : 'bg-gray-200 text-black'}`}>
                                        <p className="mb-1">{msg.text}</p>
                                        <span className="text-xs text-gray-600">{msg.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex p-4 bg-gray-200 border-t border-gray-300">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type a message"
                                className="flex-1 p-2 border border-gray-300 rounded mr-4"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="p-2"
                            >
                                <img src={send_icon} alt='send' className='w-5 md:w-8 h-5 md:h-8' />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ChatShoemaker;

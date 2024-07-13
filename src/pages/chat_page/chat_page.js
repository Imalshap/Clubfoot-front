import React, { useState } from 'react';
import send_icon from '../../assets/chat/send.png';
import user_1_icon from '../../assets/chat/user_1.png';
import user_2_icon from '../../assets/chat/user_2.png';
import search_icon from '../../assets/chat/search.png';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ChatPage = () => {
    const [chats, setChats] = useState([
        { id: 1, name: 'Damon Salvatore', profile: user_1_icon, messages: [{ text: 'How are you today?', time: '14:54', sender: 'user' }] },
        { id: 2, name: 'Elena Gilbert', profile: user_2_icon, messages: [{ text: 'Hello!', time: '14:50', sender: 'user' }] }
    ]);
    const [selectedChatId, setSelectedChatId] = useState(null);
    const [message, setMessage] = useState('');
    const [isChatSelected, setIsChatSelected] = useState(false);

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

    const handleChatSelect = (chatId) => {
        setSelectedChatId(chatId);
        setIsChatSelected(true);
    };

    const handleBackToChatList = () => {
        setIsChatSelected(false);
    };

    return (
        <div className="flex mt-20">
            {/* Chat List */}
            <div className={`w-full lg:w-1/4 lg:block ${isChatSelected ? 'hidden' : 'block'} p-4`}>
                <Link to="/">
                    <div className="relative md:absolute ml-0 md:-ml-2 md:-mt-0 bg-[#E8E8E8] rounded-full p-3 w-12 h-12 flex justify-center items-center">
                        <IoIosArrowBack size={28} />
                    </div>
                </Link>
                <h2 className="text-xl md:text-3xl font-mplus_1p font-bold mb-10">Chats</h2>
                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Search for chat"
                        className="w-full p-2 pl-10 border border-buttonBlue rounded"
                    />
                    <img
                        src={search_icon}
                        alt="search"
                        className="absolute right-2 top-3 w-5 h-5 text-gray-400"
                    />
                </div>
                <ul>
                    {chats.map(chat => (
                        <li
                            key={chat.id}
                            onClick={() => handleChatSelect(chat.id)}
                            className={`p-2 mb-2 flex items-center cursor-pointer ${chat.id === selectedChatId ? 'bg-gray-300' : 'bg-white'} rounded`}
                        >
                            <div className='w-full flex flex-row justify-between'>
                                <div className='flex justify-start items-center'>
                                    <img src={chat.profile} alt="avatar" className="rounded-full mr-3 w-11 h-11" />
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg lg:text-sm xl:text-lg font-mplus_1p">{chat.name}</h3>
                                        <p className="text-gray-600 text-start text-xs font-mplus_1p">{chat.messages[chat.messages.length - 1].text}</p>
                                    </div>
                                </div>
                                <span className="text-gray-500 text-xs font-mplus_1p">{chat.messages[chat.messages.length - 1].time}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Chat View */}
            <div className={`w-full lg:w-3/4  flex-1 flex flex-col ${isChatSelected ? 'block' : 'hidden'} lg:block`}>
                {selectedChat && (
                    <>
                        <div className="flex items-center p-4 bg-gray-100 border-b border-gray-300">
                            <button onClick={handleBackToChatList} className="lg:hidden">
                                <IoIosArrowBack size={28} className="mr-4" />
                            </button>
                            <img src={selectedChat.profile} alt="avatar" className="rounded-full mr-4 w-10 h-10" />
                            <div className='flex flex-col justify-start'>
                                <h3 className="text-lg font-mplus_1p font-bold">{selectedChat.name}</h3>
                                <p className='text-xs font-mplus_1p text-start text-buttonBlue'>Online</p>
                            </div>
                        </div>
                        <div className="flex-1 p-4 border-l-2 border-grey-800 min-h-[80vh] responsive-height  overflow-y-auto bg-white">
                            {selectedChat.messages.map((msg, index) => (
                                <div key={index} className={`mb-4 ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
                                    <div className={`inline-block py-2 px-3 rounded ${msg.sender === 'me' ? 'bg-blue-200 text-black' : 'bg-gray-200 text-black'}`}>
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
                                <img src={send_icon} alt='send' className='w-8 h-8' />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ChatPage;

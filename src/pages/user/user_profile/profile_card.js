import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import default_profile from '../../../assets/user/profile.png'
import name_icon from '../../../assets/user/name.png';
import phone_icon from '../../../assets/user/contact.png';
import email_icon from '../../../assets/user/email.png';
import address_icon from '../../../assets/user/location.png';

const UserProfileCard = () => {
    const [isEditing, setIsEditing] = useState({
        name: false,
        email: false,
        phone: false,
        address: false,
    });
    const [profile, setProfile] = useState({
        name: 'Kavindu Shehan',
        email: 'kavindushehan@gmail.com',
        phone: '0765467862',
        address: '308, wedagewatta road, kotuwegoda, rajigirya',
        image: default_profile,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleEdit = (field) => {
        setIsEditing({ ...isEditing, [field]: !isEditing[field] });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfile({ ...profile, image: e.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        setIsEditing({
            name: false,
            email: false,
            phone: false,
            address: false,
        });
        console.log('Saved profile:', profile);
    };

    const fields = [
        { field: 'name', icon: name_icon },
        { field: 'email', icon: email_icon },
        { field: 'phone', icon: phone_icon },
        { field: 'address', icon: address_icon },
    ];

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
            <div className="flex justify-center mt-6">
                <div className="flex flex-row justify-center items-center space-x-3">
                    <img
                        id="profile-img"
                        src={profile.image}
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover"
                    />
                    <input
                        type="file"
                        id="upload-image"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                    />
                    <button
                        onClick={() => document.getElementById('upload-image').click()}
                        className="bottom-0 right-0 bg-buttonBlue text-white px-10 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Add Image
                    </button>
                </div>
            </div>
            <div className="p-6">
                {fields.map(({ field, icon }) => (
                    <div key={field} className="mb-4 relative">
                        <label className="text-start block text-gray-700 font-bold mb-2 capitalize" htmlFor={field}>
                            {field}:
                        </label>
                        <div className='flex flex-row space-x-2 items-center'>
                            <img src={icon} alt={`${field} icon`} className="w-6 h-6" />
                            <input
                                type={field === 'email' ? 'email' : 'text'}
                                name={field}
                                id={field}
                                value={profile[field]}
                                onChange={handleInputChange}
                                disabled={!isEditing[field]}
                                className={`w-full p-2 border-b border-black ${isEditing[field] ? 'border-gray-500' : 'border-transparent bg-gray-100'
                                    }`}
                            />
                        </div>
                        <button
                            onClick={() => handleEdit(field)}
                            className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
                        >
                            <FaEdit />
                        </button>
                    </div>
                ))}
                <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default UserProfileCard;

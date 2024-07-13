import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import profile from '../../assets/navigation/profile.png';
import medicine from '../../assets/navigation/medicine.png';
import notifications from '../../assets/navigation/notifications.png';
import logo from '../../assets/logo/logo.png';
import chat from '../../assets/navigation/chat.png';

const Navbar = () => {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  const scrollToOurServices = () => {
    const ourServicesElement = document.getElementById('our-services');
    if (ourServicesElement) {
      ourServicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeSidebarOnResize = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', closeSidebarOnResize);
    return () => {
      window.removeEventListener('resize', closeSidebarOnResize);
    };
  }, []);

  return (
    <>
      {/* Desktop View */}
      <nav className="bg-white shadow-custom-medium text-xs md:text-sm lg:text-md z-50 py-4 fixed top-0 font-inter w-full hidden lg:block">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt='Clubfoot Bracing' className='w-36 h-auto' />
          </Link>
          <ul className="flex space-x-9">
            <li className="text-black"><Link to="/">Home</Link></li>
            <li className="text-black"><Link to="/about">About Us</Link></li>
            <li className="text-black"><Link to="/services" onClick={scrollToOurServices}>Services</Link></li>
            <li className="text-black"><Link to="/contact_us">Contact Us</Link></li>
            <li className="text-black"><Link to="/professionals">Professionals</Link></li>
            <li className="text-black"><Link to="/accessories">Accessories</Link></li>
            <li className="text-black"><Link to="/guidance">Guidance</Link></li>
          </ul>
          {/* {!isLoggedIn && (
            <div className="flex space-x-2">
              <Link to="/register">
                <button className="bg-white text-[#7B7B7B] py-1 px-3 border rounded border-gray-500">Sign Up</button>
              </Link>
              <Link to="/login">
                <button className="bg-blue-500 text-white py-1 px-3 rounded">Sign In</button>
              </Link>
            </div>
          )} */}


          <div className="flex space-x-3">
            <Link to="/chat">
              <img src={chat} alt='' className='w-6 h-6' />
            </Link>
            <Link to="/user-profile">
              <img src={profile} alt='' className='w-6 h-6' />
            </Link>
            <Link to="/login">
              <img src={notifications} alt='' className='w-6 h-6' />
            </Link>
          </div>

        </div>
      </nav>

      {/* Mobile View */}
      <div className="z-50 py-4 fixed top-0 left-0 w-full lg:hidden flex bg-white justify-between items-center px-4">
        <button onClick={toggleSidebar} className="text-black">
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
        <div className='flex w-full flex-row justify-between items-center'>
          <div className='w-full flex justify-center items-center '>
            <img src={logo} alt='logo' className='w-36 md:w-48 h-auto md:ml-16' />
          </div>
          <div className="w-1/6 flex justify-end space-x-1 md:space-x-3">
            <Link to="/login">
              <img src={notifications} alt='' className='w-5 h-5 md:w-7 md:h-7' />
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 w-64 bg-[#868686] h-full z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-between items-center p-4">
          <Link to="/">
            <img src={logo} alt='logo' className='w-40 h-auto mt-6' />
          </Link>
          <button onClick={toggleSidebar} className="text-white">
            <AiOutlineClose size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-start p-4 mt-8">
          <li className="text-white py-2"><Link to="/" onClick={toggleSidebar}>Home</Link></li>
          <li className="text-white py-2"><Link to="/about" onClick={toggleSidebar}>About Us</Link></li>
          <li className="text-white py-2"><Link to="/services" onClick={toggleSidebar}>Services</Link></li>
          <li className="text-white py-2"><Link to="/contact_us" onClick={toggleSidebar}>Contact Us</Link></li>
          <li className="text-white py-2"><Link to="/professionals" onClick={toggleSidebar}>Professionals</Link></li>
          <li className="text-white py-2"><Link to="/accessories" onClick={toggleSidebar}>Accessories</Link></li>
          <li className="text-white py-2"><Link to="/guidance" onClick={toggleSidebar}>Guidance</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

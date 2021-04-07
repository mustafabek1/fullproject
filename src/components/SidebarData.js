import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
    
  },
  {
    title: 'Stock',
    path: '/stock',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Store',
    path: '/store',
    icon: <IoIcons.IoMdAppstore />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Catagory',
    path: '/catagory',
    icon: <FaIcons.FaListOl />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
 
  {
    title: 'Login',
    path:'./login',
    icon: <IoIcons.IoMdLogIn/>,
    cName: 'nav-text'
  },
  {
    title: 'SingUp',
    path: '/register',
    icon: <IoIcons.IoMdAdd/>,
    cName: 'nav-text'
  }
];

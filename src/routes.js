import React from 'react';
import Notifications from './Components/Notifications';
import MainLayout from './MainLayout';
import Messages from './Components/Messages';
import { ChatWindow } from './Components/ChatWindow';
const routes = [
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      { path: '', element: <Notifications/> },
      { path: 'messages', element: <Messages/> },
      { path: 'chat', element: <ChatWindow/> },
      
    ],
  },
  
  


  ];
  

export default routes;
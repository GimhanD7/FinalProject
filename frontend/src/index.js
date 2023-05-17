import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/workoutContext';
import { StudentsContextProvider } from './context/studentContext/studentContext.js';
import { TeachersContextProvider } from './context/teacherContext/teacherContext';
// import { CoursesContextProvider } from './context/courseContext/courseContext';
// import { AuthContextProvider } from './context/AuthContext'
import { CoursesContextProvider } from "./context/CourseContext";
import { NotificationsContextProvider } from "./context/NotificationContext";

import "bootstrap/dist/css/bootstrap.min.css";

import { MeterialsContextProvider } from "./context/MeterialContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <WorkoutsContextProvider> 
    <CoursesContextProvider>
      <MeterialsContextProvider>
      <NotificationsContextProvider>   
      <StudentsContextProvider>
      <TeachersContextProvider>
      
        <App />   
      </TeachersContextProvider>
      </StudentsContextProvider>
      </NotificationsContextProvider>
      </MeterialsContextProvider>
    </CoursesContextProvider>
    </WorkoutsContextProvider> 
   
 
    
  </React.StrictMode>
);



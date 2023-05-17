import { createContext, useReducer } from 'react'

export const TeachersContext = createContext()

export const teachersReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEACHERS':
      return { 
        teachers: action.payload 
      }
    case 'CREATE_TEACHER':
      return { 
        teachers: [action.payload, ...state.teachers] 
      }
    case 'DELETE_TEACHER':
        return{
          teachers:state.teachers.filter((w)=>w._id !==action.payload._id)
        }
    case 'UPDATE_TEACHER':
      return {
        teachers: state.teachers.map((w) => {
          if (w._id === action.payload._id) {
            return { ...w, ...action.payload.updatedTeacher };
          } else {
            return w;
          }
        })
      }   
    default:
      return state
  }
}

export const TeachersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(teachersReducer, { 
    teachers: null
  })
  
  return (
    <TeachersContext.Provider value={{ ...state, dispatch }}>
      { children }
    </TeachersContext.Provider>
  )
}
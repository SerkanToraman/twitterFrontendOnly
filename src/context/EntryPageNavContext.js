//Outsource JS library
import React, { createContext, useState } from 'react'
//Internal JS
//Component Imports
//Pages
//CSS Imports


export const EntryPageNavContext = createContext();

const EntryPageProvider = ({children}) =>{

  const [entryPageNum,setEntryPageNum] = useState(0);

return(
  <EntryPageNavContext.Provider value={{entryPageNum,setEntryPageNum}}>
      {children}
  </EntryPageNavContext.Provider>
)
}
export default EntryPageProvider
'use client';

import { createContext, useState } from "react";

export const ThemeContex=createContext();
export const ThemeProvider=({children})=>
{
    const[mode,setMode]=useState('light')
    const toggle =()=>{
        setMode( mode=> (mode==='light') ?'dark':'light');
    }
  
    return(
        <ThemeContex.Provider value={{toggle,mode}}>
            <div className={mode}>
            {children}
            </div>
        </ThemeContex.Provider>
    );
} 
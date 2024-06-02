import React, { useContext } from 'react';
import { ThemeContex } from '../contex/ThemeContex';

const Darkmode = () => {
    const { toggle } = useContext(ThemeContex)
    return ( 
    <div>
        <button  className=' dark:bg-slate-50 dark:text-black p-3 rounded-full bg-black hover:bg-sky-500 text-white text-center border-solid border-black shadow-md shadow-black' onClick = { toggle } > dark </button> 
        </div>
    );
};

export default Darkmode;
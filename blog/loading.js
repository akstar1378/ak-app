import React from 'react';
import Loading from '../components/Loading';

const loading = () => {
    return (
        <div>
            <h1 className='text-black font-medium text-lg'>loading....</h1>
            <Loading/>
        </div>
    );
};

export default loading;
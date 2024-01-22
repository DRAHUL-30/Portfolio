import React from 'react';
// import { usePageContext } from './PageContext';
import { map } from "lodash";

export const TopMenu = () => {
  return (
    <div className='w-[95%] mx-auto flex justify-between'>
        <LeftCorner />
        <RightCorner />
    </div>
  )
}

const LeftCorner = () => {
    // const { setCurrentPage } = usePageContext();
    return (
        <div className='flex items-center'>
            <div className='rounded-full w-7 h-7 bg-yellow-500'></div>
            <h1 className='font-[500] text-[26px]'>Rahul</h1>
            <p className='text-[15px]'>Software Developer</p>
        </div>
    )
}

const RightCorner = () => {
    // const { setCurrentPage } = usePageContext();
    const Types = ['Resume', 'Projects', 'Contact'];

      const mappedData = map(Types, (item) => (
        <div>
              <h1>{item}</h1>
              <div></div>
        </div>
      ));
    
    return <div className='flex items-center'>{mappedData}</div>;
};

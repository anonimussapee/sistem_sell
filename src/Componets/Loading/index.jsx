import { ArrowDownCircleIcon } from '@heroicons/react/24/solid'
import './icon.css'
import { useState } from 'react'
const Loading = ({url}) => {
   const [ready,setReady] = useState(false);
   const [newurl, setNewurl]= useState('') 
   setTimeout(() => {
    setReady(true)
    setNewurl(url)
   }, 1000);

    return (
      <>
       {!ready && <span className='absolute sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] z-10 top-0'></span>}
        <span className='absolute sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] top-2'>
          <div className={`relative ${!ready ? 'stateLoad': 'readyDownload'}`}>
            <a href={newurl} target='_blank' >
            <ArrowDownCircleIcon  className='iconDownload sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] text-cyan-800'/>
            </a>
          </div>
        </span>
      </>
    )
  
}
export {Loading}
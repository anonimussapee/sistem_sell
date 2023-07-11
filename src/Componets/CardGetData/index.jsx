import {ArrowDownCircleIcon} from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Loading } from '../Loading'

const CardGetData = (props) =>{
  const [urlYt, setUrlYt] = useState('')
  const [makeYt, setMakeYt] = useState('')
  const [load,setLoad]= useState(false)

  const clearLink = (url) => {
    if(url.startsWith('https://www.youtube.com/watch?v=')){
      const reduce=url.substring(url.lastIndexOf('watch?v=')+8)
      const urlReady= reduce.substring(0,11)
      return urlReady
    }else if (url.startsWith('https://youtu.be/')){
      const reduce=url.substring(url.lastIndexOf('/')+1)
      const urlReady= reduce.substring(0,11)
      return urlReady 
    }else{
      return false
    }
  }

  const getData = async(link)=>{

    let url;
    let options;
    if(props.op==='free'){
      url = `https://youtube-mp3-download1.p.rapidapi.com/dl?id=${link}`;
      options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '9ec8105266msh076540f029a5c95p1fab41jsn30454a7ed3b6',
          'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
        }
      };
    }else if(props.op==='limit'){

      url = `https://youtube-mp36.p.rapidapi.com/dl?id=${link}`;
      options = {
       method: 'GET',
       headers: {
         'X-RapidAPI-Key': '9ec8105266msh076540f029a5c95p1fab41jsn30454a7ed3b6',
         'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
       }
     };
 
    }
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }}

  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(load){
      setLoad(false)
    }
    setTimeout(async() => {
       if(urlYt.length>0){
      setLoad(true)
      const makeUrl = clearLink(urlYt)
    console.log('soy un form y tengo este dato', makeUrl)
    setUrlYt('')
    if(makeUrl){
      let url = await getData(makeUrl)
      setMakeYt(url.link)
    }
    }
    }, 100);
   
    
  }  
  return (
    <div className='card-get-data  w-[90%] min-w-[288px] max-w-[450px] border-cyan-800 border-[3px] flex flex-col justify-center items-center  rounded-2xl pb-5 text-[2rem] gap-3'>
      <h2 className='w-full text-white bg-cyan-800   text-center text-[2.2rem] '>Descarga tu música favorita</h2>
      <figure className='relative sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px]  my-5'>
         <img src={props.img} alt="logo principal" className='disk w-[100%] h-[100%] rounded-full ' />
         <span className='circle-black sm:w-[50px] sm:h-[50px] md:w-[65px] md:h-[65px] bg-gray-100 border-cyan-800 border-[1px]'></span>
         {load && <Loading url={makeYt}/>}
      </figure>
     
      <p className='w-[90%] text-center'>Descarga la música que va con tu estado de ánimo.</p>
      <form  onSubmit={(e)=>handleSubmit(e)} name='formYt'>
        <label htmlFor="linkYt" className='relative flex flex-col items-center'>
          <button type='submit' id='btnYt'>
            <ArrowDownCircleIcon  className='w-10 h-10 absolute top-3 left-2'/>
          </button>
          <input type="text" placeholder='https://www.youtube.com/' className='pl-12 py-2 rounded-lg text-[1.8rem] border-cyan-800 border-[1px] outline-blue-700 w-[275px]' value={urlYt} onChange={(e)=>{
            setUrlYt(e.target.value)
          }} onKeyPress={e=>{
            if(e.key === 'Enter'){
             document.getElementById('btnYt').click()
            }
          }}/>
        </label>
      </form>
    </div>
  )
}
export {CardGetData}

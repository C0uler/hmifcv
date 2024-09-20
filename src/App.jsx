import { Typography, Input, Button } from '@material-tailwind/react'
import { useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {gsap} from "gsap"
import Test from './Alasan.jsx'
import Alasan from './Tujuan.jsx'
import Kelebihan from './Kelebihan.jsx'
import './App.css'



export default function main(){

  return(
    <>
 

      <section className=' align-items flex items-center text-center intro'  id='intro'>
        <div className='flex h-screen w-screen overflow-hidden intro-inner items-center m-auto'>
           <Typography
            variant='h1'
            color='blue-gray'
            className="mx-auto w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              <span>Perkenalkan Saya Jordan</span> <br/> <span className='!my-9'>Mahasiswa <span className='text-cyan-300'>UMN</span> Angkatan <span className='text-cyan-300'>23</span></span>
           </Typography>
          </div>
      </section>

      <section className='lcontainer flex items-center text-center my_name my-12' id='my_name'>
          <div className='lcontainer-text m-auto'>
            <Typography
              variant="h1"
              className='mx-auto w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-4xl'
              >
                <span>Disini Saya Akan Menceritakan Alasan </span> <br />  <span >Mengapa Saya Ingin Masuk HMIF</span> 
              </Typography>

          </div>
      </section>

      <br />
      <br />
      <br />


      <Test></Test>


    
      <Kelebihan/>


    <Alasan/>
    
          
    <section className=' align-items flex items-center text-center' >
            <div className='flex h-screen w-screen overflow-hidden intro-inner items-center m-auto'>
              <Typography
                variant='h1'
                color='blue-gray'
                className="mx-auto w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
                >
                  <span>Terima Kasih Sudah Mengikuti Cerita Saya</span>
              </Typography>
              </div>
          </section>

    



     

      
    </>
  )
}
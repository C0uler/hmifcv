import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Typography, Input, Button } from '@material-tailwind/react'
import './Tujuan.css';

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
    useEffect(() => {
        const sections = gsap.utils.toArray('.Kpanel');

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: '.KMwrap',
                pin: true, 
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => `+=${600 * sections.length}px`, 
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (

        <>
            <div className="KMwrap Mwrap">

            <section className='Kpanel panel align-items flex items-center text-center '  >
                    <div className='flex h-screen w-screen overflow-hidden intro-inner items-center m-auto'>
                    <Typography
                        variant='h1'
                        color='blue-gray'
                        className="mx-auto w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
                        >
                        <span>Chapter 2. Kelebihan</span>
                    </Typography>
                    </div>
                </section>



                <section className='Kpanel panel align-items flex items-center text-center ' >
                <div className='flex h-screen w-screen overflow-hidden intro-inner items-center m-auto'>
                    <Typography
                    variant='h1'
                    color='blue-gray'
                    className="mx-auto w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
                    >
                        <span>Mungkin Hal yang hanya dapat saya banggakan pada diri saya adalah niat untuk belajar hal baru</span>
                    </Typography>
                    </div>
                </section>


                <section className='Kpanel panel  align-items flex items-center text-center' >
                <div className='flex h-screen w-screen overflow-hidden intro-inner items-center m-auto'>
                    <Typography
                    variant='h1'
                    color='blue-gray'
                    className="mx-auto w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
                    >
                        <span>Kelebihan lainnya mungkin, karena saya memahami beberapa bahasa pemograman</span>
                    </Typography>
                    </div>
                </section>


            </div>

        
        </>
    );
}

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Typography, Input, Button } from '@material-tailwind/react'
import './Tujuan.css';

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
    useEffect(() => {
        const sections = gsap.utils.toArray('.Apanel');

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: '.AMwrap',
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
            <div className="AMwrap Mwrap">

            <section className='Apanel panel  align-items flex items-center text-center '  >
                    <div className='flex h-screen w-screen overflow-hidden intro-inner items-center m-auto'>
                    <Typography
                        variant='h1'
                        color='blue-gray'
                        className="mx-auto w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
                        >
                        <span>Chapter 3. Rencana</span>
                    </Typography>
                    </div>
                </section>



                <section className='Apanel panel  align-items flex items-center text-center ' >
                <div className='flex h-screen w-screen overflow-hidden intro-inner items-center m-auto'>
                    <Typography
                    variant='h1'
                    color='blue-gray'
                    className="mx-auto w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
                    >
                        <span>Rencana saya bila saya bisa masuk kedalam HMIF mungkin yang utama adalah untuk membantu dalam pembuatan website</span>
                    </Typography>
                    </div>
                </section>


                <section className='Apanel panel   align-items flex items-center text-center' >
                <div className='flex h-screen w-screen overflow-hidden intro-inner items-center m-auto'>
                    <Typography
                    variant='h1'
                    color='blue-gray'
                    className="mx-auto w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
                    >
                        <span>Selain itu saya juga ingin ikut terlibat dalam penuangan ide ide dalam pembuatan acara</span>
                    </Typography>
                    </div>
                </section>

                <section className='Apanel panel  align-items flex items-center text-center'  >
                <div className='flex h-screen w-screen overflow-hidden intro-inner items-center m-auto'>
                    <Typography
                    variant='h1'
                    color='blue-gray'
                    className="mx-auto w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
                    >
                        <span>Terakhir, pastinya saya ingin terus belajar dan perkembang agar dapat bermanfaat bagi himpunan</span>
                    </Typography>
                    </div>
                </section>

            </div>

        
        </>
    );
}

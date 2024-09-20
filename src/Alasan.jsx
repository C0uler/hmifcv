import './Alasan.css'

import {gsap} from "gsap"

import { useEffect } from 'react';

import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "./assets/ppif.jpg"
import img2 from "./assets/panit_manifest.jpg"
import img3 from "./assets/panit_ppif.jpg"
import img4 from "./assets/hmif_web.png"


export default function test(){

    gsap.registerPlugin(ScrollTrigger);


  
   

    useEffect(() => {

            gsap.defaults({overwrite: 'auto'});

            const ST = ScrollTrigger.create({
                trigger: '.content-container',
                start: 'top top',
                end: 'bottom center',
                onUpdate: getCurrentSection,
                pin: '.left-content',
            });

            const contentMarkers = gsap.utils.toArray(".contentMarker");

            contentMarkers.forEach(marker => {
                marker.content = document.querySelector(`#${marker.dataset.markerContent}`);
                
                if(marker.content.tagName === "IMG") {
                    gsap.set(marker.content, {transformOrigin: "center"});
                    
                    marker.content.enter = function() {
                    gsap.fromTo(marker.content, {autoAlpha: 0, rotateY: -30}, {duration: 0.3, autoAlpha: 1, rotateY: 0});
                    }
                } else if(marker.content.tagName === "BLOCKQUOTE") {
                    gsap.set(marker.content, {transformOrigin: "left center"});
                    
                    marker.content.enter = function() {
                    gsap.fromTo(marker.content, {autoAlpha: 0, rotateY: 50}, {duration: 0.3, autoAlpha: 1, rotateY: 0});
                    }
                }
                
                marker.content.leave = function() {
                    gsap.to(marker.content, {duration: 0.1, autoAlpha: 0});
                }
                
                });
    
         
                let lastContent;
                function getCurrentSection() {
                    let newContent;
                    const currScroll = scrollY;
  
                    
            
                    contentMarkers.forEach(marker => {
                        if(currScroll > marker.offsetTop) {
                        newContent = marker.content;
                        }
                    });
                    
            
                    if(newContent
                    && (lastContent == null 
                        || !newContent.isSameNode(lastContent))) {
                        if(lastContent) {
                        lastContent.leave();
                        }
                        newContent.enter();  
                        lastContent = newContent;
                    }
                    }
        
                    const media = window.matchMedia("screen and (max-width: 600px)");
                    ScrollTrigger.addEventListener("refreshInit", checkSTState);
                    checkSTState();
        
                    function checkSTState() {
                    if(media.matches) {
                        ST.disable();
                    } else {
                        ST.enable();
                    }
                }
            

        return () => {
          ST.kill();
        };
      }, []); 
    


   
    
    return(
        <>
   

            <div className="content-container">
                <div className="left-content">
                    <img id="img1" class="imageToShow" width={"400vw"} src={"data:image/jpeg;base64,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"} alt="kitty"/>
                    <img id="img2" className="imageToShow" width={"400vw"} src={img1} alt="kitty"/>
                    <blockquote id="text1" className="textToShow" cite="https://www.youtube.com/watch?v=PKffm2uI4dk">
                    <p>Cat ipsum dolor sit amet, attack the child i show my fluffy belly but it's a trap!</p>
                    <footer>— Fluffy, the kitten <cite>Sad Cat Diary</cite></footer>
                    </blockquote>
                    <img id="img3" className="imageToShow" width={"400vw"} src={img2} alt="kitty"/>
                    <img id="img4" className="imageToShow" width={"400vw"} src={img3} alt="kitty"/>
                    <img id="img5" className="imageToShow" width={"400vw"} src={img4} alt="kitty"/>
                </div>




                <div className="right-content">
                    <p className="contentMarker text-md lg:text-4xl text-justify" data-marker-content="img2"> <strong>HMIF</strong>, pertama kali aku mendengar kata HMIF yaitu saat pertama kali memasuki dunia perkuliahan saat perkenalan mahasiswa baru. Seperti perkenalan mahasiswa pada biasanya, mereka akan selalu memperkenalkan keorganisasian yang ada. Pada awalnya aku tak melihat sesuatu hal yang spesial saat pertama kali mendengarnya. Menurutku, keanggotaan hanya akan menambahkan beban kehidupan perkuliahan dan tak akan ada manfaatnya</p>
                    
                    <br />
                    
                    <p className="contentMarker text-md lg:text-4xl text-justify" data-marker-content="img3">Namun pada titik tertentu ketika saya mencoba ikut keorganisasian pertama saya yaitu Manifest, saya baru tersadar bahwa keorganisasian tidaklah semenyeramkan yang ku kira. Malahan hal ini membuat saya nyaman dan bisa mengembangkan skill yang sebelumnya belum saya punyai, selain itu juga dapat menambah wawasan dan yang terpenting adlaah pertemanan.</p>
                    
                    <br />
                
                    
                    <p className="contentMarker text-md lg:text-4xl text-justify" data-marker-content="img4">Tidak berhenti sampai manifest, saya juga mengikuti kegiatan lainnya yaitu PPIF. Disana juga mempelajari hal baru, dan dapat melihat bagaimana operator bekerja di ruangan operator. </p>
                    
                    <br />
                  

                    <p className="contentMarker text-md lg:text-4xl text-justify" data-marker-content="img1">Tetapi mengikuti kegiatan kegiatan jangka pendek seperti itu, membuat saya berpikir bila mengikuti kegiatan jangka pendek saja sudah menyenangkan, bagaimana dengan mengikuti himpunan yang jangka waktunya satu tahun dan dengan banyak program kerja.</p>
                    
                    <br />
               

                    <p className="contentMarker text-md lg:text-4xl text-justify" data-marker-content="img1" >Karena itulah saya mulai memmikirkan untuk masuk dan ingin bergabung dalam himpunan, ditambah di HMIF yang saya lihat mereka memiliki banyak proker proker yang dapat berguna, tidak hanya anggotanya tetapi juga mahasiswa mahasiswa prodi Informatika juga.</p>
                    
                    <br />
                
               

                    <p className="contentMarker text-md lg:text-4xl text-justify" data-marker-content="img1">Tentunya ketika ingin masuk ke organisasi kita harus memilih divisi mana yang cocok dengan kita dan ketika mencari cari, menurut saya divisi Research dan Development lah yang paling cocok untuk saya.</p>
                    
                    <br />
                 

                    <p className="contentMarker text-md lg:text-4xl text-justify" data-marker-content="img1">Dari namanya saja menurut saya divisi tersebut bakalan sangat menyenagkan dan seru karena akan terlibat dalm beberapa proker HMIF yang menurut saya keren selama saya ikuti menjadi peserta. </p>
                    
                    <br />
                 
                    <p className="contentMarker text-md lg:text-4xl text-justify" data-marker-content="img5">Apalagi, ketika melihat website website HMIF yang keren lebih membuat saya lebih tertarik lagi untuk mengikutinya. Saya jadi penasaran bagaimana sistem kerja kelompok dalam pembuatan website yang proper. Bagaimana pembagian tugasnya dan masih banyak hal lagi yang menurut saya bisa saya eksplor ketika sudah didalamnya</p>
                    
                    <br />
                
                    <p className="contentMarker text-md lg:text-4xl text-justify" data-marker-content="img5">Oleh karena itulah saya membuat website ini untuk menceritakan mengapa saya tertarik untuk bergabung dengan himpunan informatika ini</p>            
                   
                </div>
        </div>




    

        </>
    )
}
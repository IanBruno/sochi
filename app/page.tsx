'use client'

import { useState, useEffect } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import CountDown from './ui/countdown';
import Carousel from './ui/carousel';
import Image from 'next/image';
import YouTube from 'react-youtube';
import backgroundImage from '../public/background.jpg';
import experienciaImage from '../public/experiencia.png';
import latamImage from '../public/team-latam.png';
import travelImage from '../public/travel-meets-fashion.png';
import velocityImage from '../public/velocidad-riesgo.png';
import styles from '@/app/ui/home.module.css'

export default function Page() {

  const [currentVideo, setCurremtVideo] = useState(null);

  const opts = { 
    height: "300", 
    width: "492", 
    playerVars: { 
      autoplay: 1, 
      controls: 0,
    }, 
  };

  const carouselItems = [
    {
      imageSrc: latamImage,
      title: 'TRAVEL MEETS FASHION',
      videoKey: 'bAMzxTUe8pk'
    },
    {
      imageSrc: travelImage,
      title: 'VELOCIDAD y RIESGO',
      videoKey: 'MI4ecwbf-1c'
    },
    {
      imageSrc: velocityImage,
      title: 'EXPERIENCIA MULTIMEDIA',
      videoKey: 'xVudfb6SS04'
    },
    {
      imageSrc: experienciaImage,
      title: 'TEAM LATAM',
      videoKey: '2XWDzKh1A6Y'
    }
  ];

  const handleSwitchVideo = (position) => {
    setCurremtVideo(carouselItems[position].videoKey)
  }
  
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex justify-evenly h-16 shrink-0 bg-black md:h-16 sticky top-0 border-b-4 border-b-red-600 ">
        <Image
          src="/logo-sochi-color.png"
          width={160}
          height={40}
          className='flex-2 bottom-0'
          alt="Sochi"
        />
        <Image
          src="/logo-claro-sports.png"
          width={140}
          height={40}
          className='flex-7 bottom-0'
          alt="Sochi"
        />
      </div>
      <div className="flex" style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          width: '100vw',
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
         <CountDown/>
         {currentVideo && <YouTube videoId={currentVideo} 
            opts={opts} /> }
      </div>
      <div style={{
        backgroundColor: '#2A2A2A',
        width:'100vw',
        height: '35vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Carousel elements={carouselItems} handleClick={handleSwitchVideo} currentVideo={currentVideo}/>
      </div>
      <div style={{
        backgroundColor: 'black',
        width:'100vw',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 'auto',
      }}>
        <div className="text-xs text-white font-semibold">Aviso de privacidad | Contacto</div>
        <div><Image
          src="/logo-sochi-color.png"
          width={160}
          height={40}
          className='flex-2 bottom-0'
          alt="Sochi"
        /></div>
        <div><Image
          src="/logo-claro-sports.png"
          width={160}
          height={40}
          className='flex-2 bottom-0'
          alt="Sochi"
        /></div>
      </div>
    </main>
  );
}

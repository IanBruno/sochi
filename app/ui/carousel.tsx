import { useEffect, useState } from "react";
import Image from "next/image";

export default function Carousel( {elements, handleClick, currentVideo}) {
    const altDescription = 'Los Deportistas latinoamericanos que participan en Sochi 2024';
    return (
        <>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'center',
            alignItems: 'center'
          }}>
            <p className={`text-2xl font-medium text-white`} style={{
                marginBottom: '2rem',
            }}>CLARO SPORTS EN SOCHI 2014</p>
            <div style={{display: 'flex', flexDirection: 'row', marginRight: ''}}>
                {elements.map( (element, index) => {
                        if (currentVideo && currentVideo == element.videoKey)
                        return <div key={index} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',        
                                }}>
                                    <div style={{
                                        backgroundColor: 'red',
                                        height: '160px',
                                        borderRadius: '50%',
                                        width: '160px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginRight: '1rem',
                                        textAlign: 'center',
                                    }}>
                                        <div className="text-xs text-white font-semibold">{altDescription}</div>
                                    </div>
                                    <h1 className={`text-xs text-white md:text-xs md:leading-normal font-medium`} style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        marginRight: '1rem',
                                    }}>{element.title}</h1>
                                </div>
                        return <div key={index} style={{marginRight: '2rem'}} onClick={() => handleClick(index)}>
                            {/*<img src={element.imageSrc} alt={`${altDescription}`} width="200"/>*/}
                            <Image
                                src={element.imageSrc}
                                width={160}
                                height={40}
                                className='flex-2 bottom-0'
                                alt="Sochi"
                                />
                            <h1 className={`text-xs text-white md:text-xs md:leading-normal font-medium`} style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}>{element.title}</h1>
                        </div>
                  }
                )}
          </div>
          </div>
        </>
    );
};
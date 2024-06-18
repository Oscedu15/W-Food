'use client';

import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Reservation from '@/components/Reservation';
import About from '@/components/About';
import Map from '@/components/Map';
import StyleGuide from '@/components/StyleGuide';
import Footer from '../components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className='w-full max-w-[1440px] bg-white mx-auto overflow-hidden'>
      {/* <StyleGuide /> */}
     <Header/>
      <Hero/>
      <Menu/>
      <Reservation/>
      <About/>
      <Map />
      <Footer/>
      {/* <div className='h-[4000px]'></div> */}
    </main>
  );
}

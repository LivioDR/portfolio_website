'use client'
import { useState, useEffect } from "react";
import { ProgressBar } from "react-loader-spinner";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "./components/Header/Header";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ProjectsScreen from "./components/ProjectsScreen/ProjectsScreen";
import './globals.css'
import ContactScreen from "./components/ContactScreen/ContactScreen";
import Footer from "./components/Footer/Footer";

export default function Home() {

  const [viewport, setViewport] = useState({width: 500, height: 1000,format: undefined})

  const updateViewportDimensions = () => {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
      format: window.innerHeight < window.innerWidth ? 'landscape' : 'portrait'
    })
  }

  useEffect(()=>{
    if(window){
      updateViewportDimensions()
      const listenerId = window.addEventListener('resize',updateViewportDimensions)
      return window.removeEventListener('resize', listenerId)
    }
  },[])


  if(viewport?.format){
    return (
      <>
        <SpeedInsights/>
        <Header format={viewport?.format}/>
        <HomeScreen viewport={viewport}/>
        <ProjectsScreen/>
        <ContactScreen viewport={viewport}/>
        <Footer/>
      </>
    );
  }
  else
  {
    return(
      <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'var(--light-main)',
        display: 'grid',
        placeItems: 'center',
      }}>
      <ProgressBar
        barColor='var(--main-color)'
        borderColor='var(--main-color)'
        visible={true}
        ariaLabel="progress-bar-loading"
        width={200}
        height={200}
      />
      </div>
    )
  }
}

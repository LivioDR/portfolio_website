'use client'
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import './globals.css'

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

  return (
    <>
      <Header/>
      <HomeScreen viewport={viewport}/>
    </>
  );
}

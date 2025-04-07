import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "./components/Header/Header";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ProjectsScreen from "./components/ProjectsScreen/ProjectsScreen";
import './globals.css'
import ContactScreen from "./components/ContactScreen/ContactScreen";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

export default function Home() {

  return (
    <>
      <SpeedInsights/>
      <Header/>
      <HomeScreen/>
      <ProjectsScreen/>
      <ContactScreen/>
      <Footer/>
      <ToastContainer position="bottom-right" 
      toastStyle={{
        backgroundColor: 'var(--main-color)', 
        color: 'var(--white)', 
      }}/>
    </>
  );

}

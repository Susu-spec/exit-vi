import Lenis from "lenis"
import Header from "./components/layout/Header"
import Layout from "./components/layout/Layout"
import ExitViWrapper from "./components/shared/ExitViWrapper"
import Hero from "./sections/hero/Hero"
import { useEffect } from "react"
import { CursorProvider } from "./context/CursorProvider"
import CustomCursor from "./components/shared/CustomCursor"
import Work from "./sections/work"
import Services from "./sections/services"

function App() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    }
  }, []);

  return (
    <CursorProvider>
      <CustomCursor />
      <Layout>
        <ExitViWrapper />
        <Header />
        <Hero />
        <Work />
        <Services />
      </Layout>
    </CursorProvider>
   
  )
}

export default App

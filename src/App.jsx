import Lenis from "lenis"
import Header from "./components/layout/Header"
import Layout from "./components/layout/Layout"
import ExitViWrapper from "./components/shared/ExitViWrapper"
import Hero from "./sections/hero"
import { useEffect } from "react"
import { CursorProvider } from "./context/CursorProvider"
import CustomCursor from "./components/shared/CustomCursor"
import Work from "./sections/work"
import Services from "./sections/services"
import Brands from "./sections/brands"
import { useMediaQuery } from "@chakra-ui/react"

function App() {
 const [isSmallScreen] = useMediaQuery('(max-width: 991px)');

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
      {!isSmallScreen &&
        <div style={{ position: "relative", zIndex: 9999 }}>
          <CustomCursor />
        </div>
      }
      <Layout>
        <ExitViWrapper />
        <Header />
        <Hero />
        <Work />
        <Services />
        <Brands />
      </Layout>
    </CursorProvider>
   
  )
}

export default App

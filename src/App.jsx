import Lenis from "lenis"
import Header from "./components/layout/Header"
import Layout from "./components/layout/Layout"
import ExitViWrapper from "./components/shared/ExitViWrapper"
import Hero from "./components/shared/Hero"
import { useEffect } from "react"

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
    <Layout>
      <ExitViWrapper />
      <Header />
      <Hero />
    </Layout>
  )
}

export default App

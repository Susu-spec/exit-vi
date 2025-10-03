import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    console.log("Layout render");
    return (
        <>
            <Navbar />
            <Header />
            {children}
        </>
    )
}
import ExitViWrapper from "../shared/ExitViWrapper";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    console.log("Layout render");
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
import { CursorProvider, useCursor } from "../../context/CursorProvider";
import CustomCursor from "../shared/CustomCursor";
import ExitViWrapper from "../shared/ExitViWrapper";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({ children }) {

    return (
        <div>
            <Navbar />
            {children}
            <Footer />
         </div>
    )
}
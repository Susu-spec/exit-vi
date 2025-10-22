import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import Navbar from "../layout/Navbar";


const MotionFlex = motion(Flex);

export default function ExitViWrapper() {
    const animateHeight = useBreakpointValue({
        base: "30dvh",
        md: "40dvh",
        lg: "60dvh"
    })

    return (
        <MotionFlex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            className="exit-vi-wrapper"
            initial={{ height: "100dvh" }}
            animate={{ height: animateHeight }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
            position="relative"
        >
            <Navbar />
            <Typewriter 
                text="ExitVi"
                fontSize={{
                    base: "3.375rem",
                    md: "6.75rem",
                    lg: "8.875rem"
                }}
            />
        </MotionFlex>
    )
}
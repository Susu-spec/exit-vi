import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";


const MotionFlex = motion(Flex);

export default function ExitViWrapper() {

    return (
        <MotionFlex
            alignItems="center"
            justifyContent="center"
            className="exit-vi-wrapper"
            initial={{ height: "100vh" }}
            animate={{ height: "60dvh" }}
            transition={{ duration: 4.5, ease: "easeInOut" }}
        >
            {/* <div data-src="https://cdn.prod.website-files.com/6403ade6e2cfd9c42fe587b0/66de11f84b8412815ff50bce_Form%26Fun.json">
                <img src="https://cdn.prod.website-files.com/6403ade6e2cfd9c42fe587b0/66de11f84b8412815ff50bce_Form%26Fun.json" />
            </div> */}
            <Typewriter 
                text="ExitVi"
                fontSize="12.875rem"
                once={false}
            />
        </MotionFlex>
    )
}
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";


const MotionFlex = motion(Flex);

export default function ExitViWrapper() {

    return (
        <MotionFlex
            className="exit-vi-wrapper"
            initial={{ height: "100vh" }}
            animate={{ height: "60dvh" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
        >
            <div data-src="https://cdn.prod.website-files.com/6403ade6e2cfd9c42fe587b0/66de11f84b8412815ff50bce_Form%26Fun.json">
            </div>
        </MotionFlex>
    )
}
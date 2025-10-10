import { Box, Link, Text } from "@chakra-ui/react";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import HeroSlider from "./HeroSlider";

const words = [
    "We", "are", "a", "global", "creative", "tech", "studio",
    "forging", "delightful", "experiences", "by", "blending",
    "design,", "technology,", "and", "storytelling.",
    "Driven", "to", "create", "value", "for", "people",
    "and", "brands", "through", "interaction"
];

export default function Hero() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const steps = 15;
    const colors = Array.from({ length: steps }, (_, i) => {
        const value = 229 - ((229 - 29) / (steps - 1)) * i;
        return `rgb(${value},${value},${value})`;
    });

    const inputRange = Array.from(
        { length: steps },
        (_, i) => i / (steps - 1)
    );

  const color = useTransform(scrollYProgress, inputRange, colors);


    return (
        <Box as="section">
            <Box 
                ref={containerRef}
                as="section" 
                role="region" 
                marginTop={'8vw'}
                px='1vw'
                pos='relative'
            >
                <Text marginTop='.6vw' pos="absolute" className="studio-h4">
                    The studio
                </Text>
                
                <Box
                    className="hero"
                >
                    <Box marginLeft='25%' display="inline">
                        <motion.span
                            style={{ color}}
                            className="inline">
                                {words[0]}&nbsp;
                        </motion.span>
                    </Box>
                    {words.filter((word) => word !== words[0]).map((word, index) => (
                        <motion.span
                            key={index}
                            style={{ color}}
                            className="inline-block"
                        >
                            {word}&nbsp;
                        </motion.span>
                    ))}
                
                </Box>
                <Link 
                    to="/studio" 
                    className="hero-link"
                    maxH="fit"
                >
                    Learn more
                </Link>
            </Box>
            <HeroSlider />
        </Box>
    )
}
import { Box, Link, Text } from "@chakra-ui/react";
import { useInView, useScroll, useSpring, useTransform } from "framer-motion";
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

    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const progress = useSpring(isInView ? scrollYProgress : 0);
    const totalWords = words.length;

    return (
        <>
            <Box as="section" className="module-hero">
                <Box 
                    ref={containerRef}
                    as="section" 
                    role="region" 
                    marginTop={{
                        base: "14vw",
                        lg: "8vw"
                    }}
                    marginBottom={{
                        base: "4vw",
                        lg: 0
                    }}
                    px={{
                        base: "2vw",
                        lg: "1vw"
                    }}
                    pos='relative'
                >
                    <Text marginTop='.6vw' pos="absolute" className="studio-h4">
                        The studio
                    </Text>
                    
                    <Box
                        className="hero"
                    >
                        <Box className="text-studio-indent" display="inline">
                            <motion.span
                                style={{
                                    color: `rgb(29, 29, 29)`
                                }}
                                className="inline">
                                    {words[0]}&nbsp;
                            </motion.span>
                        </Box>
                        {words.slice(1).map((word, index) => {
                            const staggerDelay = 0.2;
                            const start = (index / totalWords) * (1 - staggerDelay);
                            const end = start + staggerDelay;
                            
                            const itemColor = useTransform(
                                scrollYProgress,
                                [start, end],
                                ['rgb(229, 229, 229)', 'rgb(29, 29, 29)']
                            );
                            
                            return (
                                <motion.span key={index} style={{ color: itemColor }} className="word">
                                    {word}&nbsp;
                                </motion.span>
                            );
                        })}
                    
                    </Box>
                    <Link 
                        to="/studio" 
                        className="hero-link"
                        maxH="fit"
                    >
                        Learn more
                    </Link>
                </Box>
            </Box>
            <HeroSlider />
        </>
    )
}
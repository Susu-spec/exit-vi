import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"


const MotionBox = motion(Box);

export default function Typewriter({
    text,
    duration = 0.8,
    stagger = 0.12,
    fontSize = "2vw",
    once = true,
    // gradient = "linear-gradient(90deg, #9ca3af 0%, #000 100%)",
    initialColor = "#9ca3af",
    finalColor = "#000",
    showCursor = false
}) {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger
            }
        }
    }

    // const container = {
    //     hidden: {},
    //     visible: {
    //         transition: {
    //             staggerChildren: stagger
    //         }
    //     }
    // }

    //  const letter = {
    //     hidden: { backgroundSize: "0% 100%", opacity: 0.6 },
    //     visible: {
    //     backgroundSize: "100% 100%",
    //     opacity: 1,
    //     transition: {
    //         duration,
    //         ease: "easeInOut",
    //     },
    //     },
    // };

    const letter = {
        hidden: { color: initialColor, opacity: 0 },
        visible: {
            color: finalColor,
            opacity: 1,
            transition: {
                duration,
                ease: "easeInOut"
            }
        }
    }

    return (
        <MotionBox
            style={{
                fontSize,
                display: "inline-flex",
                fontWeight: "bold",
                alignItems: "center",
                cursor: "default"
            }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: 0.5 }}
        >
            {text.split("").map((char, i) => (
                <MotionBox
                    as="span"
                    key={i}
                    variants={letter}
                    style={{
                        fontFamily: "'Aeonik', sans-serif"
                        // backgroundImage: gradient,
                        // backgroundClip: "text",
                        // WebkitBackgroundClip: "text",
                        // color: "transparent",
                        // backgroundRepeat: "no-repeat",
                        // backgroundPosition: "left",
                        // display: "inline-block",
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </MotionBox>
            ))}
            {showCursor && (
                <MotionBox
                    as="span"
                    style={{
                        marginLeft: ".25rem"
                    }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                |
                </MotionBox>
            )}
        </MotionBox>
    )
}
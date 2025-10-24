import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"


const MotionBox = motion(Box);

export default function Typewriter({
    text,
    duration = 0.8,
    stagger = 0.12,
    fontSize = "2vw",
    once = true,
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
                display: "inline-flex",
                fontWeight: "bold",
                alignItems: "center",
                cursor: "default"
            }}
            fontSize={fontSize}
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
                        fontFamily: "'Aeonik', sans-serif",
                        pointerEvents: "none"
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
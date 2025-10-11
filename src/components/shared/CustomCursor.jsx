import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useCursor } from "../../context/CursorProvider";
import { TextRevealLines } from "./TextReveal";


export default function CustomCursor() {
    const { cursorVariant, cursorText } = useCursor();

    const mouseXPosition = useMotionValue(-50)
    const mouseYPosition = useMotionValue(-50)


    useEffect(() => {
        const handleMouseMove = (event) => {
            mouseXPosition.set(event.clientX);
            mouseYPosition.set(event.clientY)
        }

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);

    }, [mouseXPosition, mouseYPosition])


    const variants = {
        default: {
            opacity: 1,
            height: "1vw",
            width: "1vw",
            backgroundColor: "#1d1d1d0d",
            transition: {
                type: "spring",
                mass: 0.6
            },
            translateX: '-50%',
            translateY: '-50%',
            fontSize: "0rem"
        },

        drag: {
            opacity: 1,
            backgroundColor: "#1d1d1d",
            color: "#fff",
            height: "2.5vw",
            width: "2.5vw",
            fontSize: "0.5rem",
            translateX: '-50%',
            translateY: '-50%',
            transition: {
                type: "spring",
                mass: 0.6
            },
        },

        view: {
            opacity: 1,
            backgroundColor: "#1d1d1d",
            color: "#fff",
            fontSize: "0.5rem",
            height: "2.5vw",
            width: "2.5vw",
            translateX: '-50%',
            translateY: '-50%',
            transition: {
                type: "spring",
                mass: 0.6
            },
        }
    }

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
    }

    const mouseX = useSpring(mouseXPosition, spring);
    const mouseY = useSpring(mouseYPosition, spring);

    return (
        <motion.div
            initial={{   
                opacity: 1,
                height: "1vw",
                width: "1vw",
                backgroundColor: "#1d1d1d0d",
            }}
            variants={variants}
            animate={cursorVariant}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                x: mouseX,
                y: mouseY,
                pointerEvents: 'none',
                zIndex: 9999,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: "100%",
            }}>
                <TextRevealLines>
                    {cursorText}
                </TextRevealLines>
        </motion.div>
    )
}
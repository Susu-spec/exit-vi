import useMouse from "@react-hook/mouse-position";
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useCursor } from "../../context/CursorProvider";


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
            x: mouseXPosition,
            y: mouseYPosition,
            transition: {
                type: "spring",
                mass: 0.6
            },
            translateX: '-50%',
            translateY: '-50%'
        },

        drag: {
            opacity: 1,
            backgroundColor: "#fff",
            color: "#000",
            height: "2.5vw",
            width: "2.5vw",
            fontSize: "0.5rem",
            x: mouseXPosition,
            y: mouseYPosition,
            translateX: '-50%',
            translateY: '-50%'
        },

        view: {
            opacity: 1,
            backgroundColor: "#fff",
            color: "#000",
            fontSize: "0.5rem",
            height: "2.5vw",
            width: "2.5vw",
            x: mouseXPosition,
            y: mouseYPosition,
            translateX: '-50%',
            translateY: '-50%'
        }
    }

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
    }

    return (
        <motion.div
            variants={variants}
            animate={cursorVariant}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                x: mouseXPosition,
                y: mouseYPosition,
                pointerEvents: 'none',
                zIndex: 9999,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: "100%",
                // mixBlendMode: "difference",
            }}>
                <span className="cursorText">
                    {cursorText}
                </span>
        </motion.div>
    )
}
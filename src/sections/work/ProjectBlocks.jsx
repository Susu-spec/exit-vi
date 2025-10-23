import { Box, Grid, Flex, useBreakpoint } from "@chakra-ui/react";
import HoverVideo from "../../components/shared/HoverVideo";
import { TbFlagExclamation } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import { TextRevealLines } from "../../components/shared/TextReveal";
import { useState } from "react";
import { useCursor } from "../../context/CursorProvider";
import PortfolioBlock from "./PortfolioBlock";

export default function ProjectBlocks() {
    const { setView, setDefault } = useCursor();

    return (
        <Grid
            className="module-blocks"
            onMouseEnter={() => {
                setView()
            }}
            onMouseLeave={() => {
                setDefault();
            }}
        >
            <Flex
                className="portfolio-container"
            >
                <PortfolioBlock
                    tags={["Oreo X Pacman", "AR Experience"]}
                    videoSrc="http://res.cloudinary.com/dm7vlpslq/video/upload/f_auto,q_auto/v1759642096/bheeicdi21w0hkxyqiby6vxovghp64qh2wan_qwmt7l.mp4"
                    poster="https://res.cloudinary.com/dgafp4dx4/image/upload/f_auto,q_auto/v1760014047/oreo-thumbnail_ahdxpv.jpg"
                    orientation="landscape"
                    textColor="text-white"
                />
                <PortfolioBlock
                    tags={["Doordash Summer of Dashpass", "Campaign"]}
                    videoSrc="https://res.cloudinary.com/dm7vlpslq/video/upload/f_auto,q_auto/v1759642676/YThAIwoXKB_576p_1744824072_ccmg6f.mp4"
                    poster="https://res.cloudinary.com/dgafp4dx4/image/upload/f_auto,q_auto/v1760014077/icecream-thumbnail_zytvtb.jpg"
                    orientation="portrait"
                    textColor="text-white"
                />
            </Flex>
             <Flex
                className="portfolio-container"
            >
                 <PortfolioBlock
                    tags={["Widlet"]} 
                    textColor="text-black"
                    orientation="portrait"
                    videoSrc="https://res.cloudinary.com/dm7vlpslq/video/upload/f_auto,q_auto/v1759642080/bheeicea8cwvkf21vcnbg8jhx3wo0wyb42im_q9yvuz.mp4"
                    poster="https://res.cloudinary.com/dgafp4dx4/image/upload/f_auto,q_auto/v1760014816/coin-thumbnail-new_o9njeo.jpg"
                />
                <PortfolioBlock
                    tags={["Powerade Mindzone", "VR Experience"]} 
                    textColor="text-white"
                    orientation="landscape"
                    videoSrc="https://res.cloudinary.com/dm7vlpslq/video/upload/f_auto,q_auto/v1759642089/bheeicea3wowr2ifyqckn5737cnu42mewpr1_a8wqzo.mp4"
                    poster="https://res.cloudinary.com/dgafp4dx4/image/upload/f_auto,q_auto/v1760014101/goggles_dzwjen.jpg"
                />
            </Flex>
        </Grid>
    )
}
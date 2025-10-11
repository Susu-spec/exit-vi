import { Box, Grid, Flex } from "@chakra-ui/react";
import HoverVideo from "../../components/shared/HoverVideo";
import { TbFlagExclamation } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import { TextRevealLines } from "../../components/shared/TextReveal";
import { useState } from "react";
import { useCursor } from "../../context/CursorProvider";

export default function ProjectBlocks() {
    const [isTextHovered, setIsTextHovered] = useState(false);
    const { setView, setDefault } = useCursor();

    return (
        <Grid
            columnGap="1vw"
            rowGap="1vw"
            paddingTop="4vw"
            paddingX="1vw"
            onMouseEnter={() => {
                setView()
            }}
            onMouseLeave={() => {
                setDefault();
            }}
        >
            <Grid
                alignItems="stretch"
                columnGap="1vw"
                rowGap="1vw"
                display="flex"
            >
                <div className="landscape home-video-container">
                    <HoverVideo
                        src="http://res.cloudinary.com/dm7vlpslq/video/upload/v1759642096/bheeicdi21w0hkxyqiby6vxovghp64qh2wan_qwmt7l.mp4"
                        poster="https://res.cloudinary.com/dgafp4dx4/image/upload/v1760014047/oreo-thumbnail_ahdxpv.jpg"
                    />
                </div>
                <div className="portrait home-video-container">
                    <HoverVideo
                        src="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642676/YThAIwoXKB_576p_1744824072_ccmg6f.mp4"
                        poster="https://res.cloudinary.com/dgafp4dx4/image/upload/v1760014077/icecream-thumbnail_zytvtb.jpg"
                    />
                </div>
            </Grid>
             <Grid
                alignItems="stretch"
                columnGap="1vw"
                rowGap="1vw"
                display="flex"
            >
                <div 
                    className="portrait home-video-container"
                    onMouseEnter={() => setIsTextHovered(true)}
                    onMouseLeave={() => setIsTextHovered(false)}
                >
                    <Flex
                        zIndex={5}
                        justifyContent="space-between"
                        alignItems="flex-start"
                        paddingTop="1vw"
                        paddingX="1vw"
                        position="absolute"
                    >
                        <Flex
                            alignItems="flex-start"
                        >
                            <Flex
                                rowGap=".6vw"
                                columnGap=".6vw"
                                justifyContent="flex-start"
                                alignItems="center"
                                width="15vw"
                            >
                                <TextRevealLines
                                    trigger={isTextHovered}
                                >
                                    Oreo Pacman
                                </TextRevealLines>
                            </Flex>
                        </Flex>
                    </Flex>
                    <HoverVideo
                        src="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642080/bheeicea8cwvkf21vcnbg8jhx3wo0wyb42im_q9yvuz.mp4"
                        poster="https://res.cloudinary.com/dgafp4dx4/image/upload/v1760014816/coin-thumbnail-new_o9njeo.jpg"
                    />
                </div>
                <div className="landscape home-video-container">
                    <HoverVideo
                        src="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642089/bheeicea3wowr2ifyqckn5737cnu42mewpr1_a8wqzo.mp4"
                        poster="https://res.cloudinary.com/dgafp4dx4/image/upload/v1760014101/goggles_dzwjen.jpg"
                    />
                </div>
            </Grid>
        </Grid>
    )
}
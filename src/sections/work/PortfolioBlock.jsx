import { Box, Flex, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { TextRevealLines } from "../../components/shared/TextReveal";
import HoverVideo from "../../components/shared/HoverVideo";
import { BiPlus, BiX } from "react-icons/bi";

const PortfolioBlock = ({ textColor, orientation, videoSrc, poster, tags }) => {
  const [isTextHovered, setIsTextHovered] = useState(false);

  const responsiveTextHovered = useBreakpointValue({
    base: true,
    lg: isTextHovered,
  });

  return (
    <div
      className={`${orientation} home-video-container`}
      onMouseEnter={() => setIsTextHovered(true)}
      onMouseLeave={() => setIsTextHovered(false)}
    >
      <Flex 
            justifyContent="space-between" 
            alignItems="center" 
            className={`${responsiveTextHovered ? 'full-opacity' : 'no-opacity'} work-tags-container`}
        >
            <Flex alignItems="flex-start">
                <div className="project-name-container">
                    <Box className={`${textColor} project-block-title`}>
                        {tags.map((tag, index) => (
                            <TextRevealLines 
                                trigger={responsiveTextHovered} 
                                className={index === 1 ? 'work-description' : 'work-tags-title'}>
                                {tag}
                            </TextRevealLines>
                        ))}
                    </Box>
                </div>
            </Flex>
            <div className="work-plus">
                <BiPlus className={`${textColor} `} size={20} />
            </div>
        </Flex>

        <HoverVideo src={videoSrc} poster={poster} />
    </div>
  );
};


export default PortfolioBlock;
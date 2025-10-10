import { Box, Flex } from "@chakra-ui/react";
import ProjectBlocks from "./ProjectBlocks";
import ScrollMarquee from "./ScrollMarquee";
import WorkSlider from "./WorkSlider";

export default function Work() {
    return (
        <Box as="section">
            <Flex
                paddingLeft="1vw"
                paddingRight="1vw"
                alignItems="flex-start"
                justifyContent="space-between"
                width="100%"
            >
                <h2
                    className="text work-title">work</h2>
                <Flex
                    alignItems="flex-end"
                    flexFlow="column"
                    marginTop=".8vw"
                    justifyContent="flex-start"
                >
                    
                    <p className="text work-h4">Selected Work</p>
                    <p className="text work-h4 gray">(22-25)</p>
                </Flex>
            </Flex>

            <WorkSlider />
            <ProjectBlocks />
            <ScrollMarquee />
        </Box>
    )
}
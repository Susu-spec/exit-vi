import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import HoverVideo from "../../components/shared/HoverVideo";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Expertise() {
    const fixedWidth = useBreakpointValue({
        base: "calc(80% - 0vw)",
        lg:  "calc(33.3333% - 0.666667vw)",
    });

    const perPage = useBreakpointValue({
        base: 1,
        lg: 3
    });

    const pagination = useBreakpointValue({
        base: true,
        lg: false
    });

    const gap = useBreakpointValue({
        base: "2vw",
        lg: "1vw"
    })

    return (
        <Box
            columnGap={{
                base: "2vw",
                lg: "1vw"
            }}
            rowGap={{
                base: "2vw",
                lg: "1vw"
            }}
            paddingX={{
                base: "2vw",
                lg: "1vw"
            }}
            paddingBottom={{
                base: "12vw",
                lg: "8vw"
            }}
            display="flex"
            flexDir="column"
        >
            <h4 className="studio-h4">
                Expertise & Capabilities
            </h4>
            <Splide
                options={{
                    type: "slide",
                    perPage: perPage,
                    perMove: 1,
                    gap: gap,
                    padding: 0,
                    width: "100%",
                    fixedWidth: fixedWidth,
                    drag: true, 
                    arrows: false,
                    pagination: pagination,
                    focus: 0,
                    trimSpace: false,
                    breakpoints: {
                        1024: {
                            perPage: 2,
                        },
                        640: {
                            perPage: 1,
                        }
                    }
                }}
            >
                <SplideSlide>
                    <Box className="expertise-container blue">
                        <Box className="expertise-image-container">
                            <Box borderRadius=".5rem">
                                <HoverVideo
                                    src="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642101/bhefcffg2eta2ry3k0f67vgol44t62chntda_hksyby.mp4"
                                    poster="https://res.cloudinary.com/dgafp4dx4/image/upload/v1760040301/expertise-blue_xxgp3i.jpg"
                                />
                            </Box>
                            <h3 className="studio-h4 expertise-h3">Technology</h3>
                            <Flex width="100%">
                                <Box
                                    columnGap=".3vw"
                                    rowGap=".3vw"
                                    flexFlow="column"
                                    justifyContent="flex-start"
                                    width="50%"
                                    display="flex"
                                >
                                    <h3 className="studio-h4 experise-p">Spatial Computing (AR, VR, XR)</h3>
                                    <h3 className="studio-h4 experise-p">AI Tools & Experiences</h3>
                                    <h3 className="studio-h4 experise-p">Web Development</h3>
                                    <h3 className="studio-h4 experise-p">WebGL Experiences</h3>
                                </Box>
                                <Box
                                    columnGap=".3vw"
                                    rowGap=".3vw"
                                    flexFlow="column"
                                    justifyContent="flex-start"
                                    width="50%"
                                    display="flex"
                                >
                                    <h3 className="studio-h4 experise-p">Web3 / Blockchain</h3>
                                    <h3 className="studio-h4 experise-p">Game Development</h3>
                                    <h3 className="studio-h4 experise-p">Rapid Prototyping</h3>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </SplideSlide>
                
                <SplideSlide>
                    <Box className="expertise-container magenta">
                        <Box className="expertise-image-container">
                            <Box borderRadius=".5rem">
                                <HoverVideo
                                    src="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642090/bheeicecyrhzyi3dd26lfivkab97k907q706_qzzyps.mp4"
                                    poster="https://res.cloudinary.com/dgafp4dx4/image/upload/v1760040321/expertise-magenta_i3ftcq.jpg"
                                />
                            </Box>
                            <h3 className="studio-h4 expertise-h3">Design</h3>
                            <Flex width="100%">
                                <Box
                                    columnGap=".3vw"
                                    rowGap=".3vw"
                                    flexFlow="column"
                                    justifyContent="flex-start"
                                    width="50%"
                                    display="flex"
                                >
                                    <h3 className="studio-h4 experise-p">Creative Direction</h3>
                                    <h3 className="studio-h4 experise-p">Art Direction</h3>
                                    <h3 className="studio-h4 experise-p">User Experience Design</h3>
                                    <h3 className="studio-h4 experise-p">User Interface Design</h3>
                                </Box>
                                <Box
                                    columnGap=".3vw"
                                    rowGap=".3vw"
                                    flexFlow="column"
                                    justifyContent="flex-start"
                                    width="50%"
                                    display="flex"
                                >
                                    <h3 className="studio-h4 experise-p">Brand Identity</h3>
                                    <h3 className="studio-h4 experise-p">Design Systems</h3>
                                    <h3 className="studio-h4 experise-p">Concept Design</h3>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </SplideSlide>
                
                <SplideSlide>
                    <Box className="expertise-container green">
                        <Box className="expertise-image-container">
                            <Box borderRadius=".5rem">
                                <HoverVideo
                                    src="https://res.cloudinary.com/dm7vlpslq/video/upload/v1759642090/bheeiceccip4dtalzn188e4w87papbecrhou_an9son.mp4"
                                    poster="https://res.cloudinary.com/dgafp4dx4/image/upload/v1760040348/expertise-green_o0zxzj.jpg"
                                />
                            </Box>
                            <h3 className="studio-h4 expertise-h3">Motion & CGI</h3>
                            <Flex width="100%">
                                <Box
                                    columnGap=".3vw"
                                    rowGap=".3vw"
                                    flexFlow="column"
                                    justifyContent="flex-start"
                                    width="50%"
                                    display="flex"
                                >
                                    <h3 className="studio-h4 experise-p">2D & 3D Animation</h3>
                                    <h3 className="studio-h4 experise-p">2D & 3D Illustration</h3>
                                    <h3 className="studio-h4 experise-p">Concept Art</h3>
                                    <h3 className="studio-h4 experise-p">FOOH</h3>
                                </Box>
                                <Box
                                    columnGap=".3vw"
                                    rowGap=".3vw"
                                    flexFlow="column"
                                    justifyContent="flex-start"
                                    width="50%"
                                    display="flex"
                                >
                                    <h3 className="studio-h4 experise-p">Character Design</h3>
                                    <h3 className="studio-h4 experise-p">Motion Identity</h3>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </SplideSlide>
            </Splide>
        </Box>
    )
}
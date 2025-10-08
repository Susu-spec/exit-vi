import { Box, Flex } from "@chakra-ui/react";
import { workItems } from "../../lib/data";
import InteractiveMarquee from "../../components/shared/InteractiveMarquee";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default function Work() {
    return (
        <Box>
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
            <Splide
                options={{
                    type: "loop",
                    drag: "free",
                    speed: 6000,
                    autoWidth: true,
                    autoplay: false,
                    perPage: "auto",
                    easing: "linear",
                    arrows: false,
                    pagination: false,
                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        speed: 1,
                        rewind: true,
                        autoStart: true,
                    },
                    interval: 0,
                }}
                extensions={{ AutoScroll }}>
                    {workItems.map((item, i) => (
                        <SplideSlide
                            key={i}
                        >
                            <div className="work-title gray uppercase mr-drag">
                                {item}
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
        </Box>
    )
}
import { Box, Flex, Text, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { brandsData } from "../../constants/data";
import BrandSwiper from "./BrandSwiper";
import { useEffect, useRef } from "react";

export default function Brands() {
    const [isSmallScreen] = useMediaQuery('(max-width: 991px)');

    const gap = useBreakpointValue({
        base: "2vw",
        lg: "1vw"
    });

    const swiperRef = useRef(null);

    useEffect(() => {
        const el = swiperRef.current?.el;
        if (!el) return;

        const observer = new IntersectionObserver(
        ([entry]) => {
            const swiper = swiperRef.current?.swiper;
            if (!swiper?.autoplay) return;

            if (entry.isIntersecting) {
            swiper.autoplay.start();
            } else {
            swiper.autoplay.stop();
            }
        },
        { threshold: 0.2 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Flex
            as="section"
            columnGap={gap}
            rowGap={gap}
            flexFlow="column"
            paddingX={gap}
            paddingTop={{
                base: "6vw",
                lg: "0"
            }}
        >
            <Text
                fontSize={{
                    base: "8vw",
                    md: "5vw",
                    lg: "3.4vw"
                }}
                lineHeight={{
                    base: "120%",
                    lg: "100%"
                }}
                className="hero brand-h3">Trusted by the world's leading brands</Text>
                {isSmallScreen ?
                    <Swiper
                        ref={swiperRef}
                        modules={[Autoplay]}
                        direction="vertical"
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        autoHeight={true}
                        speed={600}
                        slidesPerView={1}
                        spaceBetween={0}
                        allowTouchMove={true}
                        className="brands-block-container"
                        lazyPreloadPrevNext={true}
                    >
                        {brandsData.flat().map((brand, index) => (
                            <SwiperSlide key={index}>
                                <BrandSwiper brand={brand} />
                            </SwiperSlide>
                        ))}
                    </Swiper> :
                     <Flex
                        columnGap="1vw"
                        rowGap="1vw"
                        flexFlow="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        width="100%"
                        marginTop="2vw"
                    >
                        {brandsData.map((column, index) => (
                            <Swiper
                                key={index}
                                ref={swiperRef}
                                modules={[Autoplay]}
                                direction="vertical"
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                }}
                                speed={600}
                                slidesPerView={1}
                                spaceBetween={0}
                                allowTouchMove={true}
                                className="brands-block-container"
                                lazyPreloadPrevNext={true}
                            >
                                {column.map((brand, index) => (
                                    <SwiperSlide
                                        key={index}
                                    >
                                        <BrandSwiper brand={brand} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ))}

                    </Flex>
                }
           
        </Flex>
    )
}
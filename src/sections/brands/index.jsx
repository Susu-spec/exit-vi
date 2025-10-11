import { Box, Flex } from "@chakra-ui/react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { brandsData } from "../../constants/data";
import BrandSwiper from "./BrandSwiper";

export default function Brands() {
    return (
        <Flex
            as="section"
            columnGap="1vw"
            rowGap="1vw"
            flexFlow="column"
            paddingX="1vw"
        >
            <h3 className="hero brand-h3">Trusted by the world's leading brands</h3>
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
        </Flex>
    )
}
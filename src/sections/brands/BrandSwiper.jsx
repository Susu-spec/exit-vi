import { Box } from "@chakra-ui/react";
import { useState } from "react";

export default function BrandSwiper({ brand }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box
            className="single-brand-container"
            position="relative"
            height="168px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            cursor="pointer"
        >
            <img
                src={brand.logoDefault}
                alt={brand.name}
                className="single-brand-logo active"
                style={{
                    display: isHovered ? 'none' : 'block',
                    maxWidth: '80%',
                    maxHeight: '60%',
                    objectFit: 'contain'
                }}
            />

            <img
                src={brand.logoHover}
                alt={brand.name}
                className="single-brand-logo hover"
                style={{
                    display: isHovered ? 'block' : 'none',
                    maxWidth: '80%',
                    maxHeight: '60%',
                    objectFit: 'contain'
                }}
            />

            <Box
                className={`single-brand-hover ${brand.hoverClass}`}
                position="absolute"
                width={isHovered ? "100%" : "40%"}
                height={isHovered ? "100%" : "40%"}
                opacity={isHovered ? 1 : 0}
                transition="all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                zIndex={-1}
            />
        </Box>
    );
}
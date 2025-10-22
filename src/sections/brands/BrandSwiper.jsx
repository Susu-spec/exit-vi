import { Box, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

export default function BrandSwiper({ brand }) {
    const [isSmallScreen] = useMediaQuery('(max-width: 991px)');
    const [isHovered, setIsHovered] = useState(false);
    const height = useBreakpointValue({
        base: "100%",
        sm: "31.875rem",
        md: "31.875rem",
        lg: "15rem"
    })

    const background = brand?.name === "Saatchi & Saatchi" ? 
        "saatchi-saatchi" :
        brand?.name?.toLowerCase();

    return (
        <Box
            className={`single-brand-container ${background}`}
            position="relative"
            minHeight={height}
            display="flex"
            alignItems="center"
            justifyContent="center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!isSmallScreen &&
                <img
                    src={brand.logoDefault}
                    alt={brand.name}
                    className="single-brand-logo active"
                    style={{
                        display: isHovered ? 'none' : 'block',
                        maxWidth: '80%',
                        objectFit: 'contain'
                    }}
                />}

                <img
                    src={brand.logoHover}
                    alt={brand.name}
                    className="single-brand-logo hover"
                    style={{
                        display: isSmallScreen ? "block" : isHovered ? 'block' : 'none',
                        maxWidth: '80%',
                        height: "100%",
                        objectFit: 'contain',
                        zIndex: 2
                    }}

                />

            <Box
                className={`single-brand-hover ${brand.hoverClass}`}
                position="absolute"
                width={isHovered ? "100%" : "40%"}
                height={isHovered ? "100%" : "40%"}
                opacity={isHovered ? 1 : 0}
                transition="all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                zIndex={1}
            />
        </Box>
    );
}
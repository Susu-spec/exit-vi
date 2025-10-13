import { Box, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

export default function BrandSwiper({ brand }) {
    const [isHovered, setIsHovered] = useState(false);
    const height = useBreakpointValue({
        base: "16.25rem",
        lg: "10.75rem"
    })
    return (
        <Box
            className="single-brand-container"
            position="relative"
            height={height}
            display="flex"
            alignItems="center"
            justifyContent="center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={brand.logoDefault}
                alt={brand.name}
                className="single-brand-logo active"
                style={{
                    display: isHovered ? 'none' : 'block',
                    maxWidth: '80%',
                    height: '172px',
                    // maxHeight: '60%',
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
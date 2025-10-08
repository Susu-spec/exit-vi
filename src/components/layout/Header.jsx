import { Box } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box as="header" role="banner" className="header">
            <div className="full-video w-embed">
                <Box id="vidzflow-wrapper" aspectRatio={"2/1"} >
                    <iframe 
                        width="100%" 
                        height="100%"
                        src="https://app.vidzflow.com/v/ySiO1dtsJZ?dq=source&ap=true&muted=true&loop=true&ctp=false&bv=false&piv=false&playsinline=true&bc=%234E5FFD&controls=false"
                        title="Vidzflow video player"
                        allowFullScreen
                        loading="lazy"
                        style={{ pointerEvents: 'none' }}
                    />
                </Box>
            </div>
        </Box>
    )
}
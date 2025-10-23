import { Box } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box as="header" role="banner" className="header module-hero">
            <div className="full-video w-embed">
                <Box id="sizzle-wrapper" aspectRatio={"2/1"} >
                    <video
                        width="100%"
                        height="100%"
                        loading="lazy"
                        src="https://res.cloudinary.com/dm7vlpslq/video/upload/f_auto,q_auto/v1759604931/formandfunsizzle_k1h5n4.mp4"
                        loop={true}
                        playsInline
                        autoPlay={true}
                        muted
                        style={{ borderRadius: ".5rem" }}
                    />
                </Box>
            </div>
        </Box>
    )
}
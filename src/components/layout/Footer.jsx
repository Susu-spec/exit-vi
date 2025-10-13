import { Box, Grid } from "@chakra-ui/react";
import Typewriter from "../shared/Typewriter";

export default function Footer() {
    return (
        <Box
            as="footer"
            padding={{
                base: "12vw 2vw 4vw",
                lg: "6vw 1vw 1vw"
            }}>
            <Grid
                gridColumnGap={0}
                gridRowGap={{
                    base: "6vw",
                    lg: "2vw"
                }}
                gridTemplateRows="auto"
                gridAutoColumns="auto"
                marginBottom={{
                    base: "12vw",
                    lg: "10vw"
                }}
                padding={0}
            >
                <Box className="w-node_01">
                    <img
                        src="https://cdn.prod.website-files.com/6403ade6e2cfd9c42fe587b0/673e7d618507b496c9abfece_Studio-Logo.svg"
                        loading="lazy"
                        alt="Form+Fun Studio Logo"
                    />
                </Box>
                <Box className="w-node_02 footer-links-container">
                    <p className="footer-links nav-info gray">
                        Menu
                    </p>
                    <a href="#" className="footer-links nav-info">
                        Studio
                    </a>
                    <a href="#" className="footer-links nav-info">
                        Contact
                    </a>
                    <a href="#" className="footer-links nav-info">
                        Work
                    </a>
                </Box>
                <Box className="w-node_03 footer-links-container">
                    <p className="footer-links nav-info gray">
                        Social
                    </p>
                    <a href="#" className="footer-links nav-info">
                        Instagram
                    </a>
                    <a href="#" className="footer-links nav-info">
                        Linkedin
                    </a>
                    <a href="#" className="footer-links nav-info">
                        Behance
                    </a>
                </Box>
                <Box className="w-node_04 footer-links-container">
                    <p className="footer-links nav-info gray">
                        Business enquiries
                    </p>
                    <a href="#" className="footer-links nav-info">
                        hi@exitvistudio.co
                    </a>
                </Box>
                <Box className="w-node_05 footer-links-container">
                    <p className="footer-links nav-info gray">
                        Join our team
                    </p>
                    <a href="#" className="footer-links nav-info">
                        apply@exitvi.co
                    </a>
                </Box>
            </Grid>


            <Typewriter
                text="ExitVi"
                fontSize={{
                    base: "7.75rem",
                    lg: "21.75rem"
                }}
            />
        </Box>
    )
}
import { Box, Flex, Grid, Link } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <Grid 
            container 
            as="nav" 
            role="navigation" 
            className="navbar"
            templateColumns="repeat(4, 1fr)"
            templateRows="auto"
        >
            <Flex 
                alignItems="flex-start"
                justifyContent="center"
                flexDirection="column"
            >
                <Link href="/" aria-current="page" className="nav-logo">
                    <img 
                        loading="lazy" 
                        src="https://cdn.prod.website-files.com/6403ade6e2cfd9c42fe587b0/673e7d618507b496c9abfece_Studio-Logo.svg" 
                    />
                </Link>
            </Flex>
            <Flex 
                alignItems="flex-start"
                justifyContent="center"
                flexDirection="column"
            >
                <Box
                    flexFlow="row"
                    position="relative"
                    overflow="hidden"
                    width="100%"
                    display={{
                        base: "none",
                        lg: "block"
                    }}
                >
                    <p className="nav-info">Creative Technology Studio</p>
                </Box>
            </Flex>
            <Flex 
                alignItems="flex-start"
                justifyContent="center"
                flexDirection="column"
            >
                <Box
                    flexFlow="row"
                    position="relative"
                    overflow="hidden"
                    width="100%"
                >
                    <p className="nav-info" style={{ display: "none" }}>Creative Technology Studio</p>
                </Box>
            </Flex>
            <Flex 
                alignItems="flex-end"
                justifyContent="center"
                flexDirection="column"
            >
                <Box
                    columnGap={{
                        base: "1.6vw",
                        lg: "1vw"
                    }}
                    display="flex"
                >
                    <Link href="#" className="nav-link">
                        Studio
                    </Link>
                    <Link href="#" className="nav-link">
                        Contact
                    </Link>
                    <Link href="#" className="nav-link">
                        Work
                    </Link>
                </Box>
            </Flex>
        </Grid>
    )
}
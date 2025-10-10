import { Box } from "@chakra-ui/react";
import Awards from "./Awards";
import Expertise from "./Expertise";

export default function Services() {
    return (
        <Box as="section">
            <Expertise />
            <Awards />
        </Box>
    )
}
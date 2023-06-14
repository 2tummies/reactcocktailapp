import { Heading, Text, Box } from "@chakra-ui/react"

const Header = () => {
    return (
        <Box textAlign="center">
            <Heading as="h1" fontFamily="monospace">Cocktail Collection</Heading>
            <Text fontSize="lg" mb="10">and what goes in them</Text>
            <Text fontSize="sm">Author: Preston Roe</Text>
        </Box>
    )
}

export default Header
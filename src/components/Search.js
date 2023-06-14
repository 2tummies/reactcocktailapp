import {useState, useMemo, useCallback} from 'react'
import { Input, Flex, Box, Text, Tooltip } from "@chakra-ui/react"
import { InfoIcon } from '@chakra-ui/icons'
import { debounce } from 'lodash'

const Search = ({onSearchBarChange}) => {
    const [nameSearchTerm, setNameSearchTerm] = useState('')
    const [ingredientSearchTerm, setIngredientSearchTerm] = useState('')

    const onParamChange = useCallback((name, ingredient) => {
            onSearchBarChange(name, ingredient)
        }, [onSearchBarChange])

    const debouncedNameSearchBarChange = useMemo(() => debounce(onParamChange, 500), [onParamChange])

    const onNameInputChange = (searchParam) => {
        setNameSearchTerm(searchParam)
        debouncedNameSearchBarChange(searchParam, ingredientSearchTerm)
    }

    const onIngredientInputChange = (searchParam) => {
        setIngredientSearchTerm(searchParam)
        debouncedNameSearchBarChange(nameSearchTerm, searchParam)
    }


    return (
        <Flex my="5" mx="10">
            <Box w="50%" p="0 5px 0 25px">
                <Text fontSize="xl" fontWeight="bold" textAlign="center">Search by Name</Text>
                <Input type="text" pr="5" backgroundColor="white" value={nameSearchTerm} onChange={(e) => {onNameInputChange(e.target.value)}} />
            </Box>
            <Box w="50%" p="0 25px 0 5px">
                <Flex alignItems="center" justifyContent="center">
                    <Text fontSize="xl" fontWeight="bold" mr="2">Search by Ingredient </Text>
                    <Tooltip label="For multiple ingredients, separate with a space and a comma (i.e. vodka, rum)"><InfoIcon /></Tooltip>
                </Flex>
                <Input type="text" pl="5" backgroundColor="white" value={ingredientSearchTerm} onChange={(e) => {onIngredientInputChange(e.target.value)}} />
            </Box>
        </Flex>
    )
}

export default Search
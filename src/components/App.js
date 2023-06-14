import { useState } from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import customTheme from '../customTheme'

// components
import Search from './Search'
import DrinkList from './DrinkList'
import DefaultText from './DefaultText'
import NoResultText from './NoResultText'
import Header from './Header'

// api
import apiNinja from "../api/apiNinja"

const App = () => {
    const [drinks, setDrinks] = useState([])
    const [showDefaultText, setShowDefaultText] = useState(true)
    const [showNoResultText, setShowNoResultText] = useState(false)
    // const [selectedDrink, setSelectedDrink] = useState(null)

    const getDrinksFromSearch = async (name, ingredient) => {

        if (name || ingredient) {
            const response = await apiNinja.get('/cocktail', {
                params: {
                    name: name,
                    ingredients: ingredient
                }
            })
            setShowDefaultText(false)
            if (response.data.length) {
                setDrinks(response.data)
                setShowNoResultText(false)
            } else {
                setShowNoResultText(true)
            }
        } else {
            setShowDefaultText(true)
            setShowNoResultText(false)
        }
    }

    return (
        <>
            <ChakraProvider theme={customTheme}>
                <Header />
                <Search onSearchBarChange={getDrinksFromSearch} />
                {
                    showDefaultText ? <DefaultText /> :
                    showNoResultText ? <NoResultText /> :
                    <Box>
                        <DrinkList drinks={drinks} />
                    </Box>
                }
            </ChakraProvider>
        </>
    )

}

export default App
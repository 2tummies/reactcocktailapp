import DrinkItem from './DrinkItem'
import { SimpleGrid, Flex } from '@chakra-ui/react'
import RandomDrinkButton from './RandomDrinkButton'

const DrinkList = ({drinks}) => {
    const drinkArray = drinks.map((drink, id) => {
        return <DrinkItem drink={drink} key={id}></DrinkItem>
    })

    return (
        <Flex justifyContent="center" flexDirection="column" alignItems="center">
            <RandomDrinkButton drinks={drinks} />
            <SimpleGrid columns={3} spacing={10} justifyItems="center">
                {drinkArray}
            </SimpleGrid>
        </Flex>
    )
}

export default DrinkList
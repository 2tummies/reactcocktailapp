import DrinkIngredient from './DrinkIngredient'
import { Button, VStack, Text, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody } from '@chakra-ui/react'

const RandomDrinkButton = ({ drinks }) => {
    const {isOpen, onClose, onToggle} = useDisclosure()

    if (drinks.length !== 0 && drinks !== null) {
        const randomDrink = drinks[Math.floor(Math.random() * drinks.length)]

        const ingredientList = randomDrink.ingredients.map((ingredient, id) => {
            return (
                <DrinkIngredient ingredient={ingredient} key={id} drinkName={randomDrink}/>
            )
        })

        return (
            <>
                <Button onClick={onToggle} w="50%" mb="25" borderRadius="1rem" backgroundColor="#d1d1d1" color="#6e0000" _hover={{backgroundColor: "#b3b3b3"}}>
                    Click here to pick a random drink from this list!
                </Button>
                <Drawer onClose={onClose} isOpen={isOpen} size={'sm'}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerBody>
                            <Text fontSize="3xl" fontWeight="bold" textTransform="uppercase" textAlign="center" my="8">{randomDrink.name}</Text>
                            <VStack>
                                {ingredientList}
                            </VStack>
                            <Text my="6" fontSize="lg" textAlign="center">{randomDrink.instructions}</Text>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </>
        )
    }
}

export default RandomDrinkButton
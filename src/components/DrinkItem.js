import { Text, Button, Drawer, DrawerBody, VStack, useDisclosure, DrawerContent, DrawerOverlay } from '@chakra-ui/react'
import DrinkIngredient from './DrinkIngredient'

const DrinkItem = ({ drink }) => {

    const {isOpen, onClose, onToggle} = useDisclosure()

    const ingredientList = drink.ingredients.map((ingredient, id) => {
            return (
                <DrinkIngredient ingredient={ingredient} key={id} drinkName={drink} />
            )
        })

    return (
        <>
            <Button onClick={onToggle} borderRadius=".5rem" backgroundColor="#0037a8" color="#e6eeff" _hover={{backgroundColor: "#001d59"}}>
                <Text textTransform="uppercase">{drink.name}</Text>
            </Button>
            <Drawer onClose={onClose} isOpen={isOpen} size={'sm'}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody>
                        <Text fontSize="3xl" fontWeight="bold" textTransform="uppercase" textAlign="center" my="5">{drink.name}</Text>
                        <VStack>
                            {ingredientList}
                        </VStack>
                        <Text my="6" fontSize="lg" textAlign="center">{drink.instructions}</Text>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrinkItem
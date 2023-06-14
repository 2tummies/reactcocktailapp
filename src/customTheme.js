import {extendTheme} from '@chakra-ui/react'

const customConfig = {
    styles: {
        global: {
            body: {
                bg: '#e6eeff',
                fontFamily: 'monospace'
            }
        }
    }
}

const customTheme = extendTheme(customConfig)

export default customTheme
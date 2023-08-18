import { defineStyleConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'


const Button = defineStyleConfig({
    baseStyle: {
        margintop: 3,
        width: 131,
    },
})

const Text = defineStyleConfig({
    variants: {
        text3: {
            fontWeight: 'bold',
            fontSize: '1.3em',
        },
        text1: {
            fontWeight: 'bold',
            fontSize: '0.97em'
        },
        text2: {
            fontWeight: 'bold',
            fontSize: '1.07em'
        }
    },
})

const theme = extendTheme({
    components: {
        Button,
        Text,
    },
})

export default theme
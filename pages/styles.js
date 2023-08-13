import { defineStyleConfig } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'


const Button = defineStyleConfig({
    baseStyle: {
        margintop: 3,
        width: 131,
        fontWeight: 'bold',
    },
})

const Text = defineStyleConfig({
    variants: {
        head: {
            fontWeight: 'bold',
            fontSize: '1.3em',
        },
        ab: {
            fontWeight: 'bold',
            fontSize: '0.97em'
        },
        res: {
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
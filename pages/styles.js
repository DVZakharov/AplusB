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
        head: {
            fontweight: 'bold',
            fontsize: '1.2em',
        },
        other: {
            fontWeight: 'bold',
            fontSize: '0.8em'
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
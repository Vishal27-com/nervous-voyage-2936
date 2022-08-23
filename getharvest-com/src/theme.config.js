import { extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontFamily:['Montserrat', 'sans-serif'], 
        fontFamily:['Poppins', 'sans-serif']
      },
    }
}     
})

export default theme
import { Text,TextProps } from "@chakra-ui/react"
import useStylesHook from "../hooks/useStyles"


interface headerProps{
    hVariant?: 'rich' |'link'  | 'neutral' ,
    light?:boolean
}

interface ChakraHeaderProps extends TextProps,headerProps{}

const ChakraText =(props:ChakraHeaderProps)=>{
    
    const {hVariant,light,children,...rest} = props
    
    const stylesHook = useStylesHook()


    const styles = hVariant? {
        fontSize : hVariant==='rich'? '14px': hVariant==='link'?'16x':'14px',
        color:hVariant==='link'? stylesHook.neut600: hVariant==='neutral'?  stylesHook.neut700 :stylesHook.pry
        
    }:{}


    return(


        <Text {...styles} {...rest}>
            {children}
        </Text>

    )
}


export default ChakraText;
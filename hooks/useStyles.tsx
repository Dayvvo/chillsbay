import { useColorModeValue } from "@chakra-ui/react"



const useStylesHook = ()=>useColorModeValue(
        
        {
            pry: 'var(--pry)',
            sec1: 'var(--sec1)',
            sec2: 'var(--sec2)',
            sec3: 'var(--sec3)',

            neut700: 'var(--neut700)',
            neut600: 'var(--neut600)',
            neut500: 'var(--neut500)',
            neut400: 'var(--neut400)',
            neut300: 'var(--neut300)',
            neut200: 'var(--neut200)',
            neut100: 'var(--neut100)',

            shadow1:'0px 2px 12px rgba(38, 47, 92, 0.06)',
            shadow2:'0px 12px 30px rgba(38, 47, 92, 0.04)',
            shadow3:'0px 22px 54px rgba(18, 25, 49, 0.08)',
          
            ill1:'#0945B9',
            ill2:'#8AAFEB',
            ill3:'#7694CD',

            border1: '1px solid #E4E7EC'
          

        }
    ,    
    {
        pry: 'var(--pry)',
        sec1: 'var(--sec1)',
        sec2: 'var(--pry2)',
        sec3: 'var(--pry3)',

        neut700: 'var(--neut700)',
        neut600: 'var(--neut600)',
        neut500: 'var(--neut500)',
        neut400: 'var(--neut400)',
        neut300: 'var(--neut300)',
        neut200: 'var(--neut200)',
        neut100: 'var(--neut100)',

        shadow1:'0px 2px 12px rgba(38, 47, 92, 0.06)',
        shadow2:'0px 12px 30px rgba(38, 47, 92, 0.04)',
        shadow3:'0px 22px 54px rgba(18, 25, 49, 0.08)',
      
        ill1:'#0945B9',
        ill2:'#8AAFEB',
        ill3:'#7694CD',
      
        border1: '1px solid #E4E7EC'

    }
)



    

    
    






export default useStylesHook
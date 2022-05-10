import { ChakraProvider,  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false)
  }, [])

  if(isServer) return null;

  return (
    <ChakraProvider >
            <Component {...pageProps} />
    </ChakraProvider>
  )
}


export default MyApp
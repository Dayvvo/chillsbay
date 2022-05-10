import {  Box, Tab, TabList, TabPanel, TabPanels, Tabs, Flex, Center, SimpleGrid,Image  } from "@chakra-ui/react"
import useStyleHooks from '../../hooks/useStyles';
import Header from '../../components/Header';
import { InputGroup } from "@chakra-ui/react";
import { InputLeftElement } from "@chakra-ui/react";
import {FiSearch} from 'react-icons/fi'
import { Input } from "@chakra-ui/react";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiHeartPulseLine } from "react-icons/ri";
import ChakraButton from "../../components/ChakraButton";

const Hero = ()=>{
    const styles = useStyleHooks();

    return( 

        <>

            <Tabs position='relative'>
                <Flex px={['1em','1.5em','3em','5em']} position='absolute' h='full' left={0} top={0}  align='center'>
                    <Box  bg={styles.neut300} minW={{lg:'540px'}}  borderRadius={'8px'} p='1.2em'>

                        <Header hVariant='h2'>  
                            Find amazing things to do. 
                        </Header>
                        <Header hVariant="h2">
                            Anytime, anywhere in Lagos. 
                        </Header>

                        <InputGroup mt='0.8em' bg='white' h='40px'>
                            <InputLeftElement pointerEvents={'none'}>
                                <FiSearch fontSize={'13px'}/>
                            </InputLeftElement>
                            <Input type='text' placeholder='Lekki, Gbagbada, Oshodi' />
                        </InputGroup>

                        <Flex justify={'space-between'}>

                            <InputGroup mt='0.8em' borderRadius={'8px'} flex={0.2} bg='white' h='40px'>
                                <InputLeftElement pointerEvents={'none'}>
                                    <AiOutlineCalendar fontSize={'15px'}/>
                                </InputLeftElement>
                                <Input px={2}  type='date' fontSize='12px' placeholder='Date' />
                            </InputGroup>


                            <InputGroup mt='0.8em' borderRadius={'8px'} flex={0.7} bg='white' maxW={'320px'} h='40px'>
                                <InputLeftElement pointerEvents={'none'}>
                                    <RiHeartPulseLine fontSize={'15px'}/>
                                </InputLeftElement>
                                <Input type='text' placeholder='Surfing, parties/restaurant' />
                            </InputGroup>

                        </Flex>


                        <Flex justify={'flex-end'}>

                            <ChakraButton btnVariant='large'></ChakraButton>

                        </Flex>

                    </Box>
                </Flex>
                
                <Box position='absolute' bottom='0' left={0} display='flex' justifyContent='center'className='absoluteDiv'  width='100%'>
                
                    <TabList fontSize='8px'  py={'2em'}>
                        {[1,2,3].map(int=>
                            <Tab   fontSize='1px' color='transparent'
                            key={int}
                            marginX={'0.6em'}
                            borderRadius='50%'
                            bg={styles.neut500} 
                            _selected={{bg:styles.neut700,transform:'scale(1.2)'}}
                            > 
                                a 
                            </Tab>
                        )
                        }
                    </TabList>
                </Box>

                <TabPanels padding={0}>
                        <TabPanel padding={0}>
                            <Box bg='url("hero.png")' h={['400px','450px','500px']}></Box>
                        </TabPanel>
                        <TabPanel padding={0}>
                            <Box bg='url("hero.png")' h={['400px','450px','500px']}></Box>
                        </TabPanel>
                        <TabPanel padding={0}>
                            <Box bg='url("hero.png")' h={['400px','450px','500px']}></Box>
                        </TabPanel>
                </TabPanels>
            </Tabs>


            <Box>
                <Center py='2.5em'> 
                    <Header hVariant="h2">  What are you in the mood for? </Header>
                </Center>


                <SimpleGrid px={'2em'}  columns={[1,2,3,5]} spacingY={['2em']} >

                    {['eat','drink','events','club','reacreation'].map((value,index)=> 
                        <Box key={index}>
                            <Box minH={'400px'} bgSize={'cover'} bg={`url("/assets/column${index+1}.png")`} >
                            </Box>       
                            <Center mt='0.8em'> <Header light hVariant="h4"> {value.toUpperCase()} </Header> </Center>    
                        </Box>
                    )}  

                </SimpleGrid>

            </Box>
        
        </>

    )
}

export default Hero
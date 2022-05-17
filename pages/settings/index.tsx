import Navbar from '../../screens/sections/nav'
import Footer from '../../screens/sections/footer'
import { Box, Container, FormControl, Input } from '@chakra-ui/react';
import Header from '../../components/Header';
import Text from '../../components/Text';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import useStylesHook from '../../hooks/useStyles';
import Reservations from '../../screens/Settings/reservations';
import Saved from '../../screens/Settings/saved';
import Payment from '../../screens/Settings/payment';
import ChakraButton from '../../components/ChakraButton';


const Settings = ()=>{

    const styles=  useStylesHook();
    return(
        <>

            <Navbar/>

            <Box
            >  

                <Header hVariant='h5'
                borderBottom={'1px solid #C4C4C4 '}
                px={{base:'1.5em', md:'3em', lg:'10em'}}
                pt={'0.5em'}
                pb={'1em'}
                >
                    Tunde Chukwu
                </Header>
                
                <Tabs orientation='vertical' 
                px={{base:'1.5em', md:'3em', lg:'10em'}}
                py={'1.2em'}
                >
                    <TabList borderLeft={0}>
                        {['Reservations','Saved places','Account details','Payment methods'].map((tab,index)=>
                        
                            <Tab fontSize={'15px'} p={'0.5em 1em'} justifyContent='flex-start'  
                            minW={{md:'200px'}} key={index} _selected={{color:styles.neut700,fontWeight:700}} >
                                {tab}
                            </Tab>
                        
                        )}
                    </TabList>

                    <TabPanels >

                        <TabPanel>
                            <Reservations/>
                        </TabPanel>
                        <TabPanel>
                            <Saved/>
                        </TabPanel>
                        <TabPanel>

                            <Container px='40px' py='30px' color={styles.neut100} w='763px' boxShadow={styles.shadow1} borderRadius='8px'>
                                <Header color={styles.neut700} hVariant='h4' pb='15px'>About me</Header>
                                <FormControl>
                                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                                        <Box>
                                            <Text color={styles.neut700} hVariant='link' pb='5px'>First name</Text>
                                            <Input w='250px' placeholder='Tunde' borderRadius='8px' borderColor={styles.sec2} />
                                        </Box>
                                        <Box>
                                            <Text color={styles.neut700} hVariant='link' pb='5px'>Last name</Text>
                                            <Input w='250px' placeholder='Chukwu' borderRadius='8px' borderColor={styles.sec2} />
                                        </Box>
                                    </Box>
                                    <Box mt='20px'>
                                        <Box>
                                            <Text color={styles.neut700} hVariant='link' pb='5px'>
                                                Review display name
                                            </Text>
                                            <Input placeholder='Tunesky' borderRadius='8px' borderColor={styles.sec2} />
                                            <Text pt='5px' light color={styles.neut700} hVariant='rich' pb='5px'>
                                                This is a name that will be shown whenever you leave a review. Remember to not use your full name or email.
                                            </Text>
                                        </Box>
                                    </Box>
                                    <Box mt='20px'>
                                        <Box>
                                            <Text color={styles.neut700} hVariant='link' pb='5px'>
                                                Email
                                            </Text>
                                            <Input placeholder='Tundechukwu12@gmail.com' type='email' borderRadius='8px' borderColor={styles.sec2} />
                                        </Box>
                                    </Box>
                                    <Box mt='20px'>
                                        <Box>
                                            <Text color={styles.neut700} hVariant='link' pb='5px'>Phone</Text>
                                            <Input w='250px' placeholder='+2341123465799' type='number' borderRadius='8px' borderColor={styles.sec2} />
                                        </Box>
                                    </Box>
                                    <Box mt='20px'>
                                        <Box>
                                            <Text color={styles.neut700} hVariant='link' pb='5px'>
                                                Address
                                            </Text>
                                            <Text color={styles.ill1} hVariant='rich' pb='5px'>
                                                + Add address
                                            </Text>
                                            <Text color={styles.neut700} hVariant='link' pb='5px'>
                                                Primary location
                                            </Text>
                                            <Input placeholder='Oshodi' borderRadius='8px' borderColor={styles.sec2} />
                                            <Box display='flex' alignItems='center' justifyContent='space-between'>
                                                <Text pt='5px' light color={styles.neut700} hVariant='rich' pb='5px'>
                                                    Change your location to update the experinces chillsbay suggests via email.
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box mt='30px'>
                                        <Box>
                                            <Header color={styles.neut700} hVariant='h4' pb='5px'>
                                                Change password
                                            </Header>
                                            <Text pt='5px' light color={styles.neut700} hVariant='rich' pb='5px'>
                                                Please choose a password that is at least 8 characters long.
                                            </Text>
                                            <Text color={styles.neut700} hVariant='link' pb='5px'>
                                                New password
                                            </Text>
                                            <Input  w='250px' placeholder='*****************' type='password' borderRadius='8px' borderColor={styles.sec2} />
                                            <Text color={styles.neut700} hVariant='link' mt='15px' pb='5px'>
                                                Confirm new password
                                            </Text>
                                            <Input  w='250px' placeholder='*****************' type='password' borderRadius='8px' borderColor={styles.sec2} />
                                        </Box>
                                    </Box>
                                    <ChakraButton w='100%' btnVariant='primary1' btnSize='large' mt='30px'>
                                        Save changes
                                    </ChakraButton>
                                </FormControl>
                            </Container>
                        
                        
                        </TabPanel>
                        <TabPanel>
                            <Payment/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>            

            </Box>

            <Footer/>
        
        </>

    )
}


export default Settings
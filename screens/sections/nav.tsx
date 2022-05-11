import {  Box, Button, Circle, Flex, Image,  } from "@chakra-ui/react"
import {BsChevronDown} from 'react-icons/bs'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import Header from "../../components/Header";
import {AiOutlineUser,AiOutlineShoppingCart} from 'react-icons/ai'
import ChakraText from "../../components/Text";
import {RiWallet2Line, RiMenuLine} from 'react-icons/ri';
import useStylesHook from "../../hooks/useStyles";

const Navbar = ()=>{

    const styles = useStylesHook();

    // type of fles

    return(
        <Box
         py={['1.4em','1.4em']}
         px={['1em','1.5em','3em','3.5em']}
         
        >
            <Flex 
             justify={'space-between'} align='center'     
             display={{base:'none',sm:'none',md:'none',lg:'flex'}}>

                <Image src="logo.svg" height='65px' />
                

                <Menu>
                    <MenuButton  background='white' _active={{background:'white'}} as={Button} rightIcon={<BsChevronDown/>}>
                        <Header light hVariant='h4'> Eat & Drink </Header>
                    </MenuButton>
                
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>            
                </Menu>

                <Menu  >
                    <MenuButton background='white' _active={{background:'white'}} as={Button} rightIcon={<BsChevronDown/>}>
                        <Header light hVariant='h4'> Events </Header>
                    </MenuButton>
                
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>            
                </Menu>

                <Menu>
                    <MenuButton background='white' _active={{background:'white'}} as={Button} rightIcon={<BsChevronDown/>}>
                        <Header light hVariant='h4'> Club </Header>
                    </MenuButton>
                
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>            
                </Menu>


                <Menu>
                    <MenuButton  background='white' _active={{background:'white'}} as={Button} rightIcon={<BsChevronDown/>}>
                        <Header light hVariant='h4'> Things to do </Header>
                    </MenuButton>
                
                    <MenuList>
                        <MenuItem>Water Sports</MenuItem>
                        <MenuItem>Day Parties</MenuItem>
                        <MenuItem>Outdoors</MenuItem>
                        <MenuItem>Rentals</MenuItem>
                    </MenuList>            
                </Menu>


                <Menu>
                    <MenuButton  background='white' _active={{background:'white'}} as={Button}>
                        <Flex align='center'>
                            <AiOutlineUser fontSize='24px'/>
                            <Box ml='0.2em'>
                                <ChakraText fontSize={'15px'} fontWeight={500} hVariant='neutral'>Account</ChakraText>
                            </Box>
                        </Flex>

                    </MenuButton>
                
                    <MenuList>
                        <MenuItem>My Profile</MenuItem>
                        <MenuItem>My History</MenuItem>
                        <MenuItem>Sign out</MenuItem>
                    </MenuList>            
                </Menu>



                <Flex >
                    <RiWallet2Line fontSize='24px'/>
                    <Box ml='0.2em'>
                        <ChakraText  fontSize={'15px'} fontWeight={500} hVariant='neutral'>Pay with crypto</ChakraText>
                    </Box>
                </Flex>


                <Flex>
                    <AiOutlineShoppingCart color={styles.neut700} fontSize='32px'/>
                    <Circle bg={styles.pry} fontWeight={700} size='27px'
                    color={styles.neut100} fontSize='14px' ml='0.6em'>
                        5
                    </Circle>
                </Flex>

            </Flex>

            <Flex w='full' justify={'space-between'} align='center'   display={{base:'flex',sm:'flex', md:'none',lg:'none'}}  >
                <Image src="logo.svg" height='65px' />

                <Flex cursor={'pointer'}>
                    <RiMenuLine fontSize={'25px'}  />
                </Flex>
                

            </Flex>

        </Box>

    )
}


export default Navbar
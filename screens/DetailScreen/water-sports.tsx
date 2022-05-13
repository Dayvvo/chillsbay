import { Box, Flex } from "@chakra-ui/react"
import DetailView from "../../components/Detailview"



const RestaurantDetailScreen = ({i})=>{

    return(
        <DetailView
         path1="Restaurants" path2="Nok by Alara"
         images={["/dummy/food2.png","/dummy/food3.png","/dummy/food4.png",]}
         logo='/dummy/Nog.svg'
         title="Club Quilox"
        />
    )
}


export default RestaurantDetailScreen;
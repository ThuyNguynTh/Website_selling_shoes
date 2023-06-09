import { Box, Text, Image, Button, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { dataUrl } from "../../share";
import Best from "./Best";
import Latest from "./Latest";
import Most from "./Most";
import { useSelector } from "react-redux";
import { MainProducts } from "../../Components/MainProducts";

const BestSeller = () => {
  const [pro, setPro] = useState([]);

  const products = useSelector((state) => state.products.products);

  return (
    <div>
      <Box
        fontFamily="monospace"
        w="91%"
        m="auto"
        justifyContent="space-between"
        display={["inline", "inline", "flex"]}
      >
        <Box
          w={["80%", "80%", "32%"]}
          m="auto"
          h="auto"
          p={5}
          border=".1px solid gray"
        >
          <Text
            textDecoration="underline 2px #EB046D"
            fontWeight="black"
            fontSize={["16px", "19px", "19px"]}
          >
            BÁN CHẠY NHẤT
          </Text>
          <Box my="20px" h={400}>
            {/* <Best></Best> */}
            {/* <MainProducts
              key={products[0]?.id}
              id={products[0]?.id}
              image={products[0]?.imageUrl}
              name={products[0]?.productName}
              price={products[0]?.hoprice}
              description={products[0]?.description}

            /> */}
          </Box>
        </Box>
        <Box
          w={["80%", "80%", "32%"]}
          m="auto"
          h="auto"
          p={5}
          border=".1px solid gray"
        >
          <Text
            textDecoration="underline 2px #EB046D"
            fontWeight="black"
            fontSize={["16px", "19px", "19px"]}
          >
            SẢN PHẨM MỚI
          </Text>
          <Box my="20px" h={400}>
            {/* <Latest></Latest> */}
            {/* <MainProducts
              key={products[1]?.id}
              id={products[1]?.id}
              image={products[1]?.imageUrl}
              name={products[1]?.productName}
              price={products[1]?.price}
              description={products[1]?.description}
            /> */}
          </Box>
        </Box>
        <Box
          w={["80%", "80%", "32%"]}
          m="auto"
          h="auto"
          p={5}
          border=".1px solid gray"
        >
          <Text
            textDecoration="underline 2px #EB046D"
            fontWeight="black"
            fontSize={["16px", "19px", "19px"]}
          >
            XEM NHIỀU NHẤT
          </Text>
          <Box my="20px" h={400}>
            {/* <Most></Most> */}
            {/* <MainProducts
              key={products[2]?.id}
              id={products[2]?.id}
              image={products[2]?.imageUrl}
              name={products[2]?.productName}
              price={products[2]?.price}
              description={products[2]?.description}
            /> */}
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default BestSeller;

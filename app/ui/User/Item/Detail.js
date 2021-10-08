import React from "react";
import { Link } from "@react-navigation/native";
import {
  Box,
  Button,
  HStack,
  Image,
  VStack,
  Text,
  Divider,
  Stack,
} from "native-base";
import { PostListGrid } from "../../Post";
import {
  RelationshipCreateButton,
  RelationshipUpdateButton,
  RelationshipDeleteActive,
  RelationshipDeleteCancel,
  RelationshipDeleteDelete,
} from "../../Relationship";
import UserUpdateButton from "../Update/Button";
import SkeletonDetail from "./SkeletonDetail";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function UI({ loading, error, data }) {
  return (
    <VStack maxw="full" mx="auto" my="5" w="full" space="4">
      <HStack space="7" m="1%" alignItems="center">
        <Box>
          <Image
            source={{
              uri:
                "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/120660089_393393651679331_1736612289947580072_n_zxf7cs.jpg",
            }}
            alt="Alternate Text"
            w={["100px", "120px"]}
            h={["100px", "120px"]}
            rounded="100"
          />
        </Box>
        <VStack flex="1" space={["2", "3"]}>
          <HStack space="2">
            <Text fontSize={["20", "22"]} fontWeight="600">
              Trần Ngọc Huy
            </Text>
            <Button bgColor="transparent" p="2" color="gray.500">
              <HiOutlineDotsHorizontal />
            </Button>
          </HStack>

          <HStack space="4">
            <Text fontSize="14" color="gray.500">
              12 bài đăng
            </Text>
            <Text fontSize="14" color="gray.500">
              144 bạn bè
            </Text>
          </HStack>
        </VStack>
      </HStack>

      <VStack space="2" mx="1%" my={["1", "0"]}>
        <Stack
          space="2"
          alignItems={["start", "center"]}
          direction={["column", "row"]}
        >
          <Text mr="4" fontSize="15" fontWeight="600" color="gray.500">
            Trần Ngọc Huy đã gửi lời mời kết bạn
          </Text>
          <HStack space="2">
            <Box w="130px">
              <RelationshipUpdateButton />
            </Box>
            <Box w="130px">
              <RelationshipDeleteDelete />
            </Box>
          </HStack>
        </Stack>
      </VStack>

      <VStack space="2" m="1%">
        <Text fontSize="18" fontWeight="600" color="gray.700">
          Giới thiệu
        </Text>
        <Divider bg="gray.100" w="full" my="1" orientation="horizontal" />
        <Text fontSize="14" fontWeight="400" color="gray.600" lineHeight="26px">
          👋 Tôi tên là Trần Ngọc Huy <br></br>📚 Tôi đang tìm hiểu về du lịch
        </Text>
      </VStack>

      <VStack space="2" m="1%">
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="18" fontWeight="600" color="gray.700">
            Bạn bè
          </Text>
          <Link to={{ screen: "friends" }}>
            <Text color="green.500" textDecoration="none">
              Xem tất cả
            </Text>
          </Link>
        </HStack>
        <Divider bg="gray.100" w="full" my="1" orientation="horizontal" />
      </VStack>
      <Box>
        <VStack w="98%" space="2" m="1%">
          <Text fontSize="18" fontWeight="600" color="gray.700">
            Bài viết
          </Text>
          <Divider bg="gray.100" w="full" my="1" orientation="horizontal" />
        </VStack>
        <PostListGrid />
      </Box>
    </VStack>
  );
}
export default UI;

import React, { Fragment, useState } from "react";
import { HStack, VStack, Box, Image, Text, Divider } from "native-base";
import { Link } from "@react-navigation/native";
import {
  RelationshipCreateButton,
  RelationshipDeleteDelete,
  RelationshipUpdateButton,
  RelationshipDeleteActive,
  RelationshipDeleteCancel,
} from "../../Relationship";
import Controller from "./Controller";

function UI({ loading, error, allUsers }) {
  return (
    <VStack>
      <HStack
        maxw="full"
        mx="auto"
        w="full"
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {allUsers.map((user) => (
          <HStack
            key={user.id}
            p={["3", "4"]}
            pl={["2", "4"]}
            minW={["100%", "99%"]}
            m={["0", "0.5%"]}
            my="1"
            space={["0", "1.5"]}
            alignItems="center"
            borderWidth="1"
            borderColor="gray.100"
            rounded={["0", "xl"]}
            justifyContent="space-between"
          >
            <HStack alignItems="center" space={["3", "4"]}>
              <Box>
                <Image
                  source={{
                    uri:
                      "https://odanang.net" +
                      (user?.avatar?.publicUrl || "/img/no-image.png"),
                  }}
                  alt="Profile Image"
                  size={["48px", "72px"]}
                  mx="auto"
                  my={["2.5", "1.5"]}
                  rounded="100"
                />
              </Box>
              <Link to={{ screen: "home" }}>
                <Text my="2" fontWeight="600">
                  {item.name}
                </Text>
              </Link>
            </HStack>
            {item.type === "pending" && (
              <VStack space="1.5">
                <Box w="120px">
                  <RelationshipUpdateButton />
                </Box>
                <Box w="120px">
                  <RelationshipDeleteDelete />
                </Box>
              </VStack>
            )}
            {item.type === "no" && (
              <Box w="120px">
                <RelationshipCreateButton />
              </Box>
            )}
            {item.type === "yes" && (
              <Box w="120px">
                <RelationshipDeleteActive />
              </Box>
            )}
            {item.type === "sending" && (
              <Box w="120px">
                <RelationshipDeleteCancel />
              </Box>
            )}
          </HStack>
        ))}
      </HStack>
    </VStack>
  );
}
export { UI };
export default function UserListSearch(props) {
  return <Controller {...props} UI={UI} />;
}

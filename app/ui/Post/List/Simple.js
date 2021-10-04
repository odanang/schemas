import React from "react";
import { VStack } from "native-base";
import PostItemSimple from "../Item/Simple";
import PostItemSkeletonSimple from "./SkeletonSimple";

function UI(loading) {
  // if (loading) {
  //   return <PostItemSkeletonSimple />;
  // }

  return (
    <VStack boxSize="full">
      {/* Map list posts */}
      <PostItemSimple />
      <PostItemSimple />
    </VStack>
  );
}
export default UI;
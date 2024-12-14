import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from "expo-router";

const Create = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/createPlan");
  }, []); 

  return (
    <View>
      <Text>Redirecting...</Text>
    </View>
  );
};

export default Create;

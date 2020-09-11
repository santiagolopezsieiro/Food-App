import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = yelp.get(`${id}`);
    setResults(response.data);
  };

  return (
    <View>
      <Text>results show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;

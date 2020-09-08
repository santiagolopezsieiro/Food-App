import React from "react";
import { Text, View, Image, Stylesheet } from "react-native";
import ResultsList from "./ResultsList";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

export default ResultsDetail;

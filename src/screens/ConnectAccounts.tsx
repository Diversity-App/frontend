import React, { useEffect, useState } from "react";
import { Navigation } from "../types";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Button } from "react-native-paper";
import { makeRedirectUri, Prompt, useAuthRequest } from "expo-auth-session";
// import Button from '../components/Button';
import localStorage from "../utils/localStorage";

type Props = {
  navigation: Navigation & any;
  apiToken: string;
};


const ConnectAccounts = ({ navigation, apiToken }: Props) => {
  function connectYoutube() {
    navigation.navigate("YoutubeConnexion", { apiToken })
  }
  const isConnected = localStorage.getItem("YoutubeConnexion")

  if (isConnected === "true") {
    navigation.navigate("Dashboard")
  }

  return (
    <Background>
      <Logo />
      <Button color={"#0386D0"} mode="contained" onPress={() => connectYoutube()}>
        Connect to Youtube
      </Button>
      <Button color={"#0386D0"} mode="contained" onPress={() => navigation.navigate("HomeScreen")}>
        Logout
      </Button>
    </Background>
  );
};


export default ConnectAccounts;

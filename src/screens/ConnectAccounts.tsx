import React from "react";
import { Navigation } from "../types";
import Background from "../components/Background";
import Logo from "../components/Logo";
import { Button } from "react-native-paper";
import { makeRedirectUri, Prompt, startAsync } from "expo-auth-session";
// import Button from '../components/Button';
import localStorage from "../utils/localStorage";
import axios from "axios";

type Props = {
  navigation: Navigation & any;
  apiToken: string;
};


const ConnectAccounts = ({ navigation, apiToken }: Props) => {
   const connectYoutube = async () => {
    // navigation.navigate("YoutubeConnexion", { apiToken });


    const authParams = {
      client_id: "1048252460044-n911v4bjibafcdml211oqkco66bb61b5.apps.googleusercontent.com",
      redirect_uri: makeRedirectUri({
        // native: "myapp://redirect",
        useProxy: true
      }),
      scope: "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/userinfo.profile",
      response_type: "code",
      prompt: Prompt.Consent
    };
    const authURL = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams(authParams).toString()}`;

    // @ts-ignore
    const { type, params } = await startAsync({ authUrl: authURL });


    if (type !== "success") {
      return;
    }

    const { code } = params;

    await axios.get("http://localhost:8080/api/auth/sso/google/callback", {
      params: {
        code: code
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiToken
      }
    });

    localStorage.setItem("YoutubeConnexion", "true");
  }

  const isConnected = localStorage.getItem("YoutubeConnexion");

  if (isConnected === "true") {
    navigation.navigate("Dashboard");
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

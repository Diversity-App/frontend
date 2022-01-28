import React from "react";
import { Navigation } from "../types";
import Background from "../components/Background";
import Logo from "../components/Logo";
import { Button } from "react-native-paper";
import { makeRedirectUri, Prompt, startAsync } from "expo-auth-session";
// import Button from '../components/Button';
import localStorage from "../utils/localStorage";
import axios from "axios";

import { GOOGLE_CLIENT_ID, GOOGLE_SCOPE, IPV4_ADDRESS } from "@env";

type Props = {
  navigation: Navigation & any;
  apiToken: string;
};

const ConnectAccounts = ({ navigation, apiToken }: Props) => {
  const [loading, setLoading] = React.useState(false);

  const connectYoutube = async () => {
    const redirectUrl = makeRedirectUri({ useProxy: true });
    console.log("redirectUrl", redirectUrl);

    const urlParams = {
      redirect_uri: redirectUrl,
      access_type: "offline",
      response_type: "code",
      client_id: GOOGLE_CLIENT_ID,
      scope: GOOGLE_SCOPE,
    };
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams(
      urlParams
    ).toString()}`;
    // @ts-ignore
    const { type, params } = await startAsync({ authUrl });

    if (type !== "success") {
      console.log("type", type);
      return;
    }

    const { code } = params;
    try {
      const response = await axios.get(
        `http://${IPV4_ADDRESS}:8080/auth/sso/google/callback`,
        {
          params: {
            code: code,
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + apiToken,
          },
        }
      );
      console.log("response ->", await response.data);
      localStorage.setItem("YoutubeConnexion", "true");
      navigation.navigate("Dashboard");
    } catch (e) {
      console.log("Error", e);
    }
  };

  const isConnected = localStorage.getItem("YoutubeConnexion");
  // if (isConnected === "true") {
  //   navigation.navigate("Dashboard");
  // }

  return (
    <Background>
      <Logo />
      <Button
        color={"#0386D0"}
        mode="contained"
        onPress={() => {
          connectYoutube();
        }}
      >
        Connect to Youtube
      </Button>
      <Button
        color={"#0386D0"}
        mode="contained"
        onPress={() => navigation.navigate("HomeScreen")}
      >
        Logout
      </Button>
    </Background>
  );
};

export default ConnectAccounts;

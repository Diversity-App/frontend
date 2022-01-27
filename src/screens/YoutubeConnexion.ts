import { useEffect } from "react";
import { makeRedirectUri, Prompt, useAuthRequest } from "expo-auth-session";
import Background from "../components/Background";
import axios from "axios";
import { Navigation } from "../types";


type Props = {
  navigation: Navigation;
  apiToken: string;
};

const YoutubeConnexion = ({ navigation, apiToken }: Props) => {

  const params = {
    clientId: "477634730335-4tuj7dprmu3m88m600qnm722ico8g1df.apps.googleusercontent.com",
    redirectUri: makeRedirectUri({
      native: "myapp://redirect"
    }),
    scope: "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/userinfo.profile",
    response_type: "code",
    prompt: Prompt.Consent
  };
  const url = {
    authorizationEndpoint: "https://accounts.google.com/o/oauth2/auth"
  };


  const [request, response, promptAsync] = useAuthRequest(params, url);

  useEffect(() => {
    // @ts-ignore
    const { code } = response?.params;

    if (!response) {
      return;
    }
    if (response?.type !== "success") {
      navigation.navigate("ConnectAccounts");
    }
    axios.get("http://localhost:8080/api/auth/sso/google/callback", {
      params: {
        code: code
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiToken
      }
    })
      .then(res => {
        // Store success status in local storage
        localStorage.setItem("YoutubeConnexion", "true");

        navigation.navigate("ConnectAccounts");
      })
      .catch(err => {
        console.log(err);
      });

  }, [response]);


  return null;
};

export default YoutubeConnexion;

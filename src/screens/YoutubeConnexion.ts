import { useEffect } from "react";
import { makeRedirectUri, Prompt, useAuthRequest } from "expo-auth-session";
import Background from "../components/Background";
import axios from "axios";
import { Navigation } from "../types";
import localStorage from "../utils/localStorage";


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
    scopes: ["https://www.googleapis.com/auth/youtube","https://www.googleapis.com/auth/userinfo.profile"],
    response_type: "code",
    prompt: Prompt.Consent
  };
  const url = {
    authorizationEndpoint: "https://accounts.google.com/o/oauth2/auth"
  };


  const [request, response, promptAsync] = useAuthRequest(params, url);

  useEffect(() => {
    if (!response) {
      return;
    }


    if (response?.type !== "success") {
      return navigation.navigate("ConnectAccounts");
    }

    // @ts-ignore
    const { code } = response.params;

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

  // useEffect(() => {
    promptAsync();
  // }, []);

  return null;
};

export default YoutubeConnexion;

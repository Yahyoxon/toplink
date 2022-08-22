import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "swiper/css/bundle";
import { Themes } from "./Context/ThemeContext";
import { TextContext } from "./Context/TextContext";
import { AnimateContext } from "./Context/AnimationContext";
import { ColorContext, ColorFunctionContext } from "./Context/ColorContext";
import { ButtonTextFunctionContext } from "./Context/ButtonTextContext";
import { FontFunctionContext } from "./Context/FontContext";
import AuthContext from "./Context/AuthContext";
import { LinkFunctionContext } from "./Context/LinkContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChangeProfile } from "./Context/ProfileChangeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry(failureCount, error) {
        if (error.status === 404 || error.status === 422) return false;
        if (failureCount < 2) return true;
        return false;
      },
    },
  },
});
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* <AuthContext.Provider> */}
        <Themes>
          <ChangeProfile>
            <LinkFunctionContext>
              <FontFunctionContext>
                <AnimateContext>
                  <ButtonTextFunctionContext>
                    <ColorFunctionContext>
                      <TextContext>
                        <App />
                      </TextContext>
                    </ColorFunctionContext>
                  </ButtonTextFunctionContext>
                </AnimateContext>
              </FontFunctionContext>
            </LinkFunctionContext>
          </ChangeProfile>
        </Themes>
        {/* </AuthContext.Provider> */}
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

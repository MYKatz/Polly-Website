import React from "react";
import Navbar from "./../../components/Navbar";
import HomePage from "./../home";
import { Switch, Route, Router } from "./../../util/router.js";
import Footer from "./../../components/Footer";
import { ProvideAuth } from "./../../util/auth.js";
import "./styles.scss";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <Navbar
            color="white"
            spaced={true}
            logo="https://polly-assets2.s3.amazonaws.com/logo/black.png"
          />

          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>

          <Footer
            color="light"
            size="normal"
            logo="https://polly-assets2.s3.amazonaws.com/logo/black.png"
            copywrite="© 2019 Matt Katz"
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;

import React, { useEffect } from "react";
import { connect } from "react-redux";

import { ThemeProvider } from "styled-components";
import { pink } from "themes";
// import Layout from "app/Layout";
// import Admin from "site/admin";
import User from "site/user";
import NoiQuy from "site/user/containers/rules";
import Auth from "site/user/containers/auth/LoginScreen";
import { Main } from "./styled";
import { ConfigProvider } from "antd";
import viVN from "antd/es/locale/vi_VN";
import RouterWithPaths from "components/RouterWithPaths";

import { Switch, Route } from "react-router-dom";
import { originUrl, accountUrl } from "client/request";
import { useHistory } from "react-router-dom";

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

const App = (props) => {
  const history = useHistory();

  useEffect(() => {
    reportWindowSize();
    window.addEventListener("resize", reportWindowSize);
    return () => {
      window.removeEventListener("resize", reportWindowSize);
    };
  }, []);
  useEffect(() => {
    props.checkRole();
    props.getMenuBar();
  }, []);
  const reportWindowSize = () => {
    props.updateApplication({
      width: window.innerWidth,
    });
  };
  // const logout = connect(null, ({ auth: { updateData } }) => ({ updateData }))(
  //   (props) => {
  //     props.updateData({
  //       auth: null,
  //     });
  //     localStorage.removeItem("auth");
  //     setTimeout(() => {
  //       const queryString = window.location.search;
  //       const urlParams = new URLSearchParams(queryString);
  //       window.location.href = urlParams.get("redirect") || "/";
  //     }, 2000);
  //     return null;
  //   }
  // );
  String.prototype.uintTextBox = function () {
    var re = /^\d*$/;
    return re.test(this);
  };
  const routers = [
    // {
    //   path: ["/login"],
    //   component: Auth,
    // },
    // {
    //   path: ["/noiquy"],
    //   component: NoiQuy,
    // },
    // {
    //   path: ["/logout"],
    //   component: logout,
    // },
    {
      path: [
        "/",
        "/:function1",
        "/:function1/:id",
        "/:function1/:function2/:id",
      ],
      component: User,
      // component: Admin,
    },
  ];
  return (
    <ThemeProvider theme={pink}>
      <ConfigProvider locale={viVN}>
        <Switch>
          {routers.map((route, key) => {
            if (route.component)
              return (
                <RouterWithPaths
                  key={key}
                  path={route.path}
                  render={(props) => {
                    return <route.component {...props} />;
                  }}
                />
              );
            return null;
          })}
        </Switch>
      </ConfigProvider>
    </ThemeProvider>
  );
};

const mapState = (state) => ({
  auth: state.auth.auth,
});

const mapDispatch = ({
  auth: { onLogin, onLogout, updateData, loadWithToken, checkRole },
  application: { updateData: updateApplication },
  menu: { getMenuBar },
}) => ({
  onLogin,
  onLogout,
  updateData,
  loadWithToken,
  updateApplication,
  checkRole,
  getMenuBar
});

export default connect(mapState, mapDispatch)(App);

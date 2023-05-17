/*
 * @Descripttion:
 * @version:
 * @Author: CYZ
 * @Date: 2023-05-17 16:16:13
 * @LastEditors: CYZ
 * @LastEditTime: 2023-05-17 21:43:03
 */
import React, { useReducer, useState } from "react";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import "./App.css";
import { renderRoutes } from "./router/routerConfig";
import routes from "./router/routes";
import { useHistory } from "react-router-dom";
import { MyContext, initialState, reducer } from "./redux";
const { Header, Sider, Content } = Layout;
const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  const clickMenu: MenuProps["onClick"] = (e) => {
    history.push(`/nav` + e.key);
  };
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Layout>
          <Sider collapsed={false} trigger={null}>
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={[
                {
                  key: "1",
                  icon: <UserOutlined />,
                  label: "nav 1",
                },
                {
                  key: "2",
                  icon: <VideoCameraOutlined />,
                  label: "nav 2",
                },
              ]}
              onClick={clickMenu}
            />
          </Sider>
          <Header style={{ padding: 0 }}></Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              height: "100%",
              width: "100%",
            }}
          >
            <div className="layoutContent">{renderRoutes(routes)}</div>
          </Content>
        </Layout>
      </div>
    </MyContext.Provider>
  );
};

export default App;

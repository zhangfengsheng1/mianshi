/*
 * @Descripttion:
 * @version:
 * @Author: CYZ
 * @Date: 2021-09-08 11:05:01
 * @LastEditors: CYZ
 * @LastEditTime: 2023-05-17 18:13:19
 */
import React from "react";
import { IRoute } from "./routerConfig";
import Nav1 from "../views/nav1";
import Nav2 from "../views/nav2";

import {UserOutlined,VideoCameraOutlined} from '@ant-design/icons'
let router: IRoute[] = [
    {
        path: "/nav1",
        name: "nav1",
        icon: <UserOutlined />,
        component: Nav1
    },
    {
        path: "/nav2",
        name: "nav2",
        icon: <VideoCameraOutlined />,
        component: Nav2
    },
];

export default router;
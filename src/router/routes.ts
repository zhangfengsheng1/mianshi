
/*
 * @Descripttion:
 * @version:
 * @Author: CYZ
 * @Date: 2021-09-07 16:57:19
 * @LastEditors: CYZ
 * @LastEditTime: 2023-05-17 18:09:02
 */
import { IRoute } from "./routerConfig";
import Nav1 from "../views/nav1";
import menu from "./menu";

let tempRouter: IRoute[] = [];
menu.map(item => {
    if (item.children) {
        item.children.map(it => {
            tempRouter.push(it);
        });
    } else {
        tempRouter.push(item);
    }
});
const routes: IRoute[] = [
    {
        path: "/",
        exact: true,
        name: "nav1",
        component: Nav1
    },
    ...tempRouter
];
export default routes;
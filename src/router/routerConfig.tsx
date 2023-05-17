/*
 * @Descripttion:
 * @version:
 * @Author: CYZ
 * @Date: 2023-05-17 19:50:10
 * @LastEditors: CYZ
 * @LastEditTime: 2023-05-17 20:27:40
 */
import React from "react";
import { Switch, Route } from "react-router-dom";
export type RouterComponent = {
  routes?: IRoute[];
};

export interface IRoute {
  path: string;
  key?: string;
  exact?: boolean;
  strict?: boolean;
  component: any;
  children?: IRoute[];
  [key: string]: any;
}

export const renderRoutes = (
  routes: IRoute[],
  extraProps = {},
  switchProps = {}
) =>
  routes ? (
    <Switch {...switchProps}>
      {routes.map((route) => (
        <Route
          {...extraProps}
          key={route.key || route.path}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props: any) => (
            <route.component
              {...props}
              {...extraProps}
              routes={route.children}
            />
          )}
        />
      ))}
    </Switch>
  ) : null;

/*
 * @Descripttion:
 * @version:
 * @Author: CYZ
 * @Date: 2023-05-17 21:11:49
 * @LastEditors: CYZ
 * @LastEditTime: 2023-05-18 00:55:20
 */
import React, { useContext } from "react";
import { UseContextType } from "../redux/typings";
import { MyContext } from "../redux";
import { Table, Space, Button } from "antd";
const UserTabble: React.FC<{}> = (props) => {
  const { state, dispatch } = useContext<UseContextType>(MyContext);

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "操作",
      dataIndex: "option",
      width: 120,
      render: (text: string, record: any) => {
        return (
          <Button
            type="link"
            className="delete-btn"
            onClick={() => {
              dispatch({ type: "del", data: record });
            }}
          >
            删除
          </Button>
        );
      },
    },
  ];
  return (
    <>
      <Table dataSource={state.form.userList} columns={columns} />
      <Space>
        Count: {state.form.count}
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </Space>
    </>
  );
};

export default React.memo(UserTabble);

/*
 * @Descripttion:
 * @version:
 * @Author: CYZ
 * @Date: 2023-05-17 21:11:36
 * @LastEditors: CYZ
 * @LastEditTime: 2023-05-18 00:54:52
 */
import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, message, Form, Input } from "antd";
import { UseContextType } from "../redux/typings";
import { MyContext } from "../redux";
const UserModal: React.FC<{ isShowModal: boolean; closeModal: () => void }> = (
  props
) => {
  const { isShowModal, closeModal } = props;

  const [form] = Form.useForm();
  const { state, dispatch } = useContext<UseContextType>(MyContext);
  
  const onFinish = (value: any) => {
    dispatch({ type: "add", data: value });
    closeModal()
  };
  return (
    <>
      <Modal
        title="添加用户"
        open={isShowModal}
        footer={null}
        onCancel={closeModal}
        destroyOnClose
      >
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          preserve={false}
          autoComplete="off"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: "请输入姓名" }]}
          >
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item
            label="年龄"
            name="age"
            rules={[{ required: true, message: "请输入年龄" }]}
          >
            <Input placeholder="请输入年龄" />
          </Form.Item>
          <Form.Item
            label="住址"
            name="address"
            rules={[{ required: true, message: "请输入住址" }]}
          >
            <Input placeholder="请输入住址" />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "center" }}>
            <Button
              style={{ width: "96px", height: "32px", lineHeight: "18px" }}
              type="primary"
              htmlType="submit"
            >
              确认
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default React.memo(UserModal);

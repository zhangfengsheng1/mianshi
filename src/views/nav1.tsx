import { Button, Table } from "antd";
import UserModal from "../components/UserModal";
import React, { useState } from "react";
import UserTabble from "../components/UserTabble";
const Nav1: React.FC<{}> = (props) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const openModal = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={openModal}
        style={{ marginBottom: "10px" }}
      >
        添加
      </Button>
      <UserModal isShowModal={isShowModal} closeModal={closeModal}></UserModal>
      <UserTabble />
      
    </>
  );
};

export default React.memo(Nav1);

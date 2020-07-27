import React from "react";
import { Modal, Button } from 'antd';

export const ModalItem = ({ isShow, close, children, title }) => {
    return (
        <Modal
            title={title}
            visible={isShow}
            // onOk={close}
            onCancel={close}
            footer={null}
            className="modal__chapters"
        >
            {children}
        </Modal>
    );
}
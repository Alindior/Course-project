import React from "react";
import { Modal } from 'antd';

import { EditUserForm } from "./EditUserForm";
import { ResultUpdate } from "./Result";

export const EditUser = ({ modal, isLoading, toggleModal, result, user }) => {
    return (
        <Modal
            className="modal__edit"
            title="Персональные данные"
            visible={modal}
            confirmLoading={isLoading}
            onCancel={toggleModal}
            footer={null}
        >
            {result ?
                <ResultUpdate toggleModal={toggleModal} />
                :
                <EditUserForm modal={modal} isLoading={isLoading} toggleModal={toggleModal} user={user} />}
        </Modal>
    );
}
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Button } from "antd";
import { UserDeleteOutlined, CloseCircleOutlined, UserSwitchOutlined, LoadingOutlined } from '@ant-design/icons';

import { setAdminUser, removeAdminUser, blockUser, unlockedUser, deleteUser } from "../../../../store/users/actions";

export const ActionButtons = ({ id }) => {
    const { users, isLoadingAdmin, isLoadingBlock, isLoadingRemove } = useSelector((state) => state.users);
    const currentUser = users.find((user) => user._id === id);
    const dispatch = useDispatch();
    const toggleAdminStatus = () => {
        if (currentUser.admin) {
            dispatch(removeAdminUser(id));
        } else {
            dispatch(setAdminUser(id));
        }
    }
    const togleBlockStatus = () => {
        if (currentUser.status) {
            dispatch(blockUser(id));
        } else {
            dispatch(unlockedUser(id));
        }
    }
    const onDeleteUser = () => {
        dispatch(deleteUser(id))
    }
    return (
        currentUser.email === "alindior123@gmail.com" ?
            <td><span className="root__admin">Создатель</span></td>
            :
            <div className="actions__btn-users">
                <Button
                    type="primary"
                    className="action__btn"
                    onClick={toggleAdminStatus}>
                    <Link>
                        {isLoadingAdmin === id ? <LoadingOutlined /> : <UserSwitchOutlined />}
                    </Link>
                </Button>
                <Button
                    type="primary"
                    className="action__btn"
                    onClick={togleBlockStatus}
                >
                    <Link >
                        {isLoadingBlock === id ? <LoadingOutlined /> : <UserDeleteOutlined />}
                    </Link>
                </Button>
                <Button
                    type="primary"
                    danger
                    className="action__btn"
                    onClick={onDeleteUser}
                >
                    {isLoadingRemove === id ? <LoadingOutlined /> : <CloseCircleOutlined />}
                </Button>

            </div>
    )
}
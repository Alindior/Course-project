import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from 'antd';

import { UserCard } from "./UserCard";
import { EditUser } from "./EditUserModal";


import { toggleModalEditUserInfo, showSuccessEditUserInfo } from "../../../../store/app/actions";

export const HomeHeaderContainer = () => {
    const dispatch = useDispatch();
    const toggleModal = () => {
        dispatch(toggleModalEditUserInfo());
        dispatch(showSuccessEditUserInfo(false));
    }
    const { auth, books, app, users } = useSelector((state) => state);
    return (
        <div className="home__header">
            <Skeleton loading={books.isLoading} avatar active >
                <UserCard user={auth.user} toggleModal={toggleModal} theme={app.theme} />
            </Skeleton>
            <EditUser
                modal={app.editUserInfoModal}
                toggleModal={toggleModal}
                isLoading={users.isLoadingChangeUserInfo}
                result={app.succeessEditetUser}
                user={auth.user}
            />
        </div>
    )
}
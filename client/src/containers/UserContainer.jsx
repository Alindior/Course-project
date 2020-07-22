import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "antd"

import { HomeHeaderContainer, PersonalBooks, FormAddContainer } from "../components/AuthPages/users";
import { ReadingModeContainer } from "../components/readingMode";

import { ResultPAge } from "../components/ResultPage";

import { getBookForOneUser } from "../store/books/actions";

export const UserContainer = () => {
    const [form, setForm] = useState(false);
    const dispatch = useDispatch();
    const { login, id } = useParams();
    const { isLoading, booksForOne, statusCreated } = useSelector((state) => state.books);
    const { users } = useSelector((state) => state.users);
    const currentUser = users.find((user) => user.login === login);
    const toggleForm = () => setForm(!form);
    useEffect(() => {
        document.title = login;
        dispatch(getBookForOneUser(currentUser._id));
    }, []);
    return (
        <>
            <HomeHeaderContainer login={login} />
            {
                statusCreated ?
                    <ResultPAge onBack={toggleForm} />
                    :
                    <div>
                        {!form && <Button type="primary" onClick={toggleForm}>Создать книгу</Button>}
                        {!form ?
                            <PersonalBooks books={booksForOne} login={login} isLoading={isLoading} />
                            : <FormAddContainer toggleForm={toggleForm} usersId={currentUser._id} />
                        }
                        {id && <ReadingModeContainer booksId={id} />}
                    </div>
            }
        </>
    )
}
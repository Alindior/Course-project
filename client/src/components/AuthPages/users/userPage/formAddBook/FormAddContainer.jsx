import React from "react";

import { Button } from "antd";
import { FormAddBook } from "./FormAddBook";



export const FormAddContainer = ({ toggleForm, usersId }) => {
    return (
        <div div className="addBook__container" >
            <div className="addBook__form">
                <FormAddBook usersId={usersId} />
            </div>
        </div>
    )
}
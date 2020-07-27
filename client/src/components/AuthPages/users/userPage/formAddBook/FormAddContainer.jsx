import React from "react";

import { FormAddBook } from "./FormAddBook";

export const FormAddContainer = ({ toggleForm, usersId }) => {
    return (
        <div div className="addBook__container" >
            <div className="addBook__form">
                <FormAddBook usersId={usersId} toggleForm={toggleForm} />
            </div>
        </div>
    )
}
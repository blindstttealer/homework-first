import {UsersType} from "./HW1";
import React from "react";

type UserListPropsType = {
 users: Array<UsersType>
}



export const UserList: React.FC<UserListPropsType> = (props) => {
    return (
        <div id={'hw01-users'}>
            <h2>User List:</h2>

            <ul>
                {props.users.map((user: any) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
                    <li key={user.id} id={`hw01-user-${user.id}`}>
                        <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
                        {user.address.street}, {user.address.city}
                    </li>
                ))}
            </ul>
        </div>
    )
}


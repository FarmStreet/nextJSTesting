import Link from "next/link";
import {useState} from "react";

const Users = () => {

    const [users, setUsers] = useState([
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Sasha'},
    ])

    return (
        <div>
            <Link href="/">
                <a>Главная</a>
            </Link>
            <h1>Пользователи</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Users;
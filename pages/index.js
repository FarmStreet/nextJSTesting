import Link from "next/link";

const Index = () => {
    return (
        <div>
            <div>
                <Link href="/users">
                    <a>Пользователи</a>
                </Link>
            </div>
            <h1>Главная страница</h1>
            <style jsx>
                {`
                    .navbar {
                      background: orange;
                      padding: 15px;
                    }
                    .link {
                      text-decoration: none;
                      color: white;
                      font-size: 20px;
                    }
                `}
            </style>
        </div>
    )
}

export default Index;
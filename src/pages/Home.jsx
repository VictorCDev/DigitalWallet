import { Link, useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go"
import Button from "../components/Button";
import logo from "../assets/logo.png"
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { userLogged } from "../services/user"
import { findAllTransactions } from "../services/transactions"
import dayjs from "dayjs";

export default function Home() {

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0);

    function validateToken() {

        const token = Cookies.get("token");
        if (!token) navigate("/signin");
    }

    async function getUserLogged() {
        try {
            const userResponse = await userLogged();
            setUser(userResponse.data);
        } catch (err) {
            console.log(err);
        }
    }

    async function getAllTransactions() {
        try {
            const response = await findAllTransactions();
            setTransactions(response.data);
            calculateBalance(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    function calculateBalance(transactions) {
        let total = 0;
        transactions.forEach((transaction) => {
            transaction.type === "input"
                ? (total += Number(transaction.value))
                : (total -= Number(transaction.value));
        });

        setBalance(total);
    }

    useEffect(() => {
        validateToken();
        getUserLogged();
        getAllTransactions();
    }, []);

    return (
        <main className="flex flex-col items-center justify-around bg-zinc-900 rounded-lg p-8 w-[60rem] h-[40rem]">
            <header className="flex items-center justify-between w-full pb-4">
                <img src={logo} alt="Digital Wallet" className="w-32"></img>
                <div className="flex items-center gap-4 text-white text-2xl">
                    <h1 className="text-white">Olá, {user.name}</h1>
                    <Link to="/signin">
                        < GoSignOut />
                    </Link>
                </div>
            </header>

            <section className="bg-zinc-300 p-4 w-full h-full rounded flex items-center justify-center ">
                {transactions.length ? (
                    <ul className="w-full h-full flex flex-col justify-between">
                        <div className="h-[17rem] overflow-auto p-3">
                            {transactions.map((transaction, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-start w-full"
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="text-base text-zinc-500">
                                            {dayjs(transaction.created_at).format("DD/MM")}
                                        </span>
                                        {transaction.description}
                                    </span>

                                    <span className={`${transaction.type === "input" ? "text-green-500" : "text-red-500"}`}>
                                        {transaction.value}
                                    </span>
                                </li>
                            ))}
                        </div>
                        <li className="flex justify-between items-start w-full px-3">
                            <span>Balance</span>
                            <span className={`${balance > 0 ? "text-green-500" : "text-red-500"}`}>{balance}</span>
                        </li>
                    </ul>
                ) : (
                    <p>There is no check-in or check-out</p>
                )}
            </section>


            <footer className="w-full pt-2 flex gap-2 text-white text-lg font-bold">
                <Button type="submit" text="New input" icon="plus" transaction="input" />
                <Button type="submit" text="New output" icon="minus" transaction="output" />
            </footer>
        </main>
    )
}
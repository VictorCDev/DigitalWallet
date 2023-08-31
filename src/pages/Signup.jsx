import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { BiArrowBack } from "react-icons/bi";

export default function Signup() {

    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded-lg p-8 w-[35rem] h-[35rem] relative">
            <Link to="/signin">
                <BiArrowBack className="text-white absolute top-3 left-3 text-2xl" />
            </Link>
            <form className="flex flex-col justify-center gap-4 w-full text-2xl">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
                <Button type="submit" text="Register" />
            </form>
        </div>
    );
}
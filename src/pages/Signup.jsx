import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { BiArrowBack } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import Errorinput from "../components/ErrorInput";
import { signupSchema } from "../schemas/SignupSchema";
import { signup } from "../services/user";
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(signupSchema) });

    const navigate = useNavigate();

    async function handleSubmitForm(data) {
        try {
            await signup(data);
            navigate("/signin");
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded-lg p-8 w-[35rem] h-[35rem] relative">
            <Link to="/signin">
                <BiArrowBack className="text-white absolute top-3 left-3 text-2xl" />
            </Link>
            <form onSubmit={handleSubmit(handleSubmitForm)} className="flex flex-col justify-center gap-4 w-full text-2xl">
                <Input type="text" placeholder="Name" register={register} name="name" />
                {errors.name && <Errorinput text={errors.name.message} />}
                <Input type="email" placeholder="Email" register={register} name="email" />
                {errors.email && <Errorinput text={errors.email.message} />}
                <Input type="password" placeholder="Password" register={register} name="password" />
                {errors.password && <Errorinput text={errors.password.message} />}
                <Input type="password" placeholder="Confirm Password" register={register} name="confirmPassword" />
                {errors.confirmPassword && <Errorinput text={errors.confirmPassword.message} />}
                <Button type="submit" text="SIGNUP" />
            </form>
        </div>
    );
}
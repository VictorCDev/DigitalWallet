import Button from "../components/Button";
import Input from "../components/Input";

export default function Signup() {

    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-6 w-[35rem] relative">
            <h1 className="text-white font-bold text-5xl py-5">Register</h1>
            <form className="flex flex-col justify-center gap-4 w-full text-2xl">
            <Input type="text" placeholder="Name"/>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Password"/>   
            <Input type="password" placeholder="Confirm Password"/>         
        	<Button type="submit" text="Register"/>
           </form>
        </div>
    );
}
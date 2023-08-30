import Button from "../components/Button";
import Input from "../components/Input";

export default function Signin() {

    return (
        <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 w-[35rem] h-[35rem]">
           <form className="flex flex-col justify-center gap-4 w-full text-2xl">
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Password"/>            
        	<Button type="submit" text="SIGNIN"/>
           </form>

           <p className="text-white text-2xl">
            Don't have an account? Register
           </p>
        </div>
    );

}
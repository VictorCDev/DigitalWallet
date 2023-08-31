import Button from "../components/Button";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-around bg-zinc-700 rounded-lg p-8 w-[50rem] h-[50rem]">
            <header className="flex items-center justify-between w-full pb-4"> 
                <h1 className="text-white">Olá, nome</h1>
                <h1 className="text-white">Logout</h1>
            </header>

            <section className="bg-zinc-400  w-full h-full rounded flex items-center justify-center">
                <p>There is no check-in or check-out</p>
            </section>

            <footer className="w-full pt-2 flex gap-2 text-white text-lg font-bold">
                <Button type="submit" text="New input" icon="plus"/> 
                <Button type="submit" text="New output" icon="minus"/>
            </footer>
        </div>
    )
}
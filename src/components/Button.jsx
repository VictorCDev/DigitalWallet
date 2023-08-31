
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi"

export default function Button({ text, type, icon }) {

    let IconComponent;

    if (icon === "plus") IconComponent = BiPlusCircle;
    if (icon === "minus") IconComponent = BiMinusCircle;

    return (
        <button
            type={type}
            className="px-4 py-2 rounded w-full font-bold text-white text-2xl 
            bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                {IconComponent && <IconComponent />} {text}
        </button>
    );
}
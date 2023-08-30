export default function Button({ text, type }) {

    return (
        <button type={type} className="px-4 py-2 rounded w-full font-bold text-white text-2xl bg-gradient-to-r from-purple-500 to-pink-500">
            {text}
        </button>
    );
}
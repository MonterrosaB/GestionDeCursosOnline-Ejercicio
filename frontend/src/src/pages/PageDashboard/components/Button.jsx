const Button = ({ onClick, textBtn, type }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className="px-6 py-3 bg-white text-violet-700 font-semibold rounded-xl hover:bg-violet-100 transition duration-300 ease-in-out cursor-pointer"
        >
            {textBtn}
        </button>
    )
}
export default Button;
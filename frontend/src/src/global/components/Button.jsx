const Button = ({ onClick, textBtn, type, style }) => {

    //mapa de estilos para elegir
    const styleMap = {
        edit: "flex items-center gap-1 px-3 py-1 text-sm bg-yellow-400 text-white rounded-xl hover:bg-yellow-500 transition",
        delete: "flex items-center gap-1 px-3 py-1 text-sm bg-red-500 text-white rounded-xl hover:bg-red-600 transition",
        default: "px-6 py-3 text-violet-700 font-semibold rounded-xl hover:bg-violet-100 transition duration-300 ease-in-out cursor-pointer"
    };
    const styleBtn = styleMap[style] || styleMap["default"];

    return (
        <button onClick={onClick} type={type} className={styleBtn}>
            {textBtn}
        </button>
    );
};

export default Button;

import { useNavigate } from "react-router";
import Button from "../../../global/components/Button";
import H1 from "../../../global/components/H1";

const WelcomeCard = () => {

    const navigate = useNavigate();

    const handleAccess = () => {
        navigate("/dashboard"); // Ruta del sistema principal
    };

    return (
        <div className="min-h-screen flex items-center justify-center text-black">
            <div className="text-center p-8 bg-white bg-opacity-10 rounded-2xl shadow-lg backdrop-blur-sm">
                <H1 text={"Bienvenido al Sistema"} />
                <p className="text-lg mb-6">Gestiona tus Cursos en Línea de una forma sencilla y rapida.</p>
                <Button
                    textBtn={"Acceder al Sistema"}
                    onClick={handleAccess}
                    type={"button"}
                />
            </div>
        </div>
    )
}
export default WelcomeCard;
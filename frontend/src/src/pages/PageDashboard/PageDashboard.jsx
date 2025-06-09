import H1 from "../../global/components/H1";
import CursoCard from "./components/CourseCard";
import RegisterCourse from "./components/RegisterCourse";
import useCourse from "./hooks/useCourse";
import Button from "../../global/components/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const PageDashboard = () => {
    const navigate = useNavigate();
    const methods = useForm();

    const {
        register,
        handleSubmit,
        errors,
        handleUpdate,
        courses,
        loading,
        deleteCourse,
    } = useCourse(methods);

    return (
        <>
            <div className="min-h-screen px-4 py-8 bg-transparent text-white">
                <div className="max-w-6xl mx-auto">
                    <Button textBtn={"Retroceder"} onClick={() => navigate(-1)} />
                    <H1 text="Gestor de cursos" />

                    {/* Formulario de Registro */}
                    <div className="mt-6 mb-10">
                        <RegisterCourse
                            errors={errors}
                            register={register}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                    {/* Lista de Cursos */}
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                        {loading ? (
                            <div>Cargando</div>
                        ) : (
                            courses.map((curso) => (
                                <CursoCard
                                    key={curso.id}
                                    {...curso}
                                    onDelete={() => deleteCourse(curso.id)}
                                    onEdit={() => handleUpdate(curso)}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
export default PageDashboard;

import Button from "../../../global/components/Button";

// Componente para registrar un nuevo curso
const RegisterCourse = ({ register, errors, handleSubmit }) => {
    return (
        <div className="w-full p-6 bg-white rounded-xl shadow-md mt-4">
            <h2 className="text-2xl font-bold mb-6 text-center text-violet-700">
                Registrar Curso
            </h2>

            {/* Formulario con diseño en grid responsivo */}
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black"
            >
                {/* Campo: Nombre del Curso */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium">
                        Nombre del Curso
                    </label>
                    <input
                        type="text"
                        {...register("curso", {
                            required: "El nombre del curso es obligatorio",
                        })}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ej. Introducción a React"
                    />
                    {errors.curso && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.curso.message}
                        </p>
                    )}
                </div>

                {/* Campo: Temática */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium">Temática</label>
                    <input
                        type="text"
                        {...register("tematica", {
                            required: "La temática es obligatoria",
                        })}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ej. Programación Web"
                    />
                    {errors.tematica && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.tematica.message}
                        </p>
                    )}
                </div>

                {/* Campo: Instructor */}
                <div className="col-span-1">
                    <label className="block text-sm font-medium">Instructor</label>
                    <input
                        type="text"
                        {...register("instructor", {
                            required: "El nombre del instructor es obligatorio",
                        })}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ej. Wilfredo"
                    />
                    {errors.instructor && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.instructor.message}
                        </p>
                    )}
                </div>

                {/* Campo: Descripción del Curso */}
                <div className="md:col-span-3">
                    <label className="block text-sm font-medium">Descripción</label>
                    <textarea
                        {...register("descripcion", {
                            required: "La descripción es obligatoria",
                        })}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        placeholder="Describe brevemente el contenido del curso..."
                    />
                    {errors.descripcion && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.descripcion.message}
                        </p>
                    )}
                </div>

                {/* Botón de Envío */}
                <div className="flex items-center justify-center col-span-1 md:col-span-3">
                    <Button textBtn={"Guardar"} type={"submit"} />
                </div>
            </form>
        </div>
    );
};

export default RegisterCourse;

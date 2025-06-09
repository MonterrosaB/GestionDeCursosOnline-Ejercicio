import { useState, useEffect } from "react";
import Swal from "sweetalert2";

// Hook personalizado para manejar la lógica de cursos
const useCourse = (methods) => {

    // Estados locales
    const [courses, setCourses] = useState([]);       // Lista de cursos
    const [loading, setLoading] = useState(false);    // Indicador de carga
    const [id, setId] = useState("");                 // ID del curso a actualizar

    // Extraemos funciones y propiedades del hook useForm (react-hook-form)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = methods;

    // Función para obtener todos los cursos de la API
    const fetchCourses = async () => {
        try {
            setLoading(true); // Activar estado de carga
            const response = await fetch("https://retoolapi.dev/6QbyzP/cursos-online");
            if (!response.ok) throw new Error("Error al obtener los cursos");

            const data = await response.json();
            setCourses(data); // Guardar cursos en el estado
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); // Desactivar estado de carga
        }
    };

    // Se ejecuta una sola vez al montar el componente para cargar los cursos
    useEffect(() => {
        fetchCourses();
    }, []);

    // Función para registrar un nuevo curso
    const saveCourse = async (data) => {
        try {
            const response = await fetch("https://retoolapi.dev/6QbyzP/cursos-online", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Error al registrar el curso");

            const res = await response.json();
            console.log("Curso registrado:", res);
            Swal.fire("Éxito", "Curso registrado correctamente", "success");
        } catch (error) {
            console.error("Error al guardar el curso: ", error);
            Swal.fire("Error", error.message, "error");
        } finally {
            reset();          // Limpiar formulario
            fetchCourses();   // Recargar lista de cursos
        }
    };

    // Función para actualizar un curso existente
    const updateCourse = async (data) => {
        try {
            const response = await fetch(`https://retoolapi.dev/6QbyzP/cursos-online/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Error al actualizar el curso");

            const res = await response.json();
            console.log("Curso actualizado:", res);
            Swal.fire("Éxito", "Curso actualizado correctamente", "success");
        } catch (error) {
            console.error("Error al actualizar el curso: ", error);
            Swal.fire("Error", error.message, "error");
        } finally {
            setId(null); // Limpiar ID seleccionado
            reset({      // Limpiar formulario
                curso: "",
                tematica: "",
                instructor: "",
                descripcion: ""
            });
            fetchCourses(); // Recargar lista
        }
    };

    // Función para eliminar un curso
    const deleteCourse = async (id) => {
        // Confirmación con SweetAlert2
        const confirm = await Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción no se puede deshacer.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        });

        if (!confirm.isConfirmed) return;

        try {
            const response = await fetch(`https://retoolapi.dev/6QbyzP/cursos-online/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) throw new Error("Error al eliminar el curso");

            const result = await response.json();
            console.log("Deleted:", result);
            fetchCourses(); // Actualizar la lista
            Swal.fire("Eliminado", "Curso eliminado correctamente", "success");
        } catch (error) {
            console.error("Error al eliminar el curso:", error);
        }
    };

    // Función para cargar un curso en el formulario para su edición
    const handleUpdate = async (data) => {
        try {
            reset({
                curso: data.curso,
                tematica: data.tematica,
                instructor: data.instructor,
                descripcion: data.descripcion
            });
            setId(data.id); // Guardamos el ID para saber que se va a actualizar
        } catch (error) {
            console.error(error);
            Swal.fire("Error", error.message, "error");
        }
    };

    // Decide si se debe guardar o actualizar un curso según el ID
    const handleUserAction = (dataForm) => {
        if (id) {
            updateCourse(dataForm);
        } else {
            saveCourse(dataForm);
        }
    };

    // Valores y funciones que expone el hook
    return {
        courses,          // Lista de cursos
        loading,          // Estado de carga
        register,         // Registro de campos
        handleSubmit: handleSubmit(handleUserAction), // Envío del formulario
        errors,           // Errores de validación
        handleUpdate,     // Preparsar formulario para actualizar
        deleteCourse,     // Eliminar curso
        updateCourse      // Actualizar curso (puede usarse también de forma externa si se desea)
    };
};

export default useCourse;

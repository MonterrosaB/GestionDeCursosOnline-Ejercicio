import Button from "../../../global/components/Button";




const CursoCard = ({ curso, tematica, instructor, descripcion, onEdit, onDelete }) => {

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-blue-700">{curso}</h2>
            <p className="text-sm text-gray-500 mb-1"><strong>Temática:</strong> {tematica}</p>
            <p className="text-sm text-gray-500 mb-3"><strong>Instructor:</strong> {instructor}</p>
            <p className="text-gray-700 text-sm mb-4">{descripcion}</p>

            <div className="flex justify-end gap-3">
                <Button
                    textBtn={"Eliminar"}
                    type={"button"}
                    style="delete"
                    onClick={onDelete}
                />
                <Button
                    textBtn={"Editar"}
                    type={"button"}
                    style="edit"
                    onClick={onEdit}
                />
            </div>
        </div >
    );
};

export default CursoCard;

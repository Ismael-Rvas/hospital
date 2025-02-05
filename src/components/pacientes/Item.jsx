import { obtenerPaciente } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Pacientes({ id }) {
    const paciente = await obtenerPaciente(id)

    if (!paciente) notFound()

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center flex-col">
            <p className="text-2xl font-bold text-center">Nombre: {paciente.nombre}</p>
            <p className="text-gray-700 italic text-center">Fecha Nacimiento: {paciente.fechaNacimiento.toLocaleDateString()}</p>
        </div>
    );
}


import { obtenerMedicina } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Medicinas({ id }) {
    const medicina = await obtenerMedicina(id)

    if (!medicina) notFound()

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-center flex-col">
            <p className="text-2xl font-bold text-center">Nombre: {medicina.nombre}</p>
            <p className="text-gray-700 italic text-center">Via: {medicina.via}</p>
        </div>
    );
}


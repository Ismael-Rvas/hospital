import { obtenerMedicina } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Medicinas({ id }) {
    const medicina = await obtenerMedicina(id)

    if (!medicina) notFound()

    return (
        <div className="flex justify-center items-center mt-10 bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md border border-gray-200">
                <h2 className="text-2xl font-bold text-green-700 text-center mb-4">{medicina.nombre}</h2>
                <p className="text-gray-600 text-lg font-semibold">
                    <span className="font-bold">ID:</span> {medicina.id}
                </p>
                <p className="text-gray-700">
                    <span className="font-bold">Via:</span> {medicina.via}
                </p>
                <p className="text-gray-600 italic mb-4">
              <span className="font-bold">Pacientes:{" "}</span>
              {
                medicina.pacientes.map((paciente) => paciente.nombre).join(", ") //join convierte un array en un string
              }
            </p>
            </div>
        </div>
    );
}


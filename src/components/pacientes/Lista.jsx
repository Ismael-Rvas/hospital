import { obtenerPacientes } from "@/lib/data";
import Link from "next/link";

export async function Medicinas() {
  const pacientes = await obtenerPacientes();

  return (
    <ul className="flex flex-col items-center justify-center mt-10">
      {pacientes.map((paciente) => (
        <li key={paciente.id} className="bg-slate-200 rounded-lg p-4 shadow-md mb-4 w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-2xl font-bold mb-2">
            <Link href={`/pacientes/${paciente.id}`} className="hover:underline">
              {paciente.nombre}
            </Link>
          </h2>
          <p className="text-gray-700 italic mb-2">Fecha de Nacimiento: {paciente.fechaNacimiento.toLocaleDateString()}</p>
          <p className="text-gray-700 italic">Id de planta: {paciente.plantaId}</p>
        </li>
      ))}
    </ul>
  );
}

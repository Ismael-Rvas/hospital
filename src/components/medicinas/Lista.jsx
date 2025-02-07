import Modal from "@/components/Modal";
import { obtenerMedicinas, obtenerPacientes } from "@/lib/data";
import MedicinaInsertar from "./Insertar";
import MedicinaModificar from "./Modificar";
import MedicinaEliminar from "./Eliminar";
import Link from "next/link";

export async function Medicinas() {
  const medicinas = await obtenerMedicinas();
  const pacientes = await obtenerPacientes();

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
        {/* Botón Insertar */}
        <Modal openElement={<p className="inline-block text-white bg-blue-600 p-4 rounded-md cursor-pointer hover:bg-blue-700 transition mb-6">INSERTAR MEDICINA</p>}>
            <MedicinaInsertar pacientes={pacientes} />
        </Modal>
        <ul className="flex flex-col items-center justify-center mt-10 space-y-4">
            {medicinas.map((medicina) => (
                <li key={medicina.id} className="bg-white rounded-lg p-6 shadow-lg mb-4 w-full md:w-1/2 lg:w-1/3 transition-all hover:scale-105 hover:shadow-xl">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                            <Link href={`/medicinas/${medicina.id}`} className="hover:text-blue-600 hover:underline">
                                {medicina.nombre}
                            </Link>
                        </h2>
                        
                        <div className="flex gap-3">
                            {/* Botón Modificar */}
                            <Modal openElement={<p className="inline-block text-white bg-yellow-500 p-2 rounded-md cursor-pointer hover:bg-yellow-600 transition">Modificar</p>}>
                                <MedicinaModificar medicina={medicina} pacientes={pacientes} />
                            </Modal>
                            {/* Botón Eliminar */}
                            <Modal openElement={<p className="inline-block text-white bg-red-600 p-2 rounded-md cursor-pointer hover:bg-red-700 transition">Eliminar</p>}>
                                <MedicinaEliminar medicina={medicina} />
                            </Modal>
                        </div>
                    </div>
                    
                    <p className="text-gray-600 italic mb-4">{medicina.via}</p>
                    <p className ="text-gray-600 italic mb-4">Pacientes: {
                    medicina.pacientes.map((paciente) => paciente.nombre).join(", ") //join convierte un array en un string
                        }</p>
                </li>
            ))}
        </ul>
    </div>
);
}

export default Medicinas;

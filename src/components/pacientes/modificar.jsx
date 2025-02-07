import { modificarPaciente } from "@/lib/actions";
function PacienteModificar({ paciente, plantas }) {
    return (
        <form action={modificarPaciente} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Modificar Paciente</h2>
            <div className="mb-4">
                <input type="hidden" name="id" defaultValue={paciente.id} />
                <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">Nombre</label>
                <input
                    name="nombre"
                    id="nombre"
                    defaultValue={paciente.nombre}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="fechaNacimiento" className="block text-gray-700 font-medium mb-2">Fecha de Nacimiento</label>
                <input
                    name="fechaNacimiento"
                    id="fechaNacimiento"
                    defaultValue={new Date(paciente.fechaNacimiento).toISOString().split('T')[0]}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                />
            </div>
            <select name="plantaId" defaultValue={paciente.plantaId} key={paciente.plantaId}>
                {
                    plantas.map(planta =>
                        <option key={planta.id} value={planta.id}>
                            {planta.nombre}
                        </option>
                    )
                }
            </select>
            <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
                Modificar Paciente
            </button>
        </form>
    );
}
export default PacienteModificar;
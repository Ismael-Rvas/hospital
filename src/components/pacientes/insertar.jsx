import { insertarPaciente } from "@/lib/actions";
function PacienteInsertar() {
    return (
        <form action={insertarPaciente} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Agregar Nuevo Paciente</h2>
          
            <div className="mb-4">
                <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">Nombre</label>
                <input
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre del paciente"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                    required
                />
            </div>
       
            <div className="mb-4">
                <label htmlFor="fechaNacimiento" className="block text-gray-700 font-medium mb-2">Fecha de Nacimiento</label>
                <input
                    type="date"
                    name="fechaNacimiento"
                    id="fechaNacimiento"
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
                    required
                />
            </div>
           
            <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Insertar Paciente
            </button>
        </form>
    );
}
export default PacienteInsertar;
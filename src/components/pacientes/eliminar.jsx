import { eliminarPaciente } from "@/lib/actions";
function PacienteEliminar({ paciente }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h1 className="text-2xl text-red-600">
        ¿Desea eliminar los siguentes datos
      </h1>
      <p className="mb-4">Nombre: {paciente.nombre}</p>
      <p className="mb-6">
        Fecha de Nacimiento:{" "}
        <span className="font-semibold">
          {new Date(paciente.fechaNacimiento).toLocaleDateString()}
        </span>
      </p>

      <form action={eliminarPaciente}>
        <input type="hidden" name="id" defaultValue={paciente.id} />
        <button
          type="submit"
          className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Eliminar
        </button>
      </form>
    </div>
  );
}
export default PacienteEliminar;

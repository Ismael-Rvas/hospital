"use client";
import { insertarMedicina } from "@/lib/actions";
import { useEffect, useId, useActionState } from "react";
import { toast } from "sonner";

function MedicinaInsertar({ pacientes }) {
  
  const formId = useId();
  const [state, action, pending] = useActionState(insertarMedicina, {});
  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
      document.getElementById(formId)?.closest("dialog")?.close();
    }
  }, [state]);

  return (
    <form
      action={action}
      id={formId}
      className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
        Agregar Nueva Medicina
      </h2>
      <div className="mb-4">
        <label
          htmlFor="nombre"
          className="block text-gray-700 font-medium mb-2"
        >
          Nombre
        </label>
        <input
          name="nombre"
          id="nombre"
          placeholder="Nombre de la medicina"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="via" className="block text-gray-700 font-medium mb-2">
          Via
        </label>
        <input
          name="via"
          id="via"
          placeholder="via"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
          required
        />
      </div>
      <div className="mb-6">
        {pacientes.map((paciente) => (
          <label key={paciente.id}>
            <input
              type="checkbox"
              name={`paciente${paciente.id}`} //esto seria que salga el id del estudiante en el checkbox
              value={paciente.nombre}
              className="mr-2"
            />
            {paciente.nombre}
          </label>
        ))}
      </div>
      <button
        disabled={pending}
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {pending ? "Insertando..." : "Insertar Medicina"}
      </button>
    </form>
  );
}
export default MedicinaInsertar;

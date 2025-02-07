"use client";
import { useEffect, useId, useActionState } from "react";
import { modificarMedicina } from "@/lib/actions";
import { toast } from "sonner";
function MedicinaModificar({ medicina, pacientes }) {
  const formId = useId();
  const [state, action, pending] = useActionState(modificarMedicina, {});
  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
      document.getElementById(formId)?.closest("dialog")?.close();
    }
  }, [state]);
  const IDs = medicina.pacientes.map((paciente) => paciente.id);

  return (
    <form action={action} id={formId} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Modificar Medicina</h2>
      <div className="mb-4">
        <input type="hidden" name="id" defaultValue={medicina.id} />
        <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">Nombre</label>
        <input
          name="nombre"
          id="nombre"
          defaultValue={medicina.nombre}
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="via" className="block text-gray-700 font-medium mb-2">Via</label>
        <input
          name="via"
          id="via"
          defaultValue={medicina.via}
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-all"
        />
      </div>
      <div className="mb-6">
        {pacientes.map((paciente) => (
          <label key={paciente.id} className="block text-gray-700 font-medium mb-2">
            <input
              type="checkbox"
              name={`paciente${paciente.id}`}
              value={paciente.nombre}
              defaultChecked={IDs.includes(paciente.id)}
              className="mr-2"
            />
            {paciente.nombre}
          </label>
        ))}
      </div>
      <button
        className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500"
        disabled={pending}
      >
        {pending ? "Modificando..." : "Modificar Medicina"}
      </button>
    </form>
  );
}
export default MedicinaModificar;

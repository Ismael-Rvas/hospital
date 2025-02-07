"use client";
import { eliminarMedicina } from "@/lib/actions";
import { useEffect, useId, useActionState } from "react";
import { toast } from "sonner";
import {useRouter} from "next/navigation";

function MedicinaEliminar({ medicina }) {
  const router = useRouter();
  const formId = useId();
  const [state, action, pending] = useActionState(eliminarMedicina, {});
  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
      document.getElementById(formId)?.closest("dialog")?.close();
      router.refresh();
    }
  }, [state]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h1 className="text-2xl text-red-600">
        ¿Desea eliminar los siguentes datos
      </h1>
      <p className="mb-4">MEDICINA: {medicina.nombre}</p>
      <p className="mb-6">VIA: {medicina.via}</p>

      <form action={action} id={formId}>
        <input type="hidden" name="id" defaultValue={medicina.id} />
        <button
          disabled={pending}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {pending ? "Eliminando Medicina..." : "Eliminar"}
        </button>
      </form>
    </div>
  );
}
export default MedicinaEliminar;

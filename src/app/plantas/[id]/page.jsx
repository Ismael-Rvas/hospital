import Planta from "@/components/Plantas/Item";
import Link from "next/link";
import { Suspense } from "react";

async function PaginaPlanta({ params, searchParams }) {
  const { id } = await params;

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold text-center text-indigo-600">
        DATOS DE PLANTA {id}
      </h1>
      <Link
        href={"/"}
        className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition duration-150 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Volver atras
      </Link>
      <Suspense
        fallback={
          <p className="text-blue-500 text-2xl font-bold text-center animate-pulse">
            Obteniendo datos...
          </p>
        }
      >
        <Planta id={id} />
      </Suspense>
    </div>
  );
}

export default PaginaPlanta;

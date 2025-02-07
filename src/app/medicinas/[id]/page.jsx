import Medicina from "@/components/Medicinas/Item";
import Link from "next/link";
import { Suspense } from "react";

async function PaginaMedicinas({ params, searchParams }) {
  const { id } = await params;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col text-center justify-center bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
          DATOS DE MEDICINAS {id}
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
          <Medicina id={id} />
        </Suspense>
      </div>
    </div>
  );
}

export default PaginaMedicinas;

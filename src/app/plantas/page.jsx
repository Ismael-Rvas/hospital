import Plantas from "@/components/plantas/Lista";
import Link from "next/link";
import { Suspense } from "react";


function PaginaPlantas() {
    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-center text-indigo-600">LISTA DE PLANTAS</h1>
            <div className="flex justify-center mt-5">
                <Link
                    href={"/"}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition duration-150 shadow-md"
                >
                    Volver atras
                </Link>
            </div>
            <Suspense
                fallback={
                    <div className="text-center text-gray-500">
                        Obteniendo plantas ...
                    </div>
                }
            >
                <Plantas />
            </Suspense>
        </div>
    )
}

export default PaginaPlantas;
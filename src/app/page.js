import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300" />
          <Link
            href="/medicinas"
            className="relative flex items-center justify-center px-6 py-3 text-white text-lg font-semibold rounded-xl shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:scale-105 transition-transform duration-300"
          >
            MEDICINAS
          </Link>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300" />
          <Link
            href="/pacientes"
            className="relative flex items-center justify-center px-6 py-3 text-white text-lg font-semibold rounded-xl shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:scale-105 transition-transform duration-300"
          >
            PACIENTES
          </Link>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-300" />
          <Link
            href="/plantas"
            className="relative flex items-center justify-center px-6 py-3 text-white text-lg font-semibold rounded-xl shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:scale-105 transition-transform duration-300"
          >
            PLANTAS
          </Link>
        </div>
      </div>
    </div>
  );
}

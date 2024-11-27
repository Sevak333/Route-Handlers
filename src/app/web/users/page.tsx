import Link from "next/link";
import { getAllUsers } from "../../_helpers/api_web";

export default async function Users() {
    const users = await getAllUsers();

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 p-6">
            <h1 className="text-5xl font-extrabold text-center text-yellow-400 mb-12">
                User 
            </h1>

            <div className="flex justify-center mb-8">
                <Link
                    href="/web/users/add"
                    className="px-6 py-3 bg-green-500 text-gray-900 font-bold rounded-lg shadow-md hover:bg-green-400 transition-all duration-300"
                >
                    Add New User
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-gray-800 bg-opacity-75 border border-gray-700 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 p-6"
                    >
                        <h2 className="text-2xl font-bold text-yellow-300 mb-2">
                            {user.name}
                        </h2>
                        <p className="text-md text-gray-400">
                            <span className="font-medium">ID:</span> {user.id}
                        </p>
                        <p className="text-md text-gray-400">
                            <span className="font-medium">Age:</span> {user.age}
                        </p>
                        <p className="text-md text-gray-400">
                            <span className="font-medium">Salary:</span> $
                            {user.salary.toLocaleString()}
                        </p>

                        <div className="flex justify-between mt-6">
                            <Link
                                href={`/web/users/edit/${user.id}`}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300"
                            >
                                Edit
                            </Link>
                            <Link
                                href={`/web/users/delete/${user.id}`}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-500 transition-all duration-300"
                            >
                                Delete
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}



import { createUser, getUser, updateUser } from "@/app/_helpers/api_web";
import { notFound } from "next/navigation";

interface IProps {
    params: { id: number };
}

export default async function Edit({ params }: IProps) {
    const user = await getUser(params.id);
    if (!user) {
        notFound();
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-800 text-gray-100">
            <div className="bg-green-700 p-8 rounded-lg shadow-xl w-full max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-gray-100 mb-6">Edit User</h1>
                <form className="space-y-6" action={updateUser.bind(null, params.id)}>
                    {/* Name input */}
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-100">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            defaultValue={user.name}
                            className="mt-2 p-3 w-full rounded-lg bg-green-600 border border-green-500 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter user's name"
                        />
                    </div>

                    {/* Age input */}
                    <div>
                        <label htmlFor="age" className="block text-lg font-medium text-gray-100">Age</label>
                        <input
                            id="age"
                            name="age"
                            type="number"
                            defaultValue={user.age}
                            className="mt-2 p-3 w-full rounded-lg bg-green-600 border border-green-500 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter user's age"
                        />
                    </div>

                    {/* Salary input */}
                    <div>
                        <label htmlFor="salary" className="block text-lg font-medium text-gray-100">Salary</label>
                        <input
                            id="salary"
                            name="salary"
                            type="number"
                            defaultValue={user.salary}
                            className="mt-2 p-3 w-full rounded-lg bg-green-600 border border-green-500 text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter user's salary"
                        />
                    </div>

                    {/* Submit button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-yellow-500 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

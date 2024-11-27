import { createUser } from "@/app/_helpers/api_web";

export default function Add() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white">
            <div className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 p-8 rounded-lg shadow-xl w-full max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-white mb-6">Add User</h1>
                <form action={createUser} className="space-y-6">
                    {/* Name input */}
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-white">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="mt-2 p-3 w-full rounded-lg bg-teal-800 border border-teal-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                            placeholder="Enter user's name"
                        />
                    </div>

                    {/* Age input */}
                    <div>
                        <label htmlFor="age" className="block text-lg font-medium text-white">Age</label>
                        <input
                            id="age"
                            name="age"
                            type="number"
                            className="mt-2 p-3 w-full rounded-lg bg-teal-800 border border-teal-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                            placeholder="Enter user's age"
                        />
                    </div>

                    {/* Salary input */}
                    <div>
                        <label htmlFor="salary" className="block text-lg font-medium text-white">Salary</label>
                        <input
                            id="salary"
                            name="salary"
                            type="number"
                            className="mt-2 p-3 w-full rounded-lg bg-teal-800 border border-teal-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                            placeholder="Enter user's salary"
                        />
                    </div>

                    {/* Submit button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

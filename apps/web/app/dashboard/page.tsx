'use client';

export default function Dashboard() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center mb-8">Welcome to Your Dashboard</h1>
                <div className="space-y-4">
                    <p className="text-lg">You have successfully signed up and logged in!</p>
                    <p className="text-gray-600">This is your dashboard </p>
                </div>
            </div>
        </div>
    );
}

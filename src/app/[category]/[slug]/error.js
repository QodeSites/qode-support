'use client';

export default function Error() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
                Error Loading Article
            </h2>
            <p className="text-gray-600">
                We encountered an error while loading this article. Please try again later.
            </p>
        </div>
    );
}
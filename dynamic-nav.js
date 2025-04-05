document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
    <nav class="bg-white shadow-lg">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-7">
                    <a href="index.html" class="flex items-center py-4 px-2">
                        <span class="font-semibold text-gray-500 text-lg">Dream Homes</span>
                    </a>
                </div>
                <div class="flex items-center space-x-3">
                    <a href="index.html" class="py-2 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Home</a>
                    <a href="house-details.html" class="py-2 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Listings</a>
                    <a href="booking.html" class="py-2 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Contact</a>
                </div>
            </div>
        </div>
    </nav>
    `;

    const backNavHTML = `
    <nav class="bg-white shadow-lg">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-7">
                    <a href="index.html" class="flex items-center py-4 px-2">
                        <span class="font-semibold text-gray-500 text-lg">Back to Listings</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
    `;

    // Insert navigation based on the current page
    if (window.location.pathname.includes('index.html')) {
        document.body.insertAdjacentHTML('afterbegin', navHTML);
    } else {
        document.body.insertAdjacentHTML('afterbegin', backNavHTML);
    }
});
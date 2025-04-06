// Main JavaScript for Dream Homes real estate website

// Authentication check
function checkAuth() {
    const publicPages = ['login.html', 'index.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (!localStorage.getItem('dreamhomes_auth') && 
        !publicPages.includes(currentPage)) {
        const returnUrl = encodeURIComponent(window.location.pathname);
        window.location.href = `login.html?return=${returnUrl}`;
    }
}

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    // Initialize property filter functionality
    initPropertyFilters();
    
    // Initialize form validation
    initFormValidation();
    
    // Initialize image gallery
    initImageGallery();
});

/**
 * Initialize property filters
 */
function initPropertyFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const propertyCards = document.querySelectorAll('.property-card');
    
    if (filterButtons.length && propertyCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');
                
                // Update active state
                filterButtons.forEach(btn => btn.classList.remove('bg-blue-600', 'text-white'));
                this.classList.add('bg-blue-600', 'text-white');
                
                // Filter properties
                propertyCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

/**
 * Initialize form validation
 */
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    if (forms.length) {
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                let isValid = true;
                const requiredFields = this.querySelectorAll('[required]');
                
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.classList.add('border-red-500');
                    } else {
                        field.classList.remove('border-red-500');
                    }
                });
                
                if (!isValid) {
                    e.preventDefault();
                    alert('Please fill in all required fields.');
                }
            });
        });
    }
}

/**
 * Initialize image gallery
 */
function initImageGallery() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const modal = document.getElementById('image-modal');
    
    if (galleryImages.length && modal) {
        galleryImages.forEach(image => {
            image.addEventListener('click', function() {
                const modalImg = modal.querySelector('img');
                modalImg.src = this.src;
                modalImg.alt = this.alt;
                modal.classList.remove('hidden');
            });
        });
        
        // Close modal
        modal.querySelector('.close-modal').addEventListener('click', function() {
            modal.classList.add('hidden');
        });
    }
}

/**
 * Format credit card input
 */
function formatCardNumber(input) {
    // Remove all non-digit characters
    let value = input.value.replace(/\D/g, '');
    
    // Add space after every 4 digits
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    
    // Update input value
    input.value = value;
}

/**
 * Format expiry date input
 */
function formatExpiryDate(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    
    input.value = value;
}

// Helper function to simulate API calls
async function simulateAPIRequest(data) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                success: true,
                data: {
                    bookingId: 'DH-' + Math.floor(100000 + Math.random() * 900000),
                    timestamp: new Date().toISOString()
                }
            });
        }, 1500);
    });
}
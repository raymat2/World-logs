// Ensure the DOM content is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Select all buttons with class 'view'
    const viewButtons = document.querySelectorAll(".btn.view");

    // Loop through each button and add click event listener
    viewButtons.forEach(button => {
        // Check if the button's parent element contains the specific "Bank Of America" text
        const bankName = button.parentElement.querySelector("p").textContent.trim();
        
        if (bankName === "Bank Of America") {
            button.addEventListener("click", function() {
                // Redirect to the Bank of America Accounts page
                window.location.href = "/bank_of_america_page.html";
                // Update the URL above with the actual path to your Bank of America Accounts page
            });
        }
    });
});



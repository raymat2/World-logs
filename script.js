document.addEventListener("DOMContentLoaded", function () {
    const addBalanceBtn = document.getElementById("addBalanceBtn");

    addBalanceBtn.addEventListener("click", function () {
        window.location.href = "/make-deposit.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select the button using its unique ID
    const bankOfAmericaBtn = document.getElementById("bankOfAmericaBtn");

    // Check if the button exists and add the click event
    if (bankOfAmericaBtn) {
        bankOfAmericaBtn.addEventListener("click", function () {
            // Redirect to the Bank of America details page
            window.location.href = "/bank_of_america.html"; // Adjust the path as needed
        });
    }
});

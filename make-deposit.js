document.addEventListener("DOMContentLoaded", function () {
    const paymentMethodSelect = document.getElementById("paymentMethod");
    const payBtn = document.getElementById("payBtn");
    const amountInput = document.getElementById("amount");

    // Populate payment method options
    paymentMethodSelect.addEventListener("click", function () {
        if (paymentMethodSelect.options.length === 1) {
            paymentMethodSelect.innerHTML = `
                <option value="">Choose Payment method</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="usdt-trc20">USDT TRC20</option>
            `;
        }
    });

    // Redirect based on selected payment method
    payBtn.addEventListener("click", function () {
        const selectedPaymentMethod = paymentMethodSelect.value;
        const amount = amountInput.value;
        
        if (!amount) {
            alert("Please enter an amount.");
            return;
        }

        if (selectedPaymentMethod === "bitcoin") {
            window.location.href = `bitcoin-payment.html?amount=${amount}`;
        } else if (selectedPaymentMethod === "usdt-trc20") {
            window.location.href = `usdt-payment.html?amount=${amount}`;
        } else {
            alert("Please select a payment method to proceed.");
        }
    });
});


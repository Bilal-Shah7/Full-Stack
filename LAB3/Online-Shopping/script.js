let order = {
    product: "",
    price: 0,
    quantity: 0,
    customerType: ""
};

function calculateOrder() {
    order.product = document.getElementById("product").value;
    order.price = Number(document.getElementById("price").value);
    order.quantity = Number(document.getElementById("quantity").value);
    order.customerType = document.getElementById("customerType").value;

    let subtotal = order.price * order.quantity;

    let discountRate = 0;

    if (order.customerType === "member") {
        discountRate = 0.10;
    }

    if (subtotal >= 200000) {
        discountRate += 0.05;
    }

    if (subtotal >= 500000) {
        discountRate += 0.05;
    }

    let discountAmount = subtotal * discountRate;
    let amountAfterDiscount = subtotal - discountAmount;

    let delivery;

    if (subtotal >= 200000) {
        delivery = 0;
    } else {
        delivery = 1500;
    }

    let finalAmount = amountAfterDiscount + delivery;

    document.getElementById("result").innerHTML = `
        <div class="summary">
            <h4>Order Summary</h4>

            <div class="summary-row">
                <span>Product</span>
                <strong>${order.product}</strong>
            </div>

            <div class="summary-row">
                <span>Quantity</span>
                <strong>${order.quantity}</strong>
            </div>

            <div class="summary-row">
                <span>Unit Price</span>
                <strong>Rs. ${order.price.toLocaleString()}</strong>
            </div>

            <div class="summary-row">
                <span>Subtotal</span>
                <strong>Rs. ${subtotal.toLocaleString()}</strong>
            </div>

            <div class="summary-row">
                <span>Discount</span>
                <strong>${(discountRate * 100).toFixed(0)}%</strong>
            </div>

            <div class="summary-row">
                <span>Discount Amount</span>
                <strong>Rs. ${discountAmount.toLocaleString()}</strong>
            </div>

            <div class="summary-row">
                <span>Delivery</span>
                <strong>${delivery === 0 ? "Free" : "Rs. " + delivery.toLocaleString()}</strong>
            </div>

            <div class="summary-row final">
                <span>Final Amount</span>
                <span>Rs. ${finalAmount.toLocaleString()}</span>
            </div>
        </div>
    `;
}
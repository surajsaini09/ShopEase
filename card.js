document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.querySelector(".cart a");
    cartIcon.addEventListener("click", () => {
        alert("Shopping cart clicked!");
    });
});
function calcularTotal() {
  let total = 0;

  document.querySelectorAll("#materiais tbody tr").forEach((row) => {
    const priceCell = row.querySelector("[data-price]");
    const checkbox = row.querySelector('input[type="checkbox"]');

    const price = parseFloat(priceCell?.dataset.price || "0");
    const checked = !!checkbox?.checked;

    if (checked) total += price;
  });

  document.getElementById("total").innerText = total.toFixed(2);
}

document.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
  cb.addEventListener("change", calcularTotal);
});

calcularTotal();

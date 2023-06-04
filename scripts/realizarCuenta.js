const realizarCuenta = () => {
  const cantidadInput = document.querySelector(".inputCantidad");
  const categoriaSelect = document.querySelector(".selectCategoria");
  const totalPagar = document.querySelector(".totalPagar span");

  const cantidad = parseInt(cantidadInput.value);
  const categoria = categoriaSelect.value;

  let total = 0;
  let subtotal = 0;
  let descuento = 0;
  if (categoria === "Estudiante") {
    subtotal = cantidad * 200;
    descuento = cantidad * 200 * 0.8;
    total = subtotal - descuento;
  } else if (categoria === "Traine") {
    subtotal = cantidad * 200;
    descuento = cantidad * 200 * 0.5;
    total = subtotal - descuento;
  } else if (categoria === "Junior") {
    subtotal = cantidad * 200;
    descuento = cantidad * 200 * 0.15;
    total = subtotal - descuento;
  }

  totalPagar.textContent = "$ " + total.toFixed(2);
};

const borrarFormulario = () => {
  const inputs = document.querySelectorAll("input");
  const select = document.querySelector("select");
  const totalPagar = document.querySelector(".totalPagar span");

  // Limpiar los valores de los inputs
  inputs.forEach((input) => {
    input.value = "";
  });

  // Restablecer el valor predeterminado del select
  select.selectedIndex = 0;

  // Restablecer el total a pagar
  totalPagar.textContent =
    "Total a Pagar: Ingrese cantidad y categoria, por favor";
};

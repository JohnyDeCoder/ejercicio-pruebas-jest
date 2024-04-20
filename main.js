function registrarVenta(productos) {
  let total = 0;
  let vendioPalomitas = false;

  productos.map(
    (producto) => (
      (total += producto.precio),
      producto.producto.toLowerCase() === "palomitas"
        ? (vendioPalomitas = true)
        : vendioPalomitas
    )
  );

  return { total, vendioPalomitas };
}

module.exports = registrarVenta;

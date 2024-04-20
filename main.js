// function registrarVenta(productos) {
//   let total = 0;
//   let vendioPalomitas = false;

//   productos.map(
//     (producto) => (
//       (total += producto.precio),
//       producto.producto.toLowerCase() === "palomitas"
//         ? (vendioPalomitas = true)
//         : vendioPalomitas
//     )
//   );

//   return { total, vendioPalomitas };
// }

// module.exports = registrarVenta;

class Cine {
  constructor() {
    this.total = 0
    this.venderionPalomitas = false
    this.listaProductos = []
  }

  registrarVenta(producto, precio) {
    this.listaProductos.push({
      producto: producto,
      precio: precio
    })
    if (this.sonPalomitas(producto)) this.setSonPalomitas = true
    this.total += precio
  }

  sonPalomitas(producto) {
    return producto.toLowerCase() === "palomitas"
  }

  totalSobre100() {
    return this.getTotal > 100
  }

  get getTotal() {
    return this.total
  }

  get getSonPalomitas() {
    return this.venderionPalomitas
  }

  set setSonPalomitas(condicional) {
    this.venderionPalomitas = condicional
  }
}

module.exports = { Cine }
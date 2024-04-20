// const { Cine } = require("../main.js");

// test("El monto total es más de 100 pesos.", () => {
//   let { total } = registrarVenta([
//     { producto: "bon bon", precio: 10 },
//     { producto: "refresco premium", precio: 100 },
//   ]);
//   expect(total).toBeGreaterThan(100);
// });

// test("Se vendieron palomitas", () => {
//   let { vendioPalomitas } = registrarVenta([
//     { producto: "palomitas", precio: 50 },
//     { producto: "bon bon", precio: 10 },
//   ]);
//   expect(vendioPalomitas).toBe(true);
// });

const { Cine } = require('../main');

describe('Clase Cine', () => {
  beforeEach(() => {
    const cine = new Cine()
    this.cine = cine
  });

  it('Debería calcular el total correctamente', () => {
    this.cine.registrarVenta('entrada', 50)
    this.cine.registrarVenta('bebida', 20)

    expect(this.cine.getTotal).toBe(70)
  })

  it('Debería indicar si se vendieron palomitas', () => {
    this.cine.registrarVenta('palomitas', 30)

    expect(this.cine.getSonPalomitas).toBe(true)
  });

  it('Debería indicar si la compra superó los $100', () => {
    this.cine.registrarVenta('entrada', 50)
    this.cine.registrarVenta('bebida', 60)

    expect(this.cine.totalSobre100()).toBe(true);
  });
});

const registrarVenta = require("../main.js");

test("El monto total es más de 100 pesos.", () => {
  let { total } = registrarVenta([
    { producto: "bon bon", precio: 10 },
    { producto: "refresco premium", precio: 100 },
  ]);
  expect(total).toBeGreaterThan(100);
});

test("Se vendieron palomitas", () => {
  let { vendioPalomitas } = registrarVenta([
    { producto: "palomitas", precio: 50 },
    { producto: "bon bon", precio: 10 },
  ]);
  expect(vendioPalomitas).toBe(true);
});

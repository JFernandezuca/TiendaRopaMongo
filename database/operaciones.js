const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();

    const db = client.db("tienda_ropa");

    const usuarios = db.collection("usuarios");
    const marcas = db.collection("marcas");
    const prendas = db.collection("prendas");
    const ventas = db.collection("ventas");

    await usuarios.insertOne({
    nombre: "María López",
    correo: "maria@gmail.com",
    telefono: "77777777",
    rol: "cliente"
});

await marcas.insertOne({
    nombre: "Adidas",
    pais: "Alemania"
});

await prendas.insertOne({
    nombre: "Pantalón Deportivo",
    marca: "Adidas",
    precio: 25000,
    stock: 40
});

await ventas.insertOne({
    fecha: "2025-06-12",
    prenda: "Pantalón Deportivo",
    marca: "Adidas",
    cantidad: 1,
    total: 25000
});

// INSERTAR VARIOS USUARIOS
await usuarios.insertMany([
  {
    nombre: "Carlos Ramírez",
    correo: "carlos@gmail.com",
    telefono: "66666666",
    rol: "cliente"
  },
  {
    nombre: "Ana Vargas",
    correo: "ana@gmail.com",
    telefono: "55555555",
    rol: "administrador"
  }
]);

// ACTUALIZAR UN USUARIO
await usuarios.updateOne(
  { nombre: "Juan Pérez" },
  {
    $set: {
      telefono: "99999999"
    }
  }
);

// ELIMINAR UNA MARCA
await marcas.deleteOne(
  { nombre: "Under Armour" }
);

// CONSULTA 1:
// Obtener la cantidad vendida de prendas para una fecha específica.

const ventasPorFecha = await ventas.find({
  fecha: "2025-06-12"
}).toArray();

console.log("Ventas del 2025-06-12:");
console.log(ventasPorFecha);

// CONSULTA 2:
// Obtener todas las marcas que tienen al menos una venta.

const marcasConVentas = await ventas.distinct("marca");

console.log("Marcas con al menos una venta:");
console.log(marcasConVentas);

// CONSULTA 3:
// Obtener las prendas vendidas y su cantidad restante en stock.

const prendasVendidas = await prendas.find().toArray();

console.log("Prendas y stock disponible:");

prendasVendidas.forEach(prenda => {
  console.log(
    `${prenda.nombre} - Stock disponible: ${prenda.stock}`
  );
});

// CONSULTA 4:
// Obtener las 5 marcas más vendidas y la cantidad total vendida.

const topMarcas = await ventas.aggregate([
  {
    $group: {
      _id: "$marca",
      totalVentas: { $sum: "$cantidad" }
    }
  },
  {
    $sort: {
      totalVentas: -1
    }
  },
  {
    $limit: 5
  }
]).toArray();

console.log("Top 5 marcas más vendidas:");
console.log(topMarcas);

    console.log(await usuarios.countDocuments());
    console.log(await marcas.countDocuments());
    console.log(await prendas.countDocuments());
    console.log(await ventas.countDocuments());

  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

main();
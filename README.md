# Proyecto Tienda de Ropa MongoDB

## Descripción

Este proyecto consiste en el desarrollo de una base de datos NoSQL utilizando MongoDB para la gestión de una tienda de ropa. La base de datos permite administrar información relacionada con usuarios, marcas, prendas y ventas.

Además, se implementan operaciones básicas de creación, consulta, actualización y eliminación de datos (CRUD), así como consultas específicas para el análisis de ventas.

## Tecnologías Utilizadas

* MongoDB
* MongoDB Compass
* Node.js
* JavaScript
* GitHub
* Markdown

## Estructura del Proyecto

```text
TiendaRopaMongo
│
├── database
│   └── operaciones.js
│
├── ejemplos-json
│   ├── usuario.json
│   ├── marca.json
│   ├── prenda.json
│   └── venta.json
│
├── package.json
└── README.md
```

## Colecciones Implementadas

### Usuarios

Almacena la información de los clientes y administradores de la tienda.

### Marcas

Contiene las marcas de ropa disponibles para la venta.

### Prendas

Registra las prendas disponibles, su precio y cantidad en inventario.

### Ventas

Almacena las ventas realizadas, incluyendo fecha, marca, prenda y cantidad vendida.

## Operaciones Implementadas

* insertOne()
* insertMany()
* updateOne()
* deleteOne()

## Consultas Implementadas

1. Obtener la cantidad vendida de prendas por una fecha específica.
2. Obtener las marcas que tienen al menos una venta registrada.
3. Obtener las prendas vendidas y su cantidad disponible en inventario.
4. Obtener las cinco marcas más vendidas.

## Integrante

* Johnny Fernandez Martinez

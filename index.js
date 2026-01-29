require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const Bag = require("./models/bag");

const app = express();

// MIDDLEWARES INICIALES
app.use(cors({ origin: "https://ladyvalentina.vercel.app/" }));
app.use(express.json()); // (¡Obligatorio antes que Morgan!)

// Token 'body'
morgan.token("body", (req) => JSON.stringify(req.body));
// Morgan con formato personalizado
app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms :body"),
);

// Conexión a MongoDB
mongoose.set("strictQuery", false);
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("Conectado a MongoDB Atlas"))
	.catch((err) => console.error("Error conectando a MongoDB:", err.message));

// RUTAS

app.get("/api/health", (req, res) => {
	// "Despertador"
	res.send("Servidor activo");
});

// Obtener todos los productos
app.get("/api/products", (req, res, next) => {
	Bag.find({})
		.then((bags) => res.json(bags))
		.catch((error) => next(error));
});

// Crear un producto nuevo (probar con Postman)
app.post("/api/products", (req, res, next) => {
	const body = req.body;

	const bag = new Bag({
		name: body.name,
		price: body.price,
		category: body.category,
		imageUrl: body.imageUrl,
	});

	bag
		.save()
		.then((savedBag) => res.json(savedBag))
		.catch((error) => next(error));
});

// MIDDLEWARES FINALES

// Manejador de rutas inexistentes
const unknownEndpoint = (req, res) => {
	res.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint);

// Manejador de errores (VA AL FINAL DE TODO, dejar todas las rutas antes)
const errorHandler = (error, req, res, next) => {
	console.log(error.message);

	if (error.name === "CastError") {
		return res.status(400).send({ error: "malformatted id" });
	} else if (error.name === "ValidationError") {
		return res.status(400).json({ error: error.message });
	}

	next(error);
};
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Servidor corriendo en puerto ${PORT}`);
});

# Lady Valentina Backend

Este es el servidor backend para la tienda de carteras **Lady Valentina**. Construido con Node.js y Express, se encarga de gestionar el catálogo de productos y la persistencia de datos en MongoDB Atlas.

## Tecnologías utilizadas

- **Node.js** - Entorno de ejecución.
- **Express** - Framework para el servidor web.
- **MongoDB Atlas** - Base de datos NoSQL en la nube.
- **Mongoose** - ODM para el modelado de datos.
- **Morgan** - Middleware para el registro (logging) de solicitudes HTTP.
- **CORS** - Intercambio de recursos de origen cruzado.
- **Dotenv** - Manejo de variables de entorno.

## Instalación y Configuración

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/<tu_usuario>/lady-valentina-backend.git
   ```

2. **Instala dependencias:**

   ```bash
   npm install
   ```

3. **Configura las variables de entorno:** Crea un archivo **.env** en la raíz del proyecto y agrega tus credenciales.

   ```.env
   MONGODB_URI=tu_uri_de_mongodb_atlas
   PORT=3001
   ```

4. **Inicia el servidor en modo desarrollo:**
   ```bash
   npm run dev
   ```

## Endpoints de la API

| Método   | Endpoint      | Descripción                           |
| -------- | ------------- | ------------------------------------- |
| **GET**  | /api/health   | Verifica si el servidor está activo   |
| **GET**  | /api/products | Obtiene la lista completa de carteras |
| **POST** | /api/products | Agrega una nueva cartera al catálogo  |

## Ejemplo de objeto Bag (JSON)

```json
{
	"name": "Cartera Valentina Gold",
	"price": 4500,
	"category": "cartera",
	"imageUrl": "[https://url-de-la-imagen.com](https://url-de-la-imagen.com)"
}
```

---

## Licencia

Florencia Mabel Rodriguez

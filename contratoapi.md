# Contrato API - CRUD de Votos

Este documento describe los endpoints de la API para el sistema CRUD de Votos.

---

## Base URL


---

## Endpoints

### **1. Obtener todos los temas**

#### `GET /`
Retorna una lista de todos los temas ordenados por cantidad de votos.

- **Respuesta exitosa (200):**
    ```json
    [
        {
            "id": 1,
            "tema": "Tema ejemplo",
            "url": "https://example.com",
            "votos": 5
        },
        {
            "id": 2,
            "tema": "Otro tema",
            "url": "https://otroejemplo.com",
            "votos": 2
        }
    ]
    ```

---

### **2. Agregar un nuevo tema**

#### `POST /add`
Crea un nuevo tema con su enlace.

- **Body (JSON):**
    ```json
    {
        "tema": "Nuevo tema",
        "url": "https://nuevotema.com"
    }
    ```

- **Respuesta exitosa (302):** Redirige a la página principal.

- **Errores:**
    - `500`: Error al agregar el tema.

---

### **3. Votar por un tema**

#### `POST /vote/:id`
Incrementa en 1 el contador de votos de un tema.

- **Parámetros de URL:**
    - `id`: ID del tema.

- **Respuesta exitosa (302):** Redirige a la página principal.

- **Errores:**
    - `500`: Error al votar por el tema.

---

### **4. Eliminar un tema**

#### `POST /delete/:id`
Elimina un tema de la base de datos.

- **Parámetros de URL:**
    - `id`: ID del tema.

- **Respuesta exitosa (302):** Redirige a la página principal.

- **Errores:**
    - `500`: Error al eliminar el tema.

---

### **5. Actualizar un tema**

#### `PUT /Update/:id`
Actualiza el nombre y el enlace de un tema.

- **Parámetros de URL:**
    - `id`: ID del tema.

- **Body (JSON):**
    ```json
    {
        "tema": "Nuevo nombre del tema",
        "url": "https://nuevoenlace.com"
    }
    ```

- **Respuesta exitosa (302):** Redirige a la página principal.

- **Errores:**
    - `500`: Error al actualizar el tema.

---

## Ejemplo de flujo

1. **Agregar un tema:** 
   Enviar un `POST` a `/add` con el tema y la URL.
2. **Votar por un tema:** 
   Enviar un `POST` a `/vote/:id` con el ID del tema.
3. **Actualizar un tema:** 
   Enviar un `PUT` a `/Update/:id` con el nuevo tema y URL.
4. **Eliminar un tema:** 
   Enviar un `POST` a `/delete/:id` con el ID del tema.

---

## Notas

- **Formato de datos:** Todos los datos enviados y recibidos deben estar en formato JSON.
- **Errores:** La API retorna errores con un código de estado HTTP apropiado y un mensaje explicativo.
- **Validación:** Asegúrate de validar los datos enviados en cada solicitud.

---

## Cambios futuros

- Implementar soporte para autenticación y autorización.
- Añadir validaciones más robustas a los datos enviados.
- Posibilidad de paginar la lista de temas en el endpoint `GET /`.

---

## Autor

- **Tu Nombre**  
  Desarrollador del CRUD de Votos.

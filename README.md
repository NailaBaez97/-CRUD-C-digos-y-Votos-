# CRUD de Votos

Este proyecto es una aplicación web simple que permite gestionar temas con enlaces y votos. Los usuarios pueden agregar temas, votar por ellos, actualizar información y eliminarlos. La aplicación utiliza **Node.js**, **Express** y **EJS** como motor de plantillas para la vista.

---

## Características

- **Agregar temas**: Los usuarios pueden agregar nuevos temas con un enlace asociado.
- **Votar por temas**: Incrementa el número de votos de un tema.
- **Actualizar temas**: Cambia el nombre o enlace de un tema existente.
- **Eliminar temas**: Borra un tema de la lista.
- **Interfaz amigable**: Diseño sencillo con botones y campos organizados.

---

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/tuusuario/crud-votos.git
    cd crud-votos
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Crea una base de datos SQLite llamada `temas.db` y define la tabla:
    ```sql
    CREATE TABLE temas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tema TEXT NOT NULL,
        url TEXT NOT NULL,
        votos INTEGER DEFAULT 0
    );
    ```

4. Inicia el servidor:
    ```bash
    node app.js
    ```

5. Abre tu navegador en `http://localhost:3000`.

---

## Uso

- **Página principal**: Lista todos los temas ordenados por número de votos.
- **Agregar tema**: Completa el formulario en la parte inferior para agregar un nuevo tema con su enlace.
- **Votar**: Haz clic en el botón "Vote" junto a un tema para incrementar su contador.
- **Actualizar**: Completa los campos "New Tema" y "New URL" para modificar un tema existente.
- **Eliminar**: Haz clic en el botón "Delete" para borrar un tema.

---

## Estructura del Proyecto
crud-votos/
├── controllers/ 
│ 
└── temacontrollers.js # Lógica del controlador
├── models/ 
│ ├── db.js # Conexión a la base de datos SQLite 
│ 
└── temamodels.js # Métodos del modelo 
├── views/
│ 
└── index.ejs # Plantilla principal 
├── app.js # Configuración del servidor y rutas
├── package.json # Dependencias del proyecto 
└── README.md # Documentación del proyecto

---

## Dependencias

- **Node.js**: Entorno de ejecución JavaScript.
- **Express**: Framework para construir la aplicación web.
- **EJS**: Motor de plantillas para renderizar vistas.
- **method-override**: Para manejar métodos HTTP como PUT y DELETE.

---

## Personalización

- Modifica el archivo `index.ejs` para cambiar el diseño o contenido de la vista.
- Cambia los estilos en el bloque `<style>` de la plantilla.

---

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
    ```bash
    git checkout -b mi-nueva-funcionalidad
    ```
3. Realiza los cambios y haz un commit:
    ```bash
    git commit -m "Añadida nueva funcionalidad"
    ```
4. Sube los cambios:
    ```bash
    git push origin mi-nueva-funcionalidad
    ```
5. Abre un Pull Request en GitHub.

---

## Autor

- **Naila Baez**  
  Desarrollador web apasionado por proyectos prácticos y funcionales.

---


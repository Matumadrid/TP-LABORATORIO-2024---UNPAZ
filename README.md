# Trabajo final Delta6 - Laboratorio de programacion - 
## Integrantes: 
- Busto Matias
- Iturrart Juan
- Meza Pablo
- Roberto Tigrero

### Estructura

### Ejemplo del JSON de Datos
#### JSON GENERAL [ ]
- Carreras: 

        {
    
        {id, nombre, grado, universidad, 
        materias
                [
                {id, nombre, anio, carreraId},
                {id, nombre, anio, carreraId}
                ]
        },

        {id, nombre, grado, universidad, 
        materias 
                [
                {id, nombre, anio, carreraId},
                {id, nombre, anio, carreraId}
                ]
        }
        }

#### comandos [ ]

# Copiar Texto en Markdown

Haz clic en el botón para copiar el texto:

<button onclick="copyToClipboard(this)">Copiar</button>

<script>
  function copyToClipboard(button) {
    var copyText = button.innerText;
    navigator.clipboard.writeText(copyText).then(function() {
      alert('Texto copiado al portapapeles');
    }, function(err) {
      alert('Error al copiar el texto: ', err);
    });
  }
</script>
1. Ejecutar en la terminal ```*npm install*```
2. Ejecutar en la terminal *npm run dev*
3. 


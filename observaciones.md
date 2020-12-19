## Errores:
- Se debe importar el paquete React
- El constructor no tiene simbolo de llave de cierre por tal motivo no va ejecutarse
- Los datos obtenidos por fetch deben obtenerse por medio de la función res.json(), se intenta acceder desde res el cual sólo contiene la cabecera de la respuesta y no del body
- En el render se intenta obtener la propiedad local el cual no existe
	
## Mejoras:
- En el caso de enviar una URL con un usuario invalido no se podrá acceder a las propiedades de las repuestas, por tal motivo debe validarse la correcta respuesta del API
- Emplear async/await ya que ayuda simplificar manejar promises y capturar excepciones 
- Usar el componente Fragment de react es cual es una buena practica para agrupar múltiples componentes
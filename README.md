# Gestor de Tareas
Una pequeña aplicación en Ionic y Angular para gestionar tareas creada con Ionic y Angular 

### Esta aplicación permite
1.- Agregar nuevas tareas a una lista de tareas
  - Se incorporó un servicio local para la manipulación de la información de la aplicación
  - se incorporó localStorage para mantener la persistencia en la navegación entre ventanas
  
2.- Editar el nombre de la lista

3.- Agregar elementos a una lista
  - cada elemento es propio de la lista y se puede marcar como terminado o ser eliminado
  - si todos los elementos son marcados en una lista, esta tarea quedará como completada
  - si algun elemento no está marcado, la tarea seguirá pendiente 
    * se implementa un pipe para evaluar el estado de las tareas (pendientes | completadas)*
    
4.- Eliminar elementos o tareas

### Aquí les dejo un video que muestra la funcionaldad general de la aplicación

https://user-images.githubusercontent.com/82334787/195247680-9271e618-935d-4cb6-9381-0f444ab2ac7d.mp4

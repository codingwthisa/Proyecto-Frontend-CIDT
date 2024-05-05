# Proyecto-Frontend-CIDT

Aplicación web para la gestión de una lista de tareas. Esta aplicación no requiere autenticación de usuarios y presentará una tabla simple donde se puedan agregar nuevas tareas, visualizar las tareas pendientes, marcar tareas como completadas y eliminar tareas de la lista. 

## Requisitos

- Python >= 3.x
- Django >= x.x

## Instalación

1. Clona el repositorio:

  git clone https://github.com/codingwthisa/Proyecto-Frontend-CIDT.git

2. Dependencias:
pip install -r requirements.txt

3. Migraciones de la base de datos
python manage.py migrate

## Congifuración
cp .env.example .env

## Ejecución
python manage.py runserver

El proyecto estará disponible en esta URL localmente: http://localhost:8000/

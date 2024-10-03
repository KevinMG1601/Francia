import mysql.connector
from mysql.connector import Error

# Conexión a MySQL
def create_connection():
    try:
        connection = mysql.connector.connect(
            host='localhost',  # Cambia esto por tu host si es diferente
            user='root',       # Cambia esto por tu usuario de MySQL
            password=''  # Cambia esto por tu contraseña de MySQL
        )
        if connection.is_connected():
            print("Conexión exitosa a MySQL")
            return connection
    except Error as e:
        print(f"Error: {e}")
        return None

# Crear base de datos y tablas
def create_database_and_tables():
    connection = create_connection()
    cursor = connection.cursor()

    # Crear la base de datos
    cursor.execute("CREATE DATABASE IF NOT EXISTS francia;")
    cursor.execute("USE francia;")  # Seleccionar la base de datos

    # Crear tabla system_country
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS `system_country` (
      `countryid` varchar(5) NOT NULL,
      `country` varchar(70) NOT NULL,
      `callingCode` varchar(4) NOT NULL,
      `flag` varchar(150) NOT NULL,
      `currency` varchar(255) NOT NULL,
      `optionsStatus` char(8) NOT NULL DEFAULT 'active',
      PRIMARY KEY (`countryid`)
    );
    """)

    # Crear tabla system_state
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS `system_state` (
      `countryid` varchar(5) NOT NULL,
      `stateid` varchar(5) NOT NULL,
      `name` varchar(150) NOT NULL,
      `optionsStatus` char(8) NOT NULL DEFAULT 'active',
      PRIMARY KEY (`countryid`, `stateid`),
      FOREIGN KEY (`countryid`) REFERENCES `system_country`(`countryid`)
    );
    """)

    # Crear tabla system_city
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS `system_city` (
      `cityid` varchar(10) NOT NULL,
      `name` varchar(100) NOT NULL,
      `name2` varchar(100) NOT NULL,
      `countryid` varchar(5) NOT NULL,
      `stateid` varchar(5) NOT NULL,
      `optionsStatus` char(8) NOT NULL DEFAULT 'active',
      `dane` varchar(15) NULL,
      `type` varchar(30) NOT NULL,
      `latitud` varchar(30) NOT NULL,
      `longitud` varchar(30) NOT NULL,
      PRIMARY KEY (`cityid`),
      FOREIGN KEY (`countryid`, `stateid`) REFERENCES `system_state`(`countryid`, `stateid`)
    );
    """)

    # Crear tabla users
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS `users` (
      `id` INT AUTO_INCREMENT PRIMARY KEY,
      `name` varchar(255),
      `user` varchar(255) NOT NULL,
      `password` varchar(255) NOT NULL
    );
    """)

    connection.commit()
    print("Base de datos y tablas creadas exitosamente")

    cursor.close()
    connection.close()

# Ejecutar la función
if __name__ == "__main__":
    create_database_and_tables()

import mysql.connector
from mysql.connector import Error
import bcrypt


# Conexión a MySQL
def create_connection():
    try:
        connection = mysql.connector.connect(
            host='localhost',  # Cambia esto por tu host si es diferente
            user='root',       # Cambia esto por tu usuario de MySQL
            password='',  # Cambia esto por tu contraseña de MySQL
            database='francia'  # Cambia si es necesario
        )
        if connection.is_connected():
            print("Conexión exitosa a MySQL")
            return connection
    except Error as e:
        print(f"Error: {e}")
        return None

def hash_password(password):
    """Función para hashear la contraseña usando bcrypt"""
    salt = bcrypt.gensalt()  # Generar una sal segura
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)  # Hashear la contraseña
    return hashed_password.decode('utf-8')  # Convertir a string para poder almacenarla en la base de datos


# Insertar datos en la tabla system_country
def insert_into_system_country(connection):
    cursor = connection.cursor()
    query = """
    INSERT INTO system_country (countryid, country, callingCode, flag, currency)
    VALUES ('FR', 'France', '33', '', 'Euro')
    ON DUPLICATE KEY UPDATE country=VALUES(country);
    """  # Se agrega ON DUPLICATE KEY UPDATE para evitar errores de duplicado
    try:
        cursor.execute(query)
        connection.commit()
        print("Datos insertados en system_country")
    except Error as e:
        print(f"Error al insertar en system_country: {e}")
    cursor.close()

# Insertar datos en la tabla system_state
def insert_into_system_state(connection):
    cursor = connection.cursor()
    query = """
    INSERT INTO system_state (countryid, stateid, name, optionsStatus) VALUES
('FR', '01', 'Ain', 'active'),
('FR', '02', 'Aisne', 'active'),
('FR', '03', 'Allier', 'active'),
('FR', '04', 'Alpes-de-Haute-Provence', 'active'),
('FR', '05', 'Hautes-Alpes', 'active'),
('FR', '06', 'Alpes-Maritimes', 'active'),
('FR', '07', 'Ardèche', 'active'),
('FR', '08', 'Ardennes', 'active'),
('FR', '09', 'Ariège', 'active'),
('FR', '10', 'Aube', 'active'),
('FR', '11', 'Aude', 'active'),
('FR', '12', 'Aveyron', 'active'),
('FR', '13', 'Bouches-du-Rhône', 'active'),
('FR', '14', 'Calvados', 'active'),
('FR', '15', 'Cantal', 'active'),
('FR', '16', 'Charente', 'active'),
('FR', '17', 'Charente-Maritime', 'active'),
('FR', '18', 'Cher', 'active'),
('FR', '19', 'Corrèze', 'active'),
('FR', '2A', 'Corse-du-Sud', 'active'),
('FR', '2B', 'Haute-Corse', 'active'),
('FR', '21', 'Côte-d\Or', 'active'),
('FR', '22', 'Côtes-d\Armor', 'active'),
('FR', '23', 'Creuse', 'active'),
('FR', '24', 'Dordogne', 'active'),
('FR', '25', 'Doubs', 'active'),
('FR', '26', 'Drôme', 'active'),
('FR', '27', 'Eure', 'active'),
('FR', '28', 'Eure-et-Loir', 'active'),
('FR', '29', 'Finistère', 'active'),
('FR', '30', 'Gard', 'active'),
('FR', '31', 'Haute-Garonne', 'active'),
('FR', '32', 'Gers', 'active'),
('FR', '33', 'Gironde', 'active'),
('FR', '34', 'Hérault', 'active'),
('FR', '35', 'Ille-et-Vilaine', 'active'),
('FR', '36', 'Indre', 'active'),
('FR', '37', 'Indre-et-Loire', 'active'),
('FR', '38', 'Isère', 'active'),
('FR', '39', 'Jura', 'active'),
('FR', '40', 'Landes', 'active'),
('FR', '41', 'Loir-et-Cher', 'active'),
('FR', '42', 'Loire', 'active'),
('FR', '43', 'Haute-Loire', 'active'),
('FR', '44', 'Loire-Atlantique', 'active'),
('FR', '45', 'Loiret', 'active'),
('FR', '46', 'Lot', 'active'),
('FR', '47', 'Lot-et-Garonne', 'active'),
('FR', '48', 'Lozère', 'active'),
('FR', '49', 'Maine-et-Loire', 'active'),
('FR', '50', 'Manche', 'active'),
('FR', '51', 'Marne', 'active'),
('FR', '52', 'Haute-Marne', 'active'),
('FR', '53', 'Mayenne', 'active'),
('FR', '54', 'Meurthe-et-Moselle', 'active'),
('FR', '55', 'Meuse', 'active'),
('FR', '56', 'Morbihan', 'active'),
('FR', '57', 'Moselle', 'active'),
('FR', '58', 'Nièvre', 'active'),
('FR', '59', 'Nord', 'active'),
('FR', '60', 'ie', 'active'),
('FR', '61', 'Orne', 'active'),
('FR', '62', 'Pas-de-Calais', 'active'),
('FR', '63', 'Puy-de-Dôme', 'active'),
('FR', '64', 'Pyrénées-Atlantiques', 'active'),
('FR', '65', 'Hautes-Pyrénées', 'active'),
('FR', '66', 'Pyrénées-Orientales', 'active'),
('FR', '67', 'Bas-Rhin', 'active'),
('FR', '68', 'Haut-Rhin', 'active'),
('FR', '69', 'Rhône', 'active'),
('FR', '70', 'Haute-Saône', 'active'),
('FR', '71', 'Saône-et-Loire', 'active'),
('FR', '72', 'Sarthe', 'active'),
('FR', '73', 'Savoie', 'active'),
('FR', '74', 'Haute-Savoie', 'active'),
('FR', '75', 'Paris', 'active'),
('FR', '76', 'Seine-Maritime', 'active'),
('FR', '77', 'Seine-et-Marne', 'active'),
('FR', '78', 'Yvelines', 'active'),
('FR', '79', 'Deux-Sèvres', 'active'),
('FR', '80', 'Somme', 'active'),
('FR', '81', 'Tarn', 'active'),
('FR', '82', 'Tarn-et-Garonne', 'active'),
('FR', '83', 'Var', 'active'),
('FR', '84', 'Vaucluse', 'active'),
('FR', '85', 'Vendée', 'active'),
('FR', '86', 'Vienne', 'active'),
('FR', '87', 'Haute-Vienne', 'active'),
('FR', '88', 'Vosges', 'active'),
('FR', '89', 'Yonne', 'active'),
('FR', '90', 'Territoire de Belfort', 'active'),
('FR', '91', 'Essonne', 'active'),
('FR', '92', 'Hauts-de-Seine', 'active'),
('FR', '93', 'Seine-Saint-Denis', 'active'),
('FR', '94', 'Val-de-Marne', 'active'),
('FR', '95', 'Val-d\Oise', 'active')
    ON DUPLICATE KEY UPDATE name=VALUES(name);
    """  # Corregido el apóstrofe en Val-d\'Oise y Côte-d\'Or
    try:
        cursor.execute(query)
        connection.commit()
        print("Datos insertados en system_state")
    except Error as e:
        print(f"Error al insertar en system_state: {e}")
    cursor.close()

def insert_into_system_city(connection):
    cursor = connection.cursor()
    query = """
    INSERT INTO system_city (cityid, name, name2, countryid, stateid, type, latitud, longitud, optionsStatus) VALUES
    ('01001', 'Bourg-en-Bresse', 'Bourg-en-Bresse', 'FR', '01', 'Commune', '46.2059', '5.2250', 'active'),
    ('01002', 'Oyonnax', 'Oyonnax', 'FR', '01', 'Commune', '46.2593', '5.6579', 'active'),
    ('01003', 'Ambérieu-en-Bugey', 'Ambérieu-en-Bugey', 'FR', '01', 'Commune', '45.9636', '5.3544', 'active'),
    ('01004', 'Bellegarde-sur-Valserine', 'Bellegarde-sur-Valserine', 'FR', '01', 'Commune', '46.1077', '5.8260', 'active'),
    ('01005', 'Gex', 'Gex', 'FR', '01', 'Commune', '46.3333', '6.0667', 'active'),
    ('01006', 'Divonne-les-Bains', 'Divonne-les-Bains', 'FR', '01', 'Commune', '46.3603', '6.1331', 'active'),
    ('01007', 'Ferney-Voltaire', 'Ferney-Voltaire', 'FR', '01', 'Commune', '46.2587', '6.1085', 'active'),
    ('01008', 'Miribel', 'Miribel', 'FR', '01', 'Commune', '45.8225', '4.9559', 'active'),
    ('01009', 'Meximieux', 'Meximieux', 'FR', '01', 'Commune', '45.9067', '5.1964', 'active'),
    ('01010', 'Montluel', 'Montluel', 'FR', '01', 'Commune', '45.8464', '5.0572', 'active'),
    ('02001', 'Laon', 'Laon', 'FR', '02', 'Commune', '49.5639', '3.6244', 'active'),
    ('02002', 'Saint-Quentin', 'Saint-Quentin', 'FR', '02', 'Commune', '49.8489', '3.2873', 'active'),
    ('02003', 'Soissons', 'Soissons', 'FR', '02', 'Commune', '49.3806', '3.3236', 'active'),
    ('02004', 'Château-Thierry', 'Château-Thierry', 'FR', '02', 'Commune', '49.0463', '3.3997', 'active'),
    ('02005', 'Tergnier', 'Tergnier', 'FR', '02', 'Commune', '49.6612', '3.2975', 'active'),
    ('02006', 'Hirson', 'Hirson', 'FR', '02', 'Commune', '49.9225', '4.0821', 'active'),
    ('02007', 'Villeneuve-Saint-Germain', 'Villeneuve-Saint-Germain', 'FR', '02', 'Commune', '49.3685', '3.3365', 'active'),
    ('02008', 'Chauny', 'Chauny', 'FR', '02', 'Commune', '49.6151', '3.2179', 'active'),
    ('02009', 'Bohain-en-Vermandois', 'Bohain-en-Vermandois', 'FR', '02', 'Commune', '49.9864', '3.4628', 'active'),
    ('02010', 'Fère-en-Tardenois', 'Fère-en-Tardenois', 'FR', '02', 'Commune', '49.2019', '3.5278', 'active'),
    ('03001', 'Moulins', 'Moulins', 'FR', '03', 'Commune', '46.5643', '3.3322', 'active'),
    ('03002', 'Vichy', 'Vichy', 'FR', '03', 'Commune', '46.1280', '3.4238', 'active'),
    ('03003', 'Montluçon', 'Montluçon', 'FR', '03', 'Commune', '46.3408', '2.6027', 'active'),
    ('04001', 'Digne-les-Bains', 'Digne-les-Bains', 'FR', '04', 'Commune', '44.0922', '6.2320', 'active'),
    ('04002', 'Manosque', 'Manosque', 'FR', '04', 'Commune', '43.8304', '5.7862', 'active'),
    ('05001', 'Gap', 'Gap', 'FR', '05', 'Commune', '44.5581', '6.0795', 'active'),
    ('05002', 'Briançon', 'Briançon', 'FR', '05', 'Commune', '44.8997', '6.6430', 'active'),
    ('06001', 'Nice', 'Nice', 'FR', '06', 'Commune', '43.7102', '7.2620', 'active'),
    ('06002', 'Antibes', 'Antibes', 'FR', '06', 'Commune', '43.5804', '7.1251', 'active'),
    ('07001', 'Privas', 'Privas', 'FR', '07', 'Commune', '44.7355', '4.5976', 'active'),
    ('07002', 'Aubenas', 'Aubenas', 'FR', '07', 'Commune', '44.6203', '4.3906', 'active'),
    ('08001', 'Charleville-Mézières', 'Charleville-Mézières', 'FR', '08', 'Commune', '49.7730', '4.7191', 'active'),
    ('08002', 'Sedan', 'Sedan', 'FR', '08', 'Commune', '49.7017', '4.9382', 'active'),
    ('09001', 'Foix', 'Foix', 'FR', '09', 'Commune', '42.9635', '1.6079', 'active'),
    ('09002', 'Pamiers', 'Pamiers', 'FR', '09', 'Commune', '43.1167', '1.6053', 'active'),
    ('10001', 'Troyes', 'Troyes', 'FR', '10', 'Commune', '48.2973', '4.0744', 'active'),
    ('10002', 'Romilly-sur-Seine', 'Romilly-sur-Seine', 'FR', '10', 'Commune', '48.5122', '3.7265', 'active'),
    ('11001', 'Carcassonne', 'Carcassonne', 'FR', '11', 'Commune', '43.2140', '2.3510', 'active'),
    ('11002', 'Narbonne', 'Narbonne', 'FR', '11', 'Commune', '43.1847', '3.0034', 'active'),
    ('12001', 'Rodez', 'Rodez', 'FR', '12', 'Commune', '44.3503', '2.5754', 'active'),
    ('12002', 'Millau', 'Millau', 'FR', '12', 'Commune', '44.0980', '3.0780', 'active'),
    ('13001', 'Marseille', 'Marseille', 'FR', '13', 'Commune', '43.2965', '5.3698', 'active'),
    ('13002', 'Aix-en-Provence', 'Aix-en-Provence', 'FR', '13', 'Commune', '43.5297', '5.4474', 'active'),
    ('14001', 'Caen', 'Caen', 'FR', '14', 'Commune', '49.1829', '-0.3707', 'active'),
    ('14002', 'Lisieux', 'Lisieux', 'FR', '14', 'Commune', '49.1460', '0.2292', 'active'),
    ('15001', 'Aurillac', 'Aurillac', 'FR', '15', 'Commune', '44.9262', '2.4400', 'active'),
    ('15002', 'Saint-Flour', 'Saint-Flour', 'FR', '15', 'Commune', '45.0342', '3.0903', 'active'),
    ('16001', 'Angoulême', 'Angoulême', 'FR', '16', 'Commune', '45.6484', '0.1560', 'active'),
    ('16002', 'Cognac', 'Cognac', 'FR', '16', 'Commune', '45.6945', '-0.3314', 'active'),
    ('17001', 'La Rochelle', 'La Rochelle', 'FR', '17', 'Commune', '46.1591', '-1.1511', 'active'),
    ('17002', 'Rochefort', 'Rochefort', 'FR', '17', 'Commune', '45.9420', '-0.9600', 'active'),
    ('18001', 'Bourges', 'Bourges', 'FR', '18', 'Commune', '47.0810', '2.3988', 'active'),
    ('18002', 'Vierzon', 'Vierzon', 'FR', '18', 'Commune', '47.2213', '2.0723', 'active'),
    ('19001', 'Tulle', 'Tulle', 'FR', '19', 'Commune', '45.2672', '1.7717', 'active'),
    ('19002', 'Brive-la-Gaillarde', 'Brive-la-Gaillarde', 'FR', '19', 'Commune', '45.1587', '1.5330', 'active'),
    ('2A001', 'Ajaccio', 'Ajaccio', 'FR', '2A', 'Commune', '41.9192', '8.7386', 'active'),
    ('2B001', 'Bastia', 'Bastia', 'FR', '2B', 'Commune', '42.7028', '9.4509', 'active')
    ON DUPLICATE KEY UPDATE name=VALUES(name);
    """
    try:
        cursor.execute(query)
        connection.commit()
        print("Datos insertados en system_city")
    except Error as e:
        print(f"Error al insertar en system_city: {e}")
    cursor.close()

password_admin = hash_password('123')

# Insertar datos en la tabla de usuarios
def insert_into_users(connection):
    cursor = connection.cursor()
    password_admin = hash_password('123')  # Hashea la contraseña

    query = """
    INSERT INTO users (name, user, password)
    VALUES (%s, %s, %s)
    ON DUPLICATE KEY UPDATE password=VALUES(password);
    """  # Se usa %s como marcador de posición
    try:
        cursor.execute(query, ('admin', 'admin', password_admin))  # Pasar los valores de forma segura
        connection.commit()
        print("Datos insertados en users")
    except Error as e:
        print(f"Error al insertar en users: {e}")
    cursor.close()


# Ejecutar las funciones
if __name__ == "__main__":
    connection = create_connection()
    if connection:
        insert_into_system_country(connection)
        insert_into_system_state(connection)
        insert_into_system_city(connection)
        insert_into_users(connection)
        connection.close()

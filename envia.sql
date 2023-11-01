CREATE DATABASE Envia;

USE Envia;

CREATE TABLE Usuario(
    id_usuario INT PRIMARY KEY,
    nombre VARCHAR(100),
    direccion VARCHAR(100),
    telefono BIGINT,
    correo VARCHAR(50),
    contraseña VARCHAR(20),
    rol VARCHAR(20)
)


SELECT * FROM Usuario;




CREATE TABLE Ruta(
    id_ruta INT PRIMARY KEY,
    nombre_ruta VARCHAR(100),
    ciudad_origen VARCHAR(100),
    ciudad_destino VARCHAR(100),
    distancia VARCHAR(50),
    precio_ruta DECIMAL(10,2)
)

SELECT * FROM Ruta

CREATE TABLE TipoPaquete(
    id_tipo_paquete INT PRIMARY KEY,
    descripcion_tipo_paquete VARCHAR(100),
    precio_por_tipo DECIMAL(10,2)
)

SELECT * FROM Ruta


CREATE TABLE Paquete(
    id_paquete INT PRIMARY KEY,
    id_usuario_reminente INT ,
    id_usuario_destinatario INT ,
    FOREIGN KEY (id_usuario_reminente) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_usuario_destinatario) REFERENCES Usuario(id_usuario),
    peso DECIMAL(10,2),
    telefono BIGINT,
    dimensiones VARCHAR(50),
    fecha_envio DATE,
    estado_paquete VARCHAR(20),
    ubicacion_actual VARCHAR(100),
    id_tipo_paquete INT ,
    id_ruta INT ,
    FOREIGN KEY (id_tipo_paquete) REFERENCES TipoPaquete(id_tipo_paquete),
    FOREIGN KEY (id_ruta) REFERENCES Ruta(id_ruta)
)

SELECT * FROM Paquete

CREATE TABLE Envio(
    id_envio INT PRIMARY KEY,
    id_usuario INT,
    id_paquete INT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_paquete) REFERENCES Paquete(id_paquete),
    fecha_envio DATE,
    fecha_entrega DATE
)

SELECT * FROM Envio;

CREATE TABLE Seguimiento(
    id_segumiento INT PRIMARY KEY,
    id_paquete INT,
    FOREIGN KEY (id_paquete) REFERENCES Paquete(id_paquete),
    fecha_evento DATE,
    descripcion_evento VARCHAR(100),
    ubicacion_evento VARCHAR(100)
)

SELECT * FROM Seguimiento;


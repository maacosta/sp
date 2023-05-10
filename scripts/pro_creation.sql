/*
Create databases
*/

create database pro;
use pro;

/*
Create tables
*/

CREATE TABLE Plataforma (
  Id int NOT NULL AUTO_INCREMENT,
  Nombre varchar(45) NOT NULL,
  PRIMARY KEY (Id)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE TipoFactor (
  Id int NOT NULL AUTO_INCREMENT,
  Nombre varchar(45) NOT NULL,
  IdPlataforma int NOT NULL,
  PRIMARY KEY (Id),
  CONSTRAINT FK_TipoFactor_PlataformaId FOREIGN KEY (IdPlataforma) REFERENCES Plataforma(Id)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE Factor (
  Id int NOT NULL AUTO_INCREMENT,
  Nombre varchar(45) NOT NULL,
  IdTipoFactor int NOT NULL,
  PRIMARY KEY (Id),
  CONSTRAINT FK_Factor_TipoFactorId FOREIGN KEY (IdTipoFactor) REFERENCES TipoFactor(Id)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE FactorVariableInt (
  Id int NOT NULL AUTO_INCREMENT,
  Nombre varchar(45) NOT NULL,
  PRIMARY KEY (Id)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE Producto (
  Id int NOT NULL AUTO_INCREMENT,
  Nombre varchar(45) NOT NULL,
  VigenciaDesde DATETIME NOT NULL,
  VigenciaHasta DATETIME NOT NULL,
  PRIMARY KEY (Id)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE ProductoFactor (
  IdProducto int NOT NULL,
  IdFactor int NOT NULL,
  CONSTRAINT FK_ProductoFactor_ProductoId FOREIGN KEY (IdProducto) REFERENCES Producto(Id),
  CONSTRAINT FK_ProductoFactor_FactorId FOREIGN KEY (IdFactor) REFERENCES Factor(Id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE ProductoFactorVariableInt (
  IdProducto int NOT NULL,
  IdFactorVariableInt int NOT NULL,
  CONSTRAINT FK_ProductoFactorVariableInt_ProductoId FOREIGN KEY (IdProducto) REFERENCES Producto(Id),
  CONSTRAINT FK_ProductoFactorVariableInt_FactorVariableIntId FOREIGN KEY (IdFactorVariableInt) REFERENCES FactorVariableInt(Id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*
Fill in tables
*/

LOCK TABLES Plataforma WRITE;
INSERT INTO Plataforma VALUES 
	(1,'Print'),
	(2,'Online'),
	(3,'Tv');
UNLOCK TABLES;

LOCK TABLES TipoFactor WRITE;
INSERT INTO TipoFactor VALUES 
	(1,'Modalidad',2),
	(2,'Plataforma',2),
	(3,'Formato',2),
	(4,'Ubicacion',2);
UNLOCK TABLES;

LOCK TABLES Factor WRITE;
INSERT INTO Factor VALUES 
	(1,'CPM',1),
	(2,'CPC',1),
	(3,'Sponsor',1),
	(4,'Content Lab',1),
	(5,'Desktop',2),
	(6,'Mobile',2),
	(7,'Video',2),
	(8,'Multiscreen',2),
	(9,'Caja 300x200',3),
	(10,'Caja 300x50',3),
	(11,'Caja 300x100',3),
	(12,'Billboard 920x250',3),
	(13,'Middle 920x120',3),
	(14,'Behavioral',4),
	(15,'Home',4),
	(16,'Internas',4),
	(17,'Ros',4);
UNLOCK TABLES;

LOCK TABLES FactorVariableInt WRITE;
INSERT INTO FactorVariableInt VALUES 
	(1,'Impresiones'),
	(2,'Clicks');
UNLOCK TABLES;

LOCK TABLES Producto WRITE;
INSERT INTO Producto VALUES 
	(1,'CPM.Mobile.Caja 300x200.Home', '2023-01-01', '2024-01-01'),
	(2,'CPC.Video.Caja 300x200.Ros', '2023-01-01', '2024-01-01'),
	(3,'CPM.Mobile.Caja 300x50.Home', '2023-01-01', '2024-01-01'),
	(4,'CPM.Mobile.Caja 300x50.Ros', '2023-01-01', '2024-01-01');
UNLOCK TABLES;

LOCK TABLES ProductoFactor WRITE;
-- CPM.Mobile.Caja 300x200.Home
INSERT INTO ProductoFactor VALUES 
	(1,1),(1,6),(1,9),(1,15);
-- CPC.Video.Caja 300x200.Ros
INSERT INTO ProductoFactor VALUES 
	(2,2),(2,7),(2,9),(2,17);
-- CPM.Mobile.Caja 300x50.Home
INSERT INTO ProductoFactor VALUES 
	(3,1),(3,6),(3,10),(3,15);
-- CPM.Mobile.Caja 300x50.Ros
INSERT INTO ProductoFactor VALUES 
	(4,1),(4,6),(4,10),(4,17);
UNLOCK TABLES;

LOCK TABLES ProductoFactorVariableInt WRITE;
INSERT INTO ProductoFactorVariableInt VALUES 
	-- CPM.Mobile.Caja 300x200.Home
	(1,1);
UNLOCK TABLES;

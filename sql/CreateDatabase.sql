/* Create Database */
DROP DATABASE IF EXISTS wargame;

CREATE DATABASE wargame CHARACTER SET utf8 COLLATE utf8_general_ci;

USE wargame;

CREATE TABLE User
(
	UserID int NOT NULL auto_increment,
    GoogleID varchar(50),
    Email varchar(256),
    FirstName varchar(100),
    LastName varchar(100),
    DisplayName varchar(100),
    Phone varchar(50),
    Active bit DEFAULT 0,
    PRIMARY KEY (UserID)
);

CREATE TABLE Role
(
	RoleID int NOT NULL auto_increment,
	Code varchar(20),
    Name varchar(100),
    Description varchar(500),
    PRIMARY KEY (RoleID)
);

CREATE TABLE UserRole
(
	UserID int NOT NULL,
    RoleID int NOT NULL,
    PRIMARY KEY(UserID, RoleID),
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (RoleID) REFERENCES Role(RoleID)
);

CREATE TABLE Task
(
	TaskID int NOT NULL auto_increment,
    Code varchar(50),
    Name varchar(100),
    Description varchar(500),
    PRIMARY KEY (TaskID)
);

CREATE TABLE RoleTask
(
	RoleID int NOT NULL,
    TaskID int NOT NULL,
    PRIMARY KEY (RoleID, TaskID),
    FOREIGN KEY (RoleID) REFERENCES Role(RoleID),
    FOREIGN KEY (TaskID) REFERENCES Task(TaskID)
);


CREATE TABLE Server
(
	ServerId int NOT NULL auto_increment,
    Name varchar(50) NOT NULL,
    WorkingDirectory varchar(500) NOT NULL,
    Executable varchar(100) NOT NULL,
    IPAddress varchar(50) NOT NULL,
    Port int NOT NULL,
    RconPort int NOT NULL,
    RconPassword varchar(50),
    PRIMARY KEY (ServerId)
);


/* Populate Database */
INSERT INTO Role(Code, Name, Description) VALUES ('ADMIN','Administrator','System Administrator');
INSERT INTO Role(Code, Name, Description) VALUES ('PWUSER','Power','Super User');
INSERT INTO Role(Code, Name, Description) VALUES ('USER','User','Standard User');
INSERT INTO Role(Code, Name, Description) VALUES ('ANYMS','Anonymous', 'Anonymous User');

INSERT INTO Task(Code, Name, Description) VALUES ('VIEW_SERVER', 'View Server', 'View Server Details');
INSERT INTO RoleTask(RoleID, TaskID) SELECT RoleID, LAST_INSERT_ID() FROM Role WHERE Code IN ('ADMIN','PWUSER','USER');
INSERT INTO Task(Code, Name, Description) VALUES ('CONTROL_SERVER', 'Start/Stop Server', 'Start or Stop a server');
INSERT INTO RoleTask(RoleID, TaskID) SELECT RoleID, LAST_INSERT_ID() FROM Role WHERE Code IN ('ADMIN','PWUSER');

INSERT INTO User(Email, FirstName, LastName, DisplayName, Phone, Active) VALUES ('kkwapnioski@gmail.com','Kyle','Kwapnioski','Kwap','402-321-0637', 1);
INSERT INTO UserRole(UserID, RoleID) SELECT LAST_INSERT_ID(), RoleID FROM Role WHERE Code IN ('ADMIN');

INSERT INTO Server(Name, WorkingDirectory, Executable, IPAddress, Port, RconPort, RconPassword) VALUES ('Server 1', 'C:/windows/system32/', 'ping.exe', '198.144.179.185', 15000, 15001, 'password');

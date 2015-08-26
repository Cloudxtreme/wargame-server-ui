/* Create user */
CREATE USER 'wargame'@'localhost' IDENTIFIED BY 'wargame';
GRANT  SELECT,UPDATE,INSERT,DELETE ON wargame.* TO 'wargame'@'localhost';

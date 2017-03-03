USE lendowe_db;

INSERT INTO Users SET
email = 't.truong2009@gmail.com',
password = 'password',
createdAt = NOW(),
updatedAt = NOW();

INSERT INTO Users SET
email = 'nguyen.x.michelle@gmail.com',
password = 'password',
createdAt = NOW(),
updatedAt = NOW();

INSERT INTO LenderBorrowers SET
name = 'Tony',
email = 't.truong2009@gmail.com',
createdAt = NOW(),
updatedAt = NOW(),
UserId = (SELECT id FROM Users WHERE email = 't.truong2009@gmail.com');

INSERT INTO LenderBorrowers SET
name = 'Alicia',
email = 'alicia.tapia@gmail.com',
createdAt = NOW(),
updatedAt = NOW();

INSERT INTO LenderBorrowers SET
name = 'Tony',
email = 't.truong2009@gmail.com',
createdAt = NOW(),
updatedAt = NOW(),
UserId = (SELECT id FROM Users WHERE email = 'nguyen.x.michelle@gmail.com');

INSERT INTO Items SET
message = 'You owe me money',
createdAt = NOW(),
updatedAt = NOW(),
lenderId = (SELECT id FROM LenderBorrowers WHERE email = 't.truong2009@gmail.com'),
borrowerId = (SELECT id FROM LenderBorrowers WHERE email = 'alicia.tapia@gmail.com');


INSERT INTO Items SET
message = 'You owe me coffee',
createdAt = NOW(),
updatedAt = NOW(),
lenderId = (SELECT id FROM LenderBorrowers WHERE email = 'nguyen.x.michelle@gmail.com'),
borrowerId = (SELECT id FROM LenderBorrowers WHERE email = 'alicia.tapia@gmail.com');
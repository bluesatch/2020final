CREATE DATABASE [IF NOT EXISTS] daddybug_db;
USE daddybug_db;

CREATE TABLE band
    (
        id MEDIUMINT NOT NULL AUTO_INCREMENT,
        band VARCHAR(50),
        CONSTRAINT PRIMARY KEY (id)
    );

CREATE TABLE artist 
    (
        id MEDIUMINT NOT NULL AUTO_INCREMENT,
        fname VARCHAR(30),
        lname VARCHAR(30),
        alias VARCHAR(30),
        -- can I store an array in mysql
        CONSTRAINT PRIMARY KEY (id)
    );

CREATE TABLE genre 
    (
        id MEDIUMINT NOT NULL AUTO_INCREMENT,
        genre VARCHAR(20),
        CONSTRAINT PRIMARY KEY (id)
    );

CREATE TABLE label 
    (
        id MEDIUMINT NOT NULL AUTO_INCREMENT,
        label VARCHAR (20),
        CONSTRAINT PRIMARY KEY (id)
    );

CREATE TABLE country 
    (
        id MEDIUMINT NOT NULL AUTO_INCREMENT,
        country VARCHAR(20),
        CONSTRAINT PRIMARY KEY (id)
    );

CREATE TABLE album
    (
        id MEDIUMINT NOT NULL AUTO_INCREMENT,
        band_id MEDIUMINT,
        title VARCHAR(50) NOT NULL,
        label_id MEDIUMINT,
        serial_num VARCHAR(30),
        country_id MEDIUMINT,
        release_year year,
        media_condition ENUM('M', 'NM', 'VG', 'G'),
        jacket_condition ENUM('M', 'NM', 'VG', 'G'),
        comments TEXT, 
        qty TINYINT,
        price float(6, 2),
        img VARCHAR(100),
        CONSTRAINT PRIMARY KEY (id),
        CONSTRAINT fk_band_id FOREIGN KEY (band_id) REFERENCES band(id),
        CONSTRAINT fk_label_id FOREIGN KEY (label_id) REFERENCES label(id),
        CONSTRAINT fk_country_id FOREIGN KEY (country_id) REFERENCES country(id)
    );


INSERT INTO band 
    (band)
    VALUES ('Santana'), ('Herbie Hancock'), ('Donald Byrd'), ('The Dramatics'), ('Dwight Trible & The Life Force Trio'), ('Tribe Called Quest, A'), ('Anderson .Paak'), ('Erykah Badu'), ('Carole King')
;

INSERT INTO artist 
    (fname, lname, alias)
    VALUES
    ('Carlos', 'Santana', NULL),
    ('Herbie', 'Hancock', NULL),
    ('Donald', 'Byrd', NULL),
    ('Hank', 'Mobley', NULL),
    ('Duke', 'Pearson', NULL),
    ('Doug', 'Watkins', NULL),
    ('Lex', 'Humphries', NULL),
    ('Jackie', 'McLean', NULL),
    ('Reginald', 'Workman', NULL),
    ('Frank', 'Foster', NULL),
    ('Lew', 'Tabackin', NULL),
    ('Julian', 'Priester', NULL),
    ('Roland', 'Wilson', NULL),
    ('Jimmy', 'Ponder', NULL),
    ('Joe', 'Chambers', NULL),
    ('Nat', 'Bettis', NULL),
    ('John', 'Robinson', NULL),
    ('Jerry', 'Dodgion', NULL),
    ('Leo', 'Morris', 'Idris Muhammad'),
    ('Ron', 'Banks', NULL),
    ('Dwight', 'Trible', NULL),
    ('Kamaal', 'Fareed', 'Q-Tip'),
    ('Malik', 'Taylor', 'Phife Dawg'),
    ('Ali Shaheed', 'Muhammad', NULL),
    ('Brandon', 'Anderson', 'Anderson .Paak'),
    ('Erica', 'Wright', 'Erykah Badu'),
    ('Carole', 'King', NULL)
;


INSERT INTO genre
    (genre)
    VALUES 
    ('Electronic'), ('Hip Hop'), ('Funk'), ('Soul'), ('Soundtrack'), ('Jazz'), ('Rock'), ('Latin'), ('Country'), ('Alternative'), ('Pop'), ('Blues'), ('Comedy'), ('Classical')
;

INSERT INTO label 
    (label)
    VALUES
    ('Columbia'), ('MGM'), ('Blue Note'), ('Volt'), ('Ninja Tune'), ('Jive'), ('OBE'),
    ('Steel Wool Records'), ('Motown'), ('Ode Records')
;

INSERT INTO country
    (country)
    VALUES
    ('US'), ('UK'), ('Germany'), ('France'), ('Mexico'), ('Canada')
;

INSERT INTO album 
    (band_id, title, label_id, serial_num, country_id, release_year, media_condition, jacket_condition, comments, qty, price, img)
    VALUES 
    (1, 'Abraxas', 1, 'KC 30130', 6, 1970, 'VG', 'G', 'Gatefold; Records plays great', 1, 9.45,'media/abraxas.jpg'),
    (1, 'Amigos', 1, 'PC 33576', 1, 1976, 'VG', 'VG', 'Gatefold; slight wear on jacket', 1, 5.14, 'media/amigos.jpg'),
    (2, 'Blow-Up (The Original Soundtrack)', 2, '4447 ST', 1, 1966, 'VG', 'G', 'Minor cracks in play; tear in spine', 1, 21.25, 'media/blow_up.jpg'),
    (3, 'Byrd In Flight', 3, 'BST 84048', 1, 2021, 'M', 'M', 'Gatefold; Tone Poet Reissue Series', 10, 31.00, 'media/byrd_in_flight.jpg'),
    (1, 'Caravanserai', 1,'KC 31610', 1, 1972, 'VG', 'G', 'Plays great', 2, 5.50, 'media/caravanserai.jpg'), 
    (4, 'Dramatic Experience, A', 4, 'VOS-6019', 5, 1973, 'VG', 'G', 'Minor cracks in sound', 3, 22.00, 'media/dramatic_experience.jpg'),
    (3, 'Fancy Free', 3, 'B0028724-01', 1, 2018, 'NM', 'NM', 'Vinyl Me Please Reissue', 1, 37.00, 'media/fancy_free.jpg'),
    (5, 'Love Is The Answer', 5, 'ZEN 108', 2, 2005, 'NM', 'NM', '3XLP includes instrumentals', 1, 20.88, 'media/love_is_the_answer.jpg'),
    (6, 'Low End Theory, The', 6, '01241-41418-1', 1, 1991, 'VG', 'VG', 'Remastered', 1, 35.47, 'low_end_theory.jpg'),
    (7, 'Malibu', 7, 'ERE222', 1, 2017, 'M', 'M','2xLP; Clear disc', 15, 40.00, 'media/malibu.jpg'),
    (8, "Mama's Gun", 9, 'MOVLP1124', 2, 2014, 'NM', 'NM', '2xLP; Red Disc; 180', 5, 30.00, 'media/mamas_gun.jpg'),
    (6, 'Midnight Marauders', 6, '01241-41490-1', 1, 1993, 'VG', 'VG', '2xLP', 4, 21.99, 'media/midnight_marauders.jpg'),
    (8, 'New Amerykah Pt 1: (4th World War)', 9, 'B0010800-01', 1, 2007, 'NM', 'NM', '2xLP; Gatefold', 8, 39.02, 'media/na_pt1.jpg'),
    (8, 'New Amerykah Pt 2: Return of the Ankh', 9, 'B0014023-01', 1, 2010, 'NM', 'NM', '2xLP; Gatefold', 8, 31.40, 'media/na_pt2.jpg'),
    (9, 'Tapestry', 10, 'SP-77009', 1, 1971, 'G', 'G', 'Wears in jacket; tears in spine', 1, 11.99, 'media/tapestry.jpg'),
    (7, 'Venice', 8, 'ERE-LP-166', 1, 2015, 'NM', 'NM', '2xLP; Yellow Disc', 9, 32.49, 'media/venice.jpg')
;
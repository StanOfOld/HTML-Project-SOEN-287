-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2023 at 01:25 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yourlicenses`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `accountID` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(65) NOT NULL,
  `address` varchar(100) NOT NULL,
  `postalCode` varchar(10) NOT NULL,
  `password` varchar(50) NOT NULL,
  `provider` tinyint(1) NOT NULL,
  `authenticationCode` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`accountID`, `firstName`, `lastName`, `email`, `address`, `postalCode`, `password`, `provider`, `authenticationCode`) VALUES
(1, 'Abel', 'Spencer', 'oupo@j--dw-.org', '87 South White Milton Way', '26974', 'Jeanine9', 0, NULL),
(2, 'Erick', 'Leonard', 'omuk@---dio.com', '814 South Rocky Second Road', '73847', 'Tabatha', 0, NULL),
(3, 'Janice', 'Montes', 'ljlg1@---ln-.com', '83 North Rocky Hague Parkway', '33036', 'Clinton', 1, NULL),
(4, 'Gretchen', 'Proctor', 'vxxd.xgfbkp@-e--ch.org', '43 North Rocky Second Drive', '62614', 'Casey626', 0, NULL),
(5, 'Lawanda', 'Velazquez', 'ppkdi@i--jvj.net', '84 South Rocky First Freeway', '45384', 'Alexis', 0, NULL),
(6, 'Robbie', 'Wilkins', 'vlpj@----vg.com', '848 South Rocky Cowley Way', '74156', 'Orlando', 1, NULL),
(7, 'Carla', 'Randall', 'ddth233@-p----.com', '610 North Green Clarendon Freeway', '73193', 'Autumn', 1, NULL),
(8, 'Heath', 'Dickson', 'rucc@b--c-i.com', '475 North Green Nobel Avenue', '98773', 'Kendall', 0, NULL),
(9, 'Kendra', 'Rodgers', 'cuoa.tbwkl@cctw--.net', '620 North Green New Blvd.', '74717', 'Brad', 1, NULL),
(10, 'Brandie', 'Finley', 'ckzp@sztm-k.org', '47 South White Oak Avenue', '73805', 'Sharon4', 0, NULL),
(11, 'Rose', 'Escobar', 'cabs.twrz@id-y--.org', '326 North White Hague Drive', '67374', 'Ted5', 0, NULL),
(12, 'Ernest', 'Robinson', 'ccbd6@-g---o.net', '882 West White Milton Street', '16440', 'Curtis', 0, NULL),
(13, 'Randal', 'Larsen', 'ujjxwr@dn--kn.org', '42 North Rocky Fabien Road', '81345', 'Alissa3', 0, NULL),
(14, 'Ismael', 'Dickerson', 'joqlo722@--h-q-.com', '232 East White Fabien Street', '71633', 'Terry860', 1, NULL),
(15, 'Keri', 'Brennan', 'cpax@tc--j-.net', '667 South Green Second Freeway', '31444', 'Cecil1', 1, NULL),
(16, 'Cameron', 'Bass', 'bgfn63@b---o-.org', '62 East White First Road', '63562', 'Marcella', 1, NULL),
(17, 'Roberta', 'Morse', 'trry@eq--cm.com', '30 West Green Hague Drive', '39777', 'Janet895', 0, NULL),
(18, 'Colby', 'Boone', 'gtws@l--t-o.org', '85 West Green Fabien Parkway', '48715', 'Katina69', 1, NULL),
(19, 'Cornelius', 'Herring', 'yvpe09@-----j.com', '786 North Rocky Fabien Parkway', '35417', 'Donald868', 1, NULL),
(20, 'Teddy', 'Martin', 'icwo@r-yjsw.org', '52 North Green First Boulevard', '01735', 'Stephen', 0, NULL),
(21, 'Lillian', 'Huerta', 'bzop@hn--ns.com', '79 West White Oak Avenue', '65879', 'Janette1', 1, NULL),
(22, 'Dianna', 'Chapman', 'tlyo@--n--i.net', '726 South Green Milton Avenue', '11247', 'Susan1', 1, NULL),
(23, 'Geoffrey', 'Pacheco', 'tfwt.fzpol@-x---i.net', '175 West Rocky Milton Road', '59591', 'Rose', 0, NULL),
(24, 'Melissa', 'Calderon', 'fbxfmps18@jyso.ok-snh.com', '61 South Rocky Hague Parkway', '70816', 'Reginald5', 1, NULL),
(25, 'Moses', 'Patel', 'wcnx3@v--uvb.net', '86 North Rocky New Way', '54775', 'Julius', 0, NULL),
(26, 'Franklin', 'Mills', 'tpyj@xo----.com', '947 South Green Second Drive', '45477', 'Jesus', 0, NULL),
(27, 'Arlene', 'Mcgrath', 'xksa@--o---.net', '64 South Rocky Milton Boulevard', '28586', 'Nicole05', 1, NULL),
(28, 'Kathleen', 'Huynh', 'kivwv@uryd-g.com', '74 North Green Old Freeway', '65549', 'Marisol', 0, NULL),
(29, 'Sheldon', 'Lamb', 'ykev606@--bq-y.org', '315 South Green New Drive', '92185', 'Kara8', 1, NULL),
(30, 'Ivan', 'Edwards', 'mhjk72@rh-ptk.com', '173 North Green Cowley St.', '94672', 'Ivan8', 1, NULL),
(31, 'Andre', 'Holden', 'egmq@sm-b--.com', '67 South Rocky Old Drive', '71353', 'Wayne', 0, NULL),
(32, 'Joni', 'Hutchinson', 'kvrg@i---p-.net', '82 South Green Hague Road', '66612', 'Bennie', 1, NULL),
(33, 'Rex', 'Edwards', 'lpgo@-k--wh.org', '86 South Rocky Old Boulevard', '08538', 'Lynette', 0, NULL),
(34, 'Dwight', 'Reynolds', 'fkot@b--gfv.net', '936 West Green Milton Drive', '64720', 'Rogelio6', 1, NULL),
(35, 'Lucas', 'Horn', 'jqxn.kebo@-----x.org', '73 North Green Hague Avenue', '08333', 'Margarita', 0, NULL),
(36, 'Arnold', 'Kirk', 'mvju@a--wn-.com', '395 South Green Hague Drive', '73721', 'Ann', 0, NULL),
(37, 'Kristen', 'Velasquez', 'vwbj13@kefck-.net', '862 South Green Milton Parkway', '13581', 'Hollie', 0, NULL),
(38, 'Bobbi', 'Pittman', 'oqxmg@------.net', '364 North Rocky Clarendon St.', '33411', 'Sheryl', 1, NULL),
(39, 'Carl', 'Mathis', 'rusz.okfrzpmaae@c-b--l.com', '68 South Green First Freeway', '18480', 'Patrice', 0, NULL),
(40, 'Frances', 'Adams', 'ofyk572@---o-u.org', '366 East Rocky Cowley Road', '85378', 'Evelyn08', 0, NULL),
(41, 'Elena', 'Bray', 'lcnj@--tf--.org', '657 North Green Second Freeway', '77257', 'Marjorie81', 1, NULL),
(42, 'Luz', 'Bender', 'uyuck@jh-a-b.org', '144 South Green Old Boulevard', '45241', 'Roland3', 0, NULL),
(43, 'Jami', 'Mack', 'rlnc.jpsd@-u----.org', '81 East Green Old Way', '77856', 'Andre850', 1, NULL),
(44, 'Ruth', 'Lucas', 'cgry1@kmbl-y.com', '31 South Rocky Nobel St.', '55154', 'Casey', 0, NULL),
(45, 'Noah', 'Evans', 'buvq@-----f.net', '343 South Green Cowley Blvd.', '87075', 'Mathew5', 1, NULL),
(46, 'Emma', 'Wells', 'rynk.pbohfwii@--wngy.net', '66 East Rocky Old Freeway', '14422', 'Donovan304', 1, NULL),
(47, 'Damien', 'Garza', 'ddvx06@z-h-u-.org', '534 North Green Fabien Freeway', '61381', 'Lydia253', 1, NULL),
(48, 'Caroline', 'Snyder', 'tamk38@j-kx--.net', '243 North Rocky Oak Avenue', '99219', 'Bridget', 0, NULL),
(49, 'Elisabeth', 'Cross', 'hvml@ok----.com', '76 East Green Milton Parkway', '45438', 'Tamara238', 1, NULL),
(50, 'Morgan', 'Gomez', 'ksbf178@djv-yb.net', '853 North Green Nobel Freeway', '64316', 'Arturo784', 1, NULL),
(51, 'Clifford', 'Gonzales', 'apdjx@-k----.com', '602 North Rocky Clarendon Avenue', '16476', 'Virgil', 0, NULL),
(52, 'Guadalupe', 'Weber', 'pqma.abubsu@lcr-xm.com', '845 South White Second Avenue', '56767', 'Daphne', 0, NULL),
(53, 'Sophia', 'Lowe', 'vrgf@------.com', '39 South Green Old Drive', '33616', 'Katie2', 1, NULL),
(54, 'Angela', 'Allen', 'ubhh2@poy---.com', '329 South Green Old Avenue', '77378', 'Lance5', 1, NULL),
(55, 'Byron', 'Strong', 'gznq.vdrf@--c-wh.org', '57 North Green New Drive', '91126', 'Jayson45', 0, NULL),
(56, 'Jesse', 'Best', 'jaqt0@-b-g--.org', '652 North Rocky Fabien Drive', '08529', 'Stephen', 1, NULL),
(57, 'Paige', 'Stanton', 'tkoj4@-uqu-n.com', '74 West Green Hague Avenue', '65224', 'Byron', 1, NULL),
(58, 'Herman', 'Vasquez', 'wqpl@e--s--.com', '266 West Green Milton Parkway', '10356', 'Leah', 0, NULL),
(59, 'Clarissa', 'Daugherty', 'geuqd@---s-o.org', '93 West Green New Road', '02059', 'Timothy414', 0, NULL),
(60, 'Loretta', 'Davenport', 'dqysc@--hc-h.com', '43 South Rocky Second Avenue', '61751', 'Rene7', 1, NULL),
(61, 'Austin', 'Briggs', 'qqew@-klx-x.com', '79 South Green Second St.', '69879', 'Beverly2', 1, NULL),
(62, 'Deana', 'Beard', 'rkke8@------.org', '47 North Green Hague Boulevard', '42176', 'James', 1, NULL),
(63, 'William', 'Pacheco', 'orgme@---xeo.org', '22 East Rocky Hague St.', '28434', 'Darla', 0, NULL),
(64, 'Bridgett', 'Sampson', 'dufkjl036@--x---.com', '66 West White Milton Way', '42978', 'Miranda', 1, NULL),
(65, 'Tamiko', 'Church', 'jnacij@qsc-e-.com', '615 West White New Street', '30827', 'Simon', 0, NULL),
(66, 'Irma', 'Robinson', 'sbax@--e-x-.org', '826 North Green Hague Boulevard', '26385', 'Tania', 0, NULL),
(67, 'Kellie', 'Mullins', 'xewt@sr-g-b.org', '16 West Green Milton Way', '74748', 'Kristie', 0, NULL),
(68, 'Alex', 'Frey', 'bwtid9@--ud--.org', '881 West White Nobel Street', '77855', 'Kristie', 0, NULL),
(69, 'Whitney', 'Chen', 'yvmg@m-owps.org', '34 West White Hague Drive', '46563', 'Ruth5', 0, NULL),
(70, 'Marc', 'Proctor', 'cogw51@mdnu--.org', '76 South White Milton St.', '84725', 'Ronald066', 1, NULL),
(71, 'Dwayne', 'Trujillo', 'gjtc102@---c--.com', '10 South Green Milton Boulevard', '41970', 'Heidi4', 1, NULL),
(72, 'Theodore', 'Charles', 'dtle@-b--x-.com', '88 East Rocky First Street', '74356', 'Kara7', 0, NULL),
(73, 'Jayson', 'Rubio', 'migc.perk@vk-zs-.com', '778 East White Second Road', '15058', 'Rodney', 0, NULL),
(74, 'Lauren', 'Lyons', 'vtfli22@------.org', '905 West Green Milton St.', '74265', 'Xavier', 1, NULL),
(75, 'Tim', 'Andersen', 'jsdo4@e-b--b.com', '68 North White Second Drive', '31502', 'Lynn', 0, NULL),
(76, 'Omar', 'Conrad', 'olsj@li-y-u.com', '292 North Green Second St.', '52741', 'Belinda2', 1, NULL),
(77, 'Darla', 'Wright', 'vcid.zqvmye@-yc---.com', '128 North Green Nobel Boulevard', '58886', 'Tyson', 1, NULL),
(78, 'Melisa', 'Owen', 'qsoo557@nqg-yq.org', '754 North Green Second Road', '76181', 'Brian', 0, NULL),
(79, 'Ron', 'Bender', 'neohm9@ydj-y-.net', '557 North White Second St.', '14696', 'Scotty2', 1, NULL),
(80, 'Heidi', 'Swanson', 'ildh5@-ej-sx.com', '821 South Green First Road', '78333', 'Isabel', 1, NULL),
(81, 'Judith', 'Floyd', 'zuax.bzlcqn@---wvd.com', '666 North Green Second Boulevard', '17756', 'Gordon587', 1, NULL),
(82, 'Wallace', 'Howell', 'ugfz@tqk-p-.org', '154 East Green First Drive', '38877', 'Marissa', 1, NULL),
(83, 'Luz', 'Wise', 'sqtq@f-ev--.org', '927 North Green Hague Drive', '11581', 'Leonard', 0, NULL),
(84, 'Cari', 'Norton', 'dlqe@i--fj-.com', '857 West White Hague St.', '78418', 'Marlon3', 0, NULL),
(85, 'Regina', 'Lynn', 'tjdq4@mlj-bt.com', '521 South Green Fabien Freeway', '17437', 'Donald30', 1, NULL),
(86, 'Latanya', 'Carrillo', 'stqs289@p--yv-.com', '34 South Green Milton Drive', '39724', 'Mandi53', 0, NULL),
(87, 'Rudy', 'Barajas', 'phno75@v---uq.net', '273 North Green First St.', '43334', 'Susan5', 0, NULL),
(88, 'Lewis', 'Campos', 'ddthl.mdprt@-rxr-o.net', '30 South White Second Road', '92283', 'Jodie', 0, NULL),
(89, 'Jasmine', 'Mcclain', 'xjrd@--d-u-.org', '23 North Green Nobel St.', '53182', 'Betsy', 0, NULL),
(90, 'Laura', 'Washington', 'fsts.upuqo@-weomu.com', '47 North Green Second Way', '43778', 'Harvey774', 1, NULL),
(91, 'Dustin', 'Lynch', 'pvop@-kem--.com', '48 South Green Second St.', '63387', 'Shaun7', 0, NULL),
(92, 'Julian', 'Ward', 'ensd@y--vw-.com', '324 South Green Milton Parkway', '45553', 'Justin', 0, NULL),
(93, 'Kirsten', 'Bolton', 'durvc@--vtu-.net', '39 West Rocky Milton Road', '22842', 'Peggy412', 1, NULL),
(94, 'Rickey', 'Frost', 'ckni.fzpt@----n-.com', '568 North Green Old Boulevard', '97581', 'Omar', 1, NULL),
(95, 'Wesley', 'Hickman', 'ozwd.iivhqm@n-p-c-.net', '158 North Green Milton Road', '76765', 'Joyce577', 1, NULL),
(96, 'Brent', 'Edwards', 'wzqt@prxg-c.org', '318 West Green Fabien Avenue', '15592', 'Andrew30', 0, NULL),
(97, 'Kurt', 'Huber', 'jwpg.adrp@---f--.net', '74 West Green Hague Road', '46587', 'Josh545', 0, NULL),
(98, 'Sonya', 'Woodward', 'eefy@-phm--.com', '638 South Rocky Second St.', '23556', 'Jocelyn846', 0, NULL),
(99, 'Cassandra', 'Charles', 'fprn.uodd@--m-b-.net', '766 South White Second Road', '15554', 'Rolando3', 1, NULL),
(100, 'Bobbie', 'Ryan', 'trrb@x---db.com', '68 West Green Second Road', '66459', 'Isabel', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `license`
--

CREATE TABLE `license` (
  `licenseID` int(11) NOT NULL,
  `softwareID` int(11) NOT NULL,
  `clientOwnerID` int(11) NOT NULL,
  `serialNum` varchar(250) NOT NULL,
  `purchaseDate` date NOT NULL DEFAULT current_timestamp(),
  `expiryDate` date DEFAULT NULL,
  `Enabled` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `license`
--

INSERT INTO `license` (`licenseID`, `softwareID`, `clientOwnerID`, `serialNum`, `purchaseDate`, `expiryDate`, `Enabled`) VALUES
(1, 140, 23, '57558JCKDWSO014', '2020-09-01', '2021-02-28', 1),
(2, 65, 71, '54741XSDDIOJ311', '2020-10-31', NULL, 1),
(3, 35, 25, '43421FGLJLNO633', '2020-11-03', '2021-06-13', 1),
(4, 35, 51, '88881SXGFBKP362', '2020-09-28', '2021-06-04', 1),
(5, 9, 36, '22133YEIPPKD303', '2020-11-03', '2021-05-30', 1),
(6, 74, 6, '09383VCMCVLP376', '2020-03-14', '2021-08-22', 1),
(7, 107, 19, '12772JJWSDDT223', '2020-08-15', '2021-04-03', 1),
(8, 110, 68, '34155RHKHCDL671', '2020-04-05', '2021-09-11', 1),
(9, 80, 6, '17045CGIYXOK175', '2020-01-27', '2021-03-15', 1),
(10, 77, 96, '08708KLKCCTW792', '2020-06-15', '2021-11-04', 0),
(11, 30, 19, '97914ZPJSZTM448', '2020-01-09', '2021-10-23', 1),
(12, 36, 3, '23810BSFTWRZ931', '2020-10-12', '2021-03-16', 1),
(13, 4, 31, '49202FXWCCBD662', '2020-08-22', '2021-10-23', 1),
(14, 1, 40, '24035MWAGUJJ886', '2020-09-24', NULL, 0),
(15, 99, 44, '31545KNDOWBJ564', '2020-09-26', '2021-04-16', 1),
(16, 142, 77, '57221BXHOQYK627', '2020-03-30', '2021-08-09', 1),
(17, 143, 85, '15088TCKYJJT556', '2020-02-20', '2021-08-11', 1),
(18, 83, 24, '02256JLBDOMO047', '2020-07-11', '2021-03-08', 1),
(19, 99, 89, '66766YHEQOWC473', '2020-11-05', '2021-08-11', 1),
(20, 69, 63, '38278SWLTKTP563', '2020-05-20', '2021-01-21', 1),
(21, 14, 68, '72985EBYMNAW843', '2020-09-12', '2021-06-13', 1),
(22, 5, 15, '08753CWOHRRY378', '2020-08-28', '2021-06-16', 1),
(23, 33, 66, '36440ZOPMHNG656', '2020-01-02', NULL, 1),
(24, 1, 100, '32787LYOQWCN783', '2020-06-27', '2021-01-14', 1),
(25, 55, 6, '33147FWTXFZP543', '2020-09-03', '2021-08-17', 1),
(26, 54, 14, '58185IULQXFB824', '2020-04-30', '2021-05-31', 1),
(27, 148, 11, '56186JYSOGOK965', '2020-11-16', '2021-04-29', 1),
(28, 17, 90, '37172WCNXHOV277', '2020-06-01', '2021-04-11', 1),
(29, 123, 97, '80774GTPYJNX574', '2020-10-02', '2021-02-11', 1),
(30, 62, 89, '61549SXKSASQ553', '2020-02-13', '2021-04-27', 1),
(31, 117, 56, '74488DKIVWVE769', '2020-03-04', '2021-08-20', 1),
(32, 150, 76, '15256RCYKEVQ061', '2020-08-03', '2021-03-09', 1),
(33, 110, 81, '73067YLVIHMH347', '2020-04-19', '2021-01-12', 1),
(34, 122, 39, '28632PTKIXQX224', '2020-05-17', '2021-03-06', 1),
(35, 1, 1, '62648BPNJIKT486', '2020-09-08', '2021-03-19', 1),
(36, 109, 20, '21388FPSUHVM462', '2020-03-04', '2021-01-13', 1),
(37, 48, 30, '54349FWHWCQN245', '2020-04-03', '2021-08-17', 1),
(38, 2, 17, '73072GFVPGRU368', '2020-05-31', '2021-07-14', 1),
(39, 105, 21, '50410OTMEXYZ851', '2020-03-18', '2021-10-06', 1),
(40, 52, 60, '94483UHABGWN787', '2020-07-15', '2021-07-26', 1),
(41, 104, 87, '21780JDJBKEF148', '2020-09-27', '2021-08-06', 1),
(42, 28, 84, '44585QXMGDKI359', '2020-09-03', '2021-04-02', 1),
(43, 50, 6, '32314RUSZHOK269', '2020-09-11', '2021-08-23', 1),
(44, 30, 5, '54002UCJBRGL129', '2020-05-19', '2021-11-30', 1),
(45, 30, 31, '75293PUGCCXW507', '2020-09-18', '2021-06-08', 0),
(46, 137, 92, '10454CNJBRVT250', '2020-06-05', '2021-01-31', 1),
(47, 16, 47, '07327YUCKCJH401', '2020-10-26', '2021-10-14', 1),
(48, 46, 8, '07810RLNCKJP712', '2020-05-08', '2021-07-07', 1),
(49, 112, 29, '47723IDNZYCG691', '2020-06-24', '2021-06-14', 1),
(50, 21, 61, '04404NYIHOEB786', '2020-09-18', '2021-10-07', 1),
(51, 34, 92, '75555BFWTBLR953', '2020-01-18', NULL, 1),
(52, 119, 46, '05053FWIIAPG852', '2020-10-16', '2021-07-09', 1),
(53, 22, 91, '81472DDVXAQI973', '2020-04-26', NULL, 1),
(54, 29, 45, '77568JWTAMKI863', '2020-02-11', '2021-03-03', 1),
(55, 26, 52, '44823XAFKHVM475', '2020-06-09', '2021-10-24', 1),
(56, 87, 23, '47952STSDKSB217', '2020-06-12', '2021-02-23', 1),
(57, 146, 24, '83137YYBTHJN051', '2020-10-30', '2021-11-12', 1),
(58, 57, 48, '38824UJTTUSP356', '2020-03-01', '2021-07-13', 1),
(59, 3, 42, '40001UBSUHLC668', '2020-07-10', NULL, 1),
(60, 119, 51, '43185VRGFZFB433', '2020-06-29', NULL, 1),
(61, 2, 46, '97132UBHHFVP595', '2020-07-05', '2021-07-11', 1),
(62, 147, 38, '83175PGZNQGV162', '2020-10-08', '2021-01-02', 1),
(63, 31, 17, '44218WHBFVLJ067', '2020-07-10', '2021-09-17', 1),
(64, 30, 16, '09204GUJHTTA735', '2020-11-28', NULL, 1),
(65, 42, 9, '34477QUMNDJN886', '2020-10-27', '2021-11-04', 0),
(66, 70, 13, '54012USYSELU121', '2020-06-30', '2021-02-07', 1),
(67, 75, 70, '76105EBSWOPO671', '2020-03-12', '2021-04-19', 1),
(68, 22, 70, '69717GGHCQHC606', '2020-10-17', '2021-05-31', 1),
(69, 115, 68, '66185EKLXGXH776', '2020-04-18', '2021-06-21', 1),
(70, 69, 77, '63418GUHQLOD852', '2020-02-12', NULL, 1),
(71, 26, 67, '65624EHOZUXE554', '2020-02-19', '2021-04-22', 1),
(72, 97, 85, '79172KJLBJRE198', '2020-06-18', '2021-09-15', 1),
(73, 79, 99, '84354XBJNACI346', '2020-08-16', '2021-11-21', 1),
(74, 7, 54, '61121PHKUSBA889', '2020-05-31', '2021-01-24', 1),
(75, 149, 63, '51389NPBVXEW757', '2020-11-09', '2021-01-28', 0),
(76, 3, 68, '68261GOQBBWT319', '2020-05-06', '2021-10-06', 0),
(77, 14, 31, '24971QAJQZNY742', '2020-07-07', NULL, 1),
(78, 96, 9, '94758PSJNFLC528', '2020-07-07', '2021-06-12', 0),
(79, 13, 88, '51541NUFVAGG223', '2020-04-07', '2021-05-21', 1),
(80, 24, 19, '71102WRTBCZZ470', '2020-10-04', '2021-06-04', 1),
(81, 44, 11, '31741DUBTBXP642', '2020-09-29', NULL, 1),
(82, 143, 20, '94321TPERKKV449', '2020-07-08', '2021-01-21', 1),
(83, 127, 7, '67597OVTFLIG271', '2020-04-22', '2021-02-07', 1),
(84, 16, 63, '87176WJVGJSD548', '2020-06-10', '2021-09-28', 1),
(85, 88, 11, '18008BDSENOL731', '2020-08-29', '2021-02-25', 1),
(86, 12, 65, '43396UNBHPVC314', '2020-05-18', '2021-09-27', 1),
(87, 74, 33, '96849EVKYCMR324', '2020-07-25', '2021-09-12', 1),
(88, 86, 75, '62665ONNTUNQ269', '2020-02-20', '2021-10-05', 0),
(89, 15, 33, '66092NEOHMYM913', '2020-08-28', '2021-05-01', 0),
(90, 128, 35, '09489EZILDHP502', '2020-10-08', '2021-02-10', 1),
(91, 110, 34, '37789WGVZUAX809', '2020-01-20', '2021-04-01', 1),
(92, 127, 17, '41657LLPWVDR268', '2020-08-11', '2021-02-18', 0),
(93, 123, 100, '72293TQKUPKX112', '2020-05-30', '2021-11-04', 1),
(94, 118, 99, '76764FHEVSES752', '2020-08-30', '2021-06-28', 1),
(95, 63, 26, '14616IMTFJJI687', '2020-06-27', '2021-05-23', 1),
(96, 150, 87, '73164RMLJFBT247', '2020-07-16', '2021-05-29', 1),
(97, 100, 80, '86766GVZOPIQ985', '2020-07-27', '2021-06-20', 1),
(98, 4, 96, '76535HNOSNRV761', '2020-01-02', '2021-07-16', 1),
(99, 9, 48, '76024HDDTHLT415', '2020-08-18', '2021-11-20', 1),
(100, 145, 2, '67266XRBOWZO783', '2020-11-27', '2021-10-16', 1),
(101, 48, 37, '61115DVUGVYJ226', '2020-10-16', '2021-10-31', 0),
(102, 95, 28, '76575UQORVWE547', '2020-04-12', NULL, 1),
(103, 134, 50, '71645VOPDAKE425', '2020-06-17', '2021-02-16', 1),
(104, 52, 50, '53781NSDGYLC885', '2020-04-19', '2021-09-24', 1),
(105, 144, 84, '49251URVCXXE877', '2020-06-16', '2021-04-21', 1),
(106, 85, 48, '11132CKNIMFZ575', '2020-10-14', '2021-07-21', 1),
(107, 64, 47, '60575FOGYROZ810', '2020-09-01', '2021-08-22', 1),
(108, 72, 57, '33836MVNLPUC418', '2020-04-27', '2021-07-06', 1),
(109, 148, 60, '67896TIPRXGN160', '2020-10-06', '2021-11-01', 1),
(110, 31, 33, '70385GDADRPF673', '2020-10-28', '2021-09-01', 1),
(111, 139, 1, '26189ZGEEFYH663', '2020-05-25', '2021-11-27', 1),
(112, 25, 54, '47125ODFPRNS751', '2020-06-07', '2021-02-24', 1),
(113, 136, 10, '13484IBJHMLC766', '2020-02-24', '2021-02-13', 1),
(114, 119, 92, '00885KDBSWQT969', '2020-04-17', '2021-03-09', 1),
(115, 83, 84, '78343FVJNSMM844', '2020-08-08', '2021-05-21', 1),
(116, 8, 99, '71576QVRSPCE748', '2020-05-18', '2021-10-04', 1),
(117, 38, 78, '61116EQGTUBI227', '2020-05-07', '2021-06-21', 1),
(118, 145, 25, '44870WYVHGIY724', '2020-07-28', '2021-11-28', 1),
(119, 69, 76, '41389CQYMHEE837', '2020-06-01', '2021-07-13', 1),
(120, 123, 64, '51745SQNREJA613', '2020-01-12', '2021-11-25', 1),
(121, 44, 45, '77180PKJLKQD112', '2020-10-04', '2021-02-24', 1),
(122, 105, 71, '64825WUPQEIO843', '2020-11-22', NULL, 1),
(123, 124, 63, '37490CEFOYJS617', '2020-01-20', '2021-07-19', 1),
(124, 26, 61, '81566ZOGZJLJ032', '2020-06-06', NULL, 1),
(125, 47, 5, '91563YCJBLDF514', '2020-10-07', '2021-10-29', 1),
(126, 131, 74, '62499FBXNNNQ755', '2020-02-09', '2021-01-23', 1),
(127, 4, 73, '86250GTAOOFQ623', '2020-05-26', '2021-07-29', 1),
(128, 89, 67, '86524OVWCHUR268', '2020-01-31', '2021-07-18', 1),
(129, 9, 25, '28510CFGPWIX130', '2020-06-21', NULL, 1),
(130, 91, 24, '31183TTUYMGM666', '2020-06-07', '2021-09-02', 1),
(131, 132, 21, '26414MXERJGB752', '2020-04-11', '2021-07-24', 0),
(132, 149, 54, '41037SWXSVJS618', '2020-08-16', '2021-09-23', 1),
(133, 102, 33, '60847ZBIYKRM323', '2020-08-01', '2021-01-21', 1),
(134, 50, 82, '34521XGKZCMV187', '2020-09-21', '2021-05-06', 1),
(135, 142, 75, '56367WMRRVQV577', '2020-08-28', '2021-04-24', 1),
(136, 128, 58, '22845JVSFGZR741', '2020-04-10', '2021-09-21', 1),
(137, 15, 54, '14783WBWMTHH919', '2020-05-05', '2021-05-23', 1),
(138, 61, 8, '45780HJHNLBT696', '2020-05-04', '2021-11-08', 1),
(139, 94, 49, '02683PSQCBJE413', '2020-03-24', '2021-06-22', 1),
(140, 135, 62, '04201QDXVHNL471', '2020-05-17', '2021-04-13', 1),
(141, 104, 8, '16574DNMOYXS118', '2020-09-03', '2021-02-22', 1),
(142, 95, 97, '14394XIRXDML140', '2020-04-15', '2021-09-01', 1),
(143, 3, 23, '15594CARYXQJ512', '2020-08-14', '2021-07-15', 1),
(144, 64, 30, '48924ZOQFBSA622', '2020-05-16', '2021-04-17', 1),
(145, 103, 83, '71645QYGUOKC837', '2020-09-26', '2021-02-11', 1),
(146, 104, 91, '77811HHPLODE595', '2020-09-21', '2021-10-25', 1),
(147, 23, 2, '22172QXSMOHF656', '2020-01-09', '2021-08-31', 1),
(148, 115, 19, '53358XKXBBAL526', '2020-04-30', '2021-11-25', 1),
(149, 98, 51, '53966IYJLANS528', '2020-05-30', '2021-05-15', 1),
(150, 104, 61, '63735IKJOINB614', '2020-09-15', '2021-10-05', 1),
(151, 100, 89, '56715SAQDUXX355', '2020-01-06', '2021-06-18', 1),
(152, 76, 87, '59615FGIQUQZ820', '2020-03-31', '2021-02-02', 1),
(153, 50, 65, '40928YTWLMTI863', '2020-03-23', '2021-02-15', 1),
(154, 78, 95, '76879VWEBPVY757', '2020-10-30', '2021-01-06', 1),
(155, 32, 61, '11181FPJVGYC762', '2020-01-15', '2021-01-12', 1),
(156, 93, 69, '37346HIFWYWK570', '2020-03-09', '2021-05-11', 1),
(157, 75, 60, '71330DHWROTQ576', '2020-02-19', '2021-06-19', 1),
(158, 45, 21, '05126IFUNPGC181', '2020-10-05', '2021-02-12', 0),
(159, 25, 36, '88487EDFTEWO530', '2020-09-19', '2021-05-27', 1),
(160, 138, 14, '57255KIASTPE645', '2020-03-31', '2021-09-20', 1),
(161, 42, 25, '94153NBAVIRS599', '2020-02-06', '2021-03-31', 1),
(162, 110, 58, '80813HWUWDBW642', '2020-05-10', '2021-06-26', 1),
(163, 136, 59, '19708QGBUAKS756', '2020-11-24', '2021-10-20', 1),
(164, 54, 32, '63246TXERUDH895', '2020-04-14', '2021-09-28', 1),
(165, 9, 85, '48495TLITVMM475', '2020-08-14', '2021-05-01', 0),
(166, 83, 85, '22005BXEODDT460', '2020-01-26', '2021-09-17', 1),
(167, 60, 99, '23721UBCSKVW626', '2020-06-13', '2021-11-18', 1),
(168, 71, 69, '75828MXUAIRY955', '2020-07-31', '2021-03-21', 1),
(169, 77, 62, '23845VBKQBBY630', '2020-09-13', NULL, 1),
(170, 67, 77, '66522QMYUQUM867', '2020-09-15', '2021-10-14', 0),
(171, 84, 82, '30436SCMVFGU398', '2020-07-31', '2021-07-19', 1),
(172, 44, 96, '26364SRRBUHG341', '2020-11-08', '2021-05-04', 1),
(173, 38, 2, '63386NHQQMBP335', '2020-06-12', '2021-10-07', 1),
(174, 108, 75, '42457LRSEKZC578', '2020-08-27', '2021-08-14', 1),
(175, 118, 68, '12683SDUDJHI387', '2020-11-10', '2021-05-11', 1),
(176, 105, 89, '55222WHKXIUE232', '2020-04-23', NULL, 1),
(177, 36, 91, '66716OZMNZEN179', '2020-08-18', '2021-02-24', 1),
(178, 19, 89, '65122SHMNOZJ824', '2020-03-23', '2021-05-31', 1),
(179, 77, 60, '33648PLERGEX528', '2020-03-23', NULL, 1),
(180, 143, 16, '00025UMUQWXQ833', '2020-10-22', '2021-01-15', 1),
(181, 10, 70, '23532CYQLMHJ347', '2020-06-29', '2021-10-25', 1),
(182, 38, 58, '69064IGKIOBG163', '2020-02-03', '2021-05-09', 1),
(183, 97, 87, '59648NXHWMKH509', '2020-08-10', '2021-04-07', 1),
(184, 110, 79, '06731IUSBXWL576', '2020-09-25', '2021-05-10', 1),
(185, 73, 35, '56777OLKKWYV577', '2020-10-10', NULL, 1),
(186, 77, 4, '64011BGLHXCW255', '2020-06-23', '2021-09-25', 1),
(187, 22, 53, '44541JGBWXIZ361', '2020-02-02', '2021-10-05', 1),
(188, 145, 70, '97080SVCWSDD313', '2020-05-22', '2021-09-03', 1),
(189, 120, 76, '64519VWUXBUY661', '2020-08-13', '2021-04-13', 1),
(190, 37, 55, '74091DTYQASD255', '2020-09-27', '2021-01-15', 0),
(191, 73, 4, '78622RTGAVWF233', '2020-04-22', NULL, 1),
(192, 15, 57, '84468TAVQFWF009', '2020-05-24', '2021-04-15', 1),
(193, 39, 37, '27163HLBNRTU518', '2020-02-27', '2021-07-18', 0),
(194, 126, 75, '60471IYIWCHL728', '2020-02-28', '2021-10-12', 1),
(195, 15, 18, '76004BMSRUJP266', '2020-10-20', '2021-02-19', 1),
(196, 16, 95, '06122YNVQGIM486', '2020-06-09', '2021-04-20', 1),
(197, 101, 14, '62584ODLQUXT093', '2020-09-15', '2021-04-09', 1),
(198, 103, 27, '24313GGAIOIQ453', '2020-07-07', '2021-05-13', 1),
(199, 29, 28, '11435EQOYTHL615', '2020-09-02', '2021-01-20', 1),
(200, 126, 68, '47817YSKXFHM122', '2020-06-23', '2021-01-29', 1),
(201, 68, 23, '48289LXVMFFF703', '2020-07-26', '2021-01-23', 1),
(202, 106, 6, '98171RDXOFRQ587', '2020-05-25', '2021-10-29', 1),
(203, 126, 74, '91833QNVMMYT207', '2020-08-18', '2021-05-16', 1),
(204, 91, 27, '37098BCDCHCS883', '2020-09-10', '2021-11-08', 1),
(205, 6, 25, '80567ENJNUPG122', '2020-04-11', '2021-01-05', 1),
(206, 1, 20, '24705YBODPOR286', '2020-11-21', '2021-10-07', 1),
(207, 137, 99, '88036JEOOOFJ145', '2020-05-24', '2021-07-23', 1),
(208, 54, 10, '85388UCSDXXR544', '2020-08-02', '2021-05-06', 0),
(209, 91, 49, '97427IWJULJA866', '2020-05-07', '2021-09-08', 1),
(210, 41, 85, '82379KHNGMNE266', '2020-05-08', '2021-10-21', 1),
(211, 19, 25, '94351YKYNMNF461', '2020-04-07', '2021-09-28', 1),
(212, 149, 54, '23586KBHHXCZ424', '2020-08-16', '2021-09-20', 1),
(213, 85, 43, '83335KKQZDDX877', '2020-11-08', '2021-03-05', 1),
(214, 89, 72, '06614CIRQHOA768', '2020-10-12', '2021-07-09', 1),
(215, 52, 12, '07082IYEOQYT443', '2020-08-17', '2021-09-29', 0),
(216, 10, 17, '64127KDVZPZP321', '2020-10-14', '2021-05-30', 1),
(217, 112, 98, '05293RAZQHSI367', '2020-04-01', '2021-07-01', 1),
(218, 62, 78, '87245OTWSTJG613', '2020-05-30', NULL, 1),
(219, 11, 49, '47518IQBLHUR339', '2020-06-25', '2021-04-11', 1),
(220, 106, 51, '14537SMYEHDU041', '2020-04-04', '2021-01-08', 1),
(221, 48, 19, '86236HFBJGBX418', '2020-09-14', '2021-10-01', 0),
(222, 80, 12, '32324AWGIWGE448', '2020-10-20', '2021-08-08', 1),
(223, 86, 27, '32600CUEDGQB179', '2020-07-14', '2021-07-25', 0),
(224, 17, 16, '81586VEIAUST487', '2020-08-26', '2021-06-06', 1),
(225, 140, 63, '38874LOLGOPP197', '2020-10-31', '2021-10-03', 1);

-- --------------------------------------------------------

--
-- Table structure for table `software`
--

CREATE TABLE `software` (
  `softwareID` int(11) NOT NULL,
  `ownerID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `genre` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `numDownloads` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `imageLink` varchar(250) DEFAULT NULL,
  `imgLinkPr1` varchar(250) DEFAULT NULL,
  `imgLinkPr2` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `software`
--

INSERT INTO `software` (`softwareID`, `ownerID`, `name`, `genre`, `description`, `numDownloads`, `price`, `imageLink`, `imgLinkPr1`, `imgLinkPr2`) VALUES
(1, 23, 'Rebanicar', 'Lifestyle', 'Utility used to increase productivity and make your dream design a reality', 15687, 731, NULL, NULL, NULL),
(2, 70, 'Varpickistor', 'Graphical', 'Utility used to assist in design and make your dream design a reality', 1895, 580, NULL, NULL, NULL),
(3, 28, 'Barjubanicator', 'Lifestyle', 'Software used to increase productivity and realize your project in an efficient manner', 10498, 778, NULL, NULL, NULL),
(4, 97, 'Varniponazz', 'Lifestyle', 'Utility used to increase productivity and manage your project effectively', 9917, 116, NULL, NULL, NULL),
(5, 93, 'Endcadopar', 'Coding', 'Utility used to assist in design and realize your project in an efficient manner', 9633, 339, NULL, NULL, NULL),
(6, 68, 'Doptumaquower', 'Lifestyle', 'Software used to assist in design and manage your project effectively', 14982, 679, NULL, NULL, NULL),
(7, 20, 'Moncadicistor', 'Coding', 'Utility used to assist in design and manage your project effectively', 5964, 543, NULL, NULL, NULL),
(8, 43, 'Rappebamor', 'Coding', 'Software used to increase productivity and make your dream design a reality', 16319, 895, NULL, NULL, NULL),
(9, 29, 'Winerplar', 'Lifestyle', 'Utility used to increase productivity and realize your project in an efficient manner', 4708, 16, NULL, NULL, NULL),
(10, 86, 'Parzapupax', 'Graphical', 'Utility used to assist in design and make your dream design a reality', 19764, 933, NULL, NULL, NULL),
(11, 51, 'Varkilopistor', 'Coding', 'Utility used to increase productivity and manage your project effectively', 19027, 520, NULL, NULL, NULL),
(12, 47, 'Lomvenplistor', 'Coding', 'Software used to assist in design and make your dream design a reality', 4767, 567, NULL, NULL, NULL),
(13, 29, 'Hapzapopicator', 'Lifestyle', 'Software used to assist in design and realize your project in an efficient manner', 18980, 442, NULL, NULL, NULL),
(14, 47, 'Qwibanazz', 'Graphical', 'Utility used to increase productivity and realize your project in an efficient manner', 9437, 990, NULL, NULL, NULL),
(15, 67, 'Unglibupover', 'Coding', 'Utility used to increase productivity and realize your project in an efficient manner', 8436, 686, NULL, NULL, NULL),
(16, 63, 'Varwerefazz', 'Lifestyle', 'Utility used to assist in design and manage your project effectively', 21360, 577, NULL, NULL, NULL),
(17, 89, 'Varglibentor', 'Coding', 'Tool used to assist in design and manage your project effectively', 18929, 216, NULL, NULL, NULL),
(18, 58, 'Emvenupover', 'Lifestyle', 'Utility used to assist in design and realize your project in an efficient manner', 6080, 689, NULL, NULL, NULL),
(19, 67, 'Empebupex', 'Lifestyle', 'Software used to increase productivity and realize your project in an efficient manner', 5321, 346, NULL, NULL, NULL),
(20, 73, 'Parfropplicator', 'Coding', 'Utility used to increase productivity and realize your project in an efficient manner', 12746, 504, NULL, NULL, NULL),
(21, 75, 'Monrobonex', 'Lifestyle', 'Utility used to increase productivity and realize your project in an efficient manner', 10991, 400, NULL, NULL, NULL),
(22, 58, 'Cipzapar', 'Graphical', 'Utility used to assist in design and manage your project effectively', 1657, 124, NULL, NULL, NULL),
(23, 80, 'Grobananin', 'Coding', 'Utility used to assist in design and realize your project in an efficient manner', 862, 265, NULL, NULL, NULL),
(24, 47, 'Trududax', 'Lifestyle', 'Utility used to increase productivity and manage your project effectively', 14668, 314, NULL, NULL, NULL),
(25, 71, 'Varkilaquentor', 'Coding', 'Software used to assist in design and realize your project in an efficient manner', 9679, 671, NULL, NULL, NULL),
(26, 65, 'Unwerommor', 'Lifestyle', 'Software used to increase productivity and make your dream design a reality', 7613, 446, NULL, NULL, NULL),
(27, 79, 'Winhupicor', 'Graphical', 'Tool used to increase productivity and make your dream design a reality', 6481, 437, NULL, NULL, NULL),
(28, 53, 'Grozapupor', 'Lifestyle', 'Utility used to increase productivity and manage your project effectively', 2693, 191, NULL, NULL, NULL),
(29, 15, 'Upbanonentor', 'Lifestyle', 'Tool used to assist in design and manage your project effectively', 7510, 21, NULL, NULL, NULL),
(30, 2, 'Endglibupistor', 'Coding', 'Software used to increase productivity and realize your project in an efficient manner', 14866, 327, NULL, NULL, NULL),
(31, 26, 'Klicadackower', 'Lifestyle', 'Utility used to assist in design and realize your project in an efficient manner', 4348, 269, NULL, NULL, NULL),
(32, 87, 'Inkilentor', 'Lifestyle', 'Tool used to assist in design and realize your project in an efficient manner', 732, 647, NULL, NULL, NULL),
(33, 43, 'Monkilommentor', 'Graphical', 'Tool used to increase productivity and realize your project in an efficient manner', 4150, 307, NULL, NULL, NULL),
(34, 21, 'Emkiledgax', 'Lifestyle', 'Utility used to increase productivity and manage your project effectively', 4989, 180, NULL, NULL, NULL),
(35, 47, 'Zeedimupar', 'Graphical', 'Utility used to assist in design and manage your project effectively', 825, 893, NULL, NULL, NULL),
(36, 22, 'Vareristor', 'Lifestyle', 'Tool used to assist in design and manage your project effectively', 14689, 77, NULL, NULL, NULL),
(37, 14, 'Haptinupin', 'Lifestyle', 'Tool used to assist in design and manage your project effectively', 12523, 876, NULL, NULL, NULL),
(38, 61, 'Growerommax', 'Lifestyle', 'Tool used to increase productivity and realize your project in an efficient manner', 17897, 143, NULL, NULL, NULL),
(39, 7, 'Varcadollantor', 'Coding', 'Utility used to assist in design and realize your project in an efficient manner', 13260, 451, NULL, NULL, NULL),
(40, 74, 'Zeesapupower', 'Graphical', 'Utility used to increase productivity and make your dream design a reality', 13970, 576, NULL, NULL, NULL),
(41, 66, 'Windimedower', 'Lifestyle', 'Utility used to increase productivity and realize your project in an efficient manner', 5880, 893, NULL, NULL, NULL),
(42, 3, 'Surdimupazz', 'Coding', 'Utility used to increase productivity and realize your project in an efficient manner', 15091, 601, NULL, NULL, NULL),
(43, 54, 'Doppickplantor', 'Graphical', 'Tool used to assist in design and manage your project effectively', 21457, 168, NULL, NULL, NULL),
(44, 51, 'Qwizapackin', 'Graphical', 'Utility used to increase productivity and make your dream design a reality', 10214, 898, NULL, NULL, NULL),
(45, 51, 'Winrobepar', 'Coding', 'Software used to increase productivity and manage your project effectively', 1967, 967, NULL, NULL, NULL),
(46, 6, 'Emzapplar', 'Lifestyle', 'Software used to assist in design and realize your project in an efficient manner', 18422, 456, NULL, NULL, NULL),
(47, 76, 'Klizapar', 'Coding', 'Utility used to assist in design and make your dream design a reality', 12036, 231, NULL, NULL, NULL),
(48, 45, 'Emfropinazz', 'Lifestyle', 'Utility used to assist in design and manage your project effectively', 10591, 613, NULL, NULL, NULL),
(49, 85, 'Cipjubazz', 'Graphical', 'Utility used to assist in design and make your dream design a reality', 17960, 198, NULL, NULL, NULL),
(50, 83, 'Rapbanilan', 'Coding', 'Utility used to increase productivity and make your dream design a reality', 3928, 701, NULL, NULL, NULL),
(51, 88, 'Cipvenewin', 'Lifestyle', 'Utility used to assist in design and realize your project in an efficient manner', 607, 539, NULL, NULL, NULL),
(52, 90, 'Endrobommentor', 'Lifestyle', 'Utility used to increase productivity and make your dream design a reality', 3959, 144, NULL, NULL, NULL),
(53, 73, 'Cipkilewentor', 'Lifestyle', 'Tool used to increase productivity and make your dream design a reality', 19041, 722, NULL, NULL, NULL),
(54, 44, 'Varweristor', 'Lifestyle', 'Software used to assist in design and realize your project in an efficient manner', 3416, 872, NULL, NULL, NULL),
(55, 38, 'Varpickepex', 'Lifestyle', 'Tool used to increase productivity and make your dream design a reality', 20268, 614, NULL, NULL, NULL),
(56, 91, 'Inquestplar', 'Lifestyle', 'Tool used to increase productivity and realize your project in an efficient manner', 12449, 145, NULL, NULL, NULL),
(57, 95, 'Lomtumover', 'Graphical', 'Software used to assist in design and make your dream design a reality', 168, 475, NULL, NULL, NULL),
(58, 27, 'Klitanupar', 'Lifestyle', 'Utility used to increase productivity and realize your project in an efficient manner', 12326, 826, NULL, NULL, NULL),
(59, 93, 'Tuprobplan', 'Graphical', 'Utility used to increase productivity and manage your project effectively', 126, 133, NULL, NULL, NULL),
(60, 90, 'Lomhupentor', 'Lifestyle', 'Utility used to assist in design and manage your project effectively', 16665, 813, NULL, NULL, NULL),
(61, 61, 'Qwiquestplin', 'Lifestyle', 'Software used to increase productivity and realize your project in an efficient manner', 6348, 896, NULL, NULL, NULL),
(62, 64, 'Adtumonazz', 'Graphical', 'Software used to assist in design and realize your project in an efficient manner', 13813, 892, NULL, NULL, NULL),
(63, 72, 'Varerupex', 'Graphical', 'Utility used to assist in design and manage your project effectively', 18836, 758, NULL, NULL, NULL),
(64, 51, 'Dopvenamistor', 'Lifestyle', 'Utility used to increase productivity and realize your project in an efficient manner', 12766, 121, NULL, NULL, NULL),
(65, 16, 'Qwimunopentor', 'Graphical', 'Tool used to assist in design and realize your project in an efficient manner', 6050, 978, NULL, NULL, NULL),
(66, 46, 'Zeesipower', 'Lifestyle', 'Software used to assist in design and manage your project effectively', 319, 883, NULL, NULL, NULL),
(67, 84, 'Tupglibollazz', 'Lifestyle', 'Software used to assist in design and realize your project in an efficient manner', 7160, 246, NULL, NULL, NULL),
(68, 73, 'Dopfropanan', 'Graphical', 'Utility used to increase productivity and make your dream design a reality', 16535, 609, NULL, NULL, NULL),
(69, 60, 'Adkilplor', 'Coding', 'Utility used to assist in design and manage your project effectively', 20857, 185, NULL, NULL, NULL),
(70, 73, 'Hapweropan', 'Graphical', 'Software used to increase productivity and realize your project in an efficient manner', 1478, 610, NULL, NULL, NULL),
(71, 38, 'Winfropplor', 'Coding', 'Utility used to increase productivity and make your dream design a reality', 1773, 46, NULL, NULL, NULL),
(72, 9, 'Zeezapplentor', 'Graphical', 'Software used to assist in design and realize your project in an efficient manner', 17911, 363, NULL, NULL, NULL),
(73, 69, 'Zeevenicistor', 'Coding', 'Utility used to increase productivity and realize your project in an efficient manner', 21217, 439, NULL, NULL, NULL),
(74, 7, 'Gromunollar', 'Lifestyle', 'Tool used to assist in design and make your dream design a reality', 16602, 527, NULL, NULL, NULL),
(75, 24, 'Inkilupax', 'Graphical', 'Utility used to increase productivity and make your dream design a reality', 4089, 966, NULL, NULL, NULL),
(76, 93, 'Inpebackex', 'Coding', 'Software used to increase productivity and manage your project effectively', 595, 994, NULL, NULL, NULL),
(77, 75, 'Endjubollicator', 'Coding', 'Tool used to increase productivity and realize your project in an efficient manner', 1323, 619, NULL, NULL, NULL),
(78, 77, 'Unhupor', 'Lifestyle', 'Utility used to assist in design and make your dream design a reality', 2400, 905, NULL, NULL, NULL),
(79, 98, 'Qwifropupicator', 'Coding', 'Utility used to assist in design and realize your project in an efficient manner', 17392, 825, NULL, NULL, NULL),
(80, 97, 'Endglibommar', 'Lifestyle', 'Utility used to assist in design and realize your project in an efficient manner', 3551, 20, NULL, NULL, NULL),
(81, 32, 'Qwiglibupicator', 'Lifestyle', 'Tool used to increase productivity and manage your project effectively', 17333, 709, NULL, NULL, NULL),
(82, 89, 'Winkilplistor', 'Lifestyle', 'Tool used to assist in design and make your dream design a reality', 16380, 415, NULL, NULL, NULL),
(83, 92, 'Tupmunicicator', 'Graphical', 'Software used to increase productivity and realize your project in an efficient manner', 17856, 365, NULL, NULL, NULL),
(84, 76, 'Mondudazz', 'Lifestyle', 'Utility used to assist in design and realize your project in an efficient manner', 7753, 751, NULL, NULL, NULL),
(85, 37, 'Cipdimplicator', 'Lifestyle', 'Utility used to assist in design and realize your project in an efficient manner', 2572, 61, NULL, NULL, NULL),
(86, 35, 'Cipnipplower', 'Coding', 'Utility used to assist in design and make your dream design a reality', 5795, 361, NULL, NULL, NULL),
(87, 68, 'Parpickicar', 'Lifestyle', 'Tool used to increase productivity and manage your project effectively', 3139, 170, NULL, NULL, NULL),
(88, 90, 'Tupjubar', 'Coding', 'Utility used to increase productivity and make your dream design a reality', 19773, 971, NULL, NULL, NULL),
(89, 5, 'Cipdudentor', 'Coding', 'Utility used to assist in design and manage your project effectively', 11481, 999, NULL, NULL, NULL),
(90, 15, 'Winzapupax', 'Graphical', 'Software used to assist in design and manage your project effectively', 9157, 890, NULL, NULL, NULL),
(91, 43, 'Unzapedazz', 'Coding', 'Tool used to increase productivity and realize your project in an efficient manner', 9548, 729, NULL, NULL, NULL),
(92, 31, 'Vardudplar', 'Graphical', 'Tool used to assist in design and realize your project in an efficient manner', 10941, 970, NULL, NULL, NULL),
(93, 15, 'Cipnipadower', 'Lifestyle', 'Utility used to increase productivity and manage your project effectively', 12620, 360, NULL, NULL, NULL),
(94, 81, 'Qwidimor', 'Lifestyle', 'Software used to assist in design and realize your project in an efficient manner', 20825, 354, NULL, NULL, NULL),
(95, 43, 'Winkilover', 'Graphical', 'Utility used to assist in design and realize your project in an efficient manner', 18557, 292, NULL, NULL, NULL),
(96, 87, 'Kliglibaman', 'Lifestyle', 'Software used to assist in design and realize your project in an efficient manner', 19493, 191, NULL, NULL, NULL),
(97, 19, 'Qwinipar', 'Graphical', 'Software used to assist in design and make your dream design a reality', 11890, 410, NULL, NULL, NULL),
(98, 29, 'Ciptanommicator', 'Coding', 'Software used to assist in design and realize your project in an efficient manner', 20829, 686, NULL, NULL, NULL),
(99, 93, 'Varmunepor', 'Graphical', 'Tool used to assist in design and realize your project in an efficient manner', 7265, 640, NULL, NULL, NULL),
(100, 99, 'Winfropplin', 'Lifestyle', 'Software used to increase productivity and manage your project effectively', 6173, 628, NULL, NULL, NULL),
(101, 14, 'Bardudicistor', 'Lifestyle', 'Utility used to assist in design and make your dream design a reality', 20061, 994, NULL, NULL, NULL),
(102, 65, 'Rejubplantor', 'Lifestyle', 'Utility used to assist in design and realize your project in an efficient manner', 10510, 83, NULL, NULL, NULL),
(103, 33, 'Varzapopentor', 'Lifestyle', 'Utility used to assist in design and realize your project in an efficient manner', 4381, 504, NULL, NULL, NULL),
(104, 74, 'Unglibistor', 'Lifestyle', 'Software used to increase productivity and realize your project in an efficient manner', 20553, 377, NULL, NULL, NULL),
(105, 20, 'Frozapanax', 'Graphical', 'Software used to assist in design and manage your project effectively', 15514, 696, NULL, NULL, NULL),
(106, 71, 'Zeevenicentor', 'Lifestyle', 'Utility used to increase productivity and realize your project in an efficient manner', 4058, 497, NULL, NULL, NULL),
(107, 41, 'Zeejubazz', 'Coding', 'Tool used to increase productivity and realize your project in an efficient manner', 10287, 839, NULL, NULL, NULL),
(108, 11, 'Dopquestommor', 'Coding', 'Tool used to increase productivity and realize your project in an efficient manner', 20466, 146, NULL, NULL, NULL),
(109, 79, 'Barfropewar', 'Graphical', 'Utility used to assist in design and realize your project in an efficient manner', 16769, 254, NULL, NULL, NULL),
(110, 72, 'Grofropplicator', 'Coding', 'Software used to increase productivity and realize your project in an efficient manner', 12025, 458, NULL, NULL, NULL),
(111, 81, 'Injubicar', 'Lifestyle', 'Utility used to assist in design and make your dream design a reality', 5007, 840, NULL, NULL, NULL),
(112, 78, 'Parhupentor', 'Lifestyle', 'Utility used to increase productivity and make your dream design a reality', 14750, 376, NULL, NULL, NULL),
(113, 78, 'Inkilaquazz', 'Lifestyle', 'Utility used to increase productivity and realize your project in an efficient manner', 13603, 456, NULL, NULL, NULL),
(114, 90, 'Rehupplentor', 'Graphical', 'Utility used to assist in design and make your dream design a reality', 8034, 509, NULL, NULL, NULL),
(115, 25, 'Parjubamicator', 'Lifestyle', 'Software used to increase productivity and make your dream design a reality', 13898, 195, NULL, NULL, NULL),
(116, 80, 'Upglibower', 'Graphical', 'Utility used to assist in design and realize your project in an efficient manner', 2109, 618, NULL, NULL, NULL),
(117, 79, 'Parbanistor', 'Graphical', 'Software used to increase productivity and make your dream design a reality', 12812, 297, NULL, NULL, NULL),
(118, 99, 'Vardudopazz', 'Coding', 'Utility used to assist in design and realize your project in an efficient manner', 16307, 117, NULL, NULL, NULL),
(119, 36, 'Qwidimopicator', 'Lifestyle', 'Utility used to increase productivity and realize your project in an efficient manner', 14569, 717, NULL, NULL, NULL),
(120, 15, 'Tipjubinax', 'Graphical', 'Tool used to assist in design and make your dream design a reality', 8737, 175, NULL, NULL, NULL),
(121, 50, 'Kliquestplentor', 'Graphical', 'Tool used to assist in design and realize your project in an efficient manner', 9694, 184, NULL, NULL, NULL),
(122, 7, 'Barfropollar', 'Lifestyle', 'Utility used to increase productivity and realize your project in an efficient manner', 735, 259, NULL, NULL, NULL),
(123, 18, 'Barwerower', 'Lifestyle', 'Utility used to assist in design and make your dream design a reality', 15713, 230, NULL, NULL, NULL),
(124, 38, 'Supquestplazz', 'Coding', 'Utility used to increase productivity and realize your project in an efficient manner', 13137, 593, NULL, NULL, NULL),
(125, 86, 'Barerax', 'Lifestyle', 'Utility used to assist in design and make your dream design a reality', 17038, 624, NULL, NULL, NULL),
(126, 36, 'Suprobollar', 'Lifestyle', 'Utility used to increase productivity and realize your project in an efficient manner', 1336, 13, NULL, NULL, NULL),
(127, 29, 'Inpickplentor', 'Graphical', 'Utility used to increase productivity and make your dream design a reality', 8063, 275, NULL, NULL, NULL),
(128, 16, 'Adjubommicator', 'Lifestyle', 'Utility used to assist in design and manage your project effectively', 7301, 520, NULL, NULL, NULL),
(129, 93, 'Zeehupedgar', 'Lifestyle', 'Software used to increase productivity and make your dream design a reality', 16919, 883, NULL, NULL, NULL),
(130, 56, 'Klimunanex', 'Graphical', 'Tool used to increase productivity and realize your project in an efficient manner', 9139, 387, NULL, NULL, NULL),
(131, 60, 'Monhupupar', 'Lifestyle', 'Utility used to increase productivity and manage your project effectively', 20025, 986, NULL, NULL, NULL),
(132, 24, 'Tipsapinentor', 'Coding', 'Tool used to increase productivity and realize your project in an efficient manner', 11070, 585, NULL, NULL, NULL),
(133, 38, 'Emglibax', 'Coding', 'Utility used to assist in design and realize your project in an efficient manner', 6565, 813, NULL, NULL, NULL),
(134, 54, 'Inhupicor', 'Lifestyle', 'Utility used to increase productivity and realize your project in an efficient manner', 3390, 309, NULL, NULL, NULL),
(135, 63, 'Zeequestupicator', 'Lifestyle', 'Tool used to increase productivity and manage your project effectively', 15661, 271, NULL, NULL, NULL),
(136, 70, 'Tipquestplentor', 'Graphical', 'Utility used to assist in design and make your dream design a reality', 12585, 424, NULL, NULL, NULL),
(137, 87, 'Injubonor', 'Coding', 'Utility used to assist in design and make your dream design a reality', 6824, 178, NULL, NULL, NULL),
(138, 40, 'Qwibanupistor', 'Coding', 'Tool used to increase productivity and realize your project in an efficient manner', 2691, 165, NULL, NULL, NULL),
(139, 100, 'Endzapistor', 'Lifestyle', 'Utility used to increase productivity and realize your project in an efficient manner', 19124, 231, NULL, NULL, NULL),
(140, 76, 'Zeepebor', 'Graphical', 'Software used to assist in design and manage your project effectively', 15562, 718, NULL, NULL, NULL),
(141, 66, 'Dopnipower', 'Graphical', 'Utility used to increase productivity and realize your project in an efficient manner', 21144, 554, NULL, NULL, NULL),
(142, 65, 'Monglibax', 'Graphical', 'Utility used to assist in design and make your dream design a reality', 8612, 548, NULL, NULL, NULL),
(143, 93, 'Lomsapplazz', 'Graphical', 'Utility used to assist in design and realize your project in an efficient manner', 17852, 651, NULL, NULL, NULL),
(144, 41, 'Parpickopex', 'Graphical', 'Utility used to assist in design and realize your project in an efficient manner', 10826, 110, NULL, NULL, NULL),
(145, 34, 'Upnipinax', 'Graphical', 'Software used to assist in design and manage your project effectively', 2081, 108, NULL, NULL, NULL),
(146, 66, 'Unbanupin', 'Lifestyle', 'Utility used to assist in design and manage your project effectively', 2947, 865, NULL, NULL, NULL),
(147, 26, 'Klicadicazz', 'Coding', 'Utility used to increase productivity and make your dream design a reality', 330, 234, NULL, NULL, NULL),
(148, 60, 'Renipin', 'Lifestyle', 'Tool used to assist in design and realize your project in an efficient manner', 714, 170, NULL, NULL, NULL),
(149, 31, 'Qwicadupar', 'Coding', 'Tool used to assist in design and realize your project in an efficient manner', 8365, 321, NULL, NULL, NULL),
(150, 66, 'Varwerpepentor', 'Lifestyle', 'Software used to increase productivity and manage your project effectively', 10906, 324, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`accountID`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `license`
--
ALTER TABLE `license`
  ADD PRIMARY KEY (`licenseID`),
  ADD KEY `fk_clientOwner` (`clientOwnerID`),
  ADD KEY `fk_software` (`softwareID`);

--
-- Indexes for table `software`
--
ALTER TABLE `software`
  ADD PRIMARY KEY (`softwareID`),
  ADD KEY `fk_owner` (`ownerID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `accountID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `license`
--
ALTER TABLE `license`
  MODIFY `licenseID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=226;

--
-- AUTO_INCREMENT for table `software`
--
ALTER TABLE `software`
  MODIFY `softwareID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `license`
--
ALTER TABLE `license`
  ADD CONSTRAINT `fk_clientOwner` FOREIGN KEY (`clientOwnerID`) REFERENCES `account` (`accountID`),
  ADD CONSTRAINT `fk_software` FOREIGN KEY (`softwareID`) REFERENCES `software` (`softwareID`);

--
-- Constraints for table `software`
--
ALTER TABLE `software`
  ADD CONSTRAINT `fk_owner` FOREIGN KEY (`ownerID`) REFERENCES `account` (`accountID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

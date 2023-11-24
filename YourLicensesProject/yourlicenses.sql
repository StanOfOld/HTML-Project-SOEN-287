-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2023 at 01:26 AM
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
(19, 'dlo', 'fdjs', 'fjs@gmail.com', '2192 3rd ve', 'yuw4s1', 'defre', 0, 'null'),
(20, 'pid', 'fjew', 'daa@gmail.com', 'daudh', 'dsuds', 'fesufb', 0, 'null');

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
(8, 19, 'gsdg', 'Graphic', 'Lorem vsdgfs', 3, 4, 'null', NULL, NULL),
(9, 19, 'Ghfsfu', 'Graphic', 'Lorem vsfdvg', 3, 4, 'null', NULL, NULL),
(10, 19, 'adsa', 'Graphic', 'Lorem vfsdg', 3, 4, 'null', NULL, NULL),
(11, 19, 'adsa', 'Utility', 'Lorem Ipsum', 3, 4, 'null', NULL, NULL),
(12, 19, 'adsa', 'Graphic', 'Lorem Ipsum', 3, 4, 'null', NULL, NULL),
(13, 19, 'adsa', 'Utility', 'Lorem  gf', 3, 4, 'null', NULL, NULL),
(14, 19, 'dhdg', 'Graphic', 'Lorem vdster', 3, 4, 'null', NULL, NULL),
(15, 19, 'hqevs', 'Utility', 'Lorem vsg', 3, 4, 'null', NULL, NULL),
(16, 19, 'njtr', 'Graphic', 'Lorem svr', 3, 4, 'null', NULL, NULL),
(17, 19, 'wrtt', 'Utility', 'Lorem yiky', 3, 4, 'null', NULL, NULL),
(18, 19, 'Ghu', 'Graphic', 'Lorem Ipsum', 3, 4, 'null', NULL, NULL);

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
  MODIFY `accountID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `license`
--
ALTER TABLE `license`
  MODIFY `licenseID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `software`
--
ALTER TABLE `software`
  MODIFY `softwareID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

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

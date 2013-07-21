-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 13, 2012 at 12:50 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3



/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `kiran`
--

-- --------------------------------------------------------

--
-- Table structure for table `catalogue`
--

CREATE TABLE IF NOT EXISTS `catalogue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Category` varchar(50) NOT NULL,
  `image` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=111 ;

--
-- Dumping data for table `catalogue`
--

INSERT INTO `catalogue` (`id`, `Category`, `image`) VALUES
(15, 'Devil', 'index.jpg'),
(16, 'Adventure', 'nicoimm.gif'),
(17, 'Action', '1355290208_bookcase.png'),
(28, 'Donald', 'nicoimm.gif');

-- --------------------------------------------------------

--
-- Table structure for table `list`
--

CREATE TABLE IF NOT EXISTS `list` (
  `lid` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(50) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  PRIMARY KEY (`lid`),
  KEY `pid` (`pid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=63 ;

--
-- Dumping data for table `list`
--

INSERT INTO `list` (`lid`, `image`, `name`, `pid`) VALUES
(35, 'nicoimm.gif', 'Ocean', 15),
(36, 'nicoimm.gif', 'Drama', 15),
(37, '1335584782916.jpg', 'Auction', 16),
(38, 'alice.gif', 'Gorgeous', 17),
(39, 'alice.gif', 'Junky', 16),
(50, 'alice.gif', 'Sydney', 28),
(51, 'index.jpg', 'Disney', 28),
(56, '9829b.jpg', 'Oreilly', 15);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `user` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `user`, `password`) VALUES
(1, 'kiran', 'kumar');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE IF NOT EXISTS `registration` (
  `name` varchar(30) NOT NULL DEFAULT '',
  `mobile` varchar(10) DEFAULT NULL,
  `password` varchar(150) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`name`, `mobile`, `password`, `image`, `time`) VALUES
('batman', '9703574885', 'e10adc3949ba59abbe56e057f20f883e', '9829b.jpg', '2012-12-11 07:12:49'),
('danny', '8297807370', 'e10adc3949ba59abbe56e057f20f883e', 'nicoimm.gif', '2012-12-10 11:26:47'),
('farooq', '9756812345', 'e10adc3949ba59abbe56e057f20f883e', '9829b.jpg', '2012-12-11 08:15:24'),
('Gitam', '8297807370', 'e10adc3949ba59abbe56e057f20f883e', 'nicoimm.gif', '2012-12-11 07:23:06'),
('Goutham', '8297807370', 'e10adc3949ba59abbe56e057f20f883e', '122.jpg', '2012-12-11 03:59:54'),
('hotmail', '8297807370', 'e10adc3949ba59abbe56e057f20f883e', '122.jpg', '2012-12-11 06:48:14'),
('Joker', '8297807370', 'e10adc3949ba59abbe56e057f20f883e', '122.jpg', '2012-12-11 06:28:01'),
('karthik', '9866584407', 'e10adc3949ba59abbe56e057f20f883e', 'index.jpg', '2012-12-11 08:29:04'),
('kevin', '8297807370', 'e10adc3949ba59abbe56e057f20f883e', '122.jpg', '2012-12-10 10:42:44'),
('kiran', '8297807370', 'e10adc3949ba59abbe56e057f20f883e', 'book.png', '2012-12-13 12:31:13'),
('poppy', '8297807370', 'd41d8cd98f00b204e9800998ecf8427e', '1335584782916.jpg', '2012-12-12 04:47:13'),
('saleem', '9756812345', 'e10adc3949ba59abbe56e057f20f883e', 'index.jpg', '2012-12-11 08:19:15'),
('sanjay', '8297807370', 'e10adc3949ba59abbe56e057f20f883e', 'alice.gif', '2012-12-11 11:22:17'),
('suresh', '9874563100', 'e10adc3949ba59abbe56e057f20f883e', 'Chrysanthemum.jpg', '2012-12-11 07:46:04'),
('surya', '8297807370', 'e10adc3949ba59abbe56e057f20f883e', '9829b.jpg', '2012-12-11 07:24:18'),
('Tiger', '8297807370', 'e10adc3949ba59abbe56e057f20f883e', 'Koala.jpg', '2012-12-11 07:25:42'),
('uttar', '8297807370', 'e10adc3949ba59abbe56e057f20f883e', '122.jpg', '2012-12-10 11:05:02');

-- --------------------------------------------------------

--
-- Table structure for table `testdb`
--

CREATE TABLE IF NOT EXISTS `testdb` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) DEFAULT NULL,
  `Password` varchar(100) DEFAULT NULL,
  `Image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `testdb`
--

INSERT INTO `testdb` (`id`, `Name`, `Password`, `Image`) VALUES
(1, 'Kiran', 'kirankumar', 'tulips.jpg'),
(2, 'Madhu', 'madhusudhan', 'flowers.jpg');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `list`
--
ALTER TABLE `list`
  ADD CONSTRAINT `list_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `catalogue` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 23, 2020 at 05:32 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `profilec`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `username`, `password`) VALUES
(1, 'admin', 'admin'),
(2, 'root', 'root'),
(3, 'user', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `cust`
--

CREATE TABLE `cust` (
  `id_contact` int(11) NOT NULL,
  `name` varchar(252) NOT NULL,
  `email` varchar(252) NOT NULL,
  `phone` varchar(252) NOT NULL,
  `message` varchar(8000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cust`
--

INSERT INTO `cust` (`id_contact`, `name`, `email`, `phone`, `message`) VALUES
(1, 'Prasetyo', 'Prasetyo@gmail.com', '2342343252', 'Test form contact'),
(2, 'asad', 'fdgdaag@gmail.com', '1213', 'qqq'),
(3, 'Test', 'Test@gmail.com', '123', 'Test'),
(5, 'fff', 'fdg23dg@gmail.com', '121', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `post_produk`
--

CREATE TABLE `post_produk` (
  `id_post` int(11) NOT NULL,
  `judul` varchar(252) NOT NULL,
  `posting` varchar(8000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post_produk`
--

INSERT INTO `post_produk` (`id_post`, `judul`, `posting`) VALUES
(1, 'Jumlah Orang Yang Berinvestasi', ' Kami memiliki banyak investor dari dalam maupun luar'),
(2, 'Jumlah Kredit Yang Ditawarkan', 'Jumlah kredit yang kami tawarkan cukup besar mulai dari 1 juta hingga 10 juta.'),
(3, 'Jumlah Orang Yang Menabung', 'Kami memiliki banyak nasabah dari dalam maupun luar.');

-- --------------------------------------------------------

--
-- Table structure for table `tentang_kami`
--

CREATE TABLE `tentang_kami` (
  `id_judul` int(11) NOT NULL,
  `judul_post` varchar(252) NOT NULL,
  `post` varchar(800) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tentang_kami`
--

INSERT INTO `tentang_kami` (`id_judul`, `judul_post`, `post`) VALUES
(1, 'We Are Professionals', 'Perusahaan kami sudah berpengalaman dalam bisnis ini, jadi jangan ragu untuk bergabung dengan kami. ');

-- --------------------------------------------------------

--
-- Table structure for table `tim`
--

CREATE TABLE `tim` (
  `id_tim` int(11) NOT NULL,
  `nama` varchar(252) NOT NULL,
  `tugas` varchar(252) NOT NULL,
  `photo` varchar(252) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tim`
--

INSERT INTO `tim` (`id_tim`, `nama`, `tugas`, `photo`) VALUES
(1, 'Deny Mawdudy', 'Front End', '18_11_2376.png'),
(2, 'Dewi Ayu Pratiwi', 'Pengisi Konten', '18_11_2377.png'),
(3, 'Oktavianus Rizky H', 'Back End', '18_11_2378.png'),
(4, 'Muhammad Ramadhan ', 'Front End', '18_11_2379.png'),
(5, 'Al Agib Insani', 'Designer', '18_11_2380.png'),
(6, 'Febrian Indriyanto', 'Designer', '18_11_2381.png'),
(7, 'Prasetyo Adi Nugraha', 'Back End', '18_11_2382.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `cust`
--
ALTER TABLE `cust`
  ADD PRIMARY KEY (`id_contact`);

--
-- Indexes for table `post_produk`
--
ALTER TABLE `post_produk`
  ADD PRIMARY KEY (`id_post`);

--
-- Indexes for table `tentang_kami`
--
ALTER TABLE `tentang_kami`
  ADD PRIMARY KEY (`id_judul`);

--
-- Indexes for table `tim`
--
ALTER TABLE `tim`
  ADD PRIMARY KEY (`id_tim`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `cust`
--
ALTER TABLE `cust`
  MODIFY `id_contact` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `post_produk`
--
ALTER TABLE `post_produk`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tentang_kami`
--
ALTER TABLE `tentang_kami`
  MODIFY `id_judul` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tim`
--
ALTER TABLE `tim`
  MODIFY `id_tim` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

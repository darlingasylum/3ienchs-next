-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 08, 2020 at 07:47 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `3ienchs-next`
--

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE `artists` (
  `artist_id` smallint(2) NOT NULL,
  `title` varchar(40) NOT NULL,
  `subtitle` varchar(40) NOT NULL,
  `description` varchar(300) NOT NULL,
  `images` varchar(10000) NOT NULL,
  `musician` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`artist_id`, `title`, `subtitle`, `description`, `images`, `musician`) VALUES
(1, 'Léo Ewald', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore', 0),
(3, 'Clément Paris', 'super artiste', 'pouet', 'pathes', 0),
(4, 'Chateau Brutal', 'super artiste', 'pouet', 'pathes', 1);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `event_id` smallint(2) NOT NULL,
  `title` varchar(40) NOT NULL,
  `date` date NOT NULL,
  `subtitle` varchar(40) NOT NULL,
  `description` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `title`, `date`, `subtitle`, `description`) VALUES
(1, 'Saint-Maur food trucks festival', '2020-05-15', 'Super festival', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptat.');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_number` int(6) NOT NULL,
  `order_userid` smallint(6) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `order_pickupdate` date DEFAULT NULL,
  `order_price` smallint(6) DEFAULT NULL,
  `order_over` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `order_number`, `order_userid`, `order_date`, `order_pickupdate`, `order_price`, `order_over`) VALUES
(8, 0, NULL, '2019-12-16', '2019-12-25', 6, 0),
(9, 0, NULL, '2019-12-16', '2019-12-25', 9, 0),
(10, 622719, NULL, '2019-12-16', '2019-12-27', 9, 0),
(11, 433544, NULL, '2019-12-16', '2019-12-16', 6, 0),
(12, 339227, NULL, '2019-12-16', '2020-01-01', 6, 0),
(13, 639009, NULL, '2019-12-16', '2019-12-16', 6, 0),
(14, 479037, NULL, '2019-12-16', '2019-12-16', 6, 0),
(15, 801333, NULL, '2019-12-16', '2019-12-16', 6, 0),
(16, 755309, NULL, '2019-12-16', '2019-12-16', 6, 0),
(17, 620302, NULL, '2019-12-16', '2019-12-16', 6, 0),
(18, 395585, NULL, '2019-12-16', '2019-12-16', 9, 0),
(19, 759694, NULL, '2019-12-16', '2019-12-16', 6, 0),
(20, 730997, NULL, '2019-12-16', '2019-12-16', 6, 0),
(21, 477960, NULL, '2019-12-16', '2019-12-16', 6, 0),
(22, 894988, NULL, '2019-12-16', '2019-12-16', 6, 0),
(23, 664557, NULL, '2019-12-16', '2019-12-16', 9, 0),
(24, 133649, NULL, '2019-12-16', '2019-12-16', 3, 0),
(25, 939734, NULL, '2019-12-16', '2019-12-16', 3, 0),
(26, 289057, NULL, '2019-12-16', '2019-12-16', 3, 0),
(27, 516359, NULL, '2019-12-16', '2019-12-16', 3, 0),
(28, 992291, NULL, '2019-12-16', '2019-12-16', 3, 0),
(29, 518879, NULL, '2019-12-16', '2019-12-27', 9, 0),
(30, 663466, NULL, '2019-12-16', '2019-12-16', 9, 0),
(31, 573727, NULL, '2019-12-16', '2019-12-16', 12, 0),
(32, 884857, NULL, '2019-12-16', '2019-12-16', 9, 0),
(33, 383374, NULL, '2019-12-16', '2019-12-25', 15, 0),
(34, 332742, NULL, '2019-12-17', '2019-12-17', 15, 0),
(35, 945590, NULL, '2019-12-17', '2019-12-17', 15, 0),
(36, 544771, NULL, '2019-12-17', '2019-12-17', 15, 0),
(37, 645884, NULL, '2019-12-17', '2019-12-17', 15, 0),
(38, 255981, NULL, '2019-12-17', '2019-12-17', 15, 0),
(39, 120447, NULL, '2019-12-17', '2019-12-17', 15, 0),
(40, 492909, NULL, '2019-12-17', '2019-12-17', 15, 0),
(41, 727291, NULL, '2019-12-17', '2019-12-17', 15, 0),
(42, 687848, NULL, '2019-12-18', '2019-12-25', 9, 0),
(43, 288661, NULL, '2019-12-18', '2019-12-27', 23, 0),
(44, 658498, NULL, '2019-12-18', '2019-12-27', 23, 0),
(45, 383772, NULL, '2020-01-05', '2020-01-24', 20, 0),
(46, 276991, NULL, '2020-01-06', '2020-01-15', 18, 0),
(47, 600114, NULL, '2020-01-06', '2020-01-15', 18, 0),
(48, 323042, NULL, '2020-02-01', '2020-02-19', 33, 0);

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `details_id` int(11) NOT NULL,
  `details_orderid` int(11) DEFAULT NULL,
  `details_productid` tinyint(6) DEFAULT NULL,
  `details_productqty` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`details_id`, `details_orderid`, `details_productid`, `details_productqty`) VALUES
(3, NULL, 2, 3),
(4, NULL, 2, 3),
(5, NULL, 2, 6),
(6, NULL, 3, 6),
(7, NULL, 12, 6),
(8, NULL, 2, 2),
(9, NULL, 16, 2),
(10, NULL, 2, 2),
(11, NULL, 16, 2),
(12, NULL, 2, 2),
(13, 8, 2, 2),
(14, 9, 2, 3),
(15, 10, 2, 3),
(16, 11, 2, 2),
(17, 12, 2, 2),
(18, 13, 2, 2),
(19, 14, 16, 2),
(20, 15, 16, 2),
(21, 16, 16, 2),
(22, 17, 16, 2),
(23, 18, 2, 3),
(24, 19, 16, 2),
(25, 20, 2, 2),
(26, 21, 2, 2),
(27, 22, 2, 2),
(28, 23, 2, 3),
(29, 24, 2, 1),
(30, 25, 2, 1),
(31, 26, 2, 1),
(32, 27, 2, 1),
(33, 28, 2, 1),
(34, 29, 2, 3),
(35, 30, 16, 3),
(36, 31, 16, 4),
(37, 32, 2, 3),
(38, 33, 2, 3),
(39, 33, 16, 3),
(40, 34, 2, 3),
(41, 34, 16, 3),
(42, 35, 2, 3),
(43, 35, 16, 3),
(44, 36, 2, 3),
(45, 36, 16, 3),
(46, 37, 2, 3),
(47, 37, 16, 3),
(48, 38, 2, 3),
(49, 38, 16, 3),
(50, 39, 2, 3),
(51, 39, 16, 3),
(52, 40, 2, 3),
(53, 40, 16, 3),
(54, 41, 2, 3),
(55, 41, 16, 3),
(56, 42, 2, 3),
(57, 43, 2, 5),
(58, 43, 15, 3),
(59, 43, 16, 1),
(60, 44, 2, 5),
(61, 44, 15, 3),
(62, 44, 16, 1),
(63, 45, 2, 2),
(64, 45, 15, 4),
(65, 45, 16, 2),
(66, 46, 2, 4),
(67, 46, 14, 1),
(68, 46, 13, 1),
(69, 46, 16, 1),
(70, 47, 2, 4),
(71, 47, 14, 1),
(72, 47, 13, 1),
(73, 47, 16, 1),
(74, 48, 2, 3),
(75, 48, 15, 2),
(76, 48, 14, 2),
(77, 48, 13, 6);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` tinyint(4) NOT NULL,
  `product_name` varchar(40) NOT NULL,
  `product_type` varchar(40) DEFAULT NULL,
  `product_price` tinyint(4) NOT NULL,
  `product_proof` decimal(2,1) DEFAULT NULL,
  `product_descr` varchar(500) NOT NULL,
  `product_img` varchar(100) NOT NULL,
  `product_bg` varchar(500) NOT NULL,
  `bg_color` varchar(7) NOT NULL,
  `title_color` varchar(40) NOT NULL,
  `text_color` varchar(30) NOT NULL,
  `featuring` tinyint(1) DEFAULT NULL,
  `partner` varchar(100) DEFAULT NULL,
  `product_stock` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_type`, `product_price`, `product_proof`, `product_descr`, `product_img`, `product_bg`, `bg_color`, `title_color`, `text_color`, `featuring`, `partner`, `product_stock`) VALUES
(2, 'Wa Wah', 'Indian Pale Ale', 3, '5.5', 'Notre IPA est une explosion de saveurs exotiques, fruits tropicaux très prenants au nez et en bouche !', 'wawah.png', 'wawah_bg.png', '#ff0066', '#f6d900', '#ffffff', 0, NULL, 500),
(3, 'Big Daddy', 'Ambrée', 3, '6.0', 'Des arômes de malt caramels mis en évidence avec une finale sèche. La Big Daddy est une ambrée rafraîchissante qui étonne. Une base maltée inspirée de notre goût prononcé pour les recettes belges.', 'bigdaddy.png', 'bigdaddy_bg.png', '#42aadb', '#ff0066', '#ffffff', 0, NULL, 1000),
(12, 'Aero Pale', 'American Pale Ale', 3, '5.5', 'Un peu de légèreté dans ce monde de brutes! Des notes de pamplemousse sur un corps léger d\'un blond doré. L\'aero Pale est une douceur qui ne manque pas de caractère.', 'aeropale.png', 'aeropale_bg.png', '#ec9a3d', '#ff0066', '#000000', 0, NULL, 500),
(13, 'Jack Wheat', 'Wheat Ale', 3, '4.7', 'Bière de blé, notre wheat ale offre une légère acidité surune belle robe pâle avec un retour subtil d\'arômes de miel en fin de bouche, une bière à boire bien fraîche en terrasse!', 'jackwheat.png', 'jackwheat_bg.png', '#f6d900', '#ff0066', '#000000', 0, NULL, 500),
(14, 'Jimmy Pale', 'Indian Pale Ale', 3, '5.5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ', 'jimmypale.png', 'jimmypale_bg.png', '#ff0066', '#f6d900', '#000000', 0, NULL, 500),
(15, 'Jon Snout', 'Dry Stout', 3, '4.9', 'Une stout avec un corps léger qui offre de belles notes de café grillé et une finale chocolat.', 'jonsnout.png', 'jonsnout_bg.png', '#1b1b1b', '#ff0066', '#ffffff', 0, NULL, 0),
(16, 'Dropkick Kiwi', 'Double IPA', 3, '8.0', 'Une stout avec un corps léger qui offre de belles notes de café grillé et une finale chocolat.', 'dropkickkiwi.png', 'dropkickkiwi_bg.png', '#7ec6ca', '#ff0066', '#ffffff', 1, 'Les bières de Belleville', 500);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` smallint(6) NOT NULL,
  `lastname` varchar(40) DEFAULT NULL,
  `firstname` varchar(40) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `admin` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `lastname`, `firstname`, `email`, `password`, `admin`) VALUES
(1, NULL, NULL, 'test_newdb@hello.com', '$2a$10$.4YepcXzFknfqmTaTJLPwOFQrsRqs/hFApYBbDHdu7d55EtABVCgC', NULL),
(2, 'undefined', 'undefined', 'test_4@hello.com', '$2a$10$Y2ElAfsbXKecmAOeDGwrDutroSRUeK444IQgkX0O/EDP.fdmo.ThO', NULL),
(3, 'Hery', 'Elisa', 'test_5@hello.com', '$2a$10$vyEL3UsMa8/WAaavw0xbNOhGQqkILGIP/7IuixqiGGOPMm3AgMaI.', NULL),
(5, 'Hery', 'Elisa', 'test_56@hello.com', '$2a$10$pp82UXIvSuYslUtk8vCzH.EB96ONniq/2jruF0jW5ZyizTy3SsL.6', NULL),
(6, 'Hery', 'Elisa', 'test_57@hello.com', '$2a$10$BTg71WnZDuA1bvypAg3.BeuPUTEzE0sgy45bLasD9.ir530OgFNsa', NULL),
(7, 'Hery', 'Elisa', 'test_59@hello.com', '$2a$10$T4OB54.0VFzjK0rWe02px.HiDclNF0sPzZKiGgaXuc9GEl0RPyeO2', NULL),
(8, 'Hery', 'Elisa', 'test_30@hello.com', '$2a$10$FiVE3BYdVYXlcqAap7kYjerRdkinodc0bT3h1jWkrl7LoHFDcx.7q', NULL),
(9, 'Hery', 'Elisa', 'test_31@hello.com', '$2a$10$3ryMzNWC7Q5iBAZGDJcjjO8a8E32fgRpRQGSZ3go0QZfAVL59SSd.', NULL),
(10, 'Hery', 'Elisa', 'test_32@hello.com', '$2a$10$YOMjesblpiHoepPO.Sn0JOjyz.T740KD8dCoksMPrNJMjE/8iLLs.', NULL),
(11, 'Hery', 'Elisa', 'test_0@hello.com', '$2a$10$Drbb2fLpMYZrR..mD/w6nO/uv/HXW1oKftwJ2unJTRBquEiVxKj3O', 1),
(14, 'Heyyy', 'Elisa', 'test_15@hello.com', '$2a$10$BMUWFhr8cuvIVeP70yiVyOqGy9J7.xmoMw4Rvbxah2V7xq4gbJwuW', NULL),
(15, 'Heyyy', 'Elisa', 'test_19@hello.com', '$2a$10$r5OH88OywnbWnkaB26r//OXgB6/J9/TM/JKu9Ea5oBgB4TDfg1DL2', NULL),
(16, 'Heyyy', 'Elisa', 'test_17@hello.com', '$2a$10$r0K5Hx4vmQwH0Ym4ofVbxu2IVaK7e3uLM7VaPbNErzamaDavoEIAi', NULL),
(17, 'Heyyy', 'Elisa', 'elisa.hery@test.com', '$2a$10$taGhGnLO0Cz06WRgxP.TYu0kD6EYFUKLsv51.e7ozIyt1r3GrKeK.', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`artist_id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `order_userid` (`order_userid`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`details_id`),
  ADD KEY `details_orderid` (`details_orderid`),
  ADD KEY `details_productid` (`details_productid`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `artist_id` smallint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `event_id` smallint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `details_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `order_userid` FOREIGN KEY (`order_userid`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `details_orderid` FOREIGN KEY (`details_orderid`) REFERENCES `orders` (`order_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `details_productid` FOREIGN KEY (`details_productid`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE;

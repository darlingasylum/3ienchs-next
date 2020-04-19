-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 19, 2020 at 08:49 AM
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
  `order_email` varchar(50) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `order_pickupdate` date DEFAULT NULL,
  `order_price` smallint(6) DEFAULT NULL,
  `order_over` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `order_number`, `order_userid`, `order_email`, `order_date`, `order_pickupdate`, `order_price`, `order_over`) VALUES
(51, 605901, NULL, NULL, '2020-02-10', '2020-02-19', 20, 1),
(52, 574337, NULL, NULL, '2020-02-10', '2020-02-14', 6, 1),
(54, 385130, NULL, NULL, '2020-02-10', '2020-02-19', 28, 1),
(55, 947989, NULL, NULL, '2020-02-10', '2020-02-19', 28, 1),
(56, 954058, NULL, NULL, '2020-02-20', '2020-02-21', 3, 0),
(57, 849486, NULL, NULL, '2020-03-08', '2020-04-10', 12, 0),
(58, 724050, NULL, NULL, '2020-03-28', '2020-03-28', 20, 0),
(59, 593985, NULL, NULL, '2020-03-28', '2020-03-28', 20, 0),
(60, 448734, NULL, NULL, '2020-03-28', '2020-03-28', 20, 0),
(61, 854517, NULL, NULL, '2020-03-28', '2020-03-28', 20, 0),
(62, 104223, NULL, NULL, '2020-03-28', '2020-03-27', 15, 0),
(63, 594663, NULL, NULL, '2020-03-28', '2020-03-28', 23, 0),
(64, 933780, NULL, NULL, '2020-03-28', '2020-04-03', 18, 0),
(65, 964290, NULL, NULL, '2020-03-28', '2020-03-28', 15, 0),
(66, 956679, NULL, NULL, '2020-03-28', '2020-03-25', 15, 0),
(67, 500780, NULL, NULL, '2020-03-28', '2020-04-03', 15, 0);

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
(83, 51, 2, 8),
(84, 52, 2, 2),
(86, 54, 2, 3),
(87, 54, 14, 1),
(88, 54, 13, 3),
(89, 54, 12, 4),
(90, 55, 2, 3),
(91, 55, 14, 1),
(92, 55, 13, 3),
(93, 55, 12, 4),
(94, 56, 2, 1),
(95, 57, 2, 2),
(96, 57, 16, 2),
(97, 58, 2, 6),
(98, 58, 16, 2),
(99, 59, 2, 6),
(100, 59, 16, 2),
(101, 60, 2, 6),
(102, 60, 16, 2),
(103, 61, 2, 6),
(104, 61, 16, 2),
(105, 62, 2, 6),
(106, 63, 16, 5),
(107, 63, 31, 4),
(108, 64, 2, 3),
(109, 64, 29, 2),
(110, 64, 26, 2),
(111, 65, 2, 2),
(112, 65, 15, 3),
(113, 66, 2, 3),
(114, 66, 31, 2),
(115, 67, 2, 3),
(116, 67, 3, 3),
(117, NULL, 2, 3),
(118, NULL, 3, 3),
(119, NULL, 2, 3),
(120, NULL, 2, 3),
(121, NULL, 2, 3),
(122, NULL, 2, 2),
(123, NULL, 2, 3),
(124, NULL, 2, 2),
(125, NULL, 2, 3),
(126, NULL, 2, 3),
(127, NULL, 2, 3),
(128, NULL, 2, 3),
(129, NULL, 2, 3),
(130, NULL, 2, 7),
(131, NULL, 3, 5),
(132, NULL, 2, 4),
(133, NULL, 12, 14);

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
(12, 'Aero Pale', 'American Pale Ale', 3, '5.5', 'Un peu de légèreté dans ce monde de brutes! Des notes de pamplemousse sur un corps léger d\'un blond doré. L\'aero Pale est une douceur qui ne manque pas de caractère.', 'aeropale.png', 'aeropale_bg.png', '#ec9a3d', '#ff0066', '#000000', 0, '', 500),
(13, 'Jack Wheat', 'Wheat Ale', 3, '4.7', 'Bière de blé, notre wheat ale offre une légère acidité surune belle robe pâle avec un retour subtil d\'arômes de miel en fin de bouche, une bière à boire bien fraîche en terrasse!', 'jackwheat.png', 'jackwheat_bg.png', '#f6d900', '#ff0066', '#000000', 0, '', 500),
(14, 'Jimmy Pale', 'Indian Pale Ale', 3, '5.5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ', 'jimmypale.png', 'jimmypale_bg.png', '#ff0066', '#f6d900', '#000000', 0, '', 500),
(15, 'Jon Snout', 'Dry Stout', 3, '4.9', 'Une stout avec un corps léger qui offre de belles notes de café grillé et une finale chocolat.', 'jonsnout.png', 'jonsnout_bg.png', '#1b1b1b', '#ff0066', '#ffffff', 0, '', 0),
(16, 'Dropkick Kiwi', 'Double IPA', 3, '8.0', 'Une stout avec un corps léger qui offre de belles notes de café grillé et une finale chocolat.', 'dropkickkiwi.png', 'dropkickkiwi_bg.png', '#7ec6ca', '#ff0066', '#ffffff', 1, 'Les bières de Belleville', 500),
(23, 'ELISOU <3', 'Dry Stout', 4, '4.9', 'Une stout avec un corps léger qui offre de belles notes de café grillé et une finale chocolat.', 'jonsnout.png', 'jonsnout_bg.png', '#ff0066', '#ff0089', '#ffffff', 1, 'JLO', 56),
(26, 'Big Daddy tididi', 'Bière fraîche', 3, '5.2', 'Bière super fraîche', 'jackwheat.png', 'jackwheat_bg.png', '', '#ff0066', '#000000', 0, '', 1000),
(27, 'Big Daddy QUATRO', 'Bière fraîche', 3, '5.2', 'Bière super fraîche', 'dropkickkiwi.png', 'bigdaddy_bg.png', '', '#ff0066', '#ffffff', 1, 'lilalou', 1000),
(29, 'Pouet', '', 3, '0.0', '', 'bigdaddy.png', 'bigdaddy_bg.png', '', '#fff000', '#000', 0, '', 0),
(31, 'DIMANCHE', 'IPA double stout', 3, '6.7', 'Lialouj cqovbdbjle cbhi mais c\'est juste un test ça ne veut rien dire\n', 'bigdaddy.png', 'dropkickkiwi_bg.png', '', '#fff000', '#000', 0, '', 0);

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
  ADD KEY `details_productid` (`details_productid`),
  ADD KEY `details_orderid` (`details_orderid`);

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
  MODIFY `event_id` smallint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `details_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

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
  ADD CONSTRAINT `details_orderid` FOREIGN KEY (`details_orderid`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `details_productid` FOREIGN KEY (`details_productid`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE;

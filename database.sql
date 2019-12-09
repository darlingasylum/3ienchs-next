-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  lun. 09 déc. 2019 à 12:48
-- Version du serveur :  5.6.38
-- Version de PHP :  7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `3ienchs-next`
--

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_userid` smallint(6) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `order_pickupdate` date DEFAULT NULL,
  `order_price` smallint(6) DEFAULT NULL,
  `order_over` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `order_details`
--

CREATE TABLE `order_details` (
  `details_id` int(11) NOT NULL,
  `details_orderid` int(11) DEFAULT NULL,
  `details_productid` tinyint(6) DEFAULT NULL,
  `details_productqty` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `products`
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
  `title_color` varchar(40) NOT NULL,
  `text_color` varchar(30) NOT NULL,
  `featuring` tinyint(1) DEFAULT NULL,
  `partner` varchar(100) DEFAULT NULL,
  `product_stock` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_type`, `product_price`, `product_proof`, `product_descr`, `product_img`, `product_bg`, `title_color`, `text_color`, `featuring`, `partner`, `product_stock`) VALUES
(2, 'Wa Wah', 'Indian Pale Ale', 3, '5.5', 'Notre IPA est une explosion de saveurs exotiques, fruits tropicaux très prenants au nez et en bouche !', 'wawah.png', 'wawah_bg.png', '#f6d900', '#ffffff', 0, NULL, 500),
(3, 'Big Daddy', 'Ambrée', 3, '6.0', 'Des arômes de malt caramels mis en évidence avec une finale sèche. La Big Daddy est une ambrée rafraîchissante qui étonne. Une base maltée inspirée de notre goût prononcé pour les recettes belges.', 'bigdaddy.png', 'bigdaddy_bg.png', '#ff0066', '#ffffff', 0, NULL, 1000),
(12, 'Aero Pale', 'American Pale Ale', 3, '5.5', 'Un peu de légèreté dans ce monde de brutes! Des notes de pamplemousse sur un corps léger d\'un blond doré. L\'aero Pale est une douceur qui ne manque pas de caractère.', 'aeropale.png', 'aeropale_bg.png', '#ff0066', '#000000', 0, NULL, 500),
(13, 'Jack Wheat', 'Wheat Ale', 3, '4.7', 'Bière de blé, notre wheat ale offre une légère acidité surune belle robe pâle avec un retour subtil d\'arômes de miel en fin de bouche, une bière à boire bien fraîche en terrasse!', 'jackwheat.png', 'jackwheat_bg.png', '#ff0066', '#000000', 0, NULL, 500),
(14, 'Jimmy Pale', 'Indian Pale Ale', 3, '5.5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ', 'jimmypale.png', 'jimmypale_bg.png', '#f6d900', '#000000', 0, NULL, 500),
(15, 'Jon Snout', 'Dry Stout', 3, '4.9', 'Une stout avec un corps léger qui offre de belles notes de café grillé et une finale chocolat.', 'jonsnout.png', 'jonsnout_bg.png', '#ff0066', '#ffffff', 0, NULL, 0),
(16, 'Dropkick Kiwi', 'Double IPA', 3, '8.0', 'Une stout avec un corps léger qui offre de belles notes de café grillé et une finale chocolat.', 'dropkickkiwi.png', 'dropkickkiwi_bg.png', '#ff0066', '#ffffff', 1, 'Les bières de Belleville', 500);

-- --------------------------------------------------------

--
-- Structure de la table `users`
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
-- Déchargement des données de la table `users`
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
(16, 'Heyyy', 'Elisa', 'test_17@hello.com', '$2a$10$r0K5Hx4vmQwH0Ym4ofVbxu2IVaK7e3uLM7VaPbNErzamaDavoEIAi', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `order_userid` (`order_userid`);

--
-- Index pour la table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`details_id`),
  ADD KEY `details_orderid` (`details_orderid`),
  ADD KEY `details_productid` (`details_productid`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `details_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `order_userid` FOREIGN KEY (`order_userid`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `details_orderid` FOREIGN KEY (`details_orderid`) REFERENCES `orders` (`order_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `details_productid` FOREIGN KEY (`details_productid`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE;

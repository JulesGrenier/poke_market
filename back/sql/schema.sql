CREATE TABLE `users`(
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `firstname` VARCHAR(225),
  `lastname` VARCHAR(225),
  `email` VARCHAR(225),
  `password` CHAR(60),
  `money` INT
);

CREATE TABLE `carts`(
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `user_id` INT
);

CREATE TABLE `cart_products`(
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `product_name` VARCHAR(225),
  `quantity` INT,
  `price` INT,
  `cart_id` INT
);

CREATE TABLE `orders`(
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `date` DATETIME DEFAULT CURRENT_TIMESTAMP(),
  `user_id` INT
);

CREATE TABLE `order_products`(
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `product_name` VARCHAR(225),
  `quantity` INT,
  `price` INT,
  `order_id` INT
);

ALTER TABLE `users`
  ADD CONSTRAINT `uc_email` UNIQUE (`email`);

ALTER TABLE `carts`
  ADD CONSTRAINT `fk_user_cart` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)  ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE `cart_products`
  ADD CONSTRAINT `fk__cart_id` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`)  ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE `order_products`
  ADD CONSTRAINT `fk_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)  ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE `orders`
  ADD CONSTRAINT `fk_user_order` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)  ON UPDATE CASCADE ON DELETE CASCADE;
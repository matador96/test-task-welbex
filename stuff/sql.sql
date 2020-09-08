-- --------------------------------------------------------
-- Хост:                         localhost
-- Версия сервера:               10.3.13-MariaDB-log - mariadb.org binary distribution
-- Операционная система:         Win64
-- HeidiSQL Версия:              11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Дамп структуры базы данных test_welbex
CREATE DATABASE IF NOT EXISTS `test_welbex` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `test_welbex`;

-- Дамп структуры для таблица test_welbex.tables
CREATE TABLE IF NOT EXISTS `tables` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `date` int(50) DEFAULT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `count` int(11) NOT NULL DEFAULT 0,
  `distance` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы test_welbex.tables: ~100 rows (приблизительно)
/*!40000 ALTER TABLE `tables` DISABLE KEYS */;
INSERT IGNORE INTO `tables` (`id`, `date`, `name`, `count`, `distance`) VALUES
	(14, 1324880201, 'Emerson', 173, 155),
	(15, 1126989613, 'Grant', 173, 180),
	(16, 1522155701, 'Troy', 96, 183),
	(17, 1050533291, 'Xander', 1, 183),
	(18, 968703568, 'Ferris', 57, 166),
	(19, 1538648109, 'Beau', 132, 193),
	(20, 1384438751, 'Brody', 117, 176),
	(21, 1509020909, 'Warren', 75, 163),
	(22, 979804198, 'Kato', 261, 187),
	(23, 1494702527, 'Paki', 259, 182),
	(24, 1192544736, 'Axel', 129, 192),
	(25, 966051606, 'Hilel', 237, 161),
	(26, 1372222515, 'Rooney', 275, 191),
	(27, 959010031, 'Gabriel', 173, 169),
	(28, 1115021663, 'Colt', 92, 186),
	(29, 1186065851, 'Upton', 98, 174),
	(30, 935909208, 'Brenden', 17, 185),
	(31, 1094746508, 'Rooney', 34, 188),
	(32, 1316988794, 'Kasimir', 186, 159),
	(33, 1359745287, 'Yoshio', 15, 169),
	(34, 1529858173, 'Gavin', 255, 184),
	(35, 1285247231, 'William', 125, 169),
	(36, 1280174179, 'Bradley', 237, 191),
	(37, 1007712037, 'Nicholas', 71, 172),
	(38, 1550091387, 'Aquila', 229, 164),
	(39, 871091586, 'Otto', 61, 160),
	(40, 918486259, 'Wade', 240, 153),
	(41, 1484823573, 'Finn', 103, 163),
	(42, 1219466288, 'Xavier', 49, 185),
	(43, 1067745205, 'Todd', 55, 199),
	(44, 1109075717, 'Wallace', 291, 175),
	(45, 1035712858, 'Roth', 99, 162),
	(46, 1561420883, 'Elmo', 166, 170),
	(47, 1178529197, 'Emery', 207, 152),
	(48, 1484280893, 'Barry', 127, 192),
	(49, 1413644620, 'Palmer', 246, 175),
	(50, 1392336239, 'Brady', 127, 173),
	(51, 904542663, 'Derek', 63, 179),
	(52, 860957794, 'Hammett', 268, 187),
	(53, 1342335382, 'Colton', 263, 193),
	(54, 1289531423, 'Lyle', 161, 177),
	(55, 1388671627, 'Jesse', 185, 154),
	(56, 922204540, 'Wesley', 162, 174),
	(57, 1188656468, 'Kevin', 36, 176);
/*!40000 ALTER TABLE `tables` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

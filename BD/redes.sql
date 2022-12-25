-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-12-2022 a las 20:36:46
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `redes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `prim_ape` varchar(40) NOT NULL,
  `seg_ape` varchar(40) NOT NULL,
  `pais` text NOT NULL,
  `ciudad` text NOT NULL,
  `correo` varchar(40) NOT NULL,
  `telefono` int(11) NOT NULL,
  `grado` varchar(40) NOT NULL,
  `edad` int(11) NOT NULL,
  `sexo` varchar(40) NOT NULL,
  `usuario` varchar(40) NOT NULL,
  `pass` varchar(40) NOT NULL,
  `id_video` varchar(25) NOT NULL,
  `tipo` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id`, `nombre`, `prim_ape`, `seg_ape`, `pais`, `ciudad`, `correo`, `telefono`, `grado`, `edad`, `sexo`, `usuario`, `pass`, `id_video`, `tipo`) VALUES
(5, 'Luis', 'Rodriguez', 'Valdez', 'Mexico', 'Ags', 'al20261@edu.uaa.mx', 2147483647, 'Universidad', 23, 'Masculino', 'Adrian', '123', 'Wvu6Ci71xn4', 'Empleado'),
(6, 'adrian', 'valdez', 'rodriguez', 'mexico', 'ags', 'al270261@edu.uaa.mx', 2147483647, 'Universidad', 23, 'Masculino', 'usuario', '123', 'Wvu6Ci71xn4', 'Empleado'),
(7, 'Ejemplo', 'Valdez', 'Ejemplo', 'EU', 'California', 'al270261@edu.uaa.mx', 2147483647, 'Universidad', 23, 'Masculino', 'Adrian', '123', 'WPJvwBRCjDk', 'Empleado'),
(8, 'Tienda', 'Abarrotes', 'juan', 'Mexico', 'Ags', 'al270261@edu.uaa.mx', 2147483647, 'Cualquiera', 18, 'Cualquiera', 'tienda', '123', '_u-7rWKnVVo', 'Empresa'),
(9, 'Juan', 'Ejemplo', 'Ejemplo2', 'Mx', 'Ags', 'al235132@edu.uaa.mx', 2147483647, 'Prepa', 18, 'Masculino', 'Juan', '123', 'vTtcuIZIvAA', 'Empleado');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

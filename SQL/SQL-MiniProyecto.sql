-- MySQL Script generated by MySQL Workbench
-- Mon Feb 28 12:43:16 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Ki-Training2022
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Ki-Training2022
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Ki-Training2022` DEFAULT CHARACTER SET utf8 ;
USE `Ki-Training2022` ;

-- -----------------------------------------------------
-- Table `Ki-Training2022`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `nombre` (`nombre` ASC) INVISIBLE,
  INDEX `apellido` (`apellido` ASC) VISIBLE,
  INDEX `correo` (`correo` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ki-Training2022`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`categoria` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ki-Training2022`.`noticia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`noticia` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(150) NOT NULL,
  `cuerpo` VARCHAR(10000) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `img` VARCHAR(45) NULL,
  `categoria_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_noticia_categoria1_idx` (`categoria_id` ASC) VISIBLE,
  INDEX `titulo` (`titulo` ASC) VISIBLE,
  CONSTRAINT `fk_noticia_categoria1`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `Ki-Training2022`.`categoria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ki-Training2022`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`rol` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ki-Training2022`.`cargo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`cargo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ki-Training2022`.`aviso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`aviso` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(150) NOT NULL,
  `funciones` VARCHAR(200) NOT NULL,
  `rango_inicial` VARCHAR(45) NOT NULL,
  `rango_final` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `cargo_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_aviso_cargo1_idx` (`cargo_id` ASC) VISIBLE,
  INDEX `titulo` (`titulo` ASC) INVISIBLE,
  INDEX `cargo` (`cargo_id` ASC) VISIBLE,
  CONSTRAINT `fk_aviso_cargo1`
    FOREIGN KEY (`cargo_id`)
    REFERENCES `Ki-Training2022`.`cargo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ki-Training2022`.`usuario_has_rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`usuario_has_rol` (
  `usuario_id` INT NOT NULL,
  `rol_id` INT NOT NULL,
  PRIMARY KEY (`usuario_id`, `rol_id`),
  INDEX `fk_usuario_has_rol_rol1_idx` (`rol_id` ASC) VISIBLE,
  INDEX `fk_usuario_has_rol_usuario_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_rol_usuario`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `Ki-Training2022`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_rol_rol1`
    FOREIGN KEY (`rol_id`)
    REFERENCES `Ki-Training2022`.`rol` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ki-Training2022`.`postulante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`postulante` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `telefono` INT NOT NULL,
  `direccion` VARCHAR(150) NOT NULL,
  `anios_de_experiencia` INT NOT NULL,
  `cv` VARCHAR(500) NOT NULL,
  `aviso_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_postulante_aviso1_idx` (`aviso_id` ASC) VISIBLE,
  INDEX `nombre` (`nombre` ASC) INVISIBLE,
  INDEX `apellido` (`apellido` ASC) INVISIBLE,
  INDEX `correo` (`correo` ASC) INVISIBLE,
  INDEX `telefono` (`telefono` ASC) INVISIBLE,
  INDEX `aviso` (`aviso_id` ASC) VISIBLE,
  CONSTRAINT `fk_postulante_aviso1`
    FOREIGN KEY (`aviso_id`)
    REFERENCES `Ki-Training2022`.`aviso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ki-Training2022`.`tecnologia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`tecnologia` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ki-Training2022`.`aviso_has_tecnologia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`aviso_has_tecnologia` (
  `aviso_id` INT NOT NULL,
  `tecnologia_id` INT NOT NULL,
  PRIMARY KEY (`aviso_id`, `tecnologia_id`),
  INDEX `fk_aviso_has_tecnologia_tecnologia1_idx` (`tecnologia_id` ASC) VISIBLE,
  INDEX `fk_aviso_has_tecnologia_aviso1_idx` (`aviso_id` ASC) VISIBLE,
  CONSTRAINT `fk_aviso_has_tecnologia_aviso1`
    FOREIGN KEY (`aviso_id`)
    REFERENCES `Ki-Training2022`.`aviso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_aviso_has_tecnologia_tecnologia1`
    FOREIGN KEY (`tecnologia_id`)
    REFERENCES `Ki-Training2022`.`tecnologia` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ki-Training2022`.`texto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`texto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre_seccion` VARCHAR(150) NOT NULL,
  `tag` VARCHAR(150) NOT NULL,
  `titulo` VARCHAR(150) NOT NULL,
  `descripcion` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ki-Training2022`.`soluciones_servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`soluciones_servicios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  `nombre_seccion` VARCHAR(150) NOT NULL,
  `tag` VARCHAR(150) NOT NULL,
  `icono` VARCHAR(45) NULL,
  `titulo` VARCHAR(150) NOT NULL,
  `descripcion` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ki-Training2022`.`usuario_has_noticia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`usuario_has_noticia` (
  `usuario_id` INT NOT NULL,
  `noticia_id` INT NOT NULL,
  PRIMARY KEY (`usuario_id`, `noticia_id`),
  INDEX `fk_usuario_has_noticia_noticia1_idx` (`noticia_id` ASC) VISIBLE,
  INDEX `fk_usuario_has_noticia_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_noticia_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `Ki-Training2022`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_noticia_noticia1`
    FOREIGN KEY (`noticia_id`)
    REFERENCES `Ki-Training2022`.`noticia` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ki-Training2022`.`usuario_has_aviso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`usuario_has_aviso` (
  `usuario_id` INT NOT NULL,
  `aviso_id` INT NOT NULL,
  PRIMARY KEY (`usuario_id`, `aviso_id`),
  INDEX `fk_usuario_has_aviso_aviso1_idx` (`aviso_id` ASC) VISIBLE,
  INDEX `fk_usuario_has_aviso_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_has_aviso_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `Ki-Training2022`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_has_aviso_aviso1`
    FOREIGN KEY (`aviso_id`)
    REFERENCES `Ki-Training2022`.`aviso` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ki-Training2022`.`texto_has_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`texto_has_usuario` (
  `texto_id` INT NOT NULL,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`texto_id`, `usuario_id`),
  INDEX `fk_texto_has_usuario_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  INDEX `fk_texto_has_usuario_texto1_idx` (`texto_id` ASC) VISIBLE,
  CONSTRAINT `fk_texto_has_usuario_texto1`
    FOREIGN KEY (`texto_id`)
    REFERENCES `Ki-Training2022`.`texto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_texto_has_usuario_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `Ki-Training2022`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ki-Training2022`.`soluciones_servicios_has_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`soluciones_servicios_has_usuario` (
  `soluciones_servicios_id` INT NOT NULL,
  `usuario_id` INT NOT NULL,
  PRIMARY KEY (`soluciones_servicios_id`, `usuario_id`),
  INDEX `fk_soluciones_servicios_has_usuario_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  INDEX `fk_soluciones_servicios_has_usuario_soluciones_servicios1_idx` (`soluciones_servicios_id` ASC) VISIBLE,
  CONSTRAINT `fk_soluciones_servicios_has_usuario_soluciones_servicios1`
    FOREIGN KEY (`soluciones_servicios_id`)
    REFERENCES `Ki-Training2022`.`soluciones_servicios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_soluciones_servicios_has_usuario_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `Ki-Training2022`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ki-Training2022`.`bitacora`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ki-Training2022`.`bitacora` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tabla_referencia` VARCHAR(150) NOT NULL,
  `accion` VARCHAR(350) NOT NULL,
  `fecha` DATE NOT NULL,
  `id_tabla_referencia` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_tabla_referencia` (`id_tabla_referencia` ASC) INVISIBLE,
  INDEX `tabla_refencia` (`tabla_referencia` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
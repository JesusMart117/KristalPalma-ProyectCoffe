-- CreateTable
CREATE TABLE `Miembro` (
    `id_miembro` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `contra` VARCHAR(191) NOT NULL,
    `rol` ENUM('MIEMBRO', 'LIDER', 'ADMINISTRADOR') NOT NULL DEFAULT 'MIEMBRO',
    `pregunta` VARCHAR(191) NOT NULL,
    `respuesta` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Miembro_correo_key`(`correo`),
    PRIMARY KEY (`id_miembro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tarea` (
    `id_tarea` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `fecha_inicio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `estado` ENUM('PENDIENTE', 'EN_PROGRESO', 'FINALIZADA') NOT NULL DEFAULT 'EN_PROGRESO',

    PRIMARY KEY (`id_tarea`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipo` (
    `id_equipo` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_equipo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Proyecto` (
    `id_proyecto` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `fecha_inicio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_proyecto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MiembrosTareas` (
    `id_miembro` INTEGER NOT NULL,
    `id_tarea` INTEGER NOT NULL,

    PRIMARY KEY (`id_miembro`, `id_tarea`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MiembrosEquipos` (
    `id_miembro` INTEGER NOT NULL,
    `id_equipo` INTEGER NOT NULL,

    PRIMARY KEY (`id_miembro`, `id_equipo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MiembrosProyectos` (
    `id_miembro` INTEGER NOT NULL,
    `id_proyecto` INTEGER NOT NULL,

    PRIMARY KEY (`id_miembro`, `id_proyecto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MiembrosTareas` ADD CONSTRAINT `MiembrosTareas_id_miembro_fkey` FOREIGN KEY (`id_miembro`) REFERENCES `Miembro`(`id_miembro`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MiembrosTareas` ADD CONSTRAINT `MiembrosTareas_id_tarea_fkey` FOREIGN KEY (`id_tarea`) REFERENCES `Tarea`(`id_tarea`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MiembrosEquipos` ADD CONSTRAINT `MiembrosEquipos_id_miembro_fkey` FOREIGN KEY (`id_miembro`) REFERENCES `Miembro`(`id_miembro`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MiembrosEquipos` ADD CONSTRAINT `MiembrosEquipos_id_equipo_fkey` FOREIGN KEY (`id_equipo`) REFERENCES `Equipo`(`id_equipo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MiembrosProyectos` ADD CONSTRAINT `MiembrosProyectos_id_miembro_fkey` FOREIGN KEY (`id_miembro`) REFERENCES `Miembro`(`id_miembro`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MiembrosProyectos` ADD CONSTRAINT `MiembrosProyectos_id_proyecto_fkey` FOREIGN KEY (`id_proyecto`) REFERENCES `Proyecto`(`id_proyecto`) ON DELETE RESTRICT ON UPDATE CASCADE;

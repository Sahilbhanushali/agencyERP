/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.8.5-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: agencyerp
-- ------------------------------------------------------
-- Server version	11.8.5-MariaDB-3 from Debian

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `_prisma_migrations` VALUES
('6e1761ab-fefb-4145-9a75-70b4fb0a27f3','8541f36f15d4a531447c601a8fa0371e70d1c1d5d550961ba4689a0609ee8e2b','2026-01-15 10:53:39.705','20260112061702_init',NULL,NULL,'2026-01-15 10:53:39.519',1),
('6f4073d4-7f2f-462a-bc67-fa753272b1b0','0493c2338e023cf1a5762a2803d92362bc5603a6aae2fffbd1b322d1511814bd','2026-01-15 10:55:34.621','20260115105534_init_rbac',NULL,NULL,'2026-01-15 10:55:34.247',1),
('7f074fd1-c256-48a8-b58b-8c44d29baa18','73259101bd252ca7acb487320fce42ab329e2b74970ada49924d3f1f7f993a8f','2026-01-15 10:53:39.972','20260112085833_added_deafultvalueofscopetoall',NULL,NULL,'2026-01-15 10:53:39.918',1),
('9be580a8-3e89-4cf6-b7c7-322a70edde6e','13ac68a17576a4fb87cb6d9e267bef6af709a8cfe2cd4927dbb61c8fc8d02df6','2026-01-15 10:53:40.059','20260113111826_add_is_deleted_to_users',NULL,NULL,'2026-01-15 10:53:39.974',1),
('b3e97702-8adc-441e-9bb8-a9a0cd004a76','bc45ae4044979b16098dfa392f6d44631f1da26dd48e353299778a6a1df9037c','2026-01-15 10:53:39.516','20260112061155_init',NULL,NULL,'2026-01-15 10:53:39.398',1),
('c02c99aa-d335-4f92-bddf-558d661cb0f2','4b27f42361d59ff8c025d9a628aa455ac27a68e66e325a82c447899225a61f65','2026-01-15 10:53:39.875','20260112063322_init',NULL,NULL,'2026-01-15 10:53:39.707',1),
('c39d41f6-db11-429c-b4f2-9b8965193162','9bc95456ae689621bd8ef40deefb9397c94bed6a45301efa79b383f20a18f55f','2026-01-15 10:53:39.915','20260112083845_init',NULL,NULL,'2026-01-15 10:53:39.877',1),
('ec7f1ce2-9d67-489b-965c-99efbd79591c','c3374800db12768a0994317682205ffbdf23f919cb7daea2a2da57651b22f75b','2026-01-15 10:53:40.570','20260115105236_init_rbac',NULL,NULL,'2026-01-15 10:53:40.064',1),
('fbf2f2e7-227a-40de-b27b-a1712d58ea29','0e272c74099745e71ace1f99903fd9f1d96c362af275acd03a6c53577a8be194','2026-01-15 11:44:57.315','20260115114457_added_role_scope_enum',NULL,NULL,'2026-01-15 11:44:57.200',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `sc_companies`
--

DROP TABLE IF EXISTS `sc_companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `sc_companies` (
  `id` varchar(191) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` enum('ACTIVE','INACTIVE','ARCHIVED') NOT NULL DEFAULT 'ACTIVE',
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `sc_companies_is_deleted_idx` (`is_deleted`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sc_companies`
--

LOCK TABLES `sc_companies` WRITE;
/*!40000 ALTER TABLE `sc_companies` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `sc_companies` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `sc_permissions`
--

DROP TABLE IF EXISTS `sc_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `sc_permissions` (
  `id` varchar(191) NOT NULL,
  `code` enum('COMPANY_CREATE','COMPANY_READ','COMPANY_UPDATE','COMPANY_DELETE','USER_CREATE','USER_READ','USER_UPDATE','USER_DELETE','REPORT_VIEW','SYSTEM_SETTINGS') NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sc_permissions_code_key` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sc_permissions`
--

LOCK TABLES `sc_permissions` WRITE;
/*!40000 ALTER TABLE `sc_permissions` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `sc_permissions` VALUES
('ba3b0744-f20b-11f0-9ada-f9b7a927ca7d','COMPANY_CREATE','Allows creating new companies','2026-01-15 17:44:22.000','2026-01-15 17:44:22.000',NULL,0),
('ba3b0b25-f20b-11f0-9ada-f9b7a927ca7d','COMPANY_READ','Allows viewing company details','2026-01-15 17:44:22.000','2026-01-15 17:44:22.000',NULL,0),
('ba3b0c3d-f20b-11f0-9ada-f9b7a927ca7d','COMPANY_UPDATE','Allows editing company information','2026-01-15 17:44:22.000','2026-01-15 17:44:22.000',NULL,0),
('ba3b0cc7-f20b-11f0-9ada-f9b7a927ca7d','COMPANY_DELETE','Allows deleting companies','2026-01-15 17:44:22.000','2026-01-15 17:44:22.000',NULL,0),
('ba3b0d4c-f20b-11f0-9ada-f9b7a927ca7d','USER_CREATE','Allows creating new users','2026-01-15 17:44:22.000','2026-01-15 17:44:22.000',NULL,0),
('ba3b0dc4-f20b-11f0-9ada-f9b7a927ca7d','USER_READ','Allows viewing user profiles','2026-01-15 17:44:22.000','2026-01-15 17:44:22.000',NULL,0),
('ba3b0e39-f20b-11f0-9ada-f9b7a927ca7d','USER_UPDATE','Allows editing user details','2026-01-15 17:44:22.000','2026-01-15 17:44:22.000',NULL,0),
('ba3b0ea6-f20b-11f0-9ada-f9b7a927ca7d','USER_DELETE','Allows deleting users','2026-01-15 17:44:22.000','2026-01-15 17:44:22.000',NULL,0),
('ba3b0f21-f20b-11f0-9ada-f9b7a927ca7d','REPORT_VIEW','Allows viewing system reports','2026-01-15 17:44:22.000','2026-01-15 17:44:22.000',NULL,0),
('ba3b0f90-f20b-11f0-9ada-f9b7a927ca7d','SYSTEM_SETTINGS','Allows managing system settings','2026-01-15 17:44:22.000','2026-01-15 17:44:22.000',NULL,0);
/*!40000 ALTER TABLE `sc_permissions` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `sc_role_permissions`
--

DROP TABLE IF EXISTS `sc_role_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `sc_role_permissions` (
  `role_id` varchar(191) NOT NULL,
  `permission_id` varchar(191) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`role_id`,`permission_id`),
  KEY `sc_role_permissions_permission_id_fkey` (`permission_id`),
  CONSTRAINT `sc_role_permissions_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `sc_permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sc_role_permissions_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `sc_roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sc_role_permissions`
--

LOCK TABLES `sc_role_permissions` WRITE;
/*!40000 ALTER TABLE `sc_role_permissions` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `sc_role_permissions` VALUES
('0d8f129d-a1e1-46fd-86c1-9c3d7d8ba024','ba3b0744-f20b-11f0-9ada-f9b7a927ca7d','2026-01-15 12:14:35.023'),
('0d8f129d-a1e1-46fd-86c1-9c3d7d8ba024','ba3b0c3d-f20b-11f0-9ada-f9b7a927ca7d','2026-01-15 12:14:35.023'),
('0d8f129d-a1e1-46fd-86c1-9c3d7d8ba024','ba3b0d4c-f20b-11f0-9ada-f9b7a927ca7d','2026-01-15 12:14:35.023');
/*!40000 ALTER TABLE `sc_role_permissions` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `sc_roles`
--

DROP TABLE IF EXISTS `sc_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `sc_roles` (
  `id` varchar(191) NOT NULL,
  `name` enum('SUPER_ADMIN','PLATFORM_MANAGER','COMPANY_ADMIN','MANAGER','USER','GUEST') NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `code` enum('SC_SUPER_ADMIN','SC_PLATFORM_MANAGER','SC_COMPANY_ADMIN','SC_MANAGER','SC_USER','SC_GUEST') NOT NULL,
  `scope` enum('Global','Local') NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sc_roles_name_key` (`name`),
  UNIQUE KEY `sc_roles_code_key` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sc_roles`
--

LOCK TABLES `sc_roles` WRITE;
/*!40000 ALTER TABLE `sc_roles` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `sc_roles` VALUES
('0d8f129d-a1e1-46fd-86c1-9c3d7d8ba024','PLATFORM_MANAGER',NULL,'2026-01-15 11:52:12.342','2026-01-15 11:52:12.342',NULL,0,'SC_PLATFORM_MANAGER','Global');
/*!40000 ALTER TABLE `sc_roles` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Table structure for table `sc_users`
--

DROP TABLE IF EXISTS `sc_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `sc_users` (
  `id` varchar(191) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` varchar(191) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `company_id` varchar(191) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sc_users_email_key` (`email`),
  KEY `sc_users_role_id_fkey` (`role_id`),
  KEY `sc_users_company_id_idx` (`company_id`),
  KEY `sc_users_email_is_deleted_idx` (`email`,`is_deleted`),
  CONSTRAINT `sc_users_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `sc_companies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `sc_users_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `sc_roles` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sc_users`
--

LOCK TABLES `sc_users` WRITE;
/*!40000 ALTER TABLE `sc_users` DISABLE KEYS */;
set autocommit=0;
/*!40000 ALTER TABLE `sc_users` ENABLE KEYS */;
UNLOCK TABLES;
commit;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2026-01-15 18:35:26

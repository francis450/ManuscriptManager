-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: laravel
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `documents`
--

DROP TABLE IF EXISTS `documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documents` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `submission_id` bigint unsigned DEFAULT NULL,
  `submission_call_id` bigint unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `extension` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` int NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('active','inactive') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `documents_submission_id_foreign` (`submission_id`),
  KEY `documents_submission_call_id_foreign` (`submission_call_id`),
  CONSTRAINT `documents_submission_call_id_foreign` FOREIGN KEY (`submission_call_id`) REFERENCES `submission_calls` (`id`),
  CONSTRAINT `documents_submission_id_foreign` FOREIGN KEY (`submission_id`) REFERENCES `submissions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents`
--

LOCK TABLES `documents` WRITE;
/*!40000 ALTER TABLE `documents` DISABLE KEYS */;
INSERT INTO `documents` VALUES (1,7,NULL,'sed','fig',2831,'iure','inactive','2024-03-05 04:20:48','2024-03-05 04:20:48',NULL),(2,3,NULL,'omnis','wgt',3469,'ipsa','inactive','2024-03-05 04:20:48','2024-03-05 04:20:48',NULL),(3,3,NULL,'quam','xltm',7127,'et','active','2024-03-05 04:20:48','2024-03-05 04:20:48',NULL),(4,7,NULL,'quia','ppm',6056,'autem','active','2024-03-05 04:20:49','2024-03-05 04:20:49',NULL),(5,2,NULL,'ad','xbap',6880,'sed','inactive','2024-03-05 04:20:49','2024-03-05 04:20:49',NULL),(6,7,NULL,'assumenda','mxs',5157,'voluptas','inactive','2024-03-05 04:20:49','2024-03-05 04:20:49',NULL),(7,5,NULL,'autem','mp2',7400,'quidem','active','2024-03-05 04:20:49','2024-03-05 04:20:49',NULL),(8,5,NULL,'vel','docm',2497,'doloribus','active','2024-03-05 04:20:49','2024-03-05 04:20:49',NULL),(9,1,NULL,'cum','nsf',6648,'optio','active','2024-03-05 04:20:49','2024-03-05 04:20:49',NULL),(10,8,NULL,'officia','wps',4978,'facere','inactive','2024-03-05 04:20:49','2024-03-05 04:20:49',NULL),(11,1,NULL,'cupiditate','tpt',8632,'eius','inactive','2024-03-05 04:20:49','2024-03-05 04:20:49',NULL),(12,1,NULL,'ab','sfd-hdstx',7693,'totam','inactive','2024-03-05 04:20:49','2024-03-05 04:20:49',NULL),(13,7,NULL,'ut','torrent',6302,'fugit','inactive','2024-03-05 04:20:49','2024-03-05 04:20:49',NULL),(14,2,NULL,'nam','iif',4948,'error','active','2024-03-05 04:20:49','2024-03-05 04:20:49',NULL),(15,6,NULL,'saepe','urls',7045,'quia','active','2024-03-05 04:20:49','2024-03-05 04:20:49',NULL),(16,8,NULL,'numquam','wml',7914,'nulla','inactive','2024-03-05 04:20:49','2024-03-05 04:20:49',NULL),(17,2,NULL,'deserunt','odf',7766,'repellat','inactive','2024-03-05 04:20:50','2024-03-05 04:20:50',NULL),(18,4,NULL,'corrupti','uvva',8753,'maxime','inactive','2024-03-05 04:20:50','2024-03-05 04:20:50',NULL),(19,6,NULL,'ipsam','m4v',5203,'similique','inactive','2024-03-05 04:20:50','2024-03-05 04:20:50',NULL),(20,10,NULL,'facere','sbml',8113,'ut','inactive','2024-03-05 04:20:50','2024-03-05 04:20:50',NULL),(21,3,NULL,'minus','ods',5216,'nihil','active','2024-03-05 04:20:50','2024-03-05 04:20:50',NULL),(22,5,NULL,'consequatur','iif',4181,'occaecati','inactive','2024-03-05 04:20:50','2024-03-05 04:20:50',NULL),(23,4,NULL,'fugiat','kwd',1306,'repellat','active','2024-03-05 04:20:50','2024-03-05 04:20:50',NULL),(24,9,NULL,'esse','mp4a',6214,'ipsa','active','2024-03-05 04:20:50','2024-03-05 04:20:50',NULL),(25,2,NULL,'sint','ptid',6840,'dolores','inactive','2024-03-05 04:20:50','2024-03-05 04:20:50',NULL),(26,5,NULL,'reiciendis','spl',4932,'illum','inactive','2024-03-05 04:20:50','2024-03-05 04:20:50',NULL),(27,7,NULL,'aut','oxt',6832,'maxime','active','2024-03-05 04:20:51','2024-03-05 04:20:51',NULL),(28,6,NULL,'quibusdam','npx',7395,'et','active','2024-03-05 04:20:51','2024-03-05 04:20:51',NULL),(29,5,NULL,'ut','3dml',1835,'perspiciatis','inactive','2024-03-05 04:20:51','2024-03-05 04:20:51',NULL),(30,5,NULL,'eligendi','curl',7659,'voluptatem','inactive','2024-03-05 04:20:51','2024-03-05 04:20:51',NULL),(31,4,NULL,'placeat','cab',6426,'quasi','inactive','2024-03-05 04:20:51','2024-03-05 04:20:51',NULL),(32,9,NULL,'perspiciatis','slt',4662,'et','active','2024-03-05 04:20:51','2024-03-05 04:20:51',NULL),(33,9,NULL,'quibusdam','gramps',7630,'ut','inactive','2024-03-05 04:20:51','2024-03-05 04:20:51',NULL),(34,10,NULL,'illo','wav',5102,'quidem','inactive','2024-03-05 04:20:51','2024-03-05 04:20:51',NULL),(35,10,NULL,'similique','stw',3732,'quo','inactive','2024-03-05 04:20:51','2024-03-05 04:20:51',NULL),(36,2,NULL,'sed','xlsm',5129,'adipisci','active','2024-03-05 04:20:51','2024-03-05 04:20:51',NULL),(37,1,NULL,'doloremque','ktx',7701,'et','active','2024-03-05 04:20:51','2024-03-05 04:20:51',NULL),(38,4,NULL,'dolore','msf',3246,'cumque','inactive','2024-03-05 04:20:51','2024-03-05 04:20:51',NULL),(39,3,NULL,'eius','wtb',4636,'ratione','inactive','2024-03-05 04:20:51','2024-03-05 04:20:51',NULL),(40,4,NULL,'rerum','mcurl',4143,'iste','inactive','2024-03-05 04:20:51','2024-03-05 04:20:51',NULL),(41,5,NULL,'a','uoml',3418,'nihil','active','2024-03-05 04:20:52','2024-03-05 04:20:52',NULL),(42,9,NULL,'velit','wax',5570,'sunt','inactive','2024-03-05 04:20:52','2024-03-05 04:20:52',NULL),(43,1,NULL,'praesentium','pas',6876,'deleniti','active','2024-03-05 04:20:52','2024-03-05 04:20:52',NULL),(44,1,NULL,'autem','odc',6129,'eaque','active','2024-03-05 04:20:52','2024-03-05 04:20:52',NULL),(45,9,NULL,'eum','bdm',1365,'provident','inactive','2024-03-05 04:20:52','2024-03-05 04:20:52',NULL),(46,6,NULL,'sit','weba',4644,'animi','inactive','2024-03-05 04:20:52','2024-03-05 04:20:52',NULL),(47,6,NULL,'quia','xsm',6370,'tempora','inactive','2024-03-05 04:20:52','2024-03-05 04:20:52',NULL),(48,4,NULL,'dolorem','csh',4242,'aliquam','inactive','2024-03-05 04:20:52','2024-03-05 04:20:52',NULL),(49,10,NULL,'inventore','java',5801,'sequi','inactive','2024-03-05 04:20:52','2024-03-05 04:20:52',NULL),(50,3,NULL,'sapiente','x3db',3056,'voluptatem','active','2024-03-05 04:20:52','2024-03-05 04:20:52',NULL),(51,NULL,11,'contact.html','html',9290,'submission-calls/11/TDszVl21fHgSrz0dm5ZgISixoW0Q2gpWDn2kqCmz.html','active','2024-03-05 04:31:55','2024-03-05 04:31:55',NULL),(52,NULL,13,'avocado-plate.jpg','jpg',39787,'submission-calls/13/6b7382UWmwKrwiAVgm2RsueCPHN8RU8aBhNYqIM7.jpg','active','2024-03-05 05:27:57','2024-03-05 05:27:57',NULL),(53,NULL,14,'fuerte.jpg','jpg',25356,'submission-calls/14/uKx45fxE6oSfRVe57JSOmDJ8LIsCxSHyudePU29T.jpg','active','2024-03-05 05:32:40','2024-03-05 05:32:40',NULL),(54,NULL,14,'hass.png','png',89911,'submission-calls/14/nVM108KgMb8WwDwN9WEhSnNP2KRQGaJX0vFkWJPs.png','active','2024-03-05 05:32:40','2024-03-05 05:32:40',NULL),(55,NULL,15,'dunnielporters.png','png',94385,'submission-calls/15/GddxHJ5eohaLbivZMNP6YysBDwJL6qcilYlC5JXU.png','active','2024-03-05 05:38:47','2024-03-05 05:38:47',NULL),(56,NULL,17,'ICT Talk and Interview-Kabarak University (1).pdf','pdf',359436,'submission-calls/17/ru31xavfnlbCH6jPb7azFw2HHQf06f5qTM0M6vyL.pdf','active','2024-03-11 14:19:43','2024-03-11 14:19:43',NULL),(57,NULL,17,'java arrays.docx','docx',17591,'submission-calls/17/IWqtY84g7SQvmLBcG6SXrj6AylVFqSbblxcElPSf.docx','active','2024-03-11 14:19:45','2024-03-11 14:19:45',NULL);
/*!40000 ALTER TABLE `documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `form_templates`
--

DROP TABLE IF EXISTS `form_templates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `form_templates` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fields` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `form_templates`
--

LOCK TABLES `form_templates` WRITE;
/*!40000 ALTER TABLE `form_templates` DISABLE KEYS */;
INSERT INTO `form_templates` VALUES (1,'project_proposal','[{\"type\": \"text\", \"label\": \"Title\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Abstract\", \"required\": true}, {\"type\": \"text\", \"label\": \"Keywords\", \"required\": true}, {\"type\": \"select\", \"label\": \"Project Type\", \"options\": [\"Research\", \"Development\", \"Consultancy\"], \"required\": true}, {\"type\": \"text\", \"label\": \"Project Duration\", \"required\": true}]','2024-03-05 04:20:44','2024-03-05 04:20:44'),(2,'Project Proposal','[{\"type\": \"text\", \"label\": \"Title\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Abstract\", \"required\": true}, {\"type\": \"text\", \"label\": \"Keywords\", \"required\": true}, {\"type\": \"select\", \"label\": \"Project Type\", \"options\": [\"Research\", \"Development\", \"Consultancy\"], \"required\": true}, {\"type\": \"text\", \"label\": \"Project Duration\", \"required\": true}]','2024-03-05 05:22:33','2024-03-05 05:22:33'),(3,'Research Paper','[{\"type\": \"text\", \"label\": \"Title\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Abstract\", \"required\": true}, {\"type\": \"text\", \"label\": \"Keywords\", \"required\": true}, {\"type\": \"text\", \"label\": \"Authors\", \"required\": true}, {\"type\": \"text\", \"label\": \"Affiliations\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Introduction\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Methodology\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Results\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Discussion\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Conclusion\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"References\", \"required\": true}]','2024-03-05 05:22:33','2024-03-05 05:22:33'),(4,'Project Paper','[{\"type\": \"text\", \"label\": \"Title\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Abstract\", \"required\": true}, {\"type\": \"text\", \"label\": \"Keywords\", \"required\": true}, {\"type\": \"text\", \"label\": \"Authors\", \"required\": true}, {\"type\": \"text\", \"label\": \"Affiliations\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Introduction\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Methodology\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Results\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Discussion\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Conclusion\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"References\", \"required\": true}]','2024-03-05 05:22:33','2024-03-05 05:22:33'),(5,'Consultancy Paper','[{\"type\": \"text\", \"label\": \"Title\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Abstract\", \"required\": true}, {\"type\": \"text\", \"label\": \"Keywords\", \"required\": true}, {\"type\": \"text\", \"label\": \"Authors\", \"required\": true}, {\"type\": \"text\", \"label\": \"Affiliations\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Introduction\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Methodology\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Results\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Discussion\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Conclusion\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"References\", \"required\": true}]','2024-03-05 05:22:33','2024-03-05 05:22:33'),(6,'Hackathon Project Submission','[{\"type\": \"text\", \"label\": \"Project Title\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Problem Statement\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Solution Overview\", \"required\": true}, {\"type\": \"text\", \"label\": \"Technologies Used\", \"required\": true}, {\"type\": \"text\", \"label\": \"Team Members\", \"required\": true}, {\"type\": \"file\", \"label\": \"Demo/Prototype\", \"required\": true}, {\"type\": \"text\", \"label\": \"Code Repository (e.g., GitHub link)\", \"required\": true}, {\"type\": \"file\", \"label\": \"Presentation Slides\", \"required\": true}]','2024-03-05 05:22:33','2024-03-05 05:22:33'),(7,'Call for Speakers Submission','[{\"type\": \"text\", \"label\": \"Name\", \"required\": true}, {\"type\": \"email\", \"label\": \"Email\", \"required\": true}, {\"type\": \"text\", \"label\": \"Phone Number\", \"required\": true}, {\"type\": \"text\", \"label\": \"Title of the Talk\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Abstract\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Speaker Bio\", \"required\": true}, {\"type\": \"text\", \"label\": \"Social Media Links\", \"required\": true}, {\"type\": \"file\", \"label\": \"Profile Picture\", \"required\": true}]','2024-03-05 05:22:33','2024-03-05 05:22:33'),(8,'Grant Proposal Submission','[{\"type\": \"text\", \"label\": \"Proposal Title\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Project Summary\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Goals/Objectives\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Budget Justification\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Impact/Outcomes\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Evaluation Plan\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Previous Work/Publications\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Collaborators/Partners\", \"required\": true}]','2024-03-05 05:22:33','2024-03-05 05:22:33'),(9,'Contributions to Collaborative Projects','[{\"type\": \"text\", \"label\": \"Contribution Title\", \"required\": true}, {\"type\": \"textarea\", \"label\": \"Description\", \"required\": true}, {\"type\": \"file\", \"label\": \"Code/Documentation Contribution\", \"required\": true}, {\"type\": \"file\", \"label\": \"Bug Report/Feature Request\", \"required\": true}, {\"type\": \"text\", \"label\": \"Project URL (if applicable)\", \"required\": true}, {\"type\": \"text\", \"label\": \"Contribution Type (e.g., pull request, issue)\", \"required\": true}]','2024-03-05 05:22:33','2024-03-05 05:22:33');
/*!40000 ALTER TABLE `form_templates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_reset_tokens_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(5,'2024_02_15_125207_create_submission_calls_table',1),(6,'2024_02_15_132345_create_submissions_table',1),(7,'2024_02_15_135127_create_documents_table',1),(8,'2024_02_15_140507_create_reviews_table',1),(9,'2024_02_15_140542_create_requirements_table',1),(10,'2024_02_16_211955_add_soft_delete_to_table_documents',1),(11,'2024_02_27_143418_add_role_attribute_to_users_table',1),(12,'2024_02_29_055409_make_refactor_to_table_requirements',1),(13,'2024_02_29_133243_add_number_of_files_column_to_requirements_table',1),(14,'2024_02_29_133800_add_submission_call_id_column_to_documents_table',1),(15,'2024_03_01_024618_create_form_templates_table',1),(16,'2024_03_01_024938_add_polymorphic_rel_with_form_teplate_on_submission_calls_table',1),(17,'2024_03_04_064719_create_project_proposal_forms_table',1),(18,'2024_03_05_083022_add_soft_deletes_to_requirements_table',2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_proposal_forms`
--

DROP TABLE IF EXISTS `project_proposal_forms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_proposal_forms` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `fields` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_proposal_forms`
--

LOCK TABLES `project_proposal_forms` WRITE;
/*!40000 ALTER TABLE `project_proposal_forms` DISABLE KEYS */;
INSERT INTO `project_proposal_forms` VALUES (1,'[{\"type\": \"textarea\", \"label\": \"Abstract\", \"required\": true}, {\"type\": \"text\", \"label\": \"Keywords\", \"required\": true}, {\"type\": \"select\", \"label\": \"Project Type\", \"options\": [\"Research\", \"Development\", \"Consultancy\"], \"required\": true}]','2024-03-05 04:20:52','2024-03-05 04:20:52');
/*!40000 ALTER TABLE `project_proposal_forms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `requirements`
--

DROP TABLE IF EXISTS `requirements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `requirements` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `submission_call_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `file_types` json DEFAULT NULL,
  `max_file_size` int DEFAULT NULL,
  `max_files` int DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `requirements_submission_call_id_foreign` (`submission_call_id`),
  CONSTRAINT `requirements_submission_call_id_foreign` FOREIGN KEY (`submission_call_id`) REFERENCES `submission_calls` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requirements`
--

LOCK TABLES `requirements` WRITE;
/*!40000 ALTER TABLE `requirements` DISABLE KEYS */;
INSERT INTO `requirements` VALUES (1,11,'2024-03-05 04:31:52','2024-03-05 04:31:52','[\"PDF\", \"DOC\", \"DOCX\", \"PPT\", \"PPTX\"]',100,5,NULL),(2,12,'2024-03-05 04:57:50','2024-03-05 04:57:50','[\"PDF\", \"DOC\", \"DOCX\", \"PPT\"]',100,5,NULL),(3,13,'2024-03-05 05:27:55','2024-03-05 05:27:55','[\"PDF\", \"DOC\", \"DOCX\", \"PPT\"]',100,5,NULL),(4,14,'2024-03-05 05:32:39','2024-03-05 05:32:39','[\"PDF\", \"DOC\", \"DOCX\", \"PPT\"]',100,6,NULL),(5,15,'2024-03-05 05:38:45','2024-03-05 05:38:45','[\"PDF\", \"DOC\", \"DOCX\", \"PPT\"]',100,5,NULL),(6,16,'2024-03-05 05:48:39','2024-03-05 05:48:39','[]',0,0,NULL),(7,17,'2024-03-11 14:19:34','2024-03-11 14:19:34','[\"PDF\", \"DOC\", \"DOCX\"]',100,4,NULL);
/*!40000 ALTER TABLE `requirements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `submission_id` bigint unsigned NOT NULL,
  `rating` int NOT NULL,
  `date_reviewed` datetime NOT NULL,
  `reviewer` bigint unsigned NOT NULL,
  `status` enum('pending','approved','rejected') COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reviews_submission_id_foreign` (`submission_id`),
  KEY `reviews_reviewer_foreign` (`reviewer`),
  CONSTRAINT `reviews_reviewer_foreign` FOREIGN KEY (`reviewer`) REFERENCES `users` (`id`),
  CONSTRAINT `reviews_submission_id_foreign` FOREIGN KEY (`submission_id`) REFERENCES `submissions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,5,2,'2024-02-06 16:16:48',1,'approved','Ratione veniam perspiciatis id ut. Atque ut doloremque odio possimus. Aspernatur placeat dolores sequi incidunt aut. Temporibus earum et sit sed similique explicabo.',NULL,'2024-03-05 04:20:46','2024-03-05 04:20:46'),(2,2,3,'2024-02-14 21:20:22',1,'pending','Cupiditate non tempora qui quae possimus in. Nihil tenetur autem eveniet quibusdam aut quasi. Doloribus consequatur ea voluptates sequi assumenda iure laborum.',NULL,'2024-03-05 04:20:46','2024-03-05 04:20:46'),(3,5,5,'2024-02-09 22:10:32',3,'pending','Aut aspernatur qui sed eveniet qui. Maxime a quis voluptatem commodi cupiditate ullam non. Id non et fugit non ipsa suscipit ea. Et consequatur eligendi enim ullam dolores fugit.',NULL,'2024-03-05 04:20:46','2024-03-05 04:20:46'),(4,10,3,'2024-02-14 16:18:17',3,'pending','Culpa atque natus recusandae exercitationem et. Adipisci laboriosam porro deleniti ut. Rerum quis facere iure consequuntur ducimus itaque et eius. Facere nemo pariatur ut a eveniet.',NULL,'2024-03-05 04:20:46','2024-03-05 04:20:46'),(5,7,2,'2024-02-29 01:39:51',4,'rejected','Culpa officia animi deserunt rerum aut odio. Eaque ut necessitatibus quia excepturi eos necessitatibus.',NULL,'2024-03-05 04:20:46','2024-03-05 04:20:46'),(6,4,1,'2024-01-27 01:07:59',3,'rejected','Perspiciatis consequatur eos in nesciunt. Sit omnis enim ad ullam facere. Vitae est sunt perferendis qui quaerat. Voluptatem molestiae fugit maxime neque quo explicabo pariatur.',NULL,'2024-03-05 04:20:46','2024-03-05 04:20:46'),(7,4,2,'2024-02-10 21:14:10',4,'approved','Itaque qui aspernatur necessitatibus sint necessitatibus nihil. Qui beatae inventore quos dolorem rerum maxime. Facere vero praesentium amet.',NULL,'2024-03-05 04:20:46','2024-03-05 04:20:46'),(8,9,2,'2024-01-05 20:45:50',5,'approved','Repellat doloribus aspernatur vel harum. Eos officia vel dolorem incidunt veritatis. Natus dolor ut assumenda debitis molestiae sed asperiores sequi. Magnam suscipit et et corrupti ut.',NULL,'2024-03-05 04:20:46','2024-03-05 04:20:46'),(9,3,4,'2024-01-12 02:48:54',2,'pending','Et quae quos ut neque autem dolore. Eaque sit facilis modi nostrum harum nobis vel qui.',NULL,'2024-03-05 04:20:46','2024-03-05 04:20:46'),(10,1,4,'2024-02-14 17:55:18',4,'pending','Voluptas et nihil qui perspiciatis. Officia velit autem odit similique fugit. Quia qui rem est ullam praesentium omnis ut.',NULL,'2024-03-05 04:20:46','2024-03-05 04:20:46'),(11,9,2,'2024-03-01 13:50:06',1,'pending','Voluptatem autem vel enim magni. Sit asperiores pariatur aut molestias vel. Numquam enim aliquam nostrum quibusdam enim adipisci non. Incidunt quo tenetur consequatur odio quod tempora quos.',NULL,'2024-03-05 04:20:46','2024-03-05 04:20:46'),(12,7,2,'2024-01-16 07:11:21',1,'pending','Veniam sed distinctio ex dolorem. Aut at quae dolorem deserunt quidem eaque quibusdam harum. Quasi rerum esse perferendis mollitia ab.',NULL,'2024-03-05 04:20:46','2024-03-05 04:20:46'),(13,10,1,'2024-03-02 15:05:45',5,'approved','Quia natus aspernatur quos ab veniam et eum. Maiores atque aliquid quasi illo.',NULL,'2024-03-05 04:20:46','2024-03-05 04:20:46'),(14,1,5,'2024-01-21 15:10:23',2,'approved','Eum et aut quia cumque quas aut odit molestias. Nobis aut molestiae asperiores minima. Rerum cupiditate esse alias.',NULL,'2024-03-05 04:20:46','2024-03-05 04:20:46'),(15,9,3,'2024-01-04 14:16:27',1,'approved','Atque unde nesciunt consequatur similique aut ad. Eos eaque nemo eaque consequatur ad odit illo. Consectetur voluptate cum laboriosam quia et omnis dolore.',NULL,'2024-03-05 04:20:47','2024-03-05 04:20:47'),(16,5,3,'2024-02-23 05:11:47',2,'approved','Omnis unde praesentium et dolores dolore. Sed non autem blanditiis animi neque ut illo. Blanditiis officiis ea eveniet consequatur a quia et. Voluptatum voluptatem aut assumenda nemo quis vitae.',NULL,'2024-03-05 04:20:47','2024-03-05 04:20:47'),(17,4,2,'2024-02-24 15:57:03',3,'rejected','Asperiores mollitia sit sit velit dolores explicabo id officiis. Culpa sint esse ullam et distinctio.',NULL,'2024-03-05 04:20:47','2024-03-05 04:20:47'),(18,10,1,'2024-03-01 17:45:40',5,'approved','Illum mollitia quia aliquam dignissimos voluptatibus nulla consequatur. Quam et voluptatibus vel. Illo impedit reprehenderit eum et esse molestias quo.',NULL,'2024-03-05 04:20:47','2024-03-05 04:20:47'),(19,3,4,'2024-03-01 19:10:51',2,'pending','Est sunt ut aspernatur. Est molestiae necessitatibus qui totam id quis. Similique id et et ipsam. Veritatis sit est perferendis vel assumenda enim.',NULL,'2024-03-05 04:20:47','2024-03-05 04:20:47'),(20,8,5,'2024-02-16 13:18:33',3,'approved','Eum saepe dignissimos voluptatem unde nulla et. Molestiae quas voluptatem fugit id quia. Mollitia qui minima eum.',NULL,'2024-03-05 04:20:47','2024-03-05 04:20:47'),(21,6,2,'2024-02-05 04:39:43',4,'rejected','Ut inventore id perspiciatis iusto sunt. Molestiae corrupti id error repellat. Ea rem unde et et ipsam ratione.',NULL,'2024-03-05 04:20:47','2024-03-05 04:20:47'),(22,1,2,'2024-01-19 21:55:11',5,'approved','Vitae provident minima quia. Et voluptate optio est eos. Et fugit perferendis laboriosam. Molestias iure qui sit dolorem magni.',NULL,'2024-03-05 04:20:47','2024-03-05 04:20:47'),(23,9,5,'2024-02-22 10:08:57',2,'pending','Voluptas iusto commodi sequi sit. Inventore enim dolores consequatur debitis voluptatem dolorum eos architecto. Non consequatur cum eius voluptatem.',NULL,'2024-03-05 04:20:47','2024-03-05 04:20:47'),(24,1,3,'2024-01-01 18:57:40',3,'rejected','Ut quis dolor numquam. Minima aut et non. Facilis soluta est hic vel fuga aperiam minus. Saepe doloremque laudantium hic provident cumque eligendi est.',NULL,'2024-03-05 04:20:47','2024-03-05 04:20:47'),(25,1,2,'2024-03-01 12:51:01',4,'pending','Qui blanditiis perspiciatis iure officia eaque. Aperiam quo maxime et incidunt dolore. Dicta eum dicta ut quo et ipsam.',NULL,'2024-03-05 04:20:47','2024-03-05 04:20:47'),(26,10,5,'2024-03-05 03:25:08',3,'rejected','Adipisci aut amet maiores enim qui. Recusandae voluptates consequatur reprehenderit recusandae. Et vitae deleniti sit maiores quaerat.',NULL,'2024-03-05 04:20:47','2024-03-05 04:20:47'),(27,4,4,'2024-02-12 09:46:58',3,'pending','Accusantium error recusandae amet. Velit temporibus est beatae voluptatem. Ut ut aliquam tempore voluptates rerum et. Necessitatibus rem eligendi cum est doloribus. Ad facere voluptatem ut ea omnis.',NULL,'2024-03-05 04:20:47','2024-03-05 04:20:47'),(28,5,5,'2024-02-09 01:51:35',5,'pending','Velit numquam earum odio vel. Ut accusamus hic reprehenderit velit velit impedit. In ut inventore in temporibus deleniti dignissimos. Et aliquid voluptatem praesentium eius veniam.',NULL,'2024-03-05 04:20:48','2024-03-05 04:20:48'),(29,5,3,'2024-01-14 02:33:47',2,'approved','Distinctio illum ipsa delectus harum. Sit ad sequi fugiat nobis fuga. Unde voluptates provident occaecati id. Dolor quibusdam sunt qui consequatur quaerat error neque et.',NULL,'2024-03-05 04:20:48','2024-03-05 04:20:48'),(30,3,1,'2024-02-25 16:41:31',2,'approved','Delectus ut qui amet dolor perspiciatis ipsam voluptatem. Commodi omnis et eius at dolor aut occaecati voluptas. Laborum ut voluptate nesciunt mollitia eligendi ex ut.',NULL,'2024-03-05 04:20:48','2024-03-05 04:20:48'),(31,4,2,'2024-02-09 07:26:06',2,'pending','Iusto et temporibus similique tempore quo aut eum nulla. Doloribus quisquam recusandae aliquid aut et sed. Eos ullam vero veniam illum eos.',NULL,'2024-03-05 04:20:48','2024-03-05 04:20:48'),(32,10,4,'2024-02-07 11:41:53',1,'pending','Quidem voluptas omnis excepturi perspiciatis occaecati. Nihil non nemo iste ducimus adipisci maiores perspiciatis. Sunt totam voluptas iure repellat et.',NULL,'2024-03-05 04:20:48','2024-03-05 04:20:48'),(33,7,1,'2024-02-07 20:49:48',1,'rejected','Veritatis possimus similique mollitia molestias autem suscipit aspernatur autem. Ut sed cupiditate reiciendis qui rerum. Mollitia et corrupti et sit quia sapiente ut quis.',NULL,'2024-03-05 04:20:48','2024-03-05 04:20:48'),(34,3,1,'2024-01-31 09:44:24',5,'approved','Est facere debitis eos placeat magni dolor hic minus. Occaecati repellendus eaque labore molestias. Perferendis est eos hic ratione quia. In itaque a et consequatur quia.',NULL,'2024-03-05 04:20:48','2024-03-05 04:20:48'),(35,1,4,'2024-01-03 12:36:57',1,'rejected','Harum omnis iusto consequatur quasi assumenda temporibus deleniti. Qui similique vel illo nostrum dignissimos. Quaerat voluptas repudiandae perferendis occaecati sunt. Rerum velit excepturi amet.',NULL,'2024-03-05 04:20:48','2024-03-05 04:20:48'),(36,10,3,'2024-01-09 07:29:46',4,'rejected','Ex est iusto architecto distinctio voluptatem quam expedita. Possimus quasi qui voluptatem voluptates nemo pariatur nihil. Molestiae molestiae tenetur ratione sed voluptates.',NULL,'2024-03-05 04:20:48','2024-03-05 04:20:48'),(37,8,5,'2024-02-22 02:23:31',2,'pending','Magnam temporibus incidunt quidem placeat. Beatae unde fugit nulla. Vero doloribus sed voluptatum ut. Quos expedita quia quam qui.',NULL,'2024-03-05 04:20:48','2024-03-05 04:20:48'),(38,7,2,'2024-01-30 06:11:40',1,'approved','Facilis quos magni eveniet id voluptatem dolor molestiae. Unde quibusdam est ipsa. Tenetur dolorem esse molestiae. Saepe reprehenderit voluptatem rem quia molestias iste repellat.',NULL,'2024-03-05 04:20:48','2024-03-05 04:20:48'),(39,9,2,'2024-01-01 09:30:48',1,'approved','Ipsam possimus tempora sed ab. Natus voluptates porro ipsa neque in cupiditate eum. Autem vel temporibus animi aut ab.',NULL,'2024-03-05 04:20:48','2024-03-05 04:20:48'),(40,4,2,'2024-02-22 13:07:16',3,'approved','Blanditiis et quia hic et. Deleniti unde quia ab quidem. Libero nemo ipsam fugiat delectus excepturi. Asperiores temporibus quod magni reiciendis animi ex.',NULL,'2024-03-05 04:20:48','2024-03-05 04:20:48');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `submission_calls`
--

DROP TABLE IF EXISTS `submission_calls`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `submission_calls` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `deadline` datetime NOT NULL,
  `status` enum('active','inactive') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `user_id` bigint unsigned NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `form_template_id` bigint unsigned DEFAULT NULL,
  `form_template_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `submission_calls_user_id_foreign` (`user_id`),
  KEY `submission_calls_form_template_id_foreign` (`form_template_id`),
  CONSTRAINT `submission_calls_form_template_id_foreign` FOREIGN KEY (`form_template_id`) REFERENCES `form_templates` (`id`),
  CONSTRAINT `submission_calls_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `submission_calls`
--

LOCK TABLES `submission_calls` WRITE;
/*!40000 ALTER TABLE `submission_calls` DISABLE KEYS */;
INSERT INTO `submission_calls` VALUES (1,'Suscipit illo blanditiis aliquid amet ducimus.','Voluptatum voluptas numquam et itaque ut quidem. Aut fugit soluta earum possimus dicta ut. Veniam iure reprehenderit consequatur odio qui. Quibusdam odio veniam deserunt magnam vel. Saepe excepturi et molestias non cumque et.','2024-05-19 12:01:39','active',2,NULL,'2024-03-05 04:20:44','2024-03-05 04:20:44',1,'research_proposal'),(2,'Molestiae eum et fuga corporis nihil laborum eius a.','Error consequatur rerum sit rerum. Officiis autem vitae dolorem reiciendis aut veritatis. Illo autem quae voluptatem eligendi voluptatem deserunt sapiente. Necessitatibus quia sapiente soluta voluptatibus id placeat qui.','2024-10-01 11:25:25','active',10,NULL,'2024-03-05 04:20:44','2024-03-05 04:20:44',1,'project_proposal'),(3,'Quasi repudiandae aut et et dolorum laboriosam amet autem.','Quae voluptatem explicabo ipsum similique aperiam. Expedita quo vero vel architecto ad. Voluptas magni rerum debitis.','2025-02-28 11:59:34','active',2,NULL,'2024-03-05 04:20:44','2024-03-05 04:20:44',1,'research_proposal'),(4,'Enim similique ratione nemo.','Cupiditate voluptatibus voluptas reiciendis natus.','2024-11-15 00:00:00','active',6,NULL,'2024-03-05 04:20:44','2024-03-10 17:17:12',1,'research_proposal'),(5,'Eos quidem aliquid id qui alias vitae nulla.','Est excepturi voluptas quis aut nemo. Aut aperiam quo quae pariatur maiores. Et accusantium possimus autem et laboriosam labore dicta. Qui pariatur dolor debitis.','2024-11-11 06:09:33','active',9,NULL,'2024-03-05 04:20:44','2024-03-05 04:20:44',1,'project_proposal'),(6,'Temporibus nobis sit quam placeat.','Sit rem eos quisquam sit. Ad ea ut et laborum voluptatem commodi. Nemo perspiciatis officia animi doloremque asperiores voluptas impedit et. Laboriosam aperiam sed cupiditate sint placeat sint.','2024-09-14 04:08:00','active',5,NULL,'2024-03-05 04:20:44','2024-03-05 04:20:44',1,'research_proposal'),(7,'Repellendus dolorum magnam vel dolor et qui saepe alias.','Dolor molestias quasi nisi nulla fuga sunt porro. Fugit pariatur eaque et numquam magni est. Ad sint quisquam explicabo.','2024-12-20 20:19:52','active',5,NULL,'2024-03-05 04:20:44','2024-03-05 04:20:44',1,'project_proposal'),(8,'Quibusdam eligendi veritatis excepturi tempore ut et.','Architecto deleniti quo veniam commodi asperiores porro. Consequatur maxime dolore doloribus non. Dolore autem delectus enim sit atque.','2024-03-07 00:49:13','active',9,NULL,'2024-03-05 04:20:44','2024-03-05 04:20:44',1,'event_proposal'),(9,'Debitis ut sint blanditiis non modi a.','Sint dolorem expedita ullam rerum praesentium consequatur nihil. Molestiae aut harum repellendus corporis numquam.','2024-09-03 17:42:41','active',1,NULL,'2024-03-05 04:20:45','2024-03-05 04:20:45',1,'event_proposal'),(10,'Sint nobis enim qui qui nihil est.','Quia quia dolor voluptatem velit ad praesentium dolores. Adipisci ipsa ut dolor consequuntur vero dolorem. Aut odit architecto eligendi ab distinctio. Vel provident repudiandae voluptas quos fugiat quod nihil.','2024-09-21 19:02:24','active',7,NULL,'2024-03-05 04:20:45','2024-03-05 04:20:45',1,'research_proposal'),(11,'To change the foreign key','To change the foreign key column in your submission_calls table from form_template_type to form_template_id using Laravel\'s schema builder, you can do the following:','2024-03-05 10:31:00','active',11,'2024-03-11 13:28:24','2024-03-05 04:31:52','2024-03-11 13:28:24',NULL,NULL),(12,'New Project Proposal','New Project Proposal Description','2024-03-05 10:00:00','active',11,'2024-03-11 13:27:57','2024-03-05 04:57:50','2024-03-11 13:27:57',NULL,NULL),(13,'Computer Science Class of 2024 Project Proposal','{formTemplates.map((template, index) => (\r\n    <option key={index} value={template.type}>{template.type.toUpperCase()}</option>\r\n))}','2024-03-05 11:30:00','active',11,NULL,'2024-03-05 05:27:54','2024-03-05 05:27:54',NULL,NULL),(14,'Computer Science 2024 - Project Proposal','The GET method is not supported for route submissionCallForm. Supported methods: POST.','2024-03-05 11:00:00','active',11,NULL,'2024-03-05 05:32:38','2024-03-05 05:32:38',NULL,NULL),(15,'We Care About Your Privacy','We and our partners use cookies to store and access personal data such as browsing data for purposes such as serving and personalizing content and advertising and analyzing site traffic. You may find out more about the purposes for which we and our partners use cookies or exercise your preferences by clicking the ‘Cookie Settings’ button below. You can revisit your consent choices or withdraw consent at any time by clicking the link to your cookie settings in our Cookie Policy. We work in coordination with an industry framework, signaling your preferences globally for all participating websites. You can adjust cookie preferences in Cookie Settings.','2024-03-05 13:05:00','active',11,NULL,'2024-03-05 05:38:45','2024-03-11 13:36:13',NULL,NULL),(16,'Another one','We and our partners use cookies to store and access personal data such as browsing data for purposes such as serving and personalizing content and advertising and analyzing site traffic. You may find out more about the purposes for which we and our partners use cookies or exercise your preferences by clicking the ‘Cookie Settings’ button below. You can revisit your consent choices or withdraw consent at any time by clicking the link to your cookie settings in our Cookie Policy. We work in coordination with an industry framework, signaling your preferences globally for all participating websites. You can adjust cookie preferences in Cookie Settings.','2024-03-05 11:00:00','active',11,'2024-03-11 13:30:32','2024-03-05 05:48:39','2024-03-11 13:30:32',NULL,NULL),(17,'get documents that have submission call id only','Your code seems mostly fine, but there are a couple of corrections and improvements you can make:','2024-03-11 22:20:00','active',11,NULL,'2024-03-11 14:19:34','2024-03-11 14:19:34',NULL,NULL);
/*!40000 ALTER TABLE `submission_calls` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `submissions`
--

DROP TABLE IF EXISTS `submissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `submissions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `submission_call_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('pending','approved','rejected') COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_submitted` datetime NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `submissions_submission_call_id_foreign` (`submission_call_id`),
  KEY `submissions_user_id_foreign` (`user_id`),
  CONSTRAINT `submissions_submission_call_id_foreign` FOREIGN KEY (`submission_call_id`) REFERENCES `submission_calls` (`id`),
  CONSTRAINT `submissions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `submissions`
--

LOCK TABLES `submissions` WRITE;
/*!40000 ALTER TABLE `submissions` DISABLE KEYS */;
INSERT INTO `submissions` VALUES (1,8,1,'Et est saepe consequatur labore in ipsam asperiores et.','Exercitationem laborum pariatur soluta quibusdam veritatis. Totam suscipit quo ut. Non voluptas esse aperiam error nobis quia consequatur consequuntur. Quia neque molestiae quia aspernatur sed.','eveniet','rejected','2024-02-14 15:03:38',NULL,'2024-03-05 04:20:45','2024-03-05 04:20:45'),(2,7,5,'Ut sint dolorum ipsum beatae perspiciatis voluptatem.','Eos perspiciatis consectetur officiis commodi voluptatem quis eos ratione. Et molestiae sit quia architecto saepe enim. Ut architecto saepe quia blanditiis animi. Totam necessitatibus et facere est voluptas.','animi','rejected','2024-02-12 20:47:00',NULL,'2024-03-05 04:20:45','2024-03-05 04:20:45'),(3,4,2,'Quia labore officia vel debitis.','Cupiditate libero enim repellendus itaque officiis. Vitae est ut eum autem rerum debitis. Autem aut autem maiores omnis.','qui','rejected','2024-02-14 01:47:46',NULL,'2024-03-05 04:20:45','2024-03-05 04:20:45'),(4,8,5,'Occaecati possimus labore facilis.','Molestias et dolore animi neque placeat iste repellendus dolores. Vero enim ex dolor ut. Officia voluptas aliquid alias qui ut aut voluptatibus dolore. Dignissimos veritatis quos eum et sed.','ut','approved','2024-02-12 16:25:20',NULL,'2024-03-05 04:20:45','2024-03-05 04:20:45'),(5,8,1,'Consequuntur quis delectus ut deserunt.','Et quia dolor perferendis harum accusamus quia. Quia dignissimos cumque nesciunt id aliquam. Non excepturi ut exercitationem autem. Laborum placeat harum vel.','nemo','rejected','2024-02-10 00:55:02',NULL,'2024-03-05 04:20:45','2024-03-05 04:20:45'),(6,1,4,'Ut rerum ut non illo corporis et.','Voluptatem asperiores esse eum impedit corrupti. Iste occaecati voluptatibus minima veniam adipisci. Blanditiis fugiat voluptas perferendis in consequatur. Optio deleniti eveniet nostrum quis corrupti omnis. Sed sint saepe est accusantium corporis.','eaque','approved','2024-02-24 13:00:22',NULL,'2024-03-05 04:20:45','2024-03-05 04:20:45'),(7,3,1,'Iste quaerat voluptatem quia asperiores expedita est.','Est corporis sed inventore aut deleniti quia. Molestiae molestiae qui sequi non. Explicabo cum reprehenderit asperiores natus maiores dicta. Quidem id optio repellat.','et','rejected','2024-02-18 22:10:50',NULL,'2024-03-05 04:20:45','2024-03-05 04:20:45'),(8,7,1,'Iure aperiam minima harum earum sint aut sed.','Ut est quos dolore nostrum laborum voluptatem hic. Eveniet omnis quas ut. Aut similique et molestias cum.','aut','approved','2024-03-01 17:48:46',NULL,'2024-03-05 04:20:45','2024-03-05 04:20:45'),(9,3,3,'Aliquam nemo ut velit iste est temporibus odit.','Nostrum ut eius qui laudantium labore. Illo delectus consequatur minima voluptas neque. Ut rerum ut numquam id nisi ut. Nesciunt fugiat dolorem dolores vero accusantium ipsam et.','quos','rejected','2024-02-09 17:06:36',NULL,'2024-03-05 04:20:45','2024-03-05 04:20:45'),(10,10,4,'Minus magnam magnam mollitia et.','Pariatur aut quia voluptatem recusandae illo et non. Numquam id enim voluptate vel deserunt. Molestiae amet deserunt explicabo omnis quo dolor. Et esse mollitia beatae praesentium.','hic','pending','2024-02-17 15:04:27',NULL,'2024-03-05 04:20:45','2024-03-05 04:20:45');
/*!40000 ALTER TABLE `submissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'author',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Eriberto Wyman DDS','hartmann.cora@example.org','2024-03-05 04:20:43','$2y$12$HHbGss241VkMptIXZnME.ed0Rft7XVDSEfmgfu/PWk6wgoFd.Mqaq','2s4264VIHY','2024-03-05 04:20:43','2024-03-05 04:20:43','editor'),(2,'Edwardo Ondricka','huel.jay@example.org','2024-03-05 04:20:43','$2y$12$HHbGss241VkMptIXZnME.ed0Rft7XVDSEfmgfu/PWk6wgoFd.Mqaq','8xf6QwgSwY','2024-03-05 04:20:43','2024-03-05 04:20:43','reviewer'),(3,'Easter Harber','wbosco@example.org','2024-03-05 04:20:43','$2y$12$HHbGss241VkMptIXZnME.ed0Rft7XVDSEfmgfu/PWk6wgoFd.Mqaq','TOEhhecj2Z','2024-03-05 04:20:43','2024-03-05 04:20:43','reviewer'),(4,'Anabelle Funk','rashawn06@example.org','2024-03-05 04:20:43','$2y$12$HHbGss241VkMptIXZnME.ed0Rft7XVDSEfmgfu/PWk6wgoFd.Mqaq','zRu4Ec9bqP','2024-03-05 04:20:43','2024-03-05 04:20:43','reviewer'),(5,'Dedrick Luettgen','luettgen.reynold@example.com','2024-03-05 04:20:43','$2y$12$HHbGss241VkMptIXZnME.ed0Rft7XVDSEfmgfu/PWk6wgoFd.Mqaq','SqJRcIPH2b','2024-03-05 04:20:44','2024-03-05 04:20:44','editor'),(6,'Mr. Vaughn Tromp DDS','connelly.olen@example.com','2024-03-05 04:20:43','$2y$12$HHbGss241VkMptIXZnME.ed0Rft7XVDSEfmgfu/PWk6wgoFd.Mqaq','eMK333vEFT','2024-03-05 04:20:44','2024-03-05 04:20:44','admin'),(7,'Dr. Leonora Paucek','barrett.powlowski@example.com','2024-03-05 04:20:43','$2y$12$HHbGss241VkMptIXZnME.ed0Rft7XVDSEfmgfu/PWk6wgoFd.Mqaq','xIcBhdSZgR','2024-03-05 04:20:44','2024-03-05 04:20:44','reviewer'),(8,'Samanta Herzog Sr.','psteuber@example.org','2024-03-05 04:20:43','$2y$12$HHbGss241VkMptIXZnME.ed0Rft7XVDSEfmgfu/PWk6wgoFd.Mqaq','QIE0mzMBoP','2024-03-05 04:20:44','2024-03-05 04:20:44','author'),(9,'Dr. Elfrieda Zieme','jhaley@example.com','2024-03-05 04:20:43','$2y$12$HHbGss241VkMptIXZnME.ed0Rft7XVDSEfmgfu/PWk6wgoFd.Mqaq','iJbeJVWbMq','2024-03-05 04:20:44','2024-03-05 04:20:44','reviewer'),(10,'Prof. Jalon Lind MD','ckassulke@example.org','2024-03-05 04:20:43','$2y$12$HHbGss241VkMptIXZnME.ed0Rft7XVDSEfmgfu/PWk6wgoFd.Mqaq','Z8nQhTyps9','2024-03-05 04:20:44','2024-03-05 04:20:44','author'),(11,'Francis Kamande Njoroge','franciskamande2001@gmail.com',NULL,'$2y$12$Ta5T7IBtRi6Azc/05yGp0ucd80qT2tZJRSCdkFWAKJxjWWjgILr.2',NULL,'2024-03-05 04:30:48','2024-03-05 04:30:48','author');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-12 13:06:17

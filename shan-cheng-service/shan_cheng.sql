/*
 Navicat Premium Data Transfer

 Source Server         : 本地
 Source Server Type    : MySQL
 Source Server Version : 50719
 Source Host           : localhost:3306
 Source Schema         : shan_cheng

 Target Server Type    : MySQL
 Target Server Version : 50719
 File Encoding         : 65001

 Date: 09/05/2022 20:28:57
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for icon
-- ----------------------------
DROP TABLE IF EXISTS `icon`;
CREATE TABLE `icon`  (
  `id` int(11) NOT NULL,
  `icon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of icon
-- ----------------------------
INSERT INTO `icon` VALUES (0, 'icon-html', 'html', 'skill');
INSERT INTO `icon` VALUES (1, 'icon-vite', 'vite', 'skill');
INSERT INTO `icon` VALUES (2, 'icon-charttype_piechart_sel', 'echarts', 'skill');
INSERT INTO `icon` VALUES (3, 'icon-React', 'React', 'skill');
INSERT INTO `icon` VALUES (4, 'icon-Vue', 'Vue', 'skill');
INSERT INTO `icon` VALUES (5, 'icon-webpack', 'Webpack', 'skill');
INSERT INTO `icon` VALUES (6, 'icon-Angular', 'Angular', 'skill');
INSERT INTO `icon` VALUES (7, 'icon-GitHub', 'GitHub', 'skill');
INSERT INTO `icon` VALUES (8, 'icon-Iconfont', 'Iconfont', 'skill');
INSERT INTO `icon` VALUES (9, 'icon-Sass', 'Sass', 'skill');
INSERT INTO `icon` VALUES (10, 'icon-node_js', 'NodeJs', 'skill');
INSERT INTO `icon` VALUES (11, 'icon-less', 'less', 'skill');
INSERT INTO `icon` VALUES (12, 'icon-vuex-store', 'vuex-store', 'skill');
INSERT INTO `icon` VALUES (13, 'icon-typescript', 'typescript', 'skill');
INSERT INTO `icon` VALUES (14, 'icon-sequelize', 'sequelize', 'skill');
INSERT INTO `icon` VALUES (15, 'icon-npm', 'npm', 'skill');
INSERT INTO `icon` VALUES (16, 'icon-javascript-map', 'javascript', 'skill');
INSERT INTO `icon` VALUES (17, 'icon-json', 'json', 'skill');
INSERT INTO `icon` VALUES (18, 'icon-git', 'git', 'skill');
INSERT INTO `icon` VALUES (19, 'icon-gongzuotai', '工作台', 'icon');
INSERT INTO `icon` VALUES (20, 'icon-zhanghaochaijie', '账号拆解', 'icon');
INSERT INTO `icon` VALUES (21, 'icon-youxuanjingpin', '优选精品', 'icon');

-- ----------------------------
-- Table structure for project
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `icon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `typeId` int(11) DEFAULT NULL,
  `date` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `images` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of project
-- ----------------------------
INSERT INTO `project` VALUES ('0', 0, 'auto-echarts', 'icon-zhanghaochaijie', 0, '2022-04-09', 3, 'http://localhost:8081/#/', 'hhh', 'http://127.0.0.1:3000/img/1650876089242.jpg');
INSERT INTO `project` VALUES ('2', 0, 'vue3-admin', 'icon-gongzuotai', 1, '2022-04-05', 2, NULL, '暂无', '');

-- ----------------------------
-- Table structure for project_type
-- ----------------------------
DROP TABLE IF EXISTS `project_type`;
CREATE TABLE `project_type`  (
  `id` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of project_type
-- ----------------------------
INSERT INTO `project_type` VALUES (0, 0, 'VUE-2', '云程发轫,干霄凌云');
INSERT INTO `project_type` VALUES (1, 0, 'VUE-3', '光焰万丈,远举高飞');

-- ----------------------------
-- Table structure for skill
-- ----------------------------
DROP TABLE IF EXISTS `skill`;
CREATE TABLE `skill`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `icon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `proId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of skill
-- ----------------------------
INSERT INTO `skill` VALUES ('1650763968NbyyI8TS', NULL, 'icon-Vue', 'Vue', '0');
INSERT INTO `skill` VALUES ('1650764033vHg0Rr1j', NULL, 'icon-charttype_piechart_sel', 'echarts', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `icon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `date` datetime(0) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (0, 'haozi', '123456', NULL, '2022-04-21 14:19:36');

SET FOREIGN_KEY_CHECKS = 1;

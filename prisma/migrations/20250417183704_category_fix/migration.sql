/*
  Warnings:

  - Added the required column `alt` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "alt" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

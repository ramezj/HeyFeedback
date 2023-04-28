/*
  Warnings:

  - You are about to drop the column `isSubscribed` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `subscription_cancel_url` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `subscription_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `subscription_plan_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `subscription_update_url` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `websiteUrl` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accounts" ADD COLUMN     "isSubscribed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "subscription_cancel_url" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "subscription_id" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "subscription_plan_id" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "subscription_update_url" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "websiteUrl" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "users" DROP COLUMN "isSubscribed",
DROP COLUMN "subscription_cancel_url",
DROP COLUMN "subscription_id",
DROP COLUMN "subscription_plan_id",
DROP COLUMN "subscription_update_url",
DROP COLUMN "websiteUrl";

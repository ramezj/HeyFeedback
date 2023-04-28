-- AlterTable
ALTER TABLE "users" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isSubscribed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "subscription_cancel_url" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "subscription_id" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "subscription_plan_id" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "subscription_update_url" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "websiteUrl" TEXT NOT NULL DEFAULT '';

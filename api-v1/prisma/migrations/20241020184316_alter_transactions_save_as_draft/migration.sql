/*
  Warnings:

  - You are about to drop the column `is_draft` on the `transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "transactions" DROP COLUMN "is_draft",
ADD COLUMN     "saveAsDraft" BOOLEAN NOT NULL DEFAULT false;

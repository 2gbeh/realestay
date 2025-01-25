/*
  Warnings:

  - You are about to drop the column `biometrics` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `pin` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "biometrics",
DROP COLUMN "pin",
ADD COLUMN     "unsubscribedAt" TIMESTAMP(3);

/*
  Warnings:

  - You are about to drop the column `rank` on the `LeaderBoard` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[contestId,userId]` on the table `LeaderBoard` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."LeaderBoard_contestId_rank_key";

-- AlterTable
ALTER TABLE "public"."LeaderBoard" DROP COLUMN "rank",
ADD COLUMN     "score" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "LeaderBoard_contestId_userId_key" ON "public"."LeaderBoard"("contestId", "userId");

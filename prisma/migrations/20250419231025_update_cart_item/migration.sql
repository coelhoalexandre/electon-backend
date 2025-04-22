-- DropForeignKey
ALTER TABLE "cart_item" DROP CONSTRAINT "cart_item_userId_fkey";

-- AlterTable
ALTER TABLE "cart_item" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

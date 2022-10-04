-- CreateTable
CREATE TABLE "tb_sellers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tb_sellers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_sales" (
    "id" SERIAL NOT NULL,
    "visited" INTEGER NOT NULL,
    "deals" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "sellerId" INTEGER NOT NULL,

    CONSTRAINT "tb_sales_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_sales" ADD CONSTRAINT "tb_sales_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "tb_sellers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

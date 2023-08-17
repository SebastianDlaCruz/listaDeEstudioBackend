-- CreateEnum
CREATE TYPE "Type" AS ENUM ('IMPORTANTE', 'RECOMENDADO');

-- CreateTable
CREATE TABLE "ListaPrincipal" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "ListaPrincipal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubLista" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "type" "Type" NOT NULL DEFAULT 'IMPORTANTE',
    "listaPrincipalId" INTEGER,

    CONSTRAINT "SubLista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "referencias" TEXT[],
    "subListaId" INTEGER,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubLista" ADD CONSTRAINT "SubLista_listaPrincipalId_fkey" FOREIGN KEY ("listaPrincipalId") REFERENCES "ListaPrincipal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_subListaId_fkey" FOREIGN KEY ("subListaId") REFERENCES "SubLista"("id") ON DELETE SET NULL ON UPDATE CASCADE;

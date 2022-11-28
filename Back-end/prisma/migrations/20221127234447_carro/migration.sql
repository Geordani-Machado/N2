-- CreateTable Carros
CREATE TABLE "Carro" (
    "id_carro" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "Ano_Fabricante" TEXT NOT NULL,
    "isReserved" BOOLEAN NOT NULL
);


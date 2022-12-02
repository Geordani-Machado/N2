-- CreateTable
CREATE TABLE "Motorista" (
    "id_moto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "idade" TEXT NOT NULL,
    "sexo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Carro" (
    "id_carro" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cor" TEXT NOT NULL,
    "Ano_Fabricante" TEXT NOT NULL,
    "isReserved" BOOLEAN NOT NULL,
    "url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Reserva" (
    "id_moto" INTEGER NOT NULL,
    "id_carro" INTEGER NOT NULL,
    "data_inicio" TEXT NOT NULL,
    "data_fim" TEXT NOT NULL,
    CONSTRAINT "Reserva_id_moto_fkey" FOREIGN KEY ("id_moto") REFERENCES "Motorista" ("id_moto") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reserva_id_carro_fkey" FOREIGN KEY ("id_carro") REFERENCES "Carro" ("id_carro") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Reserva_id_moto_key" ON "Reserva"("id_moto");

-- CreateIndex
CREATE UNIQUE INDEX "Reserva_id_carro_key" ON "Reserva"("id_carro");

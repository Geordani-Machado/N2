-- CreateTable Reservas
CREATE TABLE "Reserva" (
    "id_moto" INTEGER NOT NULL,
    "id_carro" INTEGER NOT NULL,
    "data_inicio" DATETIME NOT NULL,
    "data_fim" DATETIME NOT NULL,
    CONSTRAINT "Reserva_id_moto_fkey" FOREIGN KEY ("id_moto") REFERENCES "Motorista" ("id_moto") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Reserva_id_carro_fkey" FOREIGN KEY ("id_carro") REFERENCES "Carro" ("id_carro") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Reserva_id_moto_key" ON "Reserva"("id_moto");

-- CreateIndex
CREATE UNIQUE INDEX "Reserva_id_carro_key" ON "Reserva"("id_carro");

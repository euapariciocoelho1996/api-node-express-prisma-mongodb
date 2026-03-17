import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/usuarios", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    return res
      .status(200)
      .json({ message: "Usuários listados com sucesso", users });
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    return res.status(500).json({ message: "Erro ao listar usuários" });
  }
});

export default router;

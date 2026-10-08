import type { Tarefa } from "../types/tarefa.js";
import * as repository from "../repositories/tarefas.repository.js";

export function listarTarefas(): Tarefa[] {
  return repository.listarTarefas();
}

export function buscarTarefaPorId(id: number): Tarefa | undefined {
  return repository.buscarPorId(id);
}

export function criarTarefa(titulo: string): Tarefa {
  const criadoEm: string = new Date().toISOString();
  return repository.criar(titulo, criadoEm);
}

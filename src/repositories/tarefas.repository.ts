import { db } from "../banco.js";
import type { Tarefa } from "../types/tarefa.js";

export function listarTarefas(): Tarefa[] {
  const tarefas: Tarefa[] = db
    .prepare("SELECT * FROM tarefas")
    .all() as Tarefa[];
  return tarefas;
}

export function encontraTarefa(id: number): Tarefa | undefined {
  const tarefaProcurada: Tarefa | undefined = db
    .prepare("SELECT * FROM tarefas WHERE id = ?")
    .get(id) as Tarefa | undefined;
  return tarefaProcurada;
}

export function criar(titulo: string, criadoEm: string): Tarefa {
  const novaTarefa: Tarefa = db
    .prepare("INSERT INTO tarefas (titulo, criadoEm) VALUES (?, ?) RETURNING *")
    .get(titulo, criadoEm) as Tarefa;
  return novaTarefa;
}

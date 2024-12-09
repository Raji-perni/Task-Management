import { Request, Response } from "express";
import Task from "../models/task";

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await Task.findAll({ where: { user_id: req.user.id } });
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { title, description, status } = req.body;

  try {
    const task = await Task.create({ title, description, status, user_id: req.user.id });
    res.status(201).json(task);
  } catch {
    res.status(400).json({ message: "Error creating task" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    await Task.update({ title, description, status }, { where: { id, user_id: req.user.id } });
    res.json({ message: "Task updated" });
  } catch {
    res.status(400).json({ message: "Error updating task" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Task.destroy({ where: { id, user_id: req.user.id } });
    res.json({ message: "Task deleted" });
  } catch {
    res.status(400).json({ message: "Error deleting task" });
  }
};

import z from "zod";

export const createTaskSchema = z.object({
  title: z.string().max(20),
  body: z.string().min(5),
});

export type CreateTaskInput = z.TypeOf<typeof createTaskSchema>;

export const updateTaskShchema = z.object({
  taskId: z.string().cuid(),
  title: z.string().max(20),
  body: z.string().min(5),
});

export type UpdateTaskInput = z.TypeOf<typeof updateTaskShchema>;

export const getSingleTaskSchema = z.object({
  taskId: z.string().cuid(),
});

export const deleteTaskSchema = z.object({
  taskId: z.string().cuid(),
});

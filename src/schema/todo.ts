import z from "zod";

// サーバー側から参照される関数
export const createTaskSchema = z.object({
  title: z.string().max(20),
  body: z.string().min(5),
});

export const updateTaskShchema = z.object({
  taskId: z.string().cuid(),
  title: z.string().max(20),
  body: z.string().min(5),
});

export const getSingleTaskSchema = z.object({
  taskId: z.string().cuid(),
});

export const deleteTaskSchema = z.object({
  taskId: z.string().cuid(),
});

// フロント側から参照される型定義
export type CreateTaskInput = z.TypeOf<typeof createTaskSchema>;
export type UpdateTaskInput = z.TypeOf<typeof updateTaskShchema>;

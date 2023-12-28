import { connDB } from '@/libs/mongodb';
import { Task } from '@/types/task/task.type';

export async function POST() {
  const collection = await connDB<Task>('tasks');
  const result = await collection.insertOne({
    title: 'Do Math Homework',
    _id: 1,
    description: 'very hard',
    priority: 5,
    taskDate: '2023-12-05',
    taskTime: '15:30',
    category: {
      _id: '',
      name: 'University',
      color: 'bg-red-400',
      icon: '🌈',
    },
  });

  return Response.json(result);
}

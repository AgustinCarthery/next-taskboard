import { v4 as uuidv4 } from 'uuid';

interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pendiente: test1',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: 'In Progress: test2',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description: 'Finished: test3',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};

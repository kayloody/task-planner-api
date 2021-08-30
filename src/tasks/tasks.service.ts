import { Injectable } from '@nestjs/common';
import { Task } from "./interfaces/tasks.interface"

@Injectable()
export class TasksService {
    private readonly tasks: Task[] = [
        {
            id: "ABC123",
            name: "Eat",
            completed: false
        },
        {
            id: "DEF456",
            name: "Sleep",
            completed: false
        },
        {
            id: "GHI789",
            name: "Repeat",
            completed: true
        }
    ]

    fetchAll(): Task[] {
        return this.tasks;
    }
}

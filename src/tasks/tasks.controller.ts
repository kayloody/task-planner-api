import { Controller, Get, Post, Put, Body, Param} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/tasks.interface';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    fetchAll(): Task[] {
        return this.tasksService.fetchAll();
    }

    @Post()
    createOne(@Body() createTaskDto: CreateTaskDto): string {
        return `Created ${createTaskDto.name}`;
    }

    @Put(":id")
    updateOne(@Body() updateTaskDto: CreateTaskDto, @Param("id") id): string{
        return `Updated ${id} with ${updateTaskDto.name}`
    }
}

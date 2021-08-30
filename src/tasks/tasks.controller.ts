import { Controller, Get, Post, Put, Body, Param} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/tasks.interface';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    fetchAll(): Promise<Task[]> {
        return this.tasksService.fetchAll();
    }

    @Post()
    createOne(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksService.createOne(createTaskDto);
    }

    @Put(":id")
    updateOne(@Body() updateTaskDto: CreateTaskDto, @Param("id") id): Promise<Task> {
        return this.tasksService.updateOne(updateTaskDto, id);
    }
}

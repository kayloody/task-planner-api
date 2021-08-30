import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Task } from "./interfaces/tasks.interface"

@Injectable()
export class TasksService {
    constructor(@InjectModel("Task") private readonly taskModel:Model<Task>){}
    
    async fetchAll(): Promise<Task[]> {
        return await this.taskModel.find();
    }

    async createOne(task: Task): Promise<Task> {
        let newTask = new this.taskModel(task);
        return await newTask.save();
    }

    async updateOne(task: Task, id: string): Promise<Task> {
        return await this.taskModel.findByIdAndUpdate(id, task, {new: true});
    }
}

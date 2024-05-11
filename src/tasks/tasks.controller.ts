import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';



@Controller('/task')
@ApiTags('Tasks')
export class TasksController {
    constructor(private TasksService:TasksService){}
    
    @Get()
    @ApiOperation({summary: 'Get all tasks'})
    @ApiResponse({status:200, description:'Return all task.'})
    @ApiResponse({status:403, description:'Forbidden.'})
    getAllTasks(@Query() query:any){
        console.log(query)
        return this.TasksService.getTasks();
    }

    @Get('/:id')
    @ApiOperation({summary: 'Get tasks for ID'})
    getTask(@Param('id') id:string){
        return this.TasksService.getTask(parseInt(id));
    }

    @Post()
    @ApiOperation({summary: 'Create tasks'})
    createTasks(@Body() task:CreateTaskDto){
        return this.TasksService.createTasks(task);
    }

    @Put()
    updateTasks(@Body() task: UpdateTaskDto){
        return this.TasksService.updateTasks(task);
    }

    @Delete()
    deleteTasks(){
        return this.TasksService.deleteTasks();
    }

    @Patch()
    updateTasksStatus(){
        return this.TasksService.updateTasksStatus();
    }
}

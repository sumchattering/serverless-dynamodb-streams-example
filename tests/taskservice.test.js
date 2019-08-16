import TaskService from '../services/taskservice'

import AWS from "aws-sdk";
AWS.config.update({ region: 'eu-central-1' });

import dotenv from "dotenv"
dotenv.config({ path: ".env" });

test('test-createtask', async () => {
    let taskName = "Sample Task"
    const taskService = new TaskService();
    const result = await taskService.createNewTask(taskName)
    expect(result)
});

test('test-listtasks', async () => {
    const taskService = new TaskService();
    const result = await taskService.listTasks()
    expect(result)
});


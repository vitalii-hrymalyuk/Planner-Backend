import { Injectable } from '@nestjs/common';
import { PrismaClientOptions } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TaskService {

	constructor(private prisma: PrismaService) { }

	async getCompletedTasks(id: string) {
		return await this.prisma.task.count({
			where: {
				userId: id,
				isCompleted: true
			}
		})
	}

	async getTasksByDate(id: string, gte: string) {
		return await this.prisma.task.count({
			where: {
				userId: id,
				createdAt: {
					gte
				}
			}
		})
	}
}

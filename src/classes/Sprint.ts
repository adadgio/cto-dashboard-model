interface SprintConstructorType {
  id: number;
  boardId?: number;
  projectId?: string;
  name: string;

  startDate?: string,
  endDate?: string,
  completeDate?: string,
}

export default class Sprint {
  id!: number;
  boardId?: number;
  projectId?: string;
  name!: string;
  startDate?: string;
  endDate?: string;
  completeDate?: string;

  constructor(data: SprintConstructorType) {
    this.id = data.id;
    this.boardId = data.boardId;
    this.projectId = data.projectId;
    this.name = data.name;

    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.completeDate = data.completeDate;
  }
}

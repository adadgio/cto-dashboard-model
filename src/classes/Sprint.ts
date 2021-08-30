interface SprintConstructorType {
  id: number;
  boardId: number;
  name: string;
}

export default class Sprint {
  id!: number;
  boardId!: number;
  name!: string;

  constructor(data: SprintConstructorType) {
    this.id = data.id;
    this.boardId = data.boardId;
    this.name = data.name;
  }
}

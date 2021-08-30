export default class Sprint {
  id!: number;
  boardId!: number;
  name!: string;

  constructor(id: number, boardId: number, name: string) {
    this.id = id;
    this.boardId = boardId;
    this.name = name;
  }
}

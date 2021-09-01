interface IssueConstructorType {
  id: number;
  name: string;
  type: string;
  status: string;
}
export default class Issue {
  id!: number;
  boardId: number | null;
  name!: string;
  type: string;
  status: string;

  constructor(data: IssueConstructorType) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.status = data.status;
  }
}

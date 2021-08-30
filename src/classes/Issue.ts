interface IssueConstructorType {
  id: number;
  name: string;
  type: IssueType;
  status: IssueStatus;
}
export default class Issue {
  id!: number;
  boardId!: number;
  name!: string;
  type: IssueType;
  status: IssueStatus;

  constructor(data: IssueConstructorType) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.status = data.status;
  }
}

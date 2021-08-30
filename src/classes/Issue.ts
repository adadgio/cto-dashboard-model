export default class Issue {
    id!: number;
    boardId!: number;
    name!: string;
    type: IssueType
    status: IssueStatus

    constructor(id: number, name: string, type: IssueType, status: IssueStatus) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.status = status;
    }
  }
  
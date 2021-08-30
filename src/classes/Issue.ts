interface IssueConstructorType {
  id: number;
  name: string;
  type: "Bug" | "Feature";
  status: "Todo" | "Done";
}
export default class Issue {
  id!: number;
  boardId!: number;
  name!: string;
  type: "Bug" | "Feature";
  status: "Todo" | "Done";

  constructor(data: IssueConstructorType) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.status = data.status;
  }
}

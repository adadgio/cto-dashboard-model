interface IssueConstructorType {
  id: number;
  name: string;
  type: string;
  status: string;
  sprintId: number | null;
  allSprintIds: string[];
  projectId: string;

}
export default class Issue {
  id!: number;
  sprintId: number | null;
  name!: string;
  type: string;
  status: string;
  allSprintIds: string[];
  projectId: string;

  constructor(data: IssueConstructorType) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.status = data.status;

    this.sprintId = data.sprintId;
    this.allSprintIds = data.allSprintIds;
    this.projectId = data.projectId;
  }
}

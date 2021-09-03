interface ProjectConstructorType {
  id: string;
  name: string;
  nbBugsTodo: number;
  nbBugsDone: number;
  nbFeatureTodo: number;
  nbFeatureDone: number;
}

export default class Project {
  id!: string;
  name!: string;
  nbBugsTodo!: number;
  nbBugsDone!: number;
  nbFeatureTodo!: number;
  nbFeatureDone!: number;

  constructor(data: ProjectConstructorType) {
    this.id = data.id;
    this.name = data.name;
    this.nbBugsTodo = data.nbBugsTodo;
    this.nbBugsDone = data.nbBugsDone;
    this.nbFeatureTodo = data.nbFeatureTodo;
    this.nbFeatureDone = data.nbFeatureDone;
  }
}

interface ProjectConstructorType {
  name: string;
  nbBugsTodo: number;
  nbBugsDone: number;
  nbFeatureTodo: number;
  nbFeatureDone: number;
}

export default class Project {
  name!: string;
  nbBugsTodo!: number;
  nbBugsDone!: number;
  nbFeatureTodo!: number;
  nbFeatureDone!: number;

  constructor(data: ProjectConstructorType) {
    this.name = data.name;
    this.nbBugsTodo = data.nbBugsTodo;
    this.nbBugsDone = data.nbBugsDone;
    this.nbFeatureTodo = data.nbFeatureTodo;
    this.nbFeatureDone = data.nbFeatureDone;
  }
}

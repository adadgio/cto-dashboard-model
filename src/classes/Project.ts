export default class Project {
  name!: string;
  nbBugsTodo!: number;
  nbBugsDone!: number;
  nbFeatureTodo!: number;
  nbFeatureDone!: number;

  constructor(
    name: string,
    nbBugsTodo: number,
    nbBugsDone: number,
    nbFeatureTodo: number,
    nbFeatureDone: number
  ) {
    this.name = name;
    this.nbBugsTodo = nbBugsTodo;
    this.nbBugsDone = nbBugsDone;
    this.nbFeatureTodo = nbFeatureTodo;
    this.nbFeatureDone = nbFeatureDone;
  }
}


class WorkItem {
  showDetails() {
    throw new Error("Método showDetails() deve ser implementado.");
  }
}


class Task extends WorkItem {
  constructor(name) {
    super();
    this.name = name;
  }

  showDetails(indent = 0) {
    console.log(`${" ".repeat(indent)}Tarefa: ${this.name}`);
  }
}


class Project extends WorkItem {
  constructor(name) {
    super();
    this.name = name;
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  remove(item) {
    this.items = this.items.filter((i) => i !== item);
  }

  showDetails(indent = 0) {
    console.log(`${" ".repeat(indent)}Projeto: ${this.name}`);
    this.items.forEach((item) => item.showDetails(indent + 2));
  }
}


const t1 = new Task("Escrever documentação");
const t2 = new Task("Fazer testes");
const t3 = new Task("Publicar release");

const subProject = new Project("Preparação");
subProject.add(t1);
subProject.add(t2);

const mainProject = new Project("Lançamento v1.0");
mainProject.add(subProject);
mainProject.add(t3);

mainProject.showDetails();

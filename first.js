class parson {
  constructor(name) {
    this.species = "hemo sapiens";
    this.name = name;
  }

  eat() {
    console.log("eat");
  }
}

class Enginner extends parson {
    constructor(name) {
      super(name);
    }
  work() {
    super.eat();
    console.log("solve problom, buld something");
  }
}

let engObj = new Enginner("Ankit");

const stratagems = require ("../data/data")

class StratagemService {
 static stratagems = stratagems;

  static getAll() {
    return this.stratagems.map(stratagem => ({...stratagem, code:stratagem.code.split('')}));
  }

  static getOneById(id) {
    const stratagem = this.stratagems.find((stratagem) => stratagem.id === id)
    if (!stratagem){
      return "no stratagem"
    }
    return ({...stratagem, code:stratagem.code.split('')});
  }
  static getOneByName(name)  {
    const stratagem = this.stratagems.find(stratagem=>stratagem.name.toLowerCase()===name.toLowerCase())

    return ({...stratagem, code:stratagem.code.split('')});
  }
  static getOneRandom() {
    const stratagem = (this.stratagems[Math.floor(Math.random() * this.stratagems.length)]);
    return ({...stratagem, code:stratagem.code.split('')})
  }
  static getAllNames() {
    return this.stratagems.map((stratagem) => stratagem.name);
  }
}

module.exports = StratagemService

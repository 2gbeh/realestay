const { v4: uuidv4 } = require("uuid");

const strCompare = (i, j) => String(i) === String(j);

class RootResolver {
  constructor(collection = []) {
    this.collection = collection;
  }
  //
  getAll() {
    return this.collection;
  }
  getById(id) {
    const obj = this.collection.find((row) => strCompare(row.id, id));
    return obj ?? {};
  }
  //
  add(data) {
    const obj = { id: uuidv4(), ...data };
    this.collection.push(obj);
    return obj;
  }
  edit(data, id) {
    const i = this.collection.findIndex((row) => strCompare(row.id, id));
    if (i > -1) {
      const obj = { ...this.collection[i], ...data };
      this.collection[i] = obj;
      return obj;
    }
    return {};
  }
  remove(id) {
    let obj = {};
    const arr = this.collection.filter((row) => {
      if (strCompare(row.id, id)) {
        obj = row;
        return false;
      } else {
        return true;
      }
    });
    this.collection = arr;
    return obj;
  }
}

module.exports = RootResolver;

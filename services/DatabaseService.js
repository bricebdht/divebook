import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("divebook.db");

class DatabaseService {
  constructor() {
    this.createTables();
  }

  createTables() {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS dives (id INTEGER PRIMARY KEY AUTOINCREMENT, depth INTEGER, duration INTEGER, temperature INTEGER, weight REAL, tank_volume INTEGER, tank_material TEXT)"
      );
    });
  }

  addDive(depth, duration, temperature, weight, tank_volume, tank_material) {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO dives (depth, duration, temperature, weight, tank_volume, tank_material) values (?, ?, ?, ?, ?, ?)",
        [depth, duration, temperature, weight, tank_volume, tank_material],
        (txObj, resultSet) => {
          console.log("Dive added", txObj, resultSet);
        },
        (txObj, error) => {
          console.log("Error", error);
        }
      );
    });
  }

  getDives() {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM dives",
        null,
        (txObj, { rows: { _array } }) => {
          console.log("table", { data: _array });
          console.log("length", _array.length);
        },
        (txObj, error) => console.log("Error ", error)
      );
    });
  }
}

export default new DatabaseService();

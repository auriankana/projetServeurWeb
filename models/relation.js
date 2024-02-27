//Apporter tous les modeles
import Etudiant from "./Etudiant.js";
import Department from "./Department.js";

//Definition des relations
//Un departement a plusieurs etudiants
Department.hasMany(Etudiant)

//Un etudiant a un et un seul departement
Etudiant.belongsTo(Department)

// await Department.sync()
// await Etudiant.sync()

export {Etudiant, Department}
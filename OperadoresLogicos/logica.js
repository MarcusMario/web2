//Variables
let resultadoAND = true && false ;
let resultadoOR = true || false;
let resultadoNOT = !true;


//Consola
console.log("AND (true && false) = ", resultadoAND);
console.log("OR (true || false) = ", resultadoOR);
console.log("NOT (!true) = ", resultadoNOT);

// Validación
if (typeof resultadoAND === "boolean" && typeof resultadoOR === "boolean" && typeof resultadoNOT === "boolean") {
    console.log("Operaciones lógicas ejecutadas correctamente.");
} else {
    console.error("Error: Se esperaban otros valores.");
}
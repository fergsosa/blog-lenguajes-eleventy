import { execSync } from "child_process";
import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function run(cmd, options = {}) {
  execSync(cmd, { stdio: "inherit", ...options });
}

function getGitChanges() {
  return execSync("git status --porcelain").toString().trim();
}

rl.question("Mensaje del commit: ", (mensaje) => {
  try {
    console.log("\n1️⃣  npm run clean");
    run("npm run clean");

    console.log("\n2️⃣  npm run build");
    run("npm run build");

    const cambios = getGitChanges();

    if (!cambios) {
      console.log(
        "\n⚠️ BuilD: El build no generó cambios. Nada que commitear."
      );
      process.exit(0);
    }

    console.log("\n3️⃣  git add .");
    run("git add .");

    console.log("\n4️⃣  git commit -m MENSAJE");
    run(`git commit -m "${mensaje}"`);

    console.log("\n5️⃣  git push");
    run("git push");

    console.log(`\n
✅ Despliegue completado con éxito!
----------- --------------------------------------
✓ CLEAN:   Archivos de construcción eliminados.
✓ BUILD:   Proyecto compilado correctamente.
✓ ADD:     Cambios añadidos a staging.
✓ COMMIT:  Commit realizado.
✓ PUSH:    Cambios subidos al repositorio remoto.
----------- --------------------------------------
    `);
  } catch (error) {
    console.error("\n❌ Error:", error.message);
  } finally {
    rl.close();
  }
});

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
    console.log("\n🧹 Limpiando...");
    run("npm run clean");

    console.log("\n🏗️ Compilando...");
    run("npm run build");

    const cambios = getGitChanges();

    if (!cambios) {
      console.log("\n⚠️ El build no generó cambios. Nada que commitear.");
      process.exit(0);
    }

    console.log("\n📦 Añadiendo cambios...");
    run("git add .");

    console.log("\n📝 Haciendo commit...");
    run(`git commit -m "${mensaje}"`);

    console.log("\n🚀 Subiendo cambios...");
    run("git push");

    console.log("\n✅ Todo listo!");
  } catch (error) {
    console.error("\n❌ Error:", error.message);
  } finally {
    rl.close();
  }
});

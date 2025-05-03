const fs = require("fs");

const versionsPath = "./versions.json";
const packagePath = "./package.json";

function updatePackageVersion() {
  try {
    const versionsData = JSON.parse(fs.readFileSync(versionsPath, "utf8"));
    const packageData = JSON.parse(fs.readFileSync(packagePath, "utf8"));
    const latestVersion = versionsData.latest;
    packageData.version = latestVersion;
    fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 2), "utf8");

    console.log(`Версия успешно обновлена до ${latestVersion}`);
  } catch (error) {
    console.error("Ошибка при обновлении версии:", error);
  }
}

updatePackageVersion();

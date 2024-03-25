// GoogleSheetToJson.js
import { createRequire } from "module"
import fs from "fs-extra"
import { unflatten } from "flat"
import { extractSheets } from "spreadsheet-to-json"
import path from "path"
const __dirname = path.resolve()
import credentials from "../../google/nuxt3-i18n-418303-e8ea6bd17d98.js"
extractSheets(
  {
    spreadsheetKey: "1xy4Jp13_nEbxUM6wqeGh9s5NVddjBsA1q48nwUg97xk", // google sheet 的 key
    credentials: credentials,
    sheetsToExtract: ["index", "about"],
  },
  (err, data) => {
    if (err) throw err
    const read = [...data["index"], ...data["about"]]
    const result = {}
    const files = []

    for (const key in read[0]) {
      if (key !== "key") {
        files.push(key)
        result[key] = {}
      }
    }
    read.forEach((el) => {
      for (const file of files) {
        result[file][el["key"]] = el[file] ? el[file] : ""
      }
    })
    for (const fileName of files) {
      fs.ensureDirSync(
        path.dirname(path.resolve(__dirname, "./language", `${fileName}.json`))
      )
      fs.writeJSONSync(
        path.resolve(__dirname, "./language", `${fileName}.json`),
        unflatten(result[fileName], { object: true }),
        { spaces: 2 }
      )
    }
  }
)

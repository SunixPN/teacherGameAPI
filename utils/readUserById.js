import fs from "fs"
import { PATH } from "../constants.js"

export const readUserById = (id, callback) => {
    fs.readFile(PATH, { encoding: "utf-8", flag: "r" }, (err, data) => {
        if (err) {
            callback(err, null)
        }

        else {
            const parseData = JSON.parse(data)
            const user = parseData.find(parse => parse.id === id)

            callback(null, user)
        }
    })
}
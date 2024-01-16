import fs from "fs"
import { PATH } from "../constants.js"

export const readUserById = (id, callback, object = null) => {
    fs.readFile(PATH, { encoding: "utf-8", flag: "r" }, (err, data) => {
        if (err) {
            callback(err, null)
        }

        else {
            const parseData = JSON.parse(data).users
            const user = parseData.find(parse => parse.id === id)

            if (object) {
                callback(null, user[object])
            }

            else {
                callback(null, user)
            }
        }
    })
}
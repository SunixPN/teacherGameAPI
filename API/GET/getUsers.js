import fs from "fs"
import { PATH } from "../../constants.js"

export const getUsers = (req, res) => {
    fs.readFile(PATH, { encoding: "utf-8", flag: "r" }, (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).send("Internal server error")
        }
        else {
            res.send(data)
        }
    })
}
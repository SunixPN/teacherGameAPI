import fs from "fs/promises"
import { PATH } from "../../constants.js"

export const setUser = async (req, res) => {
    try {
        const currentData = await fs.readFile(PATH, { encoding: "utf-8", flag: "r" })
        const parseData = JSON.parse(currentData)

        parseData.users.push(req.body)

        await fs.writeFile(PATH, JSON.stringify(parseData), "utf-8")

        res.json({
            success: true
        })
    }

    catch (err) {
        console.log(err)
        res.status(500).send("Internal server error")
    }
}
import { readUserById } from "../../utils/readUserById.js"

export const getUserById = (req, res) => {
    const id = req.params.id
    readUserById(Number(id), (err, data) => {
        if (err) {
            console.log(err)
            res.status(500).send("Internal server Error")
        }

        else if (!data) {
            res.status(404).send("Not Found")
        }

        else {
            res.send(data)
        }
    })
}

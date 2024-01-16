import express, { json } from "express"
import { getUsers } from "./API/GET/getUsers.js"
import { getUserById } from "./API/GET/getUserById.js"
import { PORT } from "./constants.js"
import { setUser } from "./API/POST/setUser.js"

const app = express()
app.use(express.json())

//GET
app.get("/api/users", getUsers)
app.get("/api/users/:id", getUserById)

//POST
app.post("/api/users", setUser)



app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`Server start at port: ${PORT}`, `show in browser: localhost:${PORT}/api/users`)
})


const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put('https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            {
                headers: {
                    "private-key": 'df8f0871-8057-4ab8-869c-61ec10518651'
                }
            }
        )
        return res.status(r.status).json(r.data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
});

app.listen(3001);
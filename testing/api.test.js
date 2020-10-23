const Axios = require("axios");

test('api should list materials', async () => {
    let response = await Axios.get("http://localhost:8080/material");

    expect(response.status).toBe(200);
});
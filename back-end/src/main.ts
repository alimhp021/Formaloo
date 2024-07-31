import { makeApp } from "./startup";

export const app = makeApp();
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
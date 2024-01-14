
import connectedToDb from './Config/dbConnection.js';
import app from './app.js'
import cloudnary from 'cloudinary'

const PORT = process.env.PORT || 3000;

cloudnary.v2.config({
    api_key: process.env.CLOUD_NAME,
    cloud_api_key: process.env.CLOUD_API_KEY,
    cloud_api_secret: process.env.CLOUD_API_SECRET
})

app.get('/jokes', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    connectedToDb();
    console.log(`The server is runnig at http://localhost:${PORT}`)
})
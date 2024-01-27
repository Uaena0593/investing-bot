import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { OAuth2Client} from 'google-auth-library'
dotenv.config()
const router = express.Router();
const app = express();
app.use(express.json());

router.post('/', async function(req,res,next){
    res.header('Access-Control-Allow-Origin','http://localhost/5173');
    res.header('Referer-Policy', 'no-referrer-when-downgrade');

    const redirectUrl = 'http://127.0.0.1:3000/oauth';

    const oAuth2Client = new OAuth2Client(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        redirectUrl
    )

    const authorizeUrl = oAuth2Client.generateAuthUrl({
        //put offline for testing, only have as offline during production if u want to force the token to be created
        access_type:'offline',
        scope:'http://www.googleapis.com/auth/userinfo.profile openid',
        prompt:'consent'
    })
    res.json({url:authorizeUrl})
});
module.exports = router;
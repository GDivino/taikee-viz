import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get } from 'firebase/database'
import dotenv from 'dotenv'

dotenv.config()

const app = initializeApp({
    apiKey: process.env.GOOGLE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
})

const db = getDatabase(app)
const db_ref = ref(db)

async function getData() {
    const snapshot = await get(db_ref)
    return snapshot.val()
}

export default getData


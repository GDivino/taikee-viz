declare var process: NodeJS.Process;
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get } from 'firebase/database'

const app = initializeApp({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
})

const db = getDatabase(app)
const db_ref = ref(db)

async function getData() {
    const snapshot = await get(db_ref)
    return snapshot.val()
}

export default getData


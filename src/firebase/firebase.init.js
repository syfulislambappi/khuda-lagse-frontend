import { initializeApp } from 'firebase/app'
import firebaseConfig from './firebase.config'

const firebaseStart = () => {
    return initializeApp(firebaseConfig)
}

export default firebaseStart
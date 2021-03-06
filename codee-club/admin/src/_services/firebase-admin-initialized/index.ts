import admin from 'firebase-admin'
import fs from 'fs'
import path from 'path'

import { MODE } from '~/modes'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const pathToRoot = '../../../../'

if (MODE === 'emu') {
  // Read emulator config
  interface FirebaseJson {
    emulators: {
      auth: { port: number }
      firestore: { port: number }
      functions: { port: number }
      storage: { port: number }
    }
  }

  const firebaseJsonPath = path.join(__dirname, pathToRoot, './firebase.json')
  const firebaseJson = JSON.parse(fs.readFileSync(firebaseJsonPath, { encoding: 'utf8' })) as FirebaseJson

  process.env.FIREBASE_AUTH_EMULATOR_HOST = `localhost:${firebaseJson.emulators.auth.port}`
  process.env.FIRESTORE_EMULATOR_HOST = `localhost:${firebaseJson.emulators.firestore.port}`
  process.env.FIREBASE_STORAGE_EMULATOR_HOST = `localhost:${firebaseJson.emulators.storage.port}`

  // Initialize
  const emuProjectId = 'codee-club-emu'
  admin.initializeApp({ projectId: emuProjectId })
  console.info(`Using project: ${emuProjectId}\n`)
} else {
  // Read service-account
  interface ServiceAccountJson {
    project_id: string // eslint-disable-line camelcase -- not our type
  }

  // URGENT: Use try/catch (see config-functions-set for example)
  const configPath = path.join(__dirname, pathToRoot, `configs/service-account.${MODE}.json`)
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const serviceAccount = require(configPath) as ServiceAccountJson

  // Initialize
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount as admin.ServiceAccount) })
  console.info(`Using project: ${serviceAccount.project_id}\n`)
}

export default admin
export const auth = admin.auth()
export const db = admin.firestore()
export const storage = admin.storage()
export const FieldValue = admin.firestore.FieldValue
export const Timestamp = admin.firestore.Timestamp

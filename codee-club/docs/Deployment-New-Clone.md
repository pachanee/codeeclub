[Home](../README.md) | [Emulators](Emulators.md) | [Seeds & Migrations](Seeds-Migrations.md) | **[Deployment](Deployment.md)** | [Test Runners](Runners.md) | [Known Issues](Known-Issues.md)

# Deployment: New Git Clone

## Firebase Configuration

Open the [Codee project in Firebase Console](https://console.firebase.google.com) and navigate to "Project settings". Copy the config at the bottom (Firebase SDK snippet). Paste it into `firebase-config.[alias].json` in `configs`:

```jsonc
{
  "apiKey": "[apiKey]",
  "authDomain": "[projectId].firebaseapp.com",
  "databaseURL": "https://[projectId].firebaseio.com",
  "projectId": "[projectId]"
  // ... etc ...
}
```

On the "Service accounts" page, click "Generate new private key". Save the file as `service-account.[alias].json` in `configs`.

```jsonc
{
  "type": "service_account",
  "project_id": "[projectId]",
  "private_key_id": "[privateKeyId]",
  "private_key": "-----BEGIN PRIVATE KEY----- etc"
  // ... etc ...
}
```

In `admin`, import firebase config into hosting .env with:

```
yarn serve "src/config/hosting-import.ts"
```

## Authorize GitHub Packages

[Create a Github "Personal Access Token" (PAT)](https://github.com/settings/tokens) with access to `repo` and `write:packages`

From the shell, login to npm (using your GitHub username, and the PAT as the password):

```
npm login --registry=https://npm.pkg.github.com --scope=@codee-club

User: <github username>
Password: <github PAT>
Email: (this IS public) <github noreply email>
```

In the `functions` folder, copy .npmrc.example to .npmrc, and paste your Github PAT.

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
@codee-club:registry=https://npm.pkg.github.com/codee-club
```

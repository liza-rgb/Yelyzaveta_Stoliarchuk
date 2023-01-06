# Dropbox API Spec - Yelyzaveta Stoliarchuk KI-01

Test scenario:

1. Check if file uploads successfully.
2. Check if api can get a file metadata.
3. Delete the file.

## Available Scripts

In the project directory, you can run:

### `npm install`

Downloads all necessary npm modules and packages.

### `npm test`

Launches the jasmine spec runner.

## ACCESS_TOKEN

1. In order to run test go to https://www.dropbox.com/developers/. Sign in for a free account.
2. Create new app and change it permissions - allow files.metadata.write,files.content.write and files.content.read.
3. Then go to your app settings and generate token.
4. Then paste it into ACCESS_TOKEN and run test.

# express_videos_api

This project was created to practice some backend basics by developing some video APIs.
With an array as a DB

Here are the commands that were used to install necessary software

- yarn init --yes
- yarn add express dotenv cors
- yarn add nodemon --dev
- yarn add nodemon typescript ts-node @types/node @types/express @types/cors jest ts-jest @types/jest supertest @types/supertest --dev
- yarn tsc --init

This command is used to monitor errors while compiling typescript into js
- yarn tsc -w

And this one is for monitoring node execution in DevTools with the ability to put breakpoints and debug
- yarn nodemon --inspect dist/index.js
  This one allows monitoring TS files
- nodemon --exec "node --inspect --require ts-node/register src/index.ts" 

Tests
- yarn add jest ts-jest @types/jest supertest @types/supertest
- yarn ts-jest config:init
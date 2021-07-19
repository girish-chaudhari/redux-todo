# redux-todo
Here is the link you can see on Desktop it's not responsive..👇👇👇👇

https://girish-chaudhari.github.io/redux-todo/


# STEPS
 1 ✏️ git init
 2 ✏️ git add .
 3 ✏️ git commit -m "This project was created for learning purpose"
 4 ✏️ Make repository on GitHub

 5✏️ git remote add origin htttps://girish-chaudhari.github.io/redux-todo
 6 ✏️ git push -u origin master
 7 npm install --save gh-pages 

👇👇👇👇👇
 8 add homepage,
  after that predeploy, and deploy

{
  "name": "todo",
  "version": "0.1.0",
  "private": true,
  "homepage": "http://girish-chaudhari.github.io/redux-todo",
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.4",
    "react-scripts": "4.0.3",
    "redux": "^4.1.0",
    "web-vitals": "^1.1.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy":"npm run build",
    "deploy":"gh-pages -d build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "gh-pages": "^3.2.3"
  }
}


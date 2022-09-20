# Hi! Welcome to the trial project!

## Goal

Set up a simple to-do list using SCSS, React and Firebase Firestore.

## Design

The design you need to copy is made in Figma. [Here is the link](https://www.figma.com/file/xNg3xuuIXCcL2twwsrbob2/Quickly-Hire%3A-Trial-Project?node-id=1%3A5). It would be much more convenient for you to have a Figma account as it'll allow you to see the basic attributes of design components.

## Helpers

This repo is a simple foundation for the trial project:

-   React structure is in place;
-   Firebase configurations are implemented in `src\firebase.config.js` and imported into the app. You'll need to change API keys there though. You can import global Firestore variable by `import { db } from '../firebase.config';` within a module;
-   `index.js` and `App.js` got all required components imported;
-   There are also some simple SCSS helpers. Check `src\scss\styles.scss` file and `src\scss\modules` folder.

Ideally, you need to work only with `components` and `scss` folders but you can be creative if you want :)

## Firebase documentations

That's in case you aren't familiar with Firebase. You should already have an access to a Firebase application (check your email for pending invitation). The only thing you need to manage there is **Firestore Database** and **Data** tab within it.

![alt text](https://github.com/GoWP/trial-project/blob/master/github/FirebaseFirestore.JPG?raw=true)

-   Data structure in Firestore: [Link](https://firebase.google.com/docs/firestore/data-model)
-   How to add documents to Firestore: [Link](https://firebase.google.com/docs/firestore/manage-data/add-data?hl=en&authuser=0#add_a_document)
-   How to fetch real-time data of all documents from one specific collection: [Link](https://firebase.google.com/docs/firestore/query-data/listen?hl=en&authuser=0#listen_to_multiple_documents_in_a_collection)
-   How to update a document: [Link](https://firebase.google.com/docs/firestore/manage-data/add-data?hl=en&authuser=0#update-data)
-   And if you want to go deeper, then you can go through the whole Firebase (Cloud) Firestore documentation, though it's not required for the trial project: [Link](https://firebase.google.com/docs/firestore)

## Steps

1. Pull the git repo to your local computer;
2. Install npm modules;
3. Go to **Firebase Console** and set up an app first:
    1. Click on the "Web" icon on the main Firebase dashboard page;
       ![alt text](https://github.com/GoWP/trial-project/blob/master/github/FirebaseCreateApp1.jpg?raw=true)
    2. Give an app any name and click the **Register app** button;
       ![alt text](https://github.com/GoWP/trial-project/blob/master/github/FirebaseCreateApp2.jpg?raw=true)
    3. From **Add Firebase SDK** step grab `firebaseConfig` variable and replace with it the one you have in `src\firebase.config.js` file. Then click **Continue to the console**.
       ![alt text](https://github.com/GoWP/trial-project/blob/master/github/FirebaseCreateApp3.jpg?raw=true)
4. Set up **Firestore Database**:
    1. Click **Build** -> **Firestore Database** to open the Cloud Firestore dashboard. There click **Create database** button;
       ![alt text](https://github.com/GoWP/trial-project/blob/master/github/FirebaseFirestore1.jpg?raw=true)
    2. Pick **Start in Test mode** and click **Next**;
       ![alt text](https://github.com/GoWP/trial-project/blob/master/github/FirebaseFirestore2.jpg?raw=true)
    3. And then on the last step just click **Enable**. That's it. The Firestore is ready. You can create a new collection manually in the Firebase dashboard or from your code right away (use the Firebase documentation links above).
5. Build the layout using prebuild components `src\components\Header.jsx`, `src\components\List.jsx`, `src\components\Input.jsx` and scss files in `src\scss` folder. You can add additional JSX/JS components or SCSS/CSS modules if you want;
6. In `Input.jsx` create `addItem` function that will add new document in `items` collection;
7. In `List.jsx` use `useEffect` to fetch real-time documents data and display results sorted by time it was created (latest first);
8. Implement the option to mark a task item as completed and update its status in Firestore. Ideally, push all completed tasks to the end of the list. And do the opposite for incompleted ones;
9. Set up a new repo on your Github account (or use any other hosting services to share your code), push your code there and send a link back to us.
# trial-project

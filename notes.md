# Agenda
* Backend remains same but frontend can be ios android desktop


<!-- https://vitejs.dev/guide/ -->
* setup react app using vite
  "npm create vite@latest"
     react
       javascript
         npm i
 - After that go to file and run - "npm i"
 - Then run your app using "npm run dev" 

    Authenication : Firebase auth
    Database : Firestore
    Store files/ media : storage
    Hosting : hosting

# Authentication : login and signup using firebase
    * go and enable the service
    * enabled email and password
    * Login is done

# Deploying whole application into firebase
   * npm install -g firebase-tools
   * npm run build (in create-react-app "build" folder will bec reated where as in vit "dist")
   * firebase login
   * firebase init
      - What do you want to use as your public directory? build
      - ? Configure as a single-page app (rewrite all urls to /index.html)? No
      - ? Set up automatic builds and deploys with GitHub? No
      - +  Wrote build/404.html
      - ? File build/index.html already exists. Overwrite? No
   * firebase deploy
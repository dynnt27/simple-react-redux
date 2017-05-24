My Project
---
 
Welcome to a simple react-redux app with webpack, babel, npm, and express.
Feed your pet with fish, beef, chicken. Check the state using redux-devtools chrome.

Notes:
---

mapDispatchToProps(dispatch) => This is for your **FUNCTIONS** that DISPATCHES and FIRES an ACTION for it to trigger a REDUCER!
mapStateToProps(state) => This is to DECLARE what STATES from the STORE you want your component to ACCESS!
connect([mapStateToProps], [mapStateToProps])([component]) => This is to CONNECT your component to the STORE! (in order to access the state)
 
 
Usage
---
 
Start the development server with this command:
 
```
npm start
```
 
 
 
Setup
---
 
```
npm install
```

 
 
 
Compile
---
 
```
npm run compile
```
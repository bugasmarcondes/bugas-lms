## 1
- npx create-react-app 

## 2 (react)
- importing Materialize
    - import fonts in index.html
    - import materialize.css in index.js
- create /src/components/ structure
- create navigation between pages
    - yarn add react-router-dom
    - creating /src/components/common/Navbar
        - import materialize.js
        - remove addEventListener, because we already check if it loads in useEffect hook
    - create 404 route

## 3 (redux)

Steps for reading courses from the store:

1. /src/components/courses/CoursesPage.js
2. /src/redux/actions
    - /src/redux/actions/actionTypes.js [WILL BE USED WITH ASYNC LOGIC]
    - /src/redux/actions/courseActions.js [WILL BE USED WITH ASYNC LOGIC]
3. /src/redux/reducers
    - /src/redux/reducers/rootReducer.js
    - /src/redux/reducers/initialState.js
    - /src/redux/reducers/courseReducer.js
4. /src/redux/store
    - yarn add redux
    - /src/redux/store/configureStore.js
    - /src/redux/store/configureStore.prod.js
    - /src/redux/store/configureStore.dev.js
5. instantiate the store
    - yarn add react-redux
    - /src/index.js
6. connect component to redux
    - /src/components/courses/CoursesPage.js

Steps for writing into the store:

1. Creating route, link and component to deal with course management
    - /src/components/App.js
    - /src/components/courses/CoursesPage.js
2. Creating component for course management (add and edit)
    - /src/components/courses/CoursesManagement.js
3. Adding action type and action creator
    - /src/redux/actions/actionTypes.js
    - /src/redux/actions/courseActions.js
4. Dealing with reducer to return new state
    - /src/redux/reducers/courseReducer.js
5. Connect component to redux
    - /src/components/courses/CoursesManagement.js
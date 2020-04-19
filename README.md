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

Steps for deleting from the store:

1. Insert button to dispatch delete action
    - /src/components/courses/CoursesPage.js
2. Adding action type and action creator
    - /src/redux/actions/actionTypes.js
    - /src/redux/actions/courseActions.js
3. Dealing with reducer to return new state
    - /src/redux/reducers/courseReducer.js
4. Connect component to redux
    - /src/components/courses/CoursesPage.js

Steps for editing courses from the store:

1. Creating route and link to management route (edit)
    - /src/components/courses/CoursesPage.js
    - /src/components/App.js
2. /src/components/courses/CoursesManagement.js
    - implement validation to check action type (add or edit) when loading course
    - alter submit to check action type (add or edit) when submiting a course
3. Installing thunk, to allow us return a function in action creators
    - yarn add redux-thunk
4. Aplying thunk middleware into the stores
    - /src/redux/store/configureStore.dev.js
    - /src/redux/store/configureStore.prod.js
5. Adding action type and action creator
    - /src/redux/actions/actionTypes.js
    - /src/redux/actions/courseActions.js
6. Dealing with reducer to return new state
    - /src/redux/reducers/courseReducer.js
7. If not done already, connect component to redux
    - /src/components/courses/CoursesManagement.js

## 4 (mock api)

1. Copy /tools to /tools/mock
    - yarn add -D json-server
2. Edit scripts into package.json
    - prestart:api
    - start:api
        - to test, run yarn run start:api
    - rename start to start:default
    - create a new start
        - yarn add -D npm-run-all
3. Copy /api to /tools/api
    - change baseUrl inside files
4. yarn start

## 5 (prop-types)

- yarn add prop-types
- Adding runtime type checking for React props
    - /src/components/courses/CoursesPage.js
        <pre><code>CoursesPage.propTypes = {
            courses: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                })
            ),
            actions: PropTypes.object.isRequired,
        };</code></pre>
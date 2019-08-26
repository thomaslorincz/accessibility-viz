# Accessibility Visualization
## Website
https://a11y-viz.herokuapp.com
## Development
### Install
```
npm install
```
### Run
#### Development Mode
(The code is not minified and has access to a source map and hot module replacement)
```
npm run dev
```
#### Production Mode
(The code is minified and does not have access to a source map or hot module replacement)
```
npm run prod
```
### Deploy
After finishing work on a feature:
```
npm run build-prod
```
Then commit the changes made to the dist folder:
```
git commit -m "Build prod"
```
Once the changes are pushed to the master branch, they will be automatically deployed to Heroku.

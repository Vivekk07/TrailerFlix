## Built With
The project is built using the following software, you'll need them installed in your workspace to run properly.

- [Node](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [Yarn](https://yarnpkg.com/)

## Setting Up Development Workspace

Start by cloning your fork of the TrailerFlix repository and connecting the TrailerFlix upstream repository:

```

git clone git@github.com:YOURUSERNAME/TrailerFlix.git
cd TrailerFlix
git remote add -f upstream git@github.com:Vivekk07/TrailerFlix.git

```

## Manual Setup

- Install the following dependencies on your system
  - [Node](https://nodejs.org/en/)
  - [ReactJS](https://reactjs.org/)
  - [Yarn](https://yarnpkg.com/)   
- `cd` into the folder
- Run `yarn` to install dependencies
- Once the dependencies are installed you can launch development server via `yarn start`

## Screenshot

![image](https://user-images.githubusercontent.com/44539761/134027684-905c3d59-ff4a-46f1-b2f1-c958cd3b3bd6.png)

## About the project

- Netflix like web application that plays trailers of movies/tvshows
- Built the front-end theme similar to that of netflix using React JS
- Shows are dynamic, fetched using third-party API (tmdb.org)
- Used react-youtube package to fetch trailers
- Created CI/CD pipleline using github actions and deployed on github pages

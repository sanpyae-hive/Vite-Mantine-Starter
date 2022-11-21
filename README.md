# Vite React Ts


## Quickstart

```sh
# Install node modules
$ npm install

# Copy .env.example to .env, and add environment variables as needed
$ cp .env.example .env

# Run the app
$ npm run dev
```

## Test

```sh
# Unit tests
$ npm run test

# Unit tests tests with ui
$ npm run test:ui

# Test coverage
$ npm run coverage
```

## Build & deploy

```sh
# Builds the app for production to the build folder.
$ npm run build

# previewing the build locally
$ npm run preview
```

Please check [vite deploy doc](https://vitejs.dev/guide/static-deploy.html#deploying-a-static-site)


## Structure
```
App
└── src
    ├── assets
    │   ├── css
    │   ├── images    
    │   ├── locales           (i18n locales)    
    │   └── other             (other resource files like fonts, video, audio or etc)
    ├── common                (common files)
    │   ├── store             (redux store)     
    │   ├── i18n              (react 18n next config)
    │   ├── config            (config) 
    │   └── other
    ├── config                (config files)
    ├── components            (common components)
    ├── hook                  (custom hooks)
    ├── layout
    │   ├── dashboard         (dashboard layout)
    │   └── other     
    ├── pages
    │   ├── home      
    │   ├── crud     
    │   │   ├── components    (child components)
    │   │   │   └── comp   
    │   │   ├── List.tsx
    │   │   ├── Detail.tsx
    │   │   └── Form.tsx
    │   └── settings 
    ├── services  
    └── router
```
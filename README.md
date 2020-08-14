```
git clone git@github.com:cb-rollout/rollout-scripts.git  and run ./curl-example.sh to initiate first experiments to rolloutdashboard

npm i rox-browser --save
npm install
npm run start
open http://0.0.0.0:8080
```

* `soundredux/client/src/constants/Flags.js` and `soundredux/client/src/components/Nav.jsx` for how feature flags are implemented
* your feature flag app-key ist required in `soundredux/client/src/constants/Flags.js` 
* in `package.json` to know how  the SDK is configurd as a dependency `"rox-browser": "^4.9.5" `



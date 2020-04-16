// import rox-browser from npm

import Rox from 'rox-browser'
import UserRepo from  '../store/UserRepo'

// define an exported object that contains the flags
const Flags = {
  followingView: new Rox.Flag(),
  history: new Rox.Flag(),
  shuffle: new Rox.Flag(),
  repeat: new Rox.Flag(),
  jsonNba: new Rox.Variant('j1', ['j1', 'j2', 'j3']),
  startFollowingWord: new Rox.Variant('Follow', ['Follow', 'Start Following', 'Watch Him'])
};

//  Register the flags object under the namespace "default"
Rox.register('default', Flags);


 const options = {
    
    selfManaged: {
      serverURL: 'http://146.148.30.12:8557',
      analyticsURL: 'http://146.148.30.12:8558'
    }
  }


  // Setup the Rollout key
  Rox.setup('5e98447688b6ed3d83ded7ab', options);

//Rox.setup('5990c4a1eae09726fa0d6040', { 
//    devModeSecret: "pFymEevjDCbXWoEZPDqrGT8v" 
//});

Rox.setCustomStringProperty('plan', () => UserRepo.getUser().plan);
Rox.setCustomStringProperty('email', () => UserRepo.getUser().email);
Rox.setCustomNumberProperty('playlist_count', () => UserRepo.getUser().playlistCount);
Rox.setCustomStringProperty('soundcloud_id', () => UserRepo.getUser().id);


//;
export default Flags;

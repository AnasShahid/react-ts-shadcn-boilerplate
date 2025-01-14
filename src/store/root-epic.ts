import { combineEpics } from 'redux-observable';

// Import your module epics here
// import { authEpics } from '@/modules/auth/store/epics';

export const rootEpic =
  combineEpics();
  // Add your epics here
  // ...authEpics,

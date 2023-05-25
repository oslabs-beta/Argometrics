    //original cookiecontroller

import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const cookieController = {
  sessionCookie: (req: Request, res: Response, next: NextFunction) => {
    if(res.locals.userInfo) {
      // console.log(res.locals.userInfo)
      res.cookie('session', res.locals.userInfo._id, {
        httpOnly: true
      });
      return next();
    }
    const user: any = req.user
    if (user.googleId) {
      res.cookie('googleId', user.googleId, { httpOnly: true })
      return next()
    }
  }
}

module.exports = cookieController;

//----------------------------------------------------------------------------------------------------------

// import { ipcMain, session, IpcMainInvokeEvent } from 'electron';

// interface User {
//   googleId?: string;
// }

// interface UserInfo {
//   _id?: string;
// }

// ipcMain.handle('setCookies', async (event: IpcMainInvokeEvent, userInfo: UserInfo, user: User) => {
//   const defaultSession = session.defaultSession;

//   if (userInfo && userInfo._id) {
//     const details = {
//       url: 'http://localhost',
//       name: 'session',
//       value: userInfo._id,
//       httpOnly: true
//     }

//     await defaultSession.cookies.set(details);
//   }

//   if (user && user.googleId) {
//     const details = {
//       url: 'http://localhost',
//       name: 'googleId',
//       value: user.googleId,
//       httpOnly: true
//     }

//     await defaultSession.cookies.set(details);
//   }
// });

// import { ipcRenderer } from 'electron';

// ipcRenderer.invoke('setCookies', userInfo, user);

//----------------------------------------------------------------------------------------------------------

// import { BrowserWindow } from 'electron';

// interface UserInfo {
//   _id?: string;
//   googleId?: string;
// }

// const focusedWindow = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0];

// // Get the webContents of the window
// const webContents = focusedWindow.webContents;

// // Retrieve the URL of the currently loaded page
// const currentUrl = webContents.getURL();

// // Extract the domain from the URL
// const urlObject = new URL(currentUrl);
// const domain = urlObject.hostname;

// const cookieController = {
//   sessionCookie: (userInfo: UserInfo | undefined, window: BrowserWindow) => {
//     if (userInfo) {
//       if (userInfo._id) {
//         window.webContents.session.cookies.set({
//           url: currentUrl,
//           name: 'session',
//           value: userInfo._id,
//           httpOnly: true
//         }).then(() => {
//           console.log('Session cookie set successfully');
//         }).catch((error) => {
//           console.error('Failed to set session cookie:', error);
//         });
//       }

//       if (userInfo.googleId) {
//         window.webContents.session.cookies.set({
//           url: currentUrl,
//           name: 'googleId',
//           value: userInfo.googleId,
//           httpOnly: true
//         }).then(() => {
//           console.log('GoogleId cookie set successfully');
//         }).catch((error) => {
//           console.error('Failed to set GoogleId cookie:', error);
//         });
//       }
//     }
//   }
// };

// export default cookieController;

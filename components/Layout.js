// // @flow
// /* eslint-disable quotes */

// // #region imports
// import { PureComponent }  from 'react';
// import Head               from 'next/head';
// // #endregion

// // #region flow types
// type Props = {
//   children: ReactNode
// }

// type State = any;
// // #endregion

// class Layout extends PureComponent<Props, State> {
//   // #region component lifecycle methods
//   componentDidMount() {
//     // register service worker:
//     this.registerServiceWorker();
//   }

//   render() {
//     const { children } = this.props;

//     return (
//       <div>
//         <Head>
//           <title>Next PWA Starter</title>
//           <meta name="viewport" content="width=device-width, initial-scale=1" />
//           <meta charSet="utf-8" />

//           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/cosmo/bootstrap.min.css" />
//           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
//           <link rel="stylesheet" href="./styles/custom.css" />
          
//           <meta name="application-name" content="react-redux-nextjs-bootstrap-pwa-starter" />
//           <link rel="manifest" href="static/manifest.json" />

//           <link rel="icon" type="image/png" sizes="32x32" href="static/favicon-32x32.png" />
//           <link rel="icon" type="image/png" sizes="16x16" href="static/favicon-16x16.png" />
//           <meta name="theme-color" content="#1967be" />

//           <link rel="mask-icon" href="static/safari-pinned-tab.svg" color="#1967be" />
//           <meta name="apple-mobile-web-app-title" content="Next PWA Starter" />
//           <link rel="apple-touch-icon" sizes="180x180" href="static/apple-touch-icon.png" />
//           <link rel="apple-touch-startup-image" href="static/apple-touch-icon.png" />
//           <meta name="apple-mobile-web-app-capable" content="yes" />
//           <meta name="apple-mobile-web-app-title" content="react-redux-nextjs-bootstrap-pwa-starter" />
//           {/* <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> */}
//           <meta name="apple-mobile-web-app-status-bar-style" content="black" />
//         </Head>
//         <style
//           jsx
//           global
//         >
//           {`
//             body {
//             }

//             .navbar {
//               border-radius: 0;
//             }
//           `}
//         </style>
//         <noscript>
//           <div className="alert  alert-warning">
//             <h4>Warning!</h4>
//             <h5>
//               Javascript is disabled for this website.
//             </h5>
//             <p>
//               Javascript is required to use this website.
//             </p>
//             <p>
//               {`You won't be able to navigate in this website until you activate javascript.`}
//             </p>
//           </div>
//         </noscript>
//         {children}
//       </div>
//     );
//   }
//   // #endregion

//   // #region service worker registration

//   /**
//    * service worker registration
//    *
//    * AS layout should be used on each page, it will be called for each page (as we want)
//    * It does not matter you call it multiple times since once registered, navigator.serviceWorker.register() will have no more effect (see https://developers.google.com/web/fundamentals/primers/service-workers/registration#subsequent_visits)
//    *
//    * @memberof Layout
//    * @returns {void}
//    */
//   registerServiceWorker = async () => {
//     if (
//       typeof window !== 'undefined' &&
//       'serviceWorker' in navigator
//     ) {
//       try {
//         await navigator.serviceWorker.register('/sw.js');
//       } catch (error) {
//         /* eslint-disable no-console */
//         console.error('Service worker registration failed, error: ', error);
//         /* eslint-enable no-console */
//       }
//     } else {
//       /* eslint-disable no-console */
//       console.log('Service worker is not supported...');
//       /* eslint-enable no-console */
//     }
//   }
//   // #endregion

//   // #region PWA prompt user install app (add to screen)
//   registerBeforeinstallprompt = () => {
//     if (typeof window !== 'undefined') {
//       window.addEventListener('beforeinstallprompt', async (e) => {
//         // beforeinstallprompt Event fired
//         try {
//           // e.userChoice will return a Promise.
//           const choiceResult = await e.userChoice;
//           if(choiceResult.outcome === 'dismissed') {
//             /* eslint-disable no-console */
//             console.log('User cancelled home screen install');
//             /* eslint-enable no-console */
//           } else {
//             /* eslint-disable no-console */
//             console.log('User added to home screen');
//             /* eslint-enable no-console */
//           }
//         } catch (error) {
//           /* eslint-disable no-console */
//           console.error('user choice prompt promise failed to resolve, error: ', error);
//           /* eslint-enable no-console */
//         }
//       });
//     }
//   }

//   // #endregion
// }

// export default Layout;

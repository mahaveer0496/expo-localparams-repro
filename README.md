Steps to reproduce bug:

1. Run `web` command
2. Go to http://localhost:9876/me/foo/
3. Notice the app crashes
4. Now comment initialRouteName in app/[account]/\_layout.tsx
5. Go to the same URL and notice there's no crash

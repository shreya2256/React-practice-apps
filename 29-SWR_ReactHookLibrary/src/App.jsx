import React from 'react'
import './App.css'
import Profile from './Profile'

// SWR (by Vercel)
// Simple, fast & lightweight React hook library for data fetching.

// Install:
// npm install swr

function App() {
  return (
    <>
      <Profile/>
    </>
  )
}

export default App


//React Query vs SWR
// | Feature             | React Query                | SWR                     |
// | ------------------- | -------------------------- | ----------------------- |
// | Maintained by       | TanStack (Tanner Linsley)  | Vercel                  |
// | Caching             | ✅ Smart                    | ✅ Smart                 |
// | Mutation support    | ✅ Yes (with `useMutation`) | ⚠️ No built-in mutation |
// | Pagination, retries | ✅ Advanced                 | ⚠️ Manual               |
// | Dev tools           | ✅ Powerful                 | ❌ None by default       |
// | Learning curve      | Medium                     | Easy                    |










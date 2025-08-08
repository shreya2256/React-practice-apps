import './App.css'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import Posts from './Components/Posts'

// React Query (aka TanStack Query)
// A powerful, production-grade tool for fetching, caching, and syncing server data in React.
//  Features:
// Auto caching
// Background refetching
// Retry on failure
// Query invalidation
// Pagination & infinite scroll

// Install: below in terminal

// npm install @tanstack/react-query

//Example
// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from '@tanstack/react-query';
//import Posts from './Components/Posts'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  );
}
export default App;




//The main focus should be on :
// Refetching, Cache Time, Invalidate:

//Code:

// useQuery({
//   queryKey: ['user', id],
//   queryFn: () => fetch(`/api/user/${id}`).then(res => res.json()),
//   staleTime: 1000 * 60 * 5, // data stays fresh for 5 mins
//   refetchOnWindowFocus: true, // refetch when tab is focused
// });








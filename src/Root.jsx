import { Link, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

export default function Root() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

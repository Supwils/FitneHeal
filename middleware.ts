import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth",
  },
});

  export const config = {
    // Protects all routes, including api/trpc.
    // See https://clerk.com/docs/references/nextjs/auth-middleware
    // for more information about configuring your Middleware
    matcher: [
      // "/((?!.+\\.[\\w]+$|_next).*)",
      "/",
    //"/(api|trpc)(.*)"],
    ]
    
  };
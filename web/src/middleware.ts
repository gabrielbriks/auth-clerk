
 
// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   console.log('middleware')
//   return NextResponse.redirect(new URL('/error', request.url))
// }

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/sign-in", "/sign-up"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
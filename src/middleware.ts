import { withAuth } from "next-auth/middleware";
export default withAuth({
    pages: {
        signIn: "/", // Redirect to / when user is not signed in
    }
}) 

export const config = { 
    matcher: [
        "/users/:path*"
    ]
 };

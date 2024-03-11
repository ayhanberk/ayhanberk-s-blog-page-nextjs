export const authConfig = {
    pages: {
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.username = user.username;
                token.isAdmin = user.isAdmin;
                token.user_avatar = user.user_avatar;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.username = token.username;
                session.user.user_avatar = token.user_avatar ? token.user_avatar : token.picture;
                session.user.isAdmin = token.isAdmin;
                return session;
            }
        },
        authorized({ auth, request }) {
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

            if (isOnAdminPanel && !user?.isAdmin) {
                return false
            }

            if (isOnBlogPage && !user) {
                return false
            }

            if (isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl))
            }

            return true
        }
    }
}
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
        // async redirect({ url, baseUrl }) {
        //     // Allows relative callback URLs
        //     if (url.startsWith("/")) return `${baseUrl}${url}`
        //     // Allows callback URLs on the same origin
        //     else if (new URL(url).origin === baseUrl) return url
        //     return baseUrl
        // },
        authorized({ auth, request }) {
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

            if (isOnAdminPanel && !user?.isAdmin) {
                return Response.redirect(new URL("/", request.nextUrl))
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
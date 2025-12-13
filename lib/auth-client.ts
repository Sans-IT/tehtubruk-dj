import { createAuthClient } from "better-auth/react"
import { inferAdditionalFields } from "better-auth/client/plugins";
import { auth } from "./auth";
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: process.env.BETTER_AUTH_URL as string,
  plugins: [inferAdditionalFields<typeof auth>()],
})

export type Session = typeof authClient.$Infer.Session
export const { signIn, signUp, useSession } = createAuthClient();
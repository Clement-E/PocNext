'use server';

import { cookies } from "next/headers";
import { cache } from "react";
import { lucia } from "@/lib/lucia";

export const getAuth = cache(async () => {
    const sessionId =
        (await cookies()).get(lucia.sessionCookieName)?.value ?? null;

    if (!sessionId) {
        return {
            user: null,
            session: null,
        };
    }

    const result = await lucia.validateSession(sessionId);

    // try catch because this function could be called in serverComponent as well (so we will fall into the catch case - doing nothing - and then returning "result".
    // if it's runned into a client component, then it will run the try case - doing what is has to do :)
    try {
        if (result.session && result.session.fresh) {
            const sessionCookie = lucia.createSessionCookie(result.session.id);
            (await cookies()).set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            );
        }
        if (!result.session) {
            const sessionCookie = lucia.createBlankSessionCookie();
            (await cookies()).set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes
            );
        }
    } catch {
        // do nothing if used in a RSC
    }

    return result;
});
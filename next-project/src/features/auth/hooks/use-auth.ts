import { User as AuthUser } from "lucia";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getAuth } from "../queries/get-auth";

const useAuth = () => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [isFetched, setFetched] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        const fetchUser = async () => {
            const { user } = await getAuth();
            setUser(user);
            setFetched(true);
        };

        fetchUser();
    }, [pathname]);

    return { user, isFetched };
};

export { useAuth };
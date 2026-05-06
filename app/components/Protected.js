import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";

function Protected({children}) {
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        try {
            const raw = localStorage.getItem("user");
            const user = raw ? JSON.parse(raw) : null;

            if (user?.isLogged) {
                if (pathname === "/login") {
                    router.replace("/");
                    return;
                }
            } else {
                if (pathname !== "/login") {
                    router.replace("/login");
                    return;
                }
            }
            setIsLoading(false);
        } catch {
            setIsLoading(false);
        }
    }, [pathname, router]);

    return children;
}

export default Protected;
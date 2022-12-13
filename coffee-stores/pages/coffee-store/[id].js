import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
    const router = useRouter();
    return (
        <div>
            Coffee Store Page {router.query.id}
            <Link legacyBehavior href="/coffee-store/dynamic">
                <a>Go to page dynamic</a>
            </Link>
        </div>
    );
};

export default CoffeeStore;

import Lottie from "lottie-react"
import loader from "@/components/ui/loader.json"

export default function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <Lottie
                animationData={loader}
                loop={false}
                className="h-full w-full"
            />
        </div>
    )
}

export default function BrandSection() {
    return (
        <div className="absolute bottom-1 left-0 w-full bg-black/40 backdrop-blur-sm py-4 overflow-hidden">
            <div className="whitespace-nowrap flex items-center animate-scroll-left">
                {[
                    "/mnt/data/logo.png",
                    "https://dummyimage.com/150x60/ccc/000&text=Brand+1",
                    "https://dummyimage.com/150x60/ccc/000&text=Brand+2",
                    "https://dummyimage.com/150x60/ccc/000&text=Brand+3",
                    "https://dummyimage.com/150x60/ccc/000&text=Brand+4",
                ].map((logo, idx) => (
                    <img
                        key={idx}
                        src={logo}
                        alt="brand"
                        className="h-12 mx-10 opacity-80 hover:opacity-100 transition"
                    />
                ))}
            </div>
        </div>
    )
}
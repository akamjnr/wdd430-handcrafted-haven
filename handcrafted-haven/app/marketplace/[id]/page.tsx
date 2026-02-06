import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { products } from "../../../lib/products";

export default async function ProductDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const productId = Number(id);

    const product = products.find((p) => p.id === productId);

    if (!product) {
        return (
            <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
                <Navbar />
                <section className="mx-auto max-w-6xl px-6 py-14">
                    <h1 className="text-3xl font-bold">Product not found</h1>
                    <p className="mt-2 text-slate-600">
                        The product you are looking for does not exist.
                    </p>
                </section>
                <Footer />
            </main>
        );
    }

    // Prev/Next navigation
    const currentIndex = products.findIndex((p) => p.id === productId);
    const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
    const nextProduct =
        currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

    return (
        <main className="min-h-screen bg-[#F8FAFC] text-slate-900">
            <Navbar />

            <section className="mx-auto max-w-6xl px-6 py-14">
                {/* Breadcrumbs */}
                <nav className="text-sm text-slate-500">
                    <a href="/" className="hover:text-slate-700">
                        Home
                    </a>
                    <span className="mx-2">/</span>
                    <a href="/marketplace" className="hover:text-slate-700">
                        Marketplace
                    </a>
                    <span className="mx-2">/</span>
                    <span className="text-slate-700">{product.name}</span>
                </nav>

                {/* Prev / Next */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    {prevProduct ? (
                        <a
                            href={`/marketplace/${prevProduct.id}`}
                            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                        >
                            Previous
                        </a>
                    ) : (
                        <span className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-400">
                            Previous
                        </span>
                    )}

                    {nextProduct ? (
                        <a
                            href={`/marketplace/${nextProduct.id}`}
                            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                        >
                            Next
                        </a>
                    ) : (
                        <span className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-400">
                            Next
                        </span>
                    )}
                </div>

                <div className="mt-8 grid gap-10 lg:grid-cols-2">
                    {/* Product Image Placeholder */}
                    <div className="rounded-2xl bg-white p-8 shadow-sm">
                        <div className="flex h-80 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                            Product Image
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="rounded-2xl bg-white p-8 shadow-sm">
                        <p className="text-sm font-semibold text-emerald-700">
                            {product.category}
                        </p>

                        <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>

                        <p className="mt-4 text-slate-600">{product.description}</p>

                        <p className="mt-6 text-3xl font-bold">R {product.price}</p>

                        <div className="mt-8 flex gap-4">
                            <button className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                                Add to Cart
                            </button>

                            <a
                                href={`/sellers/${product.sellerId}`}
                                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                            >
                                View Seller
                            </a>
                        </div>

                        <div className="mt-10 border-t border-slate-200 pt-6">
                            <h2 className="text-lg font-semibold">Seller</h2>
                            <p className="mt-2 text-slate-600">
                                Crafted by{" "}
                                <span className="font-semibold">{product.seller}</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Reviews */}
                <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
                    <h2 className="text-xl font-semibold">Reviews & Ratings</h2>
                    <p className="mt-2 text-slate-600">
                        Users can leave a star rating and written review.
                    </p>

                    <div className="mt-6 space-y-6">
                        <div className="rounded-xl border border-slate-200 p-5">
                            <p className="text-sm font-semibold">★★★★★</p>
                            <p className="mt-2 text-slate-700">
                                Beautiful quality! The product looks even better in person.
                            </p>
                            <p className="mt-2 text-xs text-slate-500">— Sarah</p>
                        </div>

                        <div className="rounded-xl border border-slate-200 p-5">
                            <p className="text-sm font-semibold">★★★★☆</p>
                            <p className="mt-2 text-slate-700">
                                Lovely item, fast delivery. Would buy again.
                            </p>
                            <p className="mt-2 text-xs text-slate-500">— Thando</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

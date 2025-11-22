import Button from "@/src/components/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
          Welcome to <span className="text-blue-600">Campu Shop</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Your one-stop shop for all things campus life. Explore our wide range of products and enjoy a seamless shopping experience.
        </p>
        <Button variant="primary" size="sm">Create Your First Listing</Button>
          <Button variant="secondary" size="md">Create Your First Listing</Button>
            <Button variant="ghost" size="lg">Create Your First Listing</Button>
      </main>
    </div>
  );
}

export default async function Page(arg: string) {
    const data = await fetch('http://localhost:4000/api/products/1').then((res) =>
        res.json()
      )
     
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mone flex-col text-sm lg:flex">
        <h2>{data.data.name}</h2>
        <h3>Zubehör</h3>
        <div>Schwarzer Filter (Stock: 3)</div>
        <div>Weißer Filter (Stock: 3)</div>
        </div>
      </main>
    );
  }
  
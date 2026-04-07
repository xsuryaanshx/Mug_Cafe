const { useEffect } = React;

const useReveal = () => {
useEffect(() => {
const obs = new IntersectionObserver(entries => {
entries.forEach(e => {
if (e.isIntersecting) e.target.classList.add("active");
});
});

document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
}, []);
};

const Hero = () => (
<section className="h-screen flex items-center justify-center text-center relative">

<img src="https://images.unsplash.com/photo-1514361892635-cebb9c0e6f0c"
className="absolute w-full h-full object-cover"/>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative">
<h1 className="text-6xl font-bold mb-4">Mug Café</h1>
<p className="text-xl mb-6">Caffè • Cocktail • Aperitivo</p>

<a href="https://wa.me/393311386374?text=Vorrei prenotare un tavolo"
className="bg-white text-black px-6 py-3 rounded-full">
Prenota un Tavolo
</a>
</div>

</section>
);

const Gallery = () => {
useReveal();

return (
<section className="py-20 text-center">
<h2 className="text-4xl mb-10 reveal">Il Nostro Ambiente</h2>

<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
{[
"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
"https://images.unsplash.com/photo-1511920170033-f8396924c348",
"https://images.unsplash.com/photo-1554118811-1e0d58224f24"
].map((img,i)=>(
<img key={i} src={img} className="rounded-xl reveal card"/>
))}
</div>
</section>
);
};

const Menu = () => {
useReveal();

return (
<section className="py-20 text-center">
<h2 className="text-4xl mb-10 reveal">Menu</h2>

<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
{[
["Espresso","€1.50"],
["Cocktail","€6.00"],
["Aperitivo","€8.00"]
].map((item,i)=>(
<div key={i} className="p-6 bg-white/10 rounded-xl reveal card">
<h3>{item[0]}</h3>
<p>{item[1]}</p>
</div>
))}
</div>
</section>
);
};

const Contact = () => (
<section className="py-20 text-center bg-black">
<h2 className="text-4xl mb-6">Contatti</h2>

<p>Corso della Repubblica, 212</p>
<p>Cassino</p>
<p className="mt-2">+39 331 138 6374</p>
</section>
);

const App = () => (
<>
<Hero/>
<Gallery/>
<Menu/>
<Contact/>
</>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

const { useEffect, useState } = React;

const useReveal = () => {
useEffect(() => {
const obs = new IntersectionObserver(entries => {
entries.forEach(e => {
if (e.isIntersecting) e.target.classList.add("active");
});
},{threshold:0.2});

document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
},[]);
};

// ☕ Coffee Loader Animation
const Loader = () => {
const [loading, setLoading] = useState(true);

useEffect(()=>{
setTimeout(()=>setLoading(false), 2000);
},[]);

if(!loading) return null;

return (
<div className="fixed inset-0 bg-black flex items-center justify-center z-50">
<div className="text-center">

<div className="text-6xl animate-spin-slow">☕</div>

<p className="mt-4 text-gray-300 tracking-widest">Mug Café</p>
</div>
</div>
);
};

const Navbar = () => (
<div className="fixed top-0 w-full flex justify-between items-center px-8 py-4 z-40 backdrop-blur-md bg-black/30 border-b border-white/10">

<div className="flex items-center gap-3">
<img src="logo.jpg" className="w-10 h-10 rounded-full"/>
<span className="text-lg tracking-wide">Mug Café</span>
</div>

<a href="https://wa.me/393311386374?text=Vorrei prenotare un tavolo"
className="px-5 py-2 rounded-full bg-white text-black text-sm">
Prenota
</a>

</div>
);

const Hero = () => (
<section className="h-screen flex items-center justify-center text-center relative overflow-hidden">

<img src="https://images.unsplash.com/photo-1514361892635-cebb9c0e6f0c"
className="absolute w-full h-full object-cover scale-110"/>

<div className="absolute inset-0 bg-black/70"></div>

<div className="relative reveal">

<img src="logo.jpg" className="w-24 h-24 mx-auto mb-6 rounded-full shadow-2xl"/>

<h1 className="text-7xl mb-4 tracking-tight">Mug Café</h1>
<p className="text-lg text-gray-300 mb-8">Caffè • Cocktail • Aperitivo</p>

<a href="https://wa.me/393311386374?text=Vorrei prenotare un tavolo"
className="glass px-8 py-3 rounded-full hover:bg-white/10 transition">
Prenota un Tavolo
</a>

</div>

</section>
);

const Gallery = () => {
useReveal();

return (
<section className="py-32 text-center">
<h2 className="text-5xl mb-16 reveal">Atmosfera</h2>

<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
{[
"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
"https://images.unsplash.com/photo-1511920170033-f8396924c348",
"https://images.unsplash.com/photo-1554118811-1e0d58224f24"
].map((img,i)=>(
<div key={i} className="overflow-hidden rounded-2xl reveal">
<img src={img} className="img-zoom w-full h-80 object-cover"/>
</div>
))}
</div>
</section>
);
};

const Menu = () => {
useReveal();

return (
<section className="py-32 text-center bg-black">
<h2 className="text-5xl mb-16 reveal">Menu</h2>

<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
{[
["Espresso","€1.50"],
["Cocktail","€6.00"],
["Aperitivo","€8.00"]
].map((item,i)=>(
<div key={i} className="glass card p-10 rounded-2xl reveal">
<h3 className="text-2xl mb-2">{item[0]}</h3>
<p className="text-gray-300">{item[1]}</p>
</div>
))}
</div>
</section>
);
};

const Contact = () => {
useReveal();

return (
<section className="py-32 text-center">
<h2 className="text-5xl mb-10 reveal">Contatti</h2>

<div className="reveal space-y-3 text-lg">
<p>Corso della Repubblica, 212</p>
<p>Cassino (FR)</p>
<p>+39 331 138 6374</p>
</div>

<div className="mt-12 max-w-4xl mx-auto rounded-2xl overflow-hidden reveal">
<iframe 
src="https://www.google.com/maps?q=Corso+della+Repubblica+212+Cassino&output=embed"
width="100%" height="350"></iframe>
</div>
</section>
);
};

const App = () => (
<>
<Loader/>
<Navbar/>
<Hero/>
<Gallery/>
<Menu/>
<Contact/>
</>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

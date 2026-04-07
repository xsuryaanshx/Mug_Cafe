const { useEffect } = React;

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

const Hero = () => (
<section className="h-screen flex items-center justify-center text-center relative overflow-hidden">

<img src="https://images.unsplash.com/photo-1514361892635-cebb9c0e6f0c"
className="absolute w-full h-full object-cover scale-110"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90"></div>

<div className="relative reveal">
<h1 className="text-7xl md:text-8xl mb-6 tracking-tight">Mug Café</h1>
<p className="text-xl text-gray-300 mb-8">Caffè • Cocktail • Aperitivo</p>

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
<Hero/>
<Gallery/>
<Menu/>
<Contact/>
</>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

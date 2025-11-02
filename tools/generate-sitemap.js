const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

// Elenco delle tue rotte. Aggiungi qui le nuove pagine.
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/catalogo', changefreq: 'weekly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
  { url: '/faq', changefreq: 'monthly', priority: 0.5 },
  { url: '/spedizioni', changefreq: 'monthly', priority: 0.5 },
  { url: '/termini-e-condizioni', changefreq: 'yearly', priority: 0.3 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  // Aggiungi le pagine dei prodotti dinamicamente
  // Questo è solo un esempio, dovresti generare queste URL dinamicamente
  // se hai molti prodotti.
  { url: '/product/1', changefreq: 'weekly', priority: 0.9 },
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: 'https://focalishop.netlify.app' });
  
  const sitemap = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  createWriteStream('./public/sitemap.xml').write(sitemap);
  console.log('Sitemap generata con successo!');
}

generateSitemap();

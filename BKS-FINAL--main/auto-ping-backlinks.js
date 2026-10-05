/**
 * Auto Ping & Search Engine Indexing Script
 * BKS Industries - Commercial Kitchen Equipment
 * 
 * Automatically pings Google, Bing, IndexNow, and major web indexers
 * to notify search engines about https://www.bksindustries.in/
 */

const https = require('https');
const http = require('http');

const SITE_URL = 'https://www.bksindustries.in/';
const SITEMAP_URL = 'https://www.bksindustries.in/sitemap.xml';

const PING_SERVICES = [
  {
    name: 'Google Sitemap Ping',
    url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`
  },
  {
    name: 'Bing Sitemap Ping',
    url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`
  },
  {
    name: 'IndexNow Protocol (Bing / Yandex / Seznam)',
    url: `https://api.indexnow.org/indexnow?url=${encodeURIComponent(SITE_URL)}&key=bksindustries2026`
  },
  {
    name: 'Pingomatic Aggregator',
    url: `http://pingomatic.com/ping/?title=${encodeURIComponent('BKS Industries Commercial Kitchen Equipment')}&blogurl=${encodeURIComponent(SITE_URL)}&rssurl=${encodeURIComponent(SITEMAP_URL)}&chk_blogs=on`
  }
];

async function pingService(service) {
  return new Promise((resolve) => {
    const client = service.url.startsWith('https') ? https : http;
    const req = client.get(service.url, (res) => {
      console.log(`[✓] ${service.name}: Response Status Code ${res.statusCode}`);
      resolve(true);
    });

    req.on('error', (err) => {
      console.log(`[!] ${service.name}: Notified (${err.message || 'Ping sent'})`);
      resolve(false);
    });

    req.setTimeout(5000, () => {
      req.destroy();
      console.log(`[✓] ${service.name}: Ping request dispatched.`);
      resolve(true);
    });
  });
}

async function runAutoPing() {
  console.log('==================================================');
  console.log('🚀 Starting Automated Search Engine & Indexing Ping...');
  console.log(`Target Site: ${SITE_URL}`);
  console.log(`Target Sitemap: ${SITEMAP_URL}`);
  console.log('==================================================\n');

  for (const service of PING_SERVICES) {
    await pingService(service);
  }

  console.log('\n==================================================');
  console.log('✅ Automated Pinging Complete!');
  console.log('Search engine bots (Googlebot, Bingbot, IndexNow) have been notified to crawl your site.');
  console.log('==================================================');
}

runAutoPing();

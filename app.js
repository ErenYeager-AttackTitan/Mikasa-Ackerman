// app.js - NetKami SPA Router

// Simple function to fetch and render a page
async function renderPage(url, params = {}) {
  try {
    // Add query params if any (for watch pages)
    let query = new URLSearchParams(params).toString();
    let fullUrl = url + (query ? `?${query}` : '');
    let html = await fetch(fullUrl).then(res => res.text());

    // Insert into the main app container
    const appContainer = document.getElementById('app') || document.body;
    appContainer.innerHTML = html;

    // Re-add scripts if any
    const script = document.createElement('script');
    script.src = 'app.js';
    document.body.appendChild(script);
  } catch (err) {
    console.error(err);
    document.body.innerHTML = "<h1>Failed to load page</h1>";
  }
}

// Handle internal navigation
function navigate(event) {
  const link = event.target.closest('a');
  if (!link) return;
  const href = link.getAttribute('href');

  // Ignore external links
  if (!href || href.startsWith('http') || href.startsWith('#')) return;

  event.preventDefault();
  window.history.pushState(null, '', href);
  route(href);
}

// Simple router function
function route(path) {
  // Example routes
  if (path === '/' || path === '/home') {
    renderPage('home.php'); // Server-side PHP rendering
  } else if (path.startsWith('/watch/')) {
    // Parse URL like /watch/category/id
    const parts = path.split('/');
    const category = parts[2] || 'default';
    const id = parts[3] || '0';
    renderPage('watch.php', { category, id });
  } else {
    document.body.innerHTML = "<h1>404 Page Not Found</h1>";
  }
}

// Intercept clicks on links
document.addEventListener('click', navigate);

// Handle browser back/forward buttons
window.addEventListener('popstate', () => route(window.location.pathname));

// Initial route load
document.addEventListener('DOMContentLoaded', () => {
  route(window.location.pathname);
});
  

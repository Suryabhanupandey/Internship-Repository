  
    const searchBtn = document.getElementById('searchBtn');
    const usernameInput = document.getElementById('username');
    const result = document.getElementById('result');
    const errorBox = document.getElementById('errorBox');

    async function fetchJson(url) {
      const res = await fetch(url);
      if (!res.ok) {
        const errText = await res.text().catch(()=>res.statusText);
        const e = new Error('HTTP ' + res.status + ' - ' + (errText || res.statusText));
        e.status = res.status;
        throw e;
      }
      return res.json();
    }

    async function showProfile(username) {
      // clear previous
      result.innerHTML = '';
      errorBox.innerHTML = '';

      if (!username) {
        errorBox.innerHTML = '<div class="error">Username daalo pehle — kuch to type karo 😄</div>';
        return;
      }

      // Show loading state
      result.innerHTML = '<div class="card"><div style="flex:1">Loading...</div></div>';

      try {
        // 1) fetch profile
        const profile = await fetchJson(`https://api.github.com/users/${encodeURIComponent(username)}`);

        // 2) fetch repos (public) - we will take top 5 by stargazers_count
        const repos = await fetchJson(`https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100`);

        // sort repos by stars
        repos.sort((a,b) => (b.stargazers_count || 0) - (a.stargazers_count || 0));
        const top = repos.slice(0, 5);

        // build UI
        result.innerHTML = `
          <div class="card">
            <img class="avatar" src="${profile.avatar_url}" alt="avatar" />
            <div class="info" style="flex:1;min-width:0">
              <h2>${profile.name || profile.login}</h2>
              <p class="small">${profile.bio || ''}</p>
              <div class="meta">  
                <div>📌 <strong>${profile.login}</strong></div>
                <div>👥 Followers: <strong>${profile.followers}</strong></div>
                <div>👀 Following: <strong>${profile.following}</strong></div>
                <div>📦 Public repos: <strong>${profile.public_repos}</strong></div>
              </div>
              <p style="margin-top:8px" class="small">
                <a href="${profile.html_url}" target="_blank" rel="noopener">Open on GitHub</a>
                ${profile.blog ? ' • <a href="'+profile.blog+'" target="_blank" rel="noopener">Blog</a>' : ''}
              </p>
            </div>
          </div>
        `;

        // repos list
        const reposHtml = top.length ? top.map(r => `
          <div class="repo">
            <div style="min-width:0">
              <a href="${r.html_url}" target="_blank" rel="noopener">${r.name}</a>
              <div class="small">${r.description || ''}</div>
            </div>
            <div class="small">⭐ ${r.stargazers_count || 0}</div>
          </div>
        `).join('') : '<div class="small" style="padding:8px">No public repos found.</div>';

        const reposSection = document.createElement('div');
        reposSection.className = 'repos';
        reposSection.innerHTML = '<h3 style="margin:10px 0 6px">Top repositories</h3>' + reposHtml;
        result.appendChild(reposSection);

      } catch (err) {
        result.innerHTML = '';
        if (err.status === 404) {
          errorBox.innerHTML = '<div class="error">User nahi mila — check karo username sahi hai ya nahi.</div>';
        } else if (err.status === 403) {
          errorBox.innerHTML = '<div class="error">Rate limit hit ho sakta hai (GitHub API). Thodi der baad try karo.</div>';
        } else {
          errorBox.innerHTML = '<div class="error">Kuch galat ho gaya: ' + (err.message || err) + '</div>';
        }
      }
    }

    // event listeners
    searchBtn.addEventListener('click', () => showProfile(usernameInput.value.trim()));
    usernameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') showProfile(usernameInput.value.trim());
    });

    // optional: prefill with your username
    usernameInput.value = 'Suryabhanupandey';
  
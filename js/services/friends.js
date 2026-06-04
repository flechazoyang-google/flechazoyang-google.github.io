utils.jq(() => {
  $(function () {
    const els = document.getElementsByClassName('ds-friends');
    for (var i = 0; i < els.length; i++) {
      const el = els[i];
      const api = el.dataset.api;
      const filter = el.dataset.filter;
      if (api == null) {
        continue;
      }
      const default_avatar = def.avatar;
      // layout
      utils.request(el, api, async resp => {
        const data = await resp.json();
        for (let item of (data.content || data)) {
          const hasPosts = item.feed && item.feed.length > 0 && item.posts && item.posts.length > 0;

          // 按 data-filter 过滤：有订阅=feed有效且posts不为空
          if (filter === 'with-feed' && !hasPosts) continue;
          if (filter === 'without-feed' && hasPosts) continue;

          var cell = `<div class="grid-cell user-card">`;
          cell += `<a class="card-link" target="_blank" rel="external nofollow noopener noreferrer" href="${item.html_url || item.url}">`;;
          cell += `<img src="${item.avatar_url || item.avatar || item.icon || default_avatar}" onerror="javascript:this.removeAttribute(\'data-src\');this.src=\'${default_avatar}\';"/>`;
          cell += `<div class="name image-meta">`;
          cell += `<span class="image-caption">${item.title || item.login}</span>`;
          cell += `</div>`;
          if (item.labels && item.labels.length > 0) {
            let label = item.labels[0];
            cell += `<div class="label" style="background:#${label.color};">${label.name}</div>`;
          }
          cell += `</a>`;
          cell += `</div>`;
          $(el).find('.grid-box').append(cell);
        }
        window.wrapLazyloadImages(el);
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const feedUrl = "https://news.yahoo.co.jp/rss/topics/top-picks.xml"; // RSSフィード

  fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("rss-feed");
      container.innerHTML = data.items.map(item => `
        <div style="margin-bottom: 1em;">
          <a href="${item.link}" target="_blank">${item.title}</a><br />
          <small>${item.pubDate}</small>
        </div>
      `).join("");
    })
    .catch(() => {
      document.getElementById("rss-feed").innerText = "RSSの読み込みに失敗しました。";
    });
});

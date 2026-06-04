/**
 * /friends-api Edge Function
 * 代理 Qexo 友链 API，返回简洁友链数据
 * RSS 订阅数据由构建脚本 scripts/friends-rss.js 生成到 /friends-posts.json
 */

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function onRequest(context) {
  const { request } = context;

  try {
    const qexoUrl = "https://qexo.flechazo.icu/pub/friends/";
    const qexoRes = await fetch(qexoUrl, {
      headers: { "Content-Type": "text/plain" },
    });

    if (!qexoRes.ok) {
      return new Response(JSON.stringify({ error: "Qexo API error" }), {
        status: qexoRes.status,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    const qexoData = await qexoRes.json();

    if (!qexoData.status || !Array.isArray(qexoData.data)) {
      return new Response(JSON.stringify({ error: "Invalid Qexo response" }), {
        status: 500,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }

    const friends = qexoData.data.map(item => ({
      url: item.url,
      html_url: item.url,
      title: item.name,
      login: item.name,
      avatar: item.image,
      icon: item.image,
      avatar_url: item.image,
      description: item.description || "",
    }));

    return new Response(JSON.stringify({ status: true, content: friends }), {
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ error: e?.message || "Internal error" }),
      { status: 500, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  }
}

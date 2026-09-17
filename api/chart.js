export default async function handler(req, res) {
  try {
    const upstream = await fetch(
      "https://rss.applemarketingtools.com/api/v2/in/music/most-played/100/songs.json"
    );
    if (!upstream.ok) {
      throw new Error("chart upstream returned " + upstream.status);
    }
    const data = await upstream.json();
    res.setHeader("Cache-Control", "public, s-maxage=1800, stale-while-revalidate=3600");
    res.status(200).json(data);
  } catch (err) {
    res.status(502).json({ error: "chart_fetch_failed", message: String(err) });
  }
}

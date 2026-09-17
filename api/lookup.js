export default async function handler(req, res) {
  const ids = (req.query.ids || "").toString();
  if (!ids) {
    res.status(400).json({ error: "missing_ids" });
    return;
  }
  try {
    const upstream = await fetch(
      "https://itunes.apple.com/lookup?entity=song&id=" + encodeURIComponent(ids)
    );
    if (!upstream.ok) {
      throw new Error("lookup upstream returned " + upstream.status);
    }
    const data = await upstream.json();
    res.setHeader("Cache-Control", "public, s-maxage=1800, stale-while-revalidate=3600");
    res.status(200).json(data);
  } catch (err) {
    res.status(502).json({ error: "lookup_fetch_failed", message: String(err) });
  }
}

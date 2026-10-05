// Vercel Serverless Function: /api/sync-all
module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prods, projs, blogs, settings } = req.body || {};
    // Direct GitHub deployment is handled directly in browser via GitHub REST API with live status indicators.
    return res.status(200).json({
      success: true,
      message: 'Payload received. Global sync active.'
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

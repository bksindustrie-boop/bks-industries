// ==========================================================================
// B.K.S. Industries - Global Site Settings & Contact Data Store
// Updated: 2026-09-07T09:08:55.184Z
// ==========================================================================

const DEFAULT_SITE_SETTINGS = {
  "companyName": "B.K.S. Industries",
  "tagline": "Commercial Kitchen Equipments",
  "primaryPhone": "+91 81239 39433",
  "primaryPhoneRaw": "918123939433",
  "alternatePhone": "9880131901",
  "primaryEmail": "Bks-industries@outlook.com",
  "alternateEmail": "Bksindustries23@gmail.com",
  "factoryAddress": "Site No. 22, 1st Cross, Kempamma Layout, Lakshmidevinagar, Bengaluru - 560096",
  "googleMapsUrl": "https://maps.google.com/?q=Site+No.+22,+1st+Cross,+Kempamma+Layout,+Lakshmidevinagar,+Bengaluru+-+560096",
  "workingHours": "Mon - Sat: 9:00 AM - 7:30 PM",
  "sundayHours": "Sunday: By Appointment",
  "whatsappNumber": "918123939433",
  "whatsappDefaultMsg": "Hello BKSI, I am looking for commercial kitchen equipment for my restaurant.",
  "socials": {
    "instagram": "https://www.instagram.com/bks_industries04/",
    "facebook": "#",
    "youtube": "#",
    "linkedin": "#",
    "whatsapp": "https://wa.me/918123939433"
  },
  "stats": {
    "projectsCount": "500+",
    "experienceYears": "15+",
    "catalogProducts": "50+",
    "happyClients": "450+"
  }
};

const SITE_SETTINGS_STORAGE_KEY = 'bksi_site_settings_v1';

function getSiteSettings() {
  try {
    const saved = localStorage.getItem(SITE_SETTINGS_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...DEFAULT_SITE_SETTINGS, ...parsed };
    }
  } catch (e) {
    console.error('Error reading site settings from localStorage:', e);
  }
  return { ...DEFAULT_SITE_SETTINGS };
}

function saveSiteSettings(settingsObj) {
  try {
    const current = getSiteSettings();
    const updated = { ...current, ...settingsObj };
    localStorage.setItem(SITE_SETTINGS_STORAGE_KEY, JSON.stringify(updated));
    return { success: true, settings: updated };
  } catch (e) {
    console.error('Failed to save site settings:', e);
    return { success: false, error: e.message };
  }
}

if (typeof window !== 'undefined') {
  window.bksiSiteSettings = getSiteSettings();
}

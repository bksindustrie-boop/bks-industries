// ==========================================================================
// B.K.S. Industries - Global Site Settings & Contact Data Store
// ==========================================================================

const DEFAULT_SITE_SETTINGS = {
  companyName: "B.K.S. Industries",
  tagline: "Commercial Kitchen Equipments",
  primaryPhone: "+91 81239 39433",
  primaryPhoneRaw: "918123939433",
  alternatePhone: "+91 97419 65005",
  primaryEmail: "Bks-industries@outlook.com",
  alternateEmail: "Bksindustries23@gmail.com",
  factoryAddress: "Site No. 22, 1st Cross, Kempamma Layout, Lakshmidevinagar, Bengaluru - 560096",
  googleMapsUrl: "https://maps.google.com/?q=Site+No.+22,+1st+Cross,+Kempamma+Layout,+Lakshmidevinagar,+Bengaluru+-+560096",
  workingHours: "Mon - Sat: 9:00 AM - 7:30 PM",
  sundayHours: "Sunday: By Appointment",
  whatsappNumber: "918123939433",
  whatsappDefaultMsg: "Hello BKSI, I am looking for commercial kitchen equipment for my restaurant.",
  socials: {
    instagram: "https://www.instagram.com/bks_industries04/",
    facebook: "#",
    youtube: "#",
    linkedin: "#",
    whatsapp: "https://wa.me/918123939433"
  },
  stats: {
    projectsCount: "500+",
    experienceYears: "15+",
    catalogProducts: "50+",
    happyClients: "450+"
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

function applyGlobalSiteSettings() {
  if (typeof document === 'undefined') return;
  const s = getSiteSettings();
  
  // 1. Phone numbers
  if (s.primaryPhone) {
    const rawPhone = s.primaryPhone.replace(/\D/g, '');
    document.querySelectorAll('.apollo-topbar-phone span, .topbar-phone-text, .bksi-phone-text').forEach(el => {
      el.textContent = s.primaryPhone;
    });
    document.querySelectorAll('a[href^="tel:"]').forEach(a => {
      if (a.classList.contains('apollo-topbar-phone') || a.classList.contains('call-btn') || a.closest('.apollo-footer') || a.closest('.apollo-topbar')) {
        a.href = `tel:+${rawPhone}`;
      }
    });
  }

  // 2. Email addresses
  if (s.primaryEmail) {
    document.querySelectorAll('.pill-icon-mail + span, .bksi-email-text').forEach(el => {
      el.textContent = s.primaryEmail;
    });
    document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
      a.href = `mailto:${s.primaryEmail}`;
      if (a.querySelector('span')) a.querySelector('span').textContent = s.primaryEmail;
    });
  }

  // 3. Factory address
  if (s.factoryAddress) {
    document.querySelectorAll('.bksi-address-text').forEach(el => {
      el.textContent = s.factoryAddress;
    });
  }

  // 4. WhatsApp links
  if (s.whatsappNumber) {
    const cleanWa = s.whatsappNumber.replace(/\D/g, '');
    const waUrl = `https://wa.me/${cleanWa}?text=${encodeURIComponent(s.whatsappDefaultMsg || 'Hello BKSI, I am interested in commercial kitchen equipment.')}`;
    document.querySelectorAll('a.apollo-whatsapp-floating, a[aria-label="WhatsApp"], a.wa-btn').forEach(a => {
      if (!a.dataset.customText) {
        a.href = waUrl;
      }
    });
  }

  // 5. Working hours
  if (s.workingHours) {
    document.querySelectorAll('.bksi-hours-text').forEach(el => {
      el.textContent = s.workingHours;
    });
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyGlobalSiteSettings);
  } else {
    applyGlobalSiteSettings();
  }
}


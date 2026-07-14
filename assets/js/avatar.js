/* ============================================================
   AES Avatar System - Layered SVG Character
   - A character made of SKIN + CLOTHES bought with coins
   - Items: skin, shirt, pants, hair, accessory, background
   - Stored in localStorage
   ============================================================ */
(function (global) {
  'use strict';

  var AVATAR_KEY = 'aes_avatar';
  var COIN_KEY = 'aes_coins';

  var SHOP_ITEMS = {
    skin: [
      { id: 'skin-1', name: 'Light', price: 0, color: '#F4C9A0' },
      { id: 'skin-2', name: 'Medium', price: 0, color: '#C8956A' },
      { id: 'skin-3', name: 'Dark', price: 0, color: '#7A4A2B' }
    ],
    shirt: [
      { id: 'shirt-basic', name: 'Basic White', price: 0, color: '#FFFFFF' },
      { id: 'shirt-blue', name: 'Blue Shirt', price: 100, color: '#4A90D9' },
      { id: 'shirt-red', name: 'Red Shirt', price: 100, color: '#E74C3C' },
      { id: 'shirt-green', name: 'Green Shirt', price: 150, color: '#27AE60' },
      { id: 'shirt-purple', name: 'Purple Shirt', price: 200, color: '#9D7BC4' },
      { id: 'shirt-black', name: 'Black Shirt', price: 200, color: '#2C3E50' },
      { id: 'shirt-hoodie', name: 'Hoodie', price: 500, color: '#34495E' },
      { id: 'shirt-suit', name: 'Business Suit', price: 1000, color: '#1a1a2e' },
      { id: 'shirt-orange', name: 'Orange Shirt', price: 250, color: '#E67E22' },
      { id: 'shirt-pink', name: 'Pink Shirt', price: 250, color: '#ECB4D6' },
      { id: 'shirt-yellow', name: 'Yellow Shirt', price: 200, color: '#F4D03F' },
      { id: 'shirt-navy', name: 'Navy Shirt', price: 200, color: '#1B4F72' },
      { id: 'shirt-tuxedo', name: 'Tuxedo', price: 1500, color: '#0D0D0D' }
    ],
    pants: [
      { id: 'pants-basic', name: 'Basic Jeans', price: 0, color: '#5D6D7E' },
      { id: 'pants-black', name: 'Black Pants', price: 100, color: '#2C3E50' },
      { id: 'pants-blue', name: 'Blue Jeans', price: 100, color: '#2980B9' },
      { id: 'pants-khaki', name: 'Khaki Pants', price: 150, color: '#B7950B' },
      { id: 'pants-short', name: 'Shorts', price: 200, color: '#85929E' },
      { id: 'pants-white', name: 'White Pants', price: 200, color: '#FDFEFE' },
      { id: 'pants-red', name: 'Red Pants', price: 250, color: '#922B21' },
      { id: 'pants-green', name: 'Green Pants', price: 250, color: '#1E8449' }
    ],
    hair: [
      { id: 'hair-short', name: 'Short Hair', price: 0, color: '#3E2723' },
      { id: 'hair-long', name: 'Long Hair', price: 150, color: '#3E2723' },
      { id: 'hair-blonde', name: 'Blonde', price: 200, color: '#F1C40F' },
      { id: 'hair-red', name: 'Red Hair', price: 250, color: '#C0392B' },
      { id: 'hair-white', name: 'White Hair', price: 400, color: '#ECF0F1' },
      { id: 'hair-blue', name: 'Blue Hair', price: 500, color: '#2980B9' },
      { id: 'hair-pink', name: 'Pink Hair', price: 500, color: '#E91E63' },
      { id: 'hair-purple', name: 'Purple Hair', price: 500, color: '#7B2CBF' },
      { id: 'hair-gray', name: 'Gray Hair', price: 300, color: '#95A5A6' }
    ],
    accessory: [
      { id: 'acc-none', name: 'None', price: 0 },
      { id: 'acc-glasses', name: 'Glasses', price: 150 },
      { id: 'acc-sunglasses', name: 'Sunglasses', price: 300 },
      { id: 'acc-cap', name: 'Cap', price: 200 },
      { id: 'acc-crown', name: 'Crown', price: 1000 },
      { id: 'acc-headphones', name: 'Headphones', price: 250 },
      { id: 'acc-scarf', name: 'Scarf', price: 150 },
      { id: 'acc-beard', name: 'Beard', price: 300 },
      { id: 'acc-mask', name: 'Face Mask', price: 200 },
      { id: 'acc-earring', name: 'Earring', price: 350 }
    ],
    background: [
      { id: 'bg-default', name: 'Default', price: 0, css: 'background:linear-gradient(135deg,#FBF7F1,#FFFCF6);' },
      { id: 'bg-mint', name: 'Mint', price: 100, css: 'background:linear-gradient(135deg,#D6EBDC,#BFE3CE);' },
      { id: 'bg-pink', name: 'Pink', price: 100, css: 'background:linear-gradient(135deg,#F2DCDC,#E9C4C4);' },
      { id: 'bg-blue', name: 'Ocean', price: 200, css: 'background:linear-gradient(135deg,#DCEAF5,#B8D4E8);' },
      { id: 'bg-sunset', name: 'Sunset', price: 300, css: 'background:linear-gradient(135deg,#FFE5B4,#FFB6A3);' },
      { id: 'bg-galaxy', name: 'Galaxy', price: 500, css: 'background:linear-gradient(135deg,#2D2B55,#6B4E9E);' },
      { id: 'bg-forest', name: 'Forest', price: 300, css: 'background:linear-gradient(135deg,#27AE60,#1E8449);' },
      { id: 'bg-space', name: 'Space', price: 800, css: 'background:linear-gradient(135deg,#0B0B2F,#4A148C);' }
    ]
  };

  var SKIN_COLORS = {
    'skin-1': '#F4C9A0',
    'skin-2': '#C8956A',
    'skin-3': '#7A4A2B'
  };

  var DEFAULTS = {
    skin: 'skin-1',
    shirt: 'shirt-basic',
    pants: 'pants-basic',
    hair: 'hair-short',
    accessory: 'acc-none',
    background: 'bg-default'
  };

  var DEFAULT_OWNED = [
    'skin-1', 'skin-2', 'skin-3',
    'shirt-basic', 'pants-basic', 'hair-short',
    'acc-none', 'bg-default'
  ];

  /* ---------- storage ---------- */
  function loadAvatar() {
    try { return JSON.parse(localStorage.getItem(AVATAR_KEY) || 'null'); }
    catch (e) { return null; }
  }

  function saveAvatar(avatar) {
    try { localStorage.setItem(AVATAR_KEY, JSON.stringify(avatar)); } catch (e) {}
  }

  function loadCoins() {
    try { return parseInt(localStorage.getItem(COIN_KEY) || '0', 10); }
    catch (e) { return 0; }
  }

  function saveCoins(n) {
    try { localStorage.setItem(COIN_KEY, String(n)); } catch (e) {}
  }

  /* ---------- avatar helpers ---------- */
  function createDefaultAvatar() {
    return {
      skin: 'skin-1',
      shirt: 'shirt-basic',
      pants: 'pants-basic',
      hair: 'hair-short',
      accessory: 'acc-none',
      background: 'bg-default',
      owned: DEFAULT_OWNED.slice()
    };
  }

  function migrateAvatar(av) {
    var changed = false;
    Object.keys(DEFAULTS).forEach(function (cat) {
      if (!av[cat] || !getItem(cat, av[cat])) {
        av[cat] = DEFAULTS[cat];
        changed = true;
      }
    });
    if (!av.owned || !Array.isArray(av.owned)) {
      av.owned = [];
      changed = true;
    }
    DEFAULT_OWNED.forEach(function (id) {
      if (av.owned.indexOf(id) < 0) {
        av.owned.push(id);
        changed = true;
      }
    });
    if (changed) saveAvatar(av);
    return av;
  }

  function ensureAvatar() {
    var av = loadAvatar();
    if (!av) {
      av = createDefaultAvatar();
      saveAvatar(av);
    } else {
      migrateAvatar(av);
    }
    return av;
  }

  function getItem(category, id) {
    var items = SHOP_ITEMS[category];
    if (!items) return null;
    for (var i = 0; i < items.length; i++) {
      if (items[i].id === id) return items[i];
    }
    return null;
  }

  function isOwned(avatar, itemId) {
    return !!(avatar && avatar.owned && avatar.owned.indexOf(itemId) >= 0);
  }

  function buyItem(category, itemId) {
    var avatar = ensureAvatar();
    var item = getItem(category, itemId);
    if (!item) return { success: false, error: 'Item not found' };
    if (isOwned(avatar, itemId)) return { success: false, error: 'Already owned' };
    var coins = loadCoins();
    if (coins < item.price) return { success: false, error: 'Not enough coins' };
    saveCoins(coins - item.price);
    avatar.owned.push(itemId);
    avatar[category] = itemId;
    saveAvatar(avatar);
    return { success: true, coins: loadCoins() };
  }

  function equipItem(category, itemId) {
    var avatar = ensureAvatar();
    if (!isOwned(avatar, itemId)) return { success: false, error: 'Not owned' };
    avatar[category] = itemId;
    saveAvatar(avatar);
    return { success: true };
  }

  /* ---------- SVG layer renderers ---------- */
  function skinColor(id) {
    return SKIN_COLORS[id] || SKIN_COLORS['skin-1'];
  }

  function escAttr(s) {
    return String(s == null ? '' : s).replace(/"/g, '&quot;');
  }

  function renderPants(pants, pc) {
    if (!pants) return '';
    var c = escAttr(pc);
    if (pants.id === 'pants-short') {
      return '<path d="M34,74 L66,74 L67,84 L54,84 L50,78 L46,84 L33,84 Z" fill="' + c + '"/>';
    }
    return '<path d="M34,74 L66,74 L67,94 L54,94 L50,80 L46,94 L33,94 Z" fill="' + c + '"/>';
  }

  function renderShirt(shirt, shc) {
    if (!shirt) return '';
    var c = escAttr(shc);
    var s = '';
    // sleeves
    s += '<rect x="25" y="50" width="11" height="17" rx="5" fill="' + c + '"/>';
    s += '<rect x="64" y="50" width="11" height="17" rx="5" fill="' + c + '"/>';
    // torso
    s += '<path d="M32,50 Q40,46 50,46 Q60,46 68,50 L66,76 L34,76 Z" fill="' + c + '"/>';
    if (shirt.id === 'shirt-hoodie') {
      s += '<path d="M40,50 Q50,42 60,50 L56,46 Q50,40 44,46 Z" fill="' + c + '"/>';
      s += '<path d="M40,50 Q50,42 60,50" stroke="rgba(0,0,0,.18)" stroke-width="1" fill="none"/>';
      s += '<rect x="43" y="60" width="14" height="9" rx="2" fill="none" stroke="rgba(0,0,0,.18)" stroke-width="1"/>';
      s += '<line x1="50" y1="46" x2="50" y2="54" stroke="rgba(0,0,0,.18)" stroke-width="1"/>';
    } else if (shirt.id === 'shirt-suit') {
      // white shirt collar
      s += '<path d="M46,46 L50,54 L54,46 Z" fill="#FFFFFF"/>';
      // tie
      s += '<path d="M48,54 L52,54 L51,70 L49,70 Z" fill="#C0392B"/>';
      // lapels
      s += '<path d="M46,46 L40,55 L43,60 L49,50 Z" fill="#0f0f1e"/>';
      s += '<path d="M54,46 L60,55 L57,60 L51,50 Z" fill="#0f0f1e"/>';
    } else if (shirt.id === 'shirt-tuxedo') {
      // white shirt front
      s += '<rect x="47" y="46" width="6" height="22" fill="#FFFFFF"/>';
      // bow tie
      s += '<path d="M43,50 L48,53 L43,56 Z" fill="#000000"/>';
      s += '<path d="M57,50 L52,53 L57,56 Z" fill="#000000"/>';
      s += '<rect x="48" y="51" width="4" height="4" rx="1" fill="#000000"/>';
      // lapels
      s += '<path d="M46,46 L38,57 L42,63 L49,50 Z" fill="#000000"/>';
      s += '<path d="M54,46 L62,57 L58,63 L51,50 Z" fill="#000000"/>';
    }
    return s;
  }

  function renderHair(hair, hc) {
    if (!hair) return '';
    var c = escAttr(hc);
    var s = '';
    if (hair.id === 'hair-long') {
      s += '<path d="M33,29 Q29,52 35,70 L41,68 Q37,49 39,30 Z" fill="' + c + '"/>';
      s += '<path d="M67,29 Q71,52 65,70 L59,68 Q63,49 61,30 Z" fill="' + c + '"/>';
    }
    // top cap
    s += '<path d="M33,30 Q32,13 50,13 Q68,13 67,30 Q60,21 50,20 Q40,21 33,30 Z" fill="' + c + '"/>';
    return s;
  }

  function renderFace() {
    return '<circle cx="44" cy="31" r="1.5" fill="#3A3550"/>' +
      '<circle cx="56" cy="31" r="1.5" fill="#3A3550"/>' +
      '<path d="M46,37 Q50,39 54,37" stroke="#3A3550" stroke-width="1.2" fill="none" stroke-linecap="round"/>';
  }

  function renderAccessory(acc) {
    if (!acc) return '';
    switch (acc.id) {
      case 'acc-glasses':
        return '<g stroke="#3A3550" stroke-width="1.4" fill="none">' +
          '<circle cx="43" cy="31" r="4"/>' +
          '<circle cx="57" cy="31" r="4"/>' +
          '<line x1="47" y1="31" x2="53" y2="31"/>' +
          '</g>';
      case 'acc-sunglasses':
        return '<g fill="#2C3E50" stroke="#1a1a2e" stroke-width="1">' +
          '<rect x="38" y="27" width="10" height="8" rx="2"/>' +
          '<rect x="52" y="27" width="10" height="8" rx="2"/>' +
          '<line x1="48" y1="31" x2="52" y2="31" stroke="#1a1a2e"/>' +
          '</g>';
      case 'acc-cap':
        return '<path d="M34,23 Q34,12 50,12 Q66,12 66,23 L66,25 L34,25 Z" fill="#E74C3C"/>' +
          '<rect x="28" y="25" width="44" height="3" rx="1.5" fill="#C0392B"/>' +
          '<circle cx="50" cy="16" r="2" fill="#FFFFFF"/>';
      case 'acc-crown':
        return '<path d="M36,18 L40,11 L44,18 L50,9 L56,18 L60,11 L64,18 L64,22 L36,22 Z" fill="#F1C40F" stroke="#C0902B" stroke-width="0.8"/>' +
          '<circle cx="50" cy="13" r="1.5" fill="#E74C3C"/>';
      case 'acc-headphones':
        return '<path d="M34,30 Q34,12 50,12 Q66,12 66,30" stroke="#2C3E50" stroke-width="2.5" fill="none"/>' +
          '<rect x="28" y="28" width="9" height="11" rx="3" fill="#2C3E50"/>' +
          '<rect x="63" y="28" width="9" height="11" rx="3" fill="#2C3E50"/>';
      case 'acc-scarf':
        return '<rect x="40" y="42" width="20" height="6" rx="3" fill="#E74C3C"/>' +
          '<path d="M42,48 L38,56 L42,55 Z" fill="#E74C3C"/>' +
          '<line x1="42" y1="44" x2="58" y2="44" stroke="rgba(0,0,0,.15)" stroke-width="0.5"/>';
      case 'acc-beard':
        return '<path d="M37,34 Q38,46 50,48 Q62,46 63,34 Q58,42 50,42 Q42,42 37,34 Z" fill="#3E2723"/>';
      case 'acc-mask':
        return '<path d="M37,34 L63,34 L63,44 Q50,47 37,44 Z" fill="#D5DBDB" stroke="#85929E" stroke-width="0.5"/>' +
          '<path d="M37,35 L33,37" stroke="#85929E" stroke-width="1" fill="none"/>' +
          '<path d="M63,35 L67,37" stroke="#85929E" stroke-width="1" fill="none"/>';
      case 'acc-earring':
        return '<circle cx="35" cy="37" r="1.8" fill="#F1C40F"/>' +
          '<circle cx="35" cy="37" r="0.7" fill="#FFFFFF"/>';
      default:
        return '';
    }
  }

  /* ---------- main render ---------- */
  function renderAvatar(avatar, size) {
    avatar = avatar || ensureAvatar();
    size = size || 48;

    var skin = getItem('skin', avatar.skin) || SHOP_ITEMS.skin[0];
    var shirt = getItem('shirt', avatar.shirt) || SHOP_ITEMS.shirt[0];
    var pants = getItem('pants', avatar.pants) || SHOP_ITEMS.pants[0];
    var hair = getItem('hair', avatar.hair) || SHOP_ITEMS.hair[0];
    var acc = getItem('accessory', avatar.accessory) || SHOP_ITEMS.accessory[0];
    var bg = getItem('background', avatar.background) || SHOP_ITEMS.background[0];

    var bgCss = bg && bg.css ? bg.css : SHOP_ITEMS.background[0].css;
    var sc = skinColor(skin.id);
    var hc = (hair && hair.color) || '#3E2723';
    var shc = (shirt && shirt.color) || '#FFFFFF';
    var pc = (pants && pants.color) || '#5D6D7E';

    var svg = '<svg viewBox="0 0 100 100" width="' + size + '" height="' + size + '" xmlns="http://www.w3.org/2000/svg">';
    // 1. neck (skin)
    svg += '<rect x="45" y="44" width="10" height="7" fill="' + escAttr(sc) + '"/>';
    // 2. pants
    svg += renderPants(pants, pc);
    // 3. shirt (torso + sleeves)
    svg += renderShirt(shirt, shc);
    // 4. head + ears
    svg += '<circle cx="50" cy="32" r="15" fill="' + escAttr(sc) + '"/>';
    svg += '<circle cx="35" cy="33" r="2.5" fill="' + escAttr(sc) + '"/>';
    svg += '<circle cx="65" cy="33" r="2.5" fill="' + escAttr(sc) + '"/>';
    // 5. hair
    svg += renderHair(hair, hc);
    // 6. face
    svg += renderFace();
    // 7. accessory
    svg += renderAccessory(acc);
    svg += '</svg>';

    return '<div class="aes-avatar" style="width:' + size + 'px;height:' + size + 'px;' + bgCss + '">' + svg + '</div>';
  }

  /* ---------- header / coins ---------- */
  function renderHeader() {
    var avatar = ensureAvatar();
    var slots = document.querySelectorAll('.aes-avatar-slot');
    Array.prototype.forEach.call(slots, function (slot) {
      slot.innerHTML = renderAvatar(avatar, 36);
    });
  }

  function renderCoins() {
    var els = document.querySelectorAll('.aes-coin-balance');
    var coins = loadCoins();
    Array.prototype.forEach.call(els, function (el) { el.textContent = coins; });
  }

  function init() {
    ensureAvatar();
    renderHeader();
    renderCoins();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  global.AESAvatar = {
    SHOP_ITEMS: SHOP_ITEMS,
    loadAvatar: loadAvatar,
    saveAvatar: saveAvatar,
    loadCoins: loadCoins,
    saveCoins: saveCoins,
    ensureAvatar: ensureAvatar,
    buyItem: buyItem,
    equipItem: equipItem,
    isOwned: isOwned,
    getItem: getItem,
    renderAvatar: renderAvatar,
    renderHeader: renderHeader,
    renderCoins: renderCoins
  };
})(window);

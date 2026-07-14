/* ============================================================
   AES Avatar System - Skin & Accessories
   - Avatar created on first login
   - Coins spent on accessories in shop
   - Stored in localStorage
   ============================================================ */
(function (global) {
  'use strict';

  var AVATAR_KEY = 'aes_avatar';
  var COIN_KEY = 'aes_coins';

  var SHOP_ITEMS = {
    base: [
      { id: 'base-default', emoji: '\u{1F9D1}', name: 'Standard', price: 0 },
      { id: 'base-boy', emoji: '\u{1F468}', name: 'Boy', price: 100 },
      { id: 'base-girl', emoji: '\u{1F469}', name: 'Girl', price: 100 },
      { id: 'base-cool', emoji: '\u{1F60E}', name: 'Cool', price: 250 },
      { id: 'base-nerd', emoji: '\u{1F913}', name: 'Nerd', price: 250 },
      { id: 'base-star', emoji: '\u{1F929}', name: 'Star', price: 500 },
      { id: 'base-cat', emoji: '\u{1F431}', name: 'Cat', price: 600 },
      { id: 'base-robot', emoji: '\u{1F916}', name: 'Robot', price: 800 }
    ],
    hat: [
      { id: 'hat-none', emoji: '', name: 'No hat', price: 0 },
      { id: 'hat-grad', emoji: '\u{1F393}', name: 'Graduate', price: 200 },
      { id: 'hat-crown', emoji: '\u{1F451}', name: 'Crown', price: 1000 },
      { id: 'hat-cap', emoji: '\u{1F9E2}', name: 'Cap', price: 150 },
      { id: 'hat-top', emoji: '\u{1F3A9}', name: 'Top hat', price: 300 },
      { id: 'hat-party', emoji: '\u{1F973}', name: 'Party', price: 400 }
    ],
    glasses: [
      { id: 'glasses-none', emoji: '', name: 'No glasses', price: 0 },
      { id: 'glasses-round', emoji: '\u{1F453}', name: 'Round', price: 150 },
      { id: 'glasses-sun', emoji: '\u{1F576}\u{FE0F}', name: 'Sunglasses', price: 300 },
      { id: 'glasses-3d', emoji: '\u{1F97D}', name: '3D glasses', price: 350 }
    ],
    accessory: [
      { id: 'acc-none', emoji: '', name: 'None', price: 0 },
      { id: 'acc-headphones', emoji: '\u{1F3A7}', name: 'Headphones', price: 200 },
      { id: 'acc-flower', emoji: '\u{1F338}', name: 'Flower', price: 100 },
      { id: 'acc-fire', emoji: '\u{1F525}', name: 'Fire', price: 500 },
      { id: 'acc-sparkle', emoji: '\u{2728}', name: 'Sparkle', price: 250 },
      { id: 'acc-bolt', emoji: '\u{26A1}', name: 'Bolt', price: 400 }
    ],
    background: [
      { id: 'bg-default', name: 'Standard', price: 0, css: 'background:linear-gradient(135deg,#E5DAF0,#CDBCE6);' },
      { id: 'bg-mint', name: 'Mint', price: 100, css: 'background:linear-gradient(135deg,#D6EBDC,#BFE3CE);' },
      { id: 'bg-pink', name: 'Pink', price: 100, css: 'background:linear-gradient(135deg,#F2DCDC,#E9C4C4);' },
      { id: 'bg-cream', name: 'Cream', price: 100, css: 'background:linear-gradient(135deg,#FBF1DD,#F3E2B8);' },
      { id: 'bg-blue', name: 'Ocean', price: 200, css: 'background:linear-gradient(135deg,#DCEAF5,#B8D4E8);' },
      { id: 'bg-sunset', name: 'Sunset', price: 300, css: 'background:linear-gradient(135deg,#FFE5B4,#FFB6A3);' },
      { id: 'bg-galaxy', name: 'Galaxy', price: 500, css: 'background:linear-gradient(135deg,#2D2B55,#6B4E9E);' }
    ]
  };

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

  function createDefaultAvatar() {
    return {
      base: 'base-default',
      hat: 'hat-none',
      glasses: 'glasses-none',
      accessory: 'acc-none',
      background: 'bg-default',
      owned: ['base-default', 'hat-none', 'glasses-none', 'acc-none', 'bg-default']
    };
  }

  function ensureAvatar() {
    var av = loadAvatar();
    if (!av) {
      av = createDefaultAvatar();
      saveAvatar(av);
    }
    return av;
  }

  function getItem(category, id) {
    var items = SHOP_ITEMS[category];
    if (!items) return null;
    return items.find(function(item) { return item.id === id; });
  }

  function isOwned(avatar, itemId) {
    return avatar.owned && avatar.owned.indexOf(itemId) >= 0;
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

  function renderAvatar(avatar, size) {
    avatar = avatar || ensureAvatar();
    size = size || 48;
    var baseItem = getItem('base', avatar.base) || SHOP_ITEMS.base[0];
    var hatItem = getItem('hat', avatar.hat) || SHOP_ITEMS.hat[0];
    var glassesItem = getItem('glasses', avatar.glasses) || SHOP_ITEMS.glasses[0];
    var accItem = getItem('accessory', avatar.accessory) || SHOP_ITEMS.accessory[0];
    var bgItem = getItem('background', avatar.background) || SHOP_ITEMS.background[0];

    var bg = bgItem ? bgItem.css : 'background:linear-gradient(135deg,#E5DAF0,#CDBCE6);';

    var layers = '';
    if (hatItem && hatItem.emoji) layers += '<span class="aes-avatar-hat">' + hatItem.emoji + '</span>';
    if (baseItem && baseItem.emoji) layers += '<span class="aes-avatar-base">' + baseItem.emoji + '</span>';
    if (glassesItem && glassesItem.emoji) layers += '<span class="aes-avatar-glasses">' + glassesItem.emoji + '</span>';
    if (accItem && accItem.emoji) layers += '<span class="aes-avatar-acc">' + accItem.emoji + '</span>';

    return '<div class="aes-avatar" style="width:' + size + 'px;height:' + size + 'px;' + bg + '">' + layers + '</div>';
  }

  function renderHeader() {
    var slots = document.querySelectorAll('.aes-avatar-slot');
    var avatar = ensureAvatar();
    slots.forEach(function(slot) {
      slot.innerHTML = renderAvatar(avatar, 36);
    });
  }

  function renderCoins() {
    var els = document.querySelectorAll('.aes-coin-balance');
    var coins = loadCoins();
    els.forEach(function(el) { el.textContent = coins; });
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

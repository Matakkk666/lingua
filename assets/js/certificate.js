/* ============================================================
   AES Certificate — generates a downloadable completion certificate
   Self-contained (canvas based). Usage:
     window.AESCertificate.show(courseTitle, userName)
   ============================================================ */
(function () {
  'use strict';
  var MONTHS = ['\u044f\u043d\u0432\u0430\u0440\u044f', '\u0444\u0435\u0432\u0440\u0430\u043b\u044f', '\u043c\u0430\u0440\u0442\u0430', '\u0430\u043f\u0440\u0435\u043b\u044f', '\u043c\u0430\u044f', '\u0438\u044e\u043d\u044f', '\u0438\u044e\u043b\u044f', '\u0430\u0432\u0433\u0443\u0441\u0442\u0430', '\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f', '\u043e\u043a\u0442\u044f\u0431\u0440\u044f', '\u043d\u043e\u044f\u0431\u0440\u044f', '\u0434\u0435\u043a\u0430\u0431\u0440\u044f'];

  function dateStr() {
    var d = new Date();
    return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear() + ' \u0433.';
  }

  function emailToName(email) {
    if (!email) return '\u0421\u0442\u0443\u0434\u0435\u043d\u0442';
    var base = String(email).split('@')[0].replace(/[._-]+/g, ' ').trim();
    if (!base) return email;
    return base.split(' ').map(function (w) {
      return w ? w.charAt(0).toUpperCase() + w.slice(1) : w;
    }).join(' ');
  }

  function resolveName(userName) {
    if (userName) return userName;
    var u = window.AESAuth && window.AESAuth.getUser && window.AESAuth.getUser();
    if (u) return emailToName(u.email);
    return '\u0421\u0442\u0443\u0434\u0435\u043d\u0442';
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function render(canvas, name, course) {
    var W = 1400, H = 990;
    canvas.width = W; canvas.height = H;
    var x = canvas.getContext('2d');

    // Background
    x.fillStyle = '#FBF7F1';
    x.fillRect(0, 0, W, H);

    // Soft decorative blobs
    x.save();
    x.globalAlpha = 0.5;
    x.fillStyle = '#E5DAF0';
    x.beginPath(); x.arc(150, 140, 120, 0, Math.PI * 2); x.fill();
    x.fillStyle = '#D6EBDC';
    x.beginPath(); x.arc(W - 160, H - 150, 150, 0, Math.PI * 2); x.fill();
    x.restore();

    // Frames
    x.strokeStyle = '#9D7BC4';
    x.lineWidth = 6;
    roundRect(x, 46, 46, W - 92, H - 92, 26); x.stroke();
    x.strokeStyle = '#7BB38E';
    x.lineWidth = 2;
    roundRect(x, 70, 70, W - 140, H - 140, 18); x.stroke();

    x.textAlign = 'center';

    // Brand
    x.fillStyle = '#3A3550';
    x.font = '700 46px Georgia, "Times New Roman", serif';
    x.fillText('Lingua Language School', W / 2, 190);

    // Eyebrow
    x.fillStyle = '#9D7BC4';
    x.font = '600 24px Arial, sans-serif';
    x.fillText('\u0421\u0415\u0420\u0422\u0418\u0424\u0418\u041a\u0410\u0422 \u041e \u0417\u0410\u0412\u0415\u0420\u0428\u0415\u041d\u0418\u0418 \u041a\u0423\u0420\u0421\u0410', W / 2, 250);

    // Divider
    x.strokeStyle = '#9D7BC4';
    x.lineWidth = 3;
    x.beginPath(); x.moveTo(W / 2 - 70, 280); x.lineTo(W / 2 + 70, 280); x.stroke();

    // "This certifies that"
    x.fillStyle = 'rgba(58,53,80,0.65)';
    x.font = '400 26px Arial, sans-serif';
    x.fillText('\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u043c \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0441\u044f, \u0447\u0442\u043e', W / 2, 400);

    // Name
    x.fillStyle = '#3A3550';
    x.font = 'italic 700 68px Georgia, serif';
    x.fillText(name, W / 2, 480);

    // Name underline
    var nameW = Math.min(x.measureText(name).width + 120, W - 260);
    x.strokeStyle = 'rgba(157,123,196,0.4)';
    x.lineWidth = 2;
    x.beginPath(); x.moveTo(W / 2 - nameW / 2, 510); x.lineTo(W / 2 + nameW / 2, 510); x.stroke();

    // "successfully completed the course"
    x.fillStyle = 'rgba(58,53,80,0.65)';
    x.font = '400 26px Arial, sans-serif';
    x.fillText('\u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b(\u0430) \u043a\u0443\u0440\u0441', W / 2, 580);

    // Course title (wrap if long)
    x.fillStyle = '#9D7BC4';
    x.font = '700 44px Georgia, serif';
    var words = String(course).split(' ');
    var line = '', lines = [], maxW = W - 300;
    for (var i = 0; i < words.length; i++) {
      var test = line ? line + ' ' + words[i] : words[i];
      if (x.measureText(test).width > maxW && line) { lines.push(line); line = words[i]; }
      else line = test;
    }
    if (line) lines.push(line);
    var cy = 645;
    lines.slice(0, 2).forEach(function (ln) { x.fillText(ln, W / 2, cy); cy += 56; });

    // Footer: date + signature
    var footY = 860;
    x.strokeStyle = 'rgba(58,53,80,0.35)';
    x.lineWidth = 1.5;
    x.beginPath(); x.moveTo(230, footY); x.lineTo(520, footY); x.stroke();
    x.beginPath(); x.moveTo(W - 520, footY); x.lineTo(W - 230, footY); x.stroke();

    x.fillStyle = '#3A3550';
    x.font = '500 24px Arial, sans-serif';
    x.fillText(dateStr(), 375, footY - 16);
    x.font = 'italic 500 26px Georgia, serif';
    x.fillText('Lingua', W - 375, footY - 16);

    x.fillStyle = 'rgba(58,53,80,0.55)';
    x.font = '400 20px Arial, sans-serif';
    x.fillText('\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438', 375, footY + 30);
    x.fillText('\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u0448\u043a\u043e\u043b\u044b', W - 375, footY + 30);
  }

  function download(canvas, course) {
    try {
      var link = document.createElement('a');
      link.download = 'Lingua-\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442-' + String(course).replace(/[^\w\u0400-\u04FF]+/g, '-').slice(0, 40) + '.png';
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) { alert('\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442.'); }
  }

  function show(courseTitle, userName) {
    var name = resolveName(userName);
    var overlay = document.createElement('div');
    overlay.className = 'aes-cert-overlay';
    overlay.innerHTML =
      '<div class="aes-cert-modal">' +
        '<button class="aes-cert-close" aria-label="\u0417\u0430\u043a\u0440\u044b\u0442\u044c">&times;</button>' +
        '<div class="aes-cert-canvas-wrap"><canvas class="aes-cert-canvas"></canvas></div>' +
        '<div class="aes-cert-actions">' +
          '<button class="aes-btn aes-btn-primary aes-cert-dl">\u0421\u043a\u0430\u0447\u0430\u0442\u044c PNG</button>' +
          '<button class="aes-btn aes-cert-cancel">\u0417\u0430\u043a\u0440\u044b\u0442\u044c</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    document.body.classList.add('aes-locked');

    var canvas = overlay.querySelector('.aes-cert-canvas');
    render(canvas, name, courseTitle);

    function close() {
      overlay.remove();
      document.body.classList.remove('aes-locked');
    }
    overlay.querySelector('.aes-cert-close').addEventListener('click', close);
    overlay.querySelector('.aes-cert-cancel').addEventListener('click', close);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    overlay.querySelector('.aes-cert-dl').addEventListener('click', function () { download(canvas, courseTitle); });

    requestAnimationFrame(function () { overlay.classList.add('is-open'); });
  }

  window.AESCertificate = { show: show };
})();

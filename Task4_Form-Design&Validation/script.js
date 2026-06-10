/* ══════════════════════════════════════════════════════════════
   DecodeLabs – script.js
   Full A-Z country list, searchable dropdown, form switching,
   validation, password strength, shake errors, success states.
══════════════════════════════════════════════════════════════ */

'use strict';

// ─── FULL A-Z COUNTRY LIST ──────────────────────────────────────────────────
const COUNTRIES = [
  { flag:'🇦🇫', code:'+93',   name:'Afghanistan',              digits:9  },
  { flag:'🇦🇱', code:'+355',  name:'Albania',                  digits:9  },
  { flag:'🇩🇿', code:'+213',  name:'Algeria',                  digits:9  },
  { flag:'🇦🇩', code:'+376',  name:'Andorra',                  digits:6  },
  { flag:'🇦🇴', code:'+244',  name:'Angola',                   digits:9  },
  { flag:'🇦🇬', code:'+1',    name:'Antigua and Barbuda',      digits:10 },
  { flag:'🇦🇷', code:'+54',   name:'Argentina',                digits:10 },
  { flag:'🇦🇲', code:'+374',  name:'Armenia',                  digits:8  },
  { flag:'🇦🇺', code:'+61',   name:'Australia',                digits:9  },
  { flag:'🇦🇹', code:'+43',   name:'Austria',                  digits:10 },
  { flag:'🇦🇿', code:'+994',  name:'Azerbaijan',               digits:9  },
  { flag:'🇧🇸', code:'+1',    name:'Bahamas',                  digits:10 },
  { flag:'🇧🇭', code:'+973',  name:'Bahrain',                  digits:8  },
  { flag:'🇧🇩', code:'+880',  name:'Bangladesh',               digits:10 },
  { flag:'🇧🇧', code:'+1',    name:'Barbados',                 digits:10 },
  { flag:'🇧🇾', code:'+375',  name:'Belarus',                  digits:9  },
  { flag:'🇧🇪', code:'+32',   name:'Belgium',                  digits:9  },
  { flag:'🇧🇿', code:'+501',  name:'Belize',                   digits:7  },
  { flag:'🇧🇯', code:'+229',  name:'Benin',                    digits:8  },
  { flag:'🇧🇹', code:'+975',  name:'Bhutan',                   digits:8  },
  { flag:'🇧🇴', code:'+591',  name:'Bolivia',                  digits:8  },
  { flag:'🇧🇦', code:'+387',  name:'Bosnia and Herzegovina',   digits:8  },
  { flag:'🇧🇼', code:'+267',  name:'Botswana',                 digits:7  },
  { flag:'🇧🇷', code:'+55',   name:'Brazil',                   digits:11 },
  { flag:'🇧🇳', code:'+673',  name:'Brunei',                   digits:7  },
  { flag:'🇧🇬', code:'+359',  name:'Bulgaria',                 digits:9  },
  { flag:'🇧🇫', code:'+226',  name:'Burkina Faso',             digits:8  },
  { flag:'🇧🇮', code:'+257',  name:'Burundi',                  digits:8  },
  { flag:'🇰🇭', code:'+855',  name:'Cambodia',                 digits:9  },
  { flag:'🇨🇲', code:'+237',  name:'Cameroon',                 digits:9  },
  { flag:'🇨🇦', code:'+1',    name:'Canada',                   digits:10 },
  { flag:'🇨🇻', code:'+238',  name:'Cape Verde',               digits:7  },
  { flag:'🇨🇫', code:'+236',  name:'Central African Republic', digits:8  },
  { flag:'🇹🇩', code:'+235',  name:'Chad',                     digits:8  },
  { flag:'🇨🇱', code:'+56',   name:'Chile',                    digits:9  },
  { flag:'🇨🇳', code:'+86',   name:'China',                    digits:11 },
  { flag:'🇨🇴', code:'+57',   name:'Colombia',                 digits:10 },
  { flag:'🇰🇲', code:'+269',  name:'Comoros',                  digits:7  },
  { flag:'🇨🇬', code:'+242',  name:'Congo',                    digits:9  },
  { flag:'🇨🇷', code:'+506',  name:'Costa Rica',               digits:8  },
  { flag:'🇭🇷', code:'+385',  name:'Croatia',                  digits:9  },
  { flag:'🇨🇺', code:'+53',   name:'Cuba',                     digits:8  },
  { flag:'🇨🇾', code:'+357',  name:'Cyprus',                   digits:8  },
  { flag:'🇨🇿', code:'+420',  name:'Czech Republic',           digits:9  },
  { flag:'🇩🇰', code:'+45',   name:'Denmark',                  digits:8  },
  { flag:'🇩🇯', code:'+253',  name:'Djibouti',                 digits:8  },
  { flag:'🇩🇲', code:'+1',    name:'Dominica',                 digits:10 },
  { flag:'🇩🇴', code:'+1',    name:'Dominican Republic',       digits:10 },
  { flag:'🇪🇨', code:'+593',  name:'Ecuador',                  digits:9  },
  { flag:'🇪🇬', code:'+20',   name:'Egypt',                    digits:10 },
  { flag:'🇸🇻', code:'+503',  name:'El Salvador',              digits:8  },
  { flag:'🇬🇶', code:'+240',  name:'Equatorial Guinea',        digits:9  },
  { flag:'🇪🇷', code:'+291',  name:'Eritrea',                  digits:7  },
  { flag:'🇪🇪', code:'+372',  name:'Estonia',                  digits:8  },
  { flag:'🇸🇿', code:'+268',  name:'Eswatini',                 digits:8  },
  { flag:'🇪🇹', code:'+251',  name:'Ethiopia',                 digits:9  },
  { flag:'🇫🇯', code:'+679',  name:'Fiji',                     digits:7  },
  { flag:'🇫🇮', code:'+358',  name:'Finland',                  digits:10 },
  { flag:'🇫🇷', code:'+33',   name:'France',                   digits:9  },
  { flag:'🇬🇦', code:'+241',  name:'Gabon',                    digits:8  },
  { flag:'🇬🇲', code:'+220',  name:'Gambia',                   digits:7  },
  { flag:'🇬🇪', code:'+995',  name:'Georgia',                  digits:9  },
  { flag:'🇩🇪', code:'+49',   name:'Germany',                  digits:11 },
  { flag:'🇬🇭', code:'+233',  name:'Ghana',                    digits:9  },
  { flag:'🇬🇷', code:'+30',   name:'Greece',                   digits:10 },
  { flag:'🇬🇩', code:'+1',    name:'Grenada',                  digits:10 },
  { flag:'🇬🇹', code:'+502',  name:'Guatemala',                digits:8  },
  { flag:'🇬🇳', code:'+224',  name:'Guinea',                   digits:9  },
  { flag:'🇬🇼', code:'+245',  name:'Guinea-Bissau',            digits:7  },
  { flag:'🇬🇾', code:'+592',  name:'Guyana',                   digits:7  },
  { flag:'🇭🇹', code:'+509',  name:'Haiti',                    digits:8  },
  { flag:'🇭🇳', code:'+504',  name:'Honduras',                 digits:8  },
  { flag:'🇭🇺', code:'+36',   name:'Hungary',                  digits:9  },
  { flag:'🇮🇸', code:'+354',  name:'Iceland',                  digits:7  },
  { flag:'🇮🇳', code:'+91',   name:'India',                    digits:10 },
  { flag:'🇮🇩', code:'+62',   name:'Indonesia',                digits:11 },
  { flag:'🇮🇷', code:'+98',   name:'Iran',                     digits:10 },
  { flag:'🇮🇶', code:'+964',  name:'Iraq',                     digits:10 },
  { flag:'🇮🇪', code:'+353',  name:'Ireland',                  digits:9  },
  { flag:'🇮🇱', code:'+972',  name:'Israel',                   digits:9  },
  { flag:'🇮🇹', code:'+39',   name:'Italy',                    digits:10 },
  { flag:'🇯🇲', code:'+1',    name:'Jamaica',                  digits:10 },
  { flag:'🇯🇵', code:'+81',   name:'Japan',                    digits:11 },
  { flag:'🇯🇴', code:'+962',  name:'Jordan',                   digits:9  },
  { flag:'🇰🇿', code:'+7',    name:'Kazakhstan',               digits:10 },
  { flag:'🇰🇪', code:'+254',  name:'Kenya',                    digits:9  },
  { flag:'🇰🇮', code:'+686',  name:'Kiribati',                 digits:8  },
  { flag:'🇰🇵', code:'+850',  name:'North Korea',              digits:10 },
  { flag:'🇰🇷', code:'+82',   name:'South Korea',              digits:10 },
  { flag:'🇰🇼', code:'+965',  name:'Kuwait',                   digits:8  },
  { flag:'🇰🇬', code:'+996',  name:'Kyrgyzstan',               digits:9  },
  { flag:'🇱🇦', code:'+856',  name:'Laos',                     digits:9  },
  { flag:'🇱🇻', code:'+371',  name:'Latvia',                   digits:8  },
  { flag:'🇱🇧', code:'+961',  name:'Lebanon',                  digits:8  },
  { flag:'🇱🇸', code:'+266',  name:'Lesotho',                  digits:8  },
  { flag:'🇱🇷', code:'+231',  name:'Liberia',                  digits:8  },
  { flag:'🇱🇾', code:'+218',  name:'Libya',                    digits:9  },
  { flag:'🇱🇮', code:'+423',  name:'Liechtenstein',            digits:7  },
  { flag:'🇱🇹', code:'+370',  name:'Lithuania',                digits:8  },
  { flag:'🇱🇺', code:'+352',  name:'Luxembourg',               digits:9  },
  { flag:'🇲🇬', code:'+261',  name:'Madagascar',               digits:9  },
  { flag:'🇲🇼', code:'+265',  name:'Malawi',                   digits:9  },
  { flag:'🇲🇾', code:'+60',   name:'Malaysia',                 digits:10 },
  { flag:'🇲🇻', code:'+960',  name:'Maldives',                 digits:7  },
  { flag:'🇲🇱', code:'+223',  name:'Mali',                     digits:8  },
  { flag:'🇲🇹', code:'+356',  name:'Malta',                    digits:8  },
  { flag:'🇲🇭', code:'+692',  name:'Marshall Islands',         digits:7  },
  { flag:'🇲🇷', code:'+222',  name:'Mauritania',               digits:8  },
  { flag:'🇲🇺', code:'+230',  name:'Mauritius',                digits:8  },
  { flag:'🇲🇽', code:'+52',   name:'Mexico',                   digits:10 },
  { flag:'🇫🇲', code:'+691',  name:'Micronesia',               digits:7  },
  { flag:'🇲🇩', code:'+373',  name:'Moldova',                  digits:8  },
  { flag:'🇲🇨', code:'+377',  name:'Monaco',                   digits:8  },
  { flag:'🇲🇳', code:'+976',  name:'Mongolia',                 digits:8  },
  { flag:'🇲🇪', code:'+382',  name:'Montenegro',               digits:8  },
  { flag:'🇲🇦', code:'+212',  name:'Morocco',                  digits:9  },
  { flag:'🇲🇿', code:'+258',  name:'Mozambique',               digits:9  },
  { flag:'🇳🇦', code:'+264',  name:'Namibia',                  digits:9  },
  { flag:'🇳🇷', code:'+674',  name:'Nauru',                    digits:7  },
  { flag:'🇳🇵', code:'+977',  name:'Nepal',                    digits:10 },
  { flag:'🇳🇱', code:'+31',   name:'Netherlands',              digits:9  },
  { flag:'🇳🇿', code:'+64',   name:'New Zealand',              digits:9  },
  { flag:'🇳🇮', code:'+505',  name:'Nicaragua',                digits:8  },
  { flag:'🇳🇪', code:'+227',  name:'Niger',                    digits:8  },
  { flag:'🇳🇬', code:'+234',  name:'Nigeria',                  digits:10 },
  { flag:'🇲🇰', code:'+389',  name:'North Macedonia',          digits:8  },
  { flag:'🇳🇴', code:'+47',   name:'Norway',                   digits:8  },
  { flag:'🇴🇲', code:'+968',  name:'Oman',                     digits:8  },
  { flag:'🇵🇰', code:'+92',   name:'Pakistan',                 digits:10 },
  { flag:'🇵🇼', code:'+680',  name:'Palau',                    digits:7  },
  { flag:'🇵🇦', code:'+507',  name:'Panama',                   digits:8  },
  { flag:'🇵🇬', code:'+675',  name:'Papua New Guinea',         digits:8  },
  { flag:'🇵🇾', code:'+595',  name:'Paraguay',                 digits:9  },
  { flag:'🇵🇪', code:'+51',   name:'Peru',                     digits:9  },
  { flag:'🇵🇭', code:'+63',   name:'Philippines',              digits:10 },
  { flag:'🇵🇱', code:'+48',   name:'Poland',                   digits:9  },
  { flag:'🇵🇹', code:'+351',  name:'Portugal',                 digits:9  },
  { flag:'🇶🇦', code:'+974',  name:'Qatar',                    digits:8  },
  { flag:'🇷🇴', code:'+40',   name:'Romania',                  digits:10 },
  { flag:'🇷🇺', code:'+7',    name:'Russia',                   digits:10 },
  { flag:'🇷🇼', code:'+250',  name:'Rwanda',                   digits:9  },
  { flag:'🇰🇳', code:'+1',    name:'Saint Kitts and Nevis',    digits:10 },
  { flag:'🇱🇨', code:'+1',    name:'Saint Lucia',              digits:10 },
  { flag:'🇻🇨', code:'+1',    name:'Saint Vincent',            digits:10 },
  { flag:'🇼🇸', code:'+685',  name:'Samoa',                    digits:7  },
  { flag:'🇸🇲', code:'+378',  name:'San Marino',               digits:9  },
  { flag:'🇸🇹', code:'+239',  name:'Sao Tome and Principe',    digits:7  },
  { flag:'🇸🇦', code:'+966',  name:'Saudi Arabia',             digits:9  },
  { flag:'🇸🇳', code:'+221',  name:'Senegal',                  digits:9  },
  { flag:'🇷🇸', code:'+381',  name:'Serbia',                   digits:9  },
  { flag:'🇸🇨', code:'+248',  name:'Seychelles',               digits:7  },
  { flag:'🇸🇱', code:'+232',  name:'Sierra Leone',             digits:8  },
  { flag:'🇸🇬', code:'+65',   name:'Singapore',                digits:8  },
  { flag:'🇸🇰', code:'+421',  name:'Slovakia',                 digits:9  },
  { flag:'🇸🇮', code:'+386',  name:'Slovenia',                 digits:8  },
  { flag:'🇸🇧', code:'+677',  name:'Solomon Islands',          digits:7  },
  { flag:'🇸🇴', code:'+252',  name:'Somalia',                  digits:8  },
  { flag:'🇿🇦', code:'+27',   name:'South Africa',             digits:9  },
  { flag:'🇸🇸', code:'+211',  name:'South Sudan',              digits:9  },
  { flag:'🇪🇸', code:'+34',   name:'Spain',                    digits:9  },
  { flag:'🇱🇰', code:'+94',   name:'Sri Lanka',                digits:9  },
  { flag:'🇸🇩', code:'+249',  name:'Sudan',                    digits:9  },
  { flag:'🇸🇷', code:'+597',  name:'Suriname',                 digits:7  },
  { flag:'🇸🇪', code:'+46',   name:'Sweden',                   digits:9  },
  { flag:'🇨🇭', code:'+41',   name:'Switzerland',              digits:9  },
  { flag:'🇸🇾', code:'+963',  name:'Syria',                    digits:9  },
  { flag:'🇹🇼', code:'+886',  name:'Taiwan',                   digits:9  },
  { flag:'🇹🇯', code:'+992',  name:'Tajikistan',               digits:9  },
  { flag:'🇹🇿', code:'+255',  name:'Tanzania',                 digits:9  },
  { flag:'🇹🇭', code:'+66',   name:'Thailand',                 digits:9  },
  { flag:'🇹🇱', code:'+670',  name:'Timor-Leste',              digits:8  },
  { flag:'🇹🇬', code:'+228',  name:'Togo',                     digits:8  },
  { flag:'🇹🇴', code:'+676',  name:'Tonga',                    digits:7  },
  { flag:'🇹🇹', code:'+1',    name:'Trinidad and Tobago',      digits:10 },
  { flag:'🇹🇳', code:'+216',  name:'Tunisia',                  digits:8  },
  { flag:'🇹🇷', code:'+90',   name:'Turkey',                   digits:10 },
  { flag:'🇹🇲', code:'+993',  name:'Turkmenistan',             digits:8  },
  { flag:'🇹🇻', code:'+688',  name:'Tuvalu',                   digits:6  },
  { flag:'🇺🇬', code:'+256',  name:'Uganda',                   digits:9  },
  { flag:'🇺🇦', code:'+380',  name:'Ukraine',                  digits:9  },
  { flag:'🇦🇪', code:'+971',  name:'United Arab Emirates',     digits:9  },
  { flag:'🇬🇧', code:'+44',   name:'United Kingdom',           digits:10 },
  { flag:'🇺🇸', code:'+1',    name:'United States',            digits:10 },
  { flag:'🇺🇾', code:'+598',  name:'Uruguay',                  digits:9  },
  { flag:'🇺🇿', code:'+998',  name:'Uzbekistan',               digits:9  },
  { flag:'🇻🇺', code:'+678',  name:'Vanuatu',                  digits:7  },
  { flag:'🇻🇦', code:'+379',  name:'Vatican City',             digits:9  },
  { flag:'🇻🇪', code:'+58',   name:'Venezuela',                digits:10 },
  { flag:'🇻🇳', code:'+84',   name:'Vietnam',                  digits:10 },
  { flag:'🇾🇪', code:'+967',  name:'Yemen',                    digits:9  },
  { flag:'🇿🇲', code:'+260',  name:'Zambia',                   digits:9  },
  { flag:'🇿🇼', code:'+263',  name:'Zimbabwe',                 digits:9  },
];

// Default to India (+91)
let selectedCountryIndex = COUNTRIES.findIndex(c => c.name === 'India');

// ─── BUILD COUNTRY LIST ────────────────────────────────────────────────────────
function buildCountryList(prefix, filter = '') {
  const list = document.getElementById(`${prefix}-country-list`);
  if (!list) return;
  list.innerHTML = '';

  const lower = filter.toLowerCase();
  COUNTRIES.forEach((c, i) => {
    if (filter && !c.name.toLowerCase().includes(lower) && !c.code.includes(filter)) return;
    const li = document.createElement('li');
    if (i === selectedCountryIndex) li.classList.add('selected');
    li.innerHTML = `<span>${c.flag}</span><span>${c.name}</span><span class="c-code">${c.code}</span>`;
    li.addEventListener('click', () => selectCountry(prefix, i));
    list.appendChild(li);
  });
}

function selectCountry(prefix, index) {
  selectedCountryIndex = index;
  const c = COUNTRIES[index];
  document.getElementById(`${prefix}-selected-flag`).textContent = c.flag;
  document.getElementById(`${prefix}-selected-code`).textContent = c.code;

  // Update phone maxlength
  const phoneInput = document.getElementById(`${prefix}-phone`);
  if (phoneInput) {
    phoneInput.maxLength = c.digits;
    phoneInput.placeholder = `Enter ${c.digits}-digit number`;
  }
  closeDropdown(prefix);
}

function toggleDropdown(prefix) {
  const dd = document.getElementById(`${prefix}-country-dropdown`);
  if (!dd) return;
  const isOpen = dd.classList.contains('open');
  // Close all dropdowns first
  document.querySelectorAll('.country-dropdown').forEach(d => d.classList.remove('open'));
  if (!isOpen) {
    dd.classList.add('open');
    buildCountryList(prefix);
    const search = document.getElementById(`${prefix}-country-search`);
    if (search) { search.value = ''; search.focus(); }
  }
}

function closeDropdown(prefix) {
  const dd = document.getElementById(`${prefix}-country-dropdown`);
  if (dd) dd.classList.remove('open');
}

function filterCountries(prefix) {
  const val = document.getElementById(`${prefix}-country-search`).value;
  buildCountryList(prefix, val);
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.country-picker')) {
    document.querySelectorAll('.country-dropdown').forEach(d => d.classList.remove('open'));
  }
});

// ─── FORM SHOW / HIDE ─────────────────────────────────────────────────────────
function showForm(type) {
  const overlay = document.getElementById('form-overlay');
  const card    = document.getElementById('main-card');
  if (!overlay || !card) return;

  document.querySelectorAll('.form-view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById(`view-${type}`);
  if (target) target.classList.add('active');

  overlay.classList.add('open');
  // Reset card animation
  card.style.animation = 'none';
  void card.offsetWidth;
  card.style.animation = '';
}

function closeForm() {
  const overlay = document.getElementById('form-overlay');
  if (overlay) overlay.classList.remove('open');
}

// ─── PASSWORD TOGGLE ──────────────────────────────────────────────────────────
function togglePw(inputId, btn) {
  const inp = document.getElementById(inputId);
  if (!inp) return;
  if (inp.type === 'password') {
    inp.type = 'text';
    btn.textContent = '👁️';
    btn.setAttribute('aria-label', 'Hide password');
  } else {
    inp.type = 'password';
    btn.textContent = '🙈';
    btn.setAttribute('aria-label', 'Show password');
  }
}

// ─── PASSWORD STRENGTH ────────────────────────────────────────────────────────
function checkStrength(pw, prefix) {
  const reqs = {
    len:   pw.length >= 8 && pw.length <= 50,
    upper: /[A-Z]/.test(pw),
    lower: /[a-z]/.test(pw),
    num:   /[0-9]/.test(pw),
    sym:   /[^A-Za-z0-9]/.test(pw),
  };

  Object.keys(reqs).forEach(k => {
    const el = document.getElementById(`${prefix}-${k}`);
    if (el) el.classList.toggle('met', reqs[k]);
  });

  const met      = Object.values(reqs).filter(Boolean).length;
  const barPfx   = prefix === 'rr' ? 'rs' : 'ss';
  const colors   = ['', '#e53935', '#ffa726', '#43a047'];
  const labels   = ['', 'Weak password', 'Medium password', 'Strong password'];
  const level    = met <= 2 ? 1 : met <= 4 ? 2 : 3;

  for (let i = 1; i <= 3; i++) {
    const seg = document.getElementById(`${barPfx}${i}`);
    if (seg) seg.style.background = i <= level ? colors[level] : 'rgba(26,82,118,0.12)';
  }

  const lblId = prefix === 'rr' ? 'r-strength-label' : 's-strength-label';
  const lbl   = document.getElementById(lblId);
  if (lbl) {
    lbl.textContent = pw.length ? labels[level] : 'Password strength';
    lbl.style.color = pw.length ? colors[level] : '#5d8aa8';
  }

  return reqs;
}

// ─── SHAKE + ERROR ────────────────────────────────────────────────────────────
function shakeField(inputId, errId, show = true) {
  const inp = document.getElementById(inputId);
  const err = document.getElementById(errId);
  if (!inp || !err) return;

  if (show) {
    inp.classList.remove('success-field');
    inp.classList.add('error-field');
    err.classList.add('show');
    inp.setAttribute('aria-invalid', 'true');
    inp.classList.remove('shake');
    void inp.offsetWidth;
    inp.classList.add('shake');
    if (navigator.vibrate) navigator.vibrate([60, 40, 60]);
  } else {
    inp.classList.remove('error-field', 'shake');
    inp.classList.add('success-field');
    err.classList.remove('show');
    inp.setAttribute('aria-invalid', 'false');
  }
}

// ─── VALIDATION HELPERS ───────────────────────────────────────────────────────
function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}
function isValidPhone(v) {
  const c = COUNTRIES[selectedCountryIndex];
  const d = c ? c.digits : 10;
  const digits = v.trim().replace(/\D/g, '');
  return digits.length === d;
}
function isStrongPassword(v, prefix) {
  const r = checkStrength(v, prefix);
  return r.len && r.upper && r.lower && r.num && r.sym;
}

// ─── REGISTER SUBMIT ──────────────────────────────────────────────────────────
function submitRegister() {
  let allOk = true;

  const name  = document.getElementById('r-name').value.trim();
  const phone = document.getElementById('r-phone').value.trim();
  const email = document.getElementById('r-email').value.trim();
  const pass  = document.getElementById('r-pass').value;
  const cpass = document.getElementById('r-cpass').value;

  if (!name)                        { shakeField('r-name',  'r-name-err',  true);  allOk = false; }
  else                              { shakeField('r-name',  'r-name-err',  false); }

  if (!isValidPhone(phone))         { shakeField('r-phone', 'r-phone-err', true);  allOk = false; }
  else                              { shakeField('r-phone', 'r-phone-err', false); }

  if (!isValidEmail(email))         { shakeField('r-email', 'r-email-err', true);  allOk = false; }
  else                              { shakeField('r-email', 'r-email-err', false); }

  if (!isStrongPassword(pass,'rr')) { shakeField('r-pass',  'r-pass-err',  true);  allOk = false; }
  else                              { shakeField('r-pass',  'r-pass-err',  false); }

  if (!cpass || pass !== cpass)     { shakeField('r-cpass', 'r-cpass-err', true);  allOk = false; }
  else                              { shakeField('r-cpass', 'r-cpass-err', false); }

  if (allOk) {
    document.querySelectorAll('#view-register .field, #view-register .btn-submit, #view-register .switch-link')
      .forEach(el => el.style.display = 'none');
    document.getElementById('r-success').classList.add('show');
  }
}

// ─── SIGN IN SUBMIT ───────────────────────────────────────────────────────────
function submitSignin() {
  let allOk = true;

  const name  = document.getElementById('s-name').value.trim();
  const email = document.getElementById('s-email').value.trim();
  const pass  = document.getElementById('s-pass').value;

  if (!name)                        { shakeField('s-name',  's-name-err',  true);  allOk = false; }
  else                              { shakeField('s-name',  's-name-err',  false); }

  if (!isValidEmail(email))         { shakeField('s-email', 's-email-err', true);  allOk = false; }
  else                              { shakeField('s-email', 's-email-err', false); }

  if (!isStrongPassword(pass,'sr')) { shakeField('s-pass',  's-pass-err',  true);  allOk = false; }
  else                              { shakeField('s-pass',  's-pass-err',  false); }

  if (allOk) {
    document.querySelectorAll('#view-signin .field, #view-signin .btn-submit, #view-signin .switch-link')
      .forEach(el => el.style.display = 'none');
    document.getElementById('s-success').classList.add('show');
  }
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Set India as default in country picker
  const india = COUNTRIES.findIndex(c => c.name === 'India');
  if (india !== -1) selectCountry('r', india);

  // Live password strength
  const rPass = document.getElementById('r-pass');
  if (rPass) rPass.addEventListener('input', () => checkStrength(rPass.value, 'rr'));

  const sPass = document.getElementById('s-pass');
  if (sPass) sPass.addEventListener('input', () => checkStrength(sPass.value, 'sr'));
});

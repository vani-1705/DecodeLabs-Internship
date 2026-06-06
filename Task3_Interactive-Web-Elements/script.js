/* ======================================
   IMAGE GALLERY — script.js
========================================= */

/* ------------------------------------------------------------
    1. IMAGE DATA — 50 images  
    
      Each object has:
       id     — unique number
       src    — Unsplash URL  (w=800 : medium size)
       title  — display name
       cat    — category key (matches data-cat on buttons)
       tags   — extra keywords for search                   
   ------------------------------------------------------------ */

const IMAGES = [
  /* -- ARTS (5) -- */
  { id:1,  src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Arts1.png",      title:"Photography",       cat:"arts",     tags:["Camera","Photos"] },
  { id:2,  src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Arts2.png",      title:"Singing",           cat:"arts",     tags:["Music","Songs"] },
  { id:3,  src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Arts3.png",      title:"Pottery",           cat:"arts",     tags:["Clay","Pots"] },
  { id:4,  src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Arts4.png",      title:"Dancing",           cat:"arts",     tags:["Classical","Dance"] },
  { id:5,  src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Arts5.png",      title:"Drawing",           cat:"arts",     tags:["Draw","Sketches"] },

  /* -- ANIMALS (5) -- */
  { id:6,  src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Animals1.png",   title:"Elephants",         cat:"animals",  tags:["Elephant","Strong Animal"] },
  { id:7,  src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Animals2.png",   title:"Pandas",            cat:"animals",  tags:["Pandas","Cute Animal"] },
  { id:8,  src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Animals3.png",   title:"Kangaroos",         cat:"animals",  tags:["Kangaroo","Jumping Animal"] },
  { id:9,  src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Animals4.png",   title:"Lion Hunting",      cat:"animals",  tags:["Lion","King of forest"] },
  { id:10, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Animals5.png",   title:"Cheetah Hunting",   cat:"animals",  tags:["Cheetah","Fastest Animal"] },

  /* -- BIRDS (5) -- */
  { id:11, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Birds1.png",     title:"Peacock",           cat:"birds",    tags:["Dancing","National Bird"] },
  { id:12, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Birds2.png",     title:"Sun Parakeets",     cat:"birds",    tags:["Cute","Love Birds"] },
  { id:13, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Birds3.png",     title:"Taiwan Blue Magpie",cat:"birds",    tags:["Crow","Blue magpie"] },
  { id:14, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Birds4.png",     title:"Birds of Paradise", cat:"birds",    tags:["Beautiful","Colourful Birds"] },
  { id:15, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Birds5.png",     title:"Fantail Pigeon",    cat:"birds",    tags:["Eyes","White Peacock"] },

  /* -- CARTOONS (5) -- */
  { id:16, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Cartoons1.png",  title:"Shinchan",          cat:"cartoons", tags:["Shinchan","Comedy"] },
  { id:17, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Cartoons2.png",  title:"Tom and Jerry",     cat:"cartoons", tags:["Tom VS Jerry","Fighting"] },
  { id:18, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Cartoons3.png",  title:"Doraemon",          cat:"cartoons", tags:["Robot","Gadgets"] },
  { id:19, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Cartoons4.png",  title:"Chota Bheem",       cat:"cartoons", tags:["Ladoos","Strong"] },
  { id:20, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Cartoons5.png",  title:"Ben10",             cat:"cartoons", tags:["Watch","Aliens"] },

  /* -- CHILDREN (5) -- */
  { id:21, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Children1.png",  title:"Baby Boy",          cat:"children", tags:["Sleeping","boy"] },
  { id:22, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Children2.png",  title:"Smiling Childs",    cat:"children", tags:["Smiling","Children"] },
  { id:23, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Children3.png",  title:"Baby Girl",         cat:"children", tags:["Standing Girl","Cute"] },
  { id:24, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Children4.png",  title:"Children With Flag",cat:"children", tags:["Childrens","Flag"] },
  { id:25, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Children5.png",  title:"Twin Babies",       cat:"children", tags:["Twins","cute"] },

  /* -- FOOD (5) -- */
  { id:26, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Food1.png",      title:"Non-Veg Thali",     cat:"food",     tags:["Non-Veg","Animals"] },
  { id:27, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Food2.png",      title:"Street Foods",      cat:"food",     tags:["Streets","Girls Fav Spot"] },
  { id:28, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Food3.png",      title:"Veg Thali",         cat:"food",     tags:["Veg","Vegetables"] },
  { id:29, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Food4.png",      title:"Tiffins Thali",     cat:"food",     tags:["Breakfast","Tiffins"] },
  { id:30, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Food5.png",      title:"Sweets Thali",      cat:"food",     tags:["Sweets","Cravings"] },

  /* -- HOUSES (5) -- */
  { id:31, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Houses1.png",    title:"Kerala-Style House", cat:"houses",  tags:["Nalukettu","Traditional"] },
  { id:32, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Houses2.png",    title:"Tree House",         cat:"houses",  tags:["Trees","Natural"] },
  { id:33, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Houses3.png",    title:"Apartment Houses",   cat:"houses",  tags:["Buildings","Apartments"] },
  { id:34, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Houses4.png",    title:"Boat House",         cat:"houses",  tags:["Boat","Water"] },
  { id:35, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Houses5.png",    title:"Villa",              cat:"houses",  tags:["Big House","Luxurious"] },

  /* ── NATURE (5) ── */
  { id:36, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Nature1.png",    title:"Alpine Landscape",      cat:"nature",  tags:["Mountains","Italy"] },
  { id:37, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Nature2.png",    title:"Chae Son Waterfall",    cat:"nature",  tags:["Waterfall","Thailand"] },
  { id:38, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Nature3.png",    title:"Sunset Over Ocean",     cat:"nature",  tags:["Ocean","Sunset"] },
  { id:39, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Nature4.png",    title:"Autumn Landscape Lake", cat:"nature",  tags:["Lake","Autumn"] },
  { id:40, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Nature5.png",    title:"Carpathian Mountains",  cat:"nature",  tags:["Mountains","Wild Flowers"] },

  /* -- PEOPLE (5) -- */
  { id:41, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/People1.png",    title:"Mahesh Babu",       cat:"people",   tags:["Super Star","Handsome"] },
  { id:42, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/People2.png",    title:"Kajal Aggarwal",    cat:"people",   tags:["Queen of Tollywood","Cutie"] },
  { id:43, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/People3.png",    title:"Vijay Talapathy",   cat:"people",   tags:["Talapathy","CM of Tamil"] },
  { id:44, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/People4.png",    title:"Trisha Krishnan",   cat:"people",   tags:["Miss Chennai Pageant","beauty"] },
  { id:45, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/People5.png",    title:"Dulquer Salmaan",   cat:"people",   tags:["DQ","Malyalam boy"] },

  /* -- TEMPLES (5) -- */
  { id:46, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Temples1.png",   title:"Kasi Vishwanath",        cat:"temples",  tags:["Lord Shiva","Varanasi"] },
  { id:47, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Temples2.png",   title:"Badrinath Temple",       cat:"temples",  tags:["Lord Vishnu","Uttarakhand"] },
  { id:48, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Temples3.png",   title:"Ramanathaswamy Temple",  cat:"temples",  tags:["Lord Shiva","Tamil Nadu"] },
  { id:49, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Temples4.png",   title:"Dwarakadish Temple",     cat:"temples",  tags:["Lord Krishna","Gujarat"] },
  { id:50, src:"/home/rgukt/Downloads/PRO/Internships/Decodelabs/Project_3/images/Temples5.png",   title:"Virupaksha Temple",      cat:"temples",  tags:["Lord Shiva","Karnataka"] },
];

/* -----------------------
2. STATE VARIABLES  
--------------------------*/
let activeCategory = 'all';   // currently selected category
let activeFilter   = 'none';  // currently selected gallery-wide CSS filter
let lbFilter       = 'none';  // filter active inside lightbox
let currentLbIndex = 0;       // which image is open in lightbox
let visibleItems   = [];      // filtered + sliced images shown in gallery
let shownCount     = 12;      // how many images to show (increases on Load More)


/* ------------------------------------------------------------
   3. HELPER — getFilteredImages()
   Returns IMAGES filtered by:
     • activeCategory
     • search input text
----------------------------------------------------------- */
function getFilteredImages() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();

  return IMAGES.filter(img => {
    const catMatch    = activeCategory === 'all' || img.cat === activeCategory;
    const searchMatch = !query
      || img.title.toLowerCase().includes(query)
      || img.tags.some(tag => tag.toLowerCase().includes(query));

    return catMatch && searchMatch;
  });
}


/* ---------------------------------------------------------------------------
   4. HELPER — renderGallery()
   Clears the #gallery div and re-builds cards from the filtered image list.
------------------------------------------------------------------------------ */
function renderGallery() {
  const galleryEl = document.getElementById('gallery');

  // get filtered list, slice to shownCount
  const filtered = getFilteredImages();
  visibleItems   = filtered.slice(0, shownCount);

  // update count label
  const countEl = document.getElementById('galleryCount');
  if (countEl) {
    countEl.textContent = filtered.length === IMAGES.length
      ? `${filtered.length} photos`
      : `${filtered.length} photo${filtered.length !== 1 ? 's' : ''} found`;
  }

  // clear existing cards
  galleryEl.innerHTML = '';

  // empty state
  if (visibleItems.length === 0) {
    galleryEl.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:var(--text-muted);">
        <div style="font-size:3rem; margin-bottom:14px;">🔍</div>
        <p style="font-size:1rem; font-weight:500;">No images found for "<em>${document.getElementById('searchInput').value}</em>"</p>
        <p style="font-size:0.85rem; margin-top:6px; opacity:0.6;">Try a different keyword or category</p>
      </div>`;
    document.getElementById('loadMoreBtn').style.display = 'none';
    return;
  }

  // build one card per image
  visibleItems.forEach((img, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item' + (activeFilter !== 'none' ? ' ' + activeFilter : '');
    item.style.animationDelay = (index % 12) * 0.05 + 's';
    item.dataset.index = index;

    item.innerHTML = `
      <img src="${img.src}" alt="${img.title}" loading="lazy">
      <div class="overlay">
        <div class="tag">${img.cat}</div>
        <div class="img-title">${img.title}</div>
        <div class="zoom-icon">⊕</div>
      </div>
    `;

    item.addEventListener('click', () => openLightbox(index));
    galleryEl.appendChild(item);
  });

  // show/hide Load More button
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  loadMoreBtn.style.display = shownCount >= filtered.length ? 'none' : 'inline-flex';
}

/* ---------------------------------------------------------------------------------
   5. HELPER — buildThumbs()
   Rebuilds the thumbnail strip inside the lightbox to match current visibleItems.
------------------------------------------------------------------------------------ */
function buildThumbs() {
  const strip = document.getElementById('lbThumbs');
  strip.innerHTML = '';

  visibleItems.forEach((img, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'lb-thumb' + (i === currentLbIndex ? ' active' : '');
    thumb.innerHTML = `<img src="${img.src}" alt="${img.title}">`;
    thumb.addEventListener('click', () => {
      currentLbIndex = i;
      updateLightbox();
    });
    strip.appendChild(thumb);
  });

  // auto-scroll active thumb into view
  const activeThumb = strip.querySelector('.active');
  if (activeThumb) {
    activeThumb.scrollIntoView({ inline: 'center', behavior: 'smooth' });
  }
}

/* ------------------------------------------------------------------------------------------------------------
   6. HELPER — updateLightbox()
   Refreshes the lightbox main image,counter text, and thumbnails whenever currentLbIndex or lbFilter changes.
--------------------------------------------------------------------------------------------------------------- */
function updateLightbox() {
  const img   = visibleItems[currentLbIndex];
  const lbImg = document.getElementById('lbImg');

  // fade out → update → fade in
  lbImg.style.opacity = '0';
  setTimeout(() => {
    lbImg.src = img.src;
    lbImg.alt = img.title;
    lbImg.className = lbFilter !== 'none' ? lbFilter : '';
    lbImg.style.opacity = '1';
  }, 150);

  // title overlay
  const titleOverlay = document.getElementById('lbTitleOverlay');
  if (titleOverlay) titleOverlay.textContent = img.title;

  // update counter text
  document.getElementById('lbCounter').textContent =
    `${currentLbIndex + 1} / ${visibleItems.length}  —  ${img.title}`;

  // rebuild thumbnails
  buildThumbs();
}


/* ----------------------------------
   7. EVENT — Category Buttons
--------------------------------- */
document.getElementById('categories').addEventListener('click', function(e) {
  const btn = e.target.closest('.cat-btn');
  if (!btn) return;

  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  activeCategory = btn.dataset.cat;
  shownCount = 12;
  renderGallery();
});

/* --------------------------------------------
   8. EVENT — Gallery Filter Buttons
------------------------------------------- */
document.getElementById('galleryFilters').addEventListener('click', function(e) {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  activeFilter = btn.dataset.filter;
  renderGallery();
});

/* ---------------------------------
   9. EVENT — Search Input
------------------------------- */
document.getElementById('searchInput').addEventListener('input', function() {
  shownCount = 12;
  renderGallery();
});


/* ---------------------------------
   10. EVENT — Load More Button
-----------------------------------*/
document.getElementById('loadMoreBtn').addEventListener('click', function() {
  this.classList.add('loading');

  setTimeout(() => {
    this.classList.remove('loading');
    shownCount += 6;
    renderGallery();
  }, 600);
});

/* ---------------------------------------------
   11. OPEN LIGHTBOX
---------------------------------------------*/
function openLightbox(index) {
  currentLbIndex = index;
  lbFilter       = 'none';

  updateLightbox();
  syncLbFilterBtns();

  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* --------------------------------------------
   12. CLOSE LIGHTBOX
------------------------------------------- */
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbBackdrop').addEventListener('click', closeLightbox);


/* --------------------------------------------
   13. LIGHTBOX PREV / NEXT
------------------------------------------- */
document.getElementById('lbPrev').addEventListener('click', function() {
  currentLbIndex = (currentLbIndex - 1 + visibleItems.length) % visibleItems.length;
  updateLightbox();
});

document.getElementById('lbNext').addEventListener('click', function() {
  currentLbIndex = (currentLbIndex + 1) % visibleItems.length;
  updateLightbox();
});


/* -----------------------------------------
   14. KEYBOARD NAVIGATION
---------------------------------------- */
document.addEventListener('keydown', function(e) {
  if (!document.getElementById('lightbox').classList.contains('open')) return;

  if (e.key === 'ArrowLeft') {
    currentLbIndex = (currentLbIndex - 1 + visibleItems.length) % visibleItems.length;
    updateLightbox();
  }

  if (e.key === 'ArrowRight') {
    currentLbIndex = (currentLbIndex + 1) % visibleItems.length;
    updateLightbox();
  }

  if (e.key === 'Escape') {
    closeLightbox();
  }
});

/* ----------------------------------------
   15. LIGHTBOX FILTER BUTTONS
 -------------------------------------- */
document.querySelectorAll('.lb-filter-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    lbFilter = this.dataset.lbfilter;

    const lbImg = document.getElementById('lbImg');
    lbImg.className = lbFilter !== 'none' ? lbFilter : '';

    syncLbFilterBtns();
  });
});

function syncLbFilterBtns() {
  document.querySelectorAll('.lb-filter-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lbfilter === lbFilter);
  });
}

/* -------------------------------------------
   16. TOUCH / SWIPE SUPPORT
------------------------------------------ */
let touchStartX = 0;

document.getElementById('lightbox').addEventListener('touchstart', function(e) {
  touchStartX = e.touches[0].clientX;
}, { passive: true });

document.getElementById('lightbox').addEventListener('touchend', function(e) {
  const dx = e.changedTouches[0].clientX - touchStartX;

  if (Math.abs(dx) > 50) {
    if (dx < 0) {
      currentLbIndex = (currentLbIndex + 1) % visibleItems.length;
    } else {
      currentLbIndex = (currentLbIndex - 1 + visibleItems.length) % visibleItems.length;
    }
    updateLightbox();
  }
}, { passive: true });


/* ---------------------------------------------
   17. THEME TOGGLE (Dark / Light)
----------------------------------------------*/
const themeToggle = document.getElementById('themeToggle');

// Restore saved preference
if (localStorage.getItem('gallery-theme') === 'light') {
  document.body.classList.add('light-theme');
}

themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  localStorage.setItem('gallery-theme', isLight ? 'light' : 'dark');
});


/* ------------------------------------------
   18. INIT — first render on page load
------------------------------------------ */
renderGallery();
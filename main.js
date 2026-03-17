// Initialize Icons
lucide.createIcons();

// --- i18n TRANSLATION SYSTEM ---
let currentLang = 'es'; // Default language

const translations = {
    es: {
        loadingTitle: "Cargando Atlas 3D...",
        loadingDesc: "Preparando datos geográficos e históricos",
        subtitle: "Atlas Interactivo para Estudiantes",
        btnCont: "Continentes",
        btnCount: "Países",
        instruction: "Toca o haz clic en una región",
        popLbl: "Población",
        areaLbl: "Tamaño",
        owlSays: "Profe Búho te cuenta:",
        keyFacts: "Datos Destacados",
        continent: "Continente",
        unknown: "Desconocida",
        clickRegion: "Clic para info de la región",
        clickCountry: "Clic para info del país",
        russiaTitle: "Rusia (Eurasia)",
        guianaTitle: "América del Sur (Guayana Francesa)",
        notAvailable: "Información detallada no disponible para esta región.",
        isoLbl: "Clasificación ISO:",
        gdpLbl: "PIB estimado:",
        na: "N/A"
    },
    en: {
        loadingTitle: "Loading 3D Atlas...",
        loadingDesc: "Preparing geographic and historical data",
        subtitle: "Interactive Atlas for Students",
        btnCont: "Continents",
        btnCount: "Countries",
        instruction: "Tap or click on a region",
        popLbl: "Population",
        areaLbl: "Size",
        owlSays: "Prof. Owl tells you:",
        keyFacts: "Key Facts",
        continent: "Continent",
        unknown: "Unknown",
        clickRegion: "Click for region info",
        clickCountry: "Click for country info",
        russiaTitle: "Russia (Eurasia)",
        guianaTitle: "South America (French Guiana)",
        notAvailable: "Detailed information not available for this region.",
        isoLbl: "ISO Classification:",
        gdpLbl: "Estimated GDP:",
        na: "N/A"
    }
};

// --- EDUCATIONAL DATABASE (Bilingual) ---
const continentData = {
    'Africa': {
        color: '#FF9F1C', 
        name: { es: 'África', en: 'Africa' },
        pop: { es: '1,400 millones (Aprox)', en: '1.4 billion (Approx)' },
        area: { es: '30.37 millones km²', en: '30.37 million km²' },
        history: { 
            es: 'Conocida universalmente como la cuna de la humanidad, África es el continente con mayor diversidad genética e historia fósil. Albergó grandes imperios como el Antiguo Egipto, Mali y Cartago. Hoy es una de las regiones con mayor crecimiento demográfico y cultural del planeta.',
            en: 'Universally known as the cradle of humankind, Africa is the continent with the greatest genetic diversity and fossil history. It hosted great empires like Ancient Egypt, Mali, and Carthage. Today it is one of the regions with the highest demographic and cultural growth on the planet.'
        },
        events: {
            es: ['Aparición del Homo sapiens (~300,000 años)', 'Civilización Egipcia a orillas del Nilo', 'Procesos de descolonización en el siglo XX'],
            en: ['Appearance of Homo sapiens (~300,000 years ago)', 'Egyptian civilization on the banks of the Nile', 'Decolonization processes in the 20th century']
        }
    },
    'Asia': {
        color: '#E71D36',
        name: { es: 'Asia', en: 'Asia' },
        pop: { es: '4,700 millones (Aprox)', en: '4.7 billion (Approx)' },
        area: { es: '44.58 millones km²', en: '44.58 million km²' },
        history: {
            es: 'El continente más grande y poblado. Cuna de civilizaciones antiguas como Mesopotamia, el Valle del Indo y China. Es el hogar de las principales religiones del mundo y actualmente el motor económico e industrial del mundo contemporáneo.',
            en: 'The largest and most populated continent. Cradle of ancient civilizations such as Mesopotamia, the Indus Valley, and China. It is home to the world\'s major religions and currently the economic and industrial engine of the contemporary world.'
        },
        events: {
            es: ['Invención de la escritura en Mesopotamia', 'Construcción de la Gran Muralla China', 'Ruta de la Seda, conectando Oriente y Occidente'],
            en: ['Invention of writing in Mesopotamia', 'Construction of the Great Wall of China', 'Silk Road, connecting East and West']
        }
    },
    'Europe': {
        color: '#FACC15',
        name: { es: 'Europa', en: 'Europe' },
        pop: { es: '746 millones (Aprox)', en: '746 million (Approx)' },
        area: { es: '10.18 millones km²', en: '10.18 million km²' },
        history: {
            es: 'Actor central en la historia mundial. Cuna de la civilización occidental a través de Grecia y Roma, experimentó el Renacimiento y la Revolución Industrial. Hoy destaca por la integración pacífica a través de la Unión Europea.',
            en: 'A central actor in world history. Cradle of Western civilization through Greece and Rome, it experienced the Renaissance and the Industrial Revolution. Today it stands out for its peaceful integration through the European Union.'
        },
        events: {
            es: ['Imperio Romano y su influencia legal', 'El Renacimiento cultural (Siglos XV-XVI)', 'Revolución Industrial y expansión global'],
            en: ['Roman Empire and its legal influence', 'The Cultural Renaissance (15th-16th Centuries)', 'Industrial Revolution and global expansion']
        }
    },
    'North America': {
        color: '#10B981',
        name: { es: 'América del Norte', en: 'North America' },
        pop: { es: '600 millones (Aprox)', en: '600 million (Approx)' },
        area: { es: '24.71 millones km²', en: '24.71 million km²' },
        history: {
            es: 'Habitada por diversas culturas indígenas (Mayas, Aztecas). Tras la colonización europea, surgieron naciones modernas industrializadas. Hoy es un centro clave de tecnología, innovación y economía a nivel mundial.',
            en: 'Inhabited by diverse indigenous cultures (Mayans, Aztecs). After European colonization, modern industrialized nations emerged. Today it is a key center for technology, innovation, and economics worldwide.'
        },
        events: {
            es: ['Desarrollo de civilizaciones precolombinas', 'Llegada de europeos a finales del siglo XV', 'Independencia y desarrollo industrial rápido'],
            en: ['Development of pre-Columbian civilizations', 'Arrival of Europeans in the late 15th century', 'Independence and rapid industrial development']
        }
    },
    'South America': {
        color: '#8338EC',
        name: { es: 'América del Sur', en: 'South America' },
        pop: { es: '430 millones (Aprox)', en: '430 million (Approx)' },
        area: { es: '17.84 millones km²', en: '17.84 million km²' },
        history: {
            es: 'Hogar del Imperio Inca y la vasta selva Amazónica. Su historia está marcada por la colonización ibérica, resultando en un rico mestizaje. En el siglo XIX logró su independencia liderada por figuras como Bolívar.',
            en: 'Home to the Inca Empire and the vast Amazon rainforest. Its history is marked by Iberian colonization, resulting in rich cultural blending. In the 19th century, it achieved independence led by figures like Bolívar.'
        },
        events: {
            es: ['Apogeo del Imperio Inca en los Andes', 'Colonización Ibérica (España y Portugal)', 'Guerras de Independencia (Siglo XIX)'],
            en: ['Peak of the Inca Empire in the Andes', 'Iberian Colonization (Spain and Portugal)', 'Wars of Independence (19th Century)']
        }
    },
    'Oceania': {
        color: '#06B6D4',
        name: { es: 'Oceanía', en: 'Oceania' },
        pop: { es: '43 millones (Aprox)', en: '43 million (Approx)' },
        area: { es: '8.52 millones km²', en: '8.52 million km²' },
        history: {
            es: 'Compuesto por Australia, Nueva Zelanda y miles de islas. Habitada por aborígenes australianos (la cultura viva más antigua) y hábiles navegantes polinesios. Destaca por su biodiversidad endémica.',
            en: 'Composed of Australia, New Zealand, and thousands of islands. Inhabited by Australian Aborigines (the oldest living culture) and skilled Polynesian navigators. Known for its endemic biodiversity.'
        },
        events: {
            es: ['Navegación polinesia ancestral', 'Culturas aborígenes australianas', 'Exploración europea (James Cook)'],
            en: ['Ancient Polynesian navigation', 'Australian aboriginal cultures', 'European exploration (James Cook)']
        }
    },
    'Antarctica': {
        color: '#F8F9FA',
        name: { es: 'Antártida', en: 'Antarctica' },
        pop: { es: '1,000 - 5,000 (Investigadores)', en: '1,000 - 5,000 (Researchers)' },
        area: { es: '14.20 millones km²', en: '14.20 million km²' },
        history: {
            es: 'El continente más austral y frío. No tiene población indígena permanente. Gracias al Tratado Antártico (1959), es un continente desmilitarizado, reservado para la paz y la investigación científica.',
            en: 'The southernmost and coldest continent. No permanent indigenous population. Thanks to the Antarctic Treaty (1959), it is a demilitarized continent, reserved for peace and scientific research.'
        },
        events: {
            es: ['Descubrimiento oficial en 1820', 'Expedición de Amundsen al Polo Sur en 1911', 'Firma del Tratado Antártico (1959)'],
            en: ['Official discovery in 1820', 'Amundsen\'s expedition to the South Pole in 1911', 'Signing of the Antarctic Treaty (1959)']
        }
    }
};

const staticCountryText = {
    guiana: {
        history: {
            es: `¡Hola estudiante! Te presento a la <b>Guayana Francesa</b>.<br><br>Geográficamente se encuentra en <b>América del Sur</b>. Sin embargo, políticamente es un departamento de ultramar de <b>Francia</b>, por lo que adopta el color europeo en el modo de países. ¡Es un territorio fascinante desde donde la Agencia Espacial Europea lanza sus cohetes!`,
            en: `Hello student! Let me introduce you to <b>French Guiana</b>.<br><br>Geographically it is located in <b>South America</b>. However, politically it is an overseas department of <b>France</b>, which is why it adopts the European color in countries mode. It is a fascinating territory from where the European Space Agency launches its rockets!`
        },
        events: {
            es: ['Territorio integral de Francia y la UE.', 'Hogar del Puerto Espacial de Kourou.', 'Moneda oficial: El Euro (€).'],
            en: ['Integral territory of France and the EU.', 'Home to the Kourou Spaceport.', 'Official currency: The Euro (€).']
        }
    },
    russia: {
        history: {
            es: `¡Hola! Te presento a <b>Rusia</b>, el país más extenso del planeta.<br><br>Como ves por su <b>desvanecido de colores</b>, es una nación transcontinental. Abarca gran parte de <b>Europa del Este</b> y todo el norte de <b>Asia</b> (Siberia). Fusiona las culturas e historias de ambos continentes.`,
            en: `Hello! Let me introduce you to <b>Russia</b>, the largest country on the planet.<br><br>As you can see by its <b>color fade</b>, it is a transcontinental nation. It covers much of <b>Eastern Europe</b> and all of northern <b>Asia</b> (Siberia). It merges the cultures and histories of both continents.`
        },
        events: {
            es: ['Nación transcontinental (Europa y Asia).', 'El país más grande territorialmente.', 'Pioneros de la era espacial (Sputnik).'],
            en: ['Transcontinental nation (Europe and Asia).', 'The largest country territorially.', 'Pioneers of the space age (Sputnik).']
        }
    },
    generic: {
        history: (name, cont, lang) => lang === 'es' 
            ? `¡Hola estudiante! Te presento a <b>${name}</b>, una nación ubicada en la región de ${cont}.<br><br>A lo largo de su historia ha experimentado transformaciones muy interesantes. Su economía es parte de la red comercial global. ¡Sigue explorando para aprender más!`
            : `Hello student! Let me introduce you to <b>${name}</b>, a nation located in the ${cont} region.<br><br>Throughout its history, it has experienced very interesting transformations. Its economy is part of the global trade network. Keep exploring to learn more!`,
        events: (iso, gdp, lang) => lang === 'es'
            ? [`${translations.es.isoLbl} ${iso}`, `${translations.es.gdpLbl} ${gdp}`, `Participante activo en organizaciones regionales.`]
            : [`${translations.en.isoLbl} ${iso}`, `${translations.en.gdpLbl} ${gdp}`, `Active participant in regional organizations.`]
    }
};

// --- GLOBAL VARIABLES ---
let currentMode = 'continents'; // 'continents' or 'countries'
let hoverTarget = null;
let activeProperties = null; 
let world; 
let countriesData = [];

// Special materials for Russia
const getRussiaMaterial = (isHovered) => {
    const canvas = document.createElement('canvas');
    canvas.width = 512; canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 512, 0);
    grad.addColorStop(0, isHovered ? '#FDE047' : '#FACC15');
    grad.addColorStop(1, isHovered ? '#F43F5E' : '#E71D36');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 512, 512);
    return new THREE.MeshLambertMaterial({ map: new THREE.CanvasTexture(canvas), color: isHovered ? 0xffffff : 0xcccccc });
};
const matRussiaNormal = getRussiaMaterial(false);
const matRussiaHover = getRussiaMaterial(true);

const formatNumber = (num) => new Intl.NumberFormat(currentLang === 'es' ? 'es-ES' : 'en-US').format(num);

const adjustColor = (color, amount) => {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

// --- RENDER LOGIC ---
const getPolygonColor = d => {
    let baseColor;
    if (d.properties.NAME === 'Guayana Francesa') {
        baseColor = currentMode === 'countries' ? continentData['Europe'].color : continentData['South America'].color;
    } else {
        const continentInfo = continentData[d.properties.CONTINENT] || { color: '#6B7280' };
        baseColor = continentInfo.color;
    }
    
    if (!hoverTarget) return adjustColor(baseColor, -15);
    
    let isHovered = false;
    if (currentMode === 'continents') {
        // En continentes, no hay excepciones. Se evalúa como cualquier otra zona del continente.
        isHovered = d.properties.CONTINENT === hoverTarget;
    } else {
        isHovered = d.properties.ISO_A3 === hoverTarget || d.properties.NAME === hoverTarget;
        if (d.properties.NAME === 'Guayana Francesa' && hoverTarget === 'FRA') isHovered = true;
        if (d.properties.ISO_A3 === 'FRA' && hoverTarget === 'Guayana Francesa') isHovered = true;
    }
    return isHovered ? adjustColor(baseColor, 40) : adjustColor(baseColor, -50);
};

const getPolygonAltitude = d => {
    const BASE_ALTITUDE = 0.015;
    const HOVER_ALTITUDE = 0.07;
    if (!hoverTarget) return BASE_ALTITUDE;
    let isHovered = false;
    if (currentMode === 'continents') {
        isHovered = d.properties.CONTINENT === hoverTarget;
    } else {
        isHovered = d.properties.ISO_A3 === hoverTarget || d.properties.NAME === hoverTarget;
        if (d.properties.NAME === 'Guayana Francesa' && hoverTarget === 'FRA') isHovered = true;
        if (d.properties.ISO_A3 === 'FRA' && hoverTarget === 'Guayana Francesa') isHovered = true;
    }
    return isHovered ? HOVER_ALTITUDE : BASE_ALTITUDE;
};

// --- ZOOM CONTROLS ---
const setupZoomControls = () => {
    const zoomSlider = document.getElementById('zoom-slider');
    const ALT_MIN = 0.05; 
    const ALT_MAX = 8.0; 

    let isDraggingSlider = false;

    zoomSlider.addEventListener('mousedown', () => isDraggingSlider = true);
    zoomSlider.addEventListener('touchstart', () => isDraggingSlider = true, {passive: true});
    
    window.addEventListener('mouseup', () => isDraggingSlider = false);
    window.addEventListener('touchend', () => isDraggingSlider = false);

    const syncSlider = () => {
        if (isDraggingSlider) return; 
        
        const currentAlt = world.pointOfView().altitude;
        const clampedAlt = Math.max(ALT_MIN, Math.min(ALT_MAX, currentAlt));
        zoomSlider.value = ((ALT_MAX - clampedAlt) / (ALT_MAX - ALT_MIN)) * 100;
    };

    world.controls().addEventListener('change', syncSlider);
    
    zoomSlider.addEventListener('input', (e) => {
        const percent = parseFloat(e.target.value);
        const targetAlt = ALT_MAX - (percent / 100) * (ALT_MAX - ALT_MIN);
        world.pointOfView({ altitude: targetAlt }, 0); 
    });

    document.getElementById('btn-zoom-in').addEventListener('click', () => {
        world.pointOfView({ altitude: Math.max(ALT_MIN, world.pointOfView().altitude - 0.5) }, 500);
    });
    document.getElementById('btn-zoom-out').addEventListener('click', () => {
        world.pointOfView({ altitude: Math.max(ALT_MAX, world.pointOfView().altitude + 0.5) }, 500);
    });
};

// --- INIT GLOBE ---
const initGlobe = (data) => {
    const container = document.getElementById('globeViz');
    
    world = Globe()(container)
        .backgroundColor('rgba(0,0,0,0)') 
        .showAtmosphere(true)
        .atmosphereColor('#3a86ff')
        .atmosphereAltitude(0.15)
        .polygonsData(data)
        .polygonsTransitionDuration(300) 
        .polygonAltitude(getPolygonAltitude)
        .polygonCapColor(d => {
            // Rusia solo se vuelve transparente (para mostrar el material degradado) en modo países
            if (currentMode === 'countries' && d.properties.NAME === 'Russia') return 'rgba(0,0,0,0)';
            return getPolygonColor(d);
        })
        .polygonCapMaterial(d => {
            // El material especial de Rusia SOLO aplica en modo países
            if (currentMode === 'countries' && d.properties.NAME === 'Russia') {
                let isHovered = (hoverTarget === d.properties.ISO_A3 || hoverTarget === 'Russia');
                return isHovered ? matRussiaHover : matRussiaNormal;
            }
            return null;
        })
        .polygonSideColor(() => 'rgba(0, 0, 0, 0.75)') 
        .polygonStrokeColor(() => '#000000') 
        .polygonLabel(({ properties: d }) => {
            const t = translations[currentLang];
            let title = d.NAME;
            
            if (currentMode === 'continents') {
                if (d.NAME === 'Guayana Francesa') title = t.guianaTitle;
                else title = continentData[d.CONTINENT] ? continentData[d.CONTINENT].name[currentLang] : d.CONTINENT;
            } else if (d.NAME === 'Russia') {
                title = t.russiaTitle;
            }

            const subtitle = currentMode === 'countries' ? t.clickCountry : t.clickRegion;
            return `<div class="custom-tooltip"><span class="text-white">${title}</span><br><span class="text-xs text-gray-400 font-normal">${subtitle}</span></div>`;
        })
        .onPolygonHover(polygon => {
            hoverTarget = polygon ? (currentMode === 'continents' ? polygon.properties.CONTINENT : (polygon.properties.ISO_A3 !== '-99' ? polygon.properties.ISO_A3 : polygon.properties.NAME)) : null;
            world.polygonAltitude(world.polygonAltitude());
            world.polygonCapColor(world.polygonCapColor());
            world.polygonCapMaterial(world.polygonCapMaterial());
        })
        .onPolygonClick(polygon => {
            if(polygon) {
                activeProperties = polygon.properties;
                refreshInfoPanel();
                document.getElementById('info-panel').classList.remove('translate-x-full');
            }
        });

    world.controls().autoRotate = false;
    world.controls().enableDamping = true;
    world.controls().dampingFactor = 0.05;
    world.pointOfView({ altitude: 2.2 });

    const globeMaterial = world.globeMaterial();
    globeMaterial.color.set('#0b203f');
    globeMaterial.roughness = 0.6;

    setupZoomControls();

    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => document.getElementById('loader').remove(), 500);
    }, 1000);

    window.addEventListener('resize', () => world.width(window.innerWidth).height(window.innerHeight));
};

// --- FETCH GEO DATA ---
fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
    .then(res => res.json())
    .then(geojson => {
        const franceIndex = geojson.features.findIndex(f => f.properties.ISO_A3 === 'FRA' || f.properties.NAME === 'France');
        if (franceIndex !== -1) {
            const franceFeature = geojson.features[franceIndex];
            if (franceFeature.geometry.type === 'MultiPolygon') {
                const mainlandCoords = [], guianaCoords = [];
                franceFeature.geometry.coordinates.forEach(poly => {
                    const lng = poly[0][0][0];
                    if (lng < -40 && lng > -60) guianaCoords.push(poly);
                    else mainlandCoords.push(poly);
                });
                franceFeature.geometry.coordinates = mainlandCoords;
                if (guianaCoords.length > 0) {
                    const guianaFeature = JSON.parse(JSON.stringify(franceFeature));
                    guianaFeature.geometry.coordinates = guianaCoords;
                    guianaFeature.properties.NAME = 'Guayana Francesa';
                    guianaFeature.properties.CONTINENT = 'South America';
                    guianaFeature.properties.ISO_A3 = '-99';
                    geojson.features.push(guianaFeature);
                }
            }
        }
        const ttoIndex = geojson.features.findIndex(f => f.properties.ISO_A3 === 'TTO' || f.properties.NAME === 'Trinidad and Tobago');
        if (ttoIndex !== -1) geojson.features[ttoIndex].properties.CONTINENT = 'South America';

        countriesData = geojson.features;
        initGlobe(countriesData);
    });

// --- UI LOGIC & i18n ---
const panel = document.getElementById('info-panel');
const btnContinentes = document.getElementById('btn-continentes');
const btnPaises = document.getElementById('btn-paises');

const updateModeUI = () => {
    if (currentMode === 'continents') {
        btnContinentes.className = "px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 bg-blue-600 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2";
        btnPaises.className = "px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 text-gray-300 hover:bg-white/10 flex items-center justify-center gap-2";
    } else {
        btnPaises.className = "px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 bg-emerald-600 shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2";
        btnContinentes.className = "px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 text-gray-300 hover:bg-white/10 flex items-center justify-center gap-2";
    }
    panel.classList.add('translate-x-full');
    hoverTarget = null;
    if (world) {
        world.polygonAltitude(world.polygonAltitude());
        world.polygonCapColor(world.polygonCapColor());
        world.polygonCapMaterial(world.polygonCapMaterial());
    }
};

btnContinentes.addEventListener('click', () => { currentMode = 'continents'; updateModeUI(); });
btnPaises.addEventListener('click', () => { currentMode = 'countries'; updateModeUI(); });
document.getElementById('btn-close-panel').addEventListener('click', () => panel.classList.add('translate-x-full'));

const refreshInfoPanel = () => {
    if (!activeProperties) return;
    const t = translations[currentLang];
    const p = activeProperties;
    
    const titleEl = document.getElementById('panel-title');
    const popEl = document.getElementById('panel-pop');
    const areaEl = document.getElementById('panel-area');
    const historyEl = document.getElementById('panel-history');
    const eventsEl = document.getElementById('panel-events');

    if (currentMode === 'continents') {
        const data = continentData[p.CONTINENT];
        if (data) {
            titleEl.innerText = data.name[currentLang];
            popEl.innerText = data.pop[currentLang];
            areaEl.innerText = data.area[currentLang];
            historyEl.innerText = data.history[currentLang];
            eventsEl.innerHTML = data.events[currentLang].map(evt => `<li class="mb-1">${evt}</li>`).join('');
            document.getElementById('ui-panel-area-lbl').innerText = t.areaLbl;
            document.getElementById('ui-panel-area-lbl').previousElementSibling.setAttribute('data-lucide', 'maximize');
        } else {
            titleEl.innerText = p.CONTINENT;
            historyEl.innerText = t.notAvailable;
            eventsEl.innerHTML = '';
        }
    } else {
        titleEl.innerText = p.NAME;
        popEl.innerText = p.POP_EST > 0 ? formatNumber(p.POP_EST) : t.unknown;
        areaEl.innerText = continentData[p.CONTINENT] ? continentData[p.CONTINENT].name[currentLang] : p.CONTINENT;
        
        document.getElementById('ui-panel-area-lbl').innerText = t.continent;
        document.getElementById('ui-panel-area-lbl').previousElementSibling.setAttribute('data-lucide', 'map');

        if (p.NAME === 'Guayana Francesa') {
            historyEl.innerHTML = staticCountryText.guiana.history[currentLang];
            eventsEl.innerHTML = staticCountryText.guiana.events[currentLang].map(e => `<li class="mb-1">${e}</li>`).join('');
        } else if (p.NAME === 'Russia') {
            historyEl.innerHTML = staticCountryText.russia.history[currentLang];
            eventsEl.innerHTML = staticCountryText.russia.events[currentLang].map(e => `<li class="mb-1">${e}</li>`).join('');
        } else {
            const contName = continentData[p.CONTINENT] ? continentData[p.CONTINENT].name[currentLang] : p.CONTINENT;
            historyEl.innerHTML = staticCountryText.generic.history(p.NAME, contName, currentLang);
            const gdpStr = p.GDP_MD_EST ? formatNumber(p.GDP_MD_EST) + ' M USD' : t.na;
            const isoStr = p.ISO_A3 !== '-99' ? p.ISO_A3 : t.na;
            eventsEl.innerHTML = staticCountryText.generic.events(isoStr, gdpStr, currentLang).map(e => `<li class="mb-1">${e}</li>`).join('');
        }
    }
    lucide.createIcons();
};

// --- LANGUAGE SWITCHER ---
const setLanguage = (lang) => {
    currentLang = lang;
    const t = translations[lang];

    if(document.getElementById('ui-loading-title')) document.getElementById('ui-loading-title').innerText = t.loadingTitle;
    if(document.getElementById('ui-loading-desc')) document.getElementById('ui-loading-desc').innerText = t.loadingDesc;
    document.getElementById('ui-subtitle').innerText = t.subtitle;
    document.getElementById('ui-btn-cont').innerText = t.btnCont;
    document.getElementById('ui-btn-count').innerText = t.btnCount;
    document.getElementById('ui-instruction').innerHTML = `<i data-lucide="mouse-pointer-click" class="w-4 h-4"></i> ${t.instruction}`;
    
    document.getElementById('ui-panel-pop-lbl').innerText = t.popLbl;
    document.getElementById('ui-owl-says').innerText = t.owlSays;
    document.getElementById('ui-key-facts').innerText = t.keyFacts;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('opacity-100', 'grayscale-0', 'scale-110', 'border-white/50');
        btn.classList.add('opacity-40', 'grayscale', 'border-transparent');
    });
    const activeBtn = document.getElementById(`btn-lang-${lang}`);
    activeBtn.classList.remove('opacity-40', 'grayscale', 'border-transparent');
    activeBtn.classList.add('opacity-100', 'grayscale-0', 'scale-110', 'border-white/50');

    if (world) world.polygonLabel(world.polygonLabel());
    refreshInfoPanel();
    lucide.createIcons();
};

document.getElementById('btn-lang-es').addEventListener('click', () => setLanguage('es'));
document.getElementById('btn-lang-en').addEventListener('click', () => setLanguage('en'));

// Init language state
setLanguage('es');
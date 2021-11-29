import Konva from 'konva';
window.$ = window.jQuery = require('jquery');
import 'bootstrap';
import 'gasparesganga-jquery-loading-overlay';


const garena_wp = 'https://cdngarenanow-a.akamaihd.net/webmain/static/resource/wallpaper/';
const garena_cdn = garena_wp + 'hero/';
const wp_data = [
    {
        "name": "toro",
        "value": "toro",
        "tag": "tank",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "raz",
        "value": "raz",
        "tag": "mage",
        "skinsCount": 4,
        "bgCount": 4
    },
    {
        "name": "zephys",
        "value": "zephys",
        "tag": "warrior",
        "skinsCount": 5,
        "bgCount": 5
    },
    {
        "name": "veera",
        "value": "veera",
        "tag": "mage",
        "skinsCount": 5,
        "bgCount": 5
    },
    {
        "name": "violet",
        "value": "violet",
        "tag": "archer",
        "skinsCount": 8,
        "bgCount": 8
    },
    {
        "name": "yorn",
        "value": "yorn",
        "tag": "archer",
        "skinsCount": 5,
        "bgCount": 5
    },
    {
        "name": "omega",
        "value": "omega",
        "tag": "tank",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "butterfly",
        "value": "butterfly",
        "tag": "assassin",
        "skinsCount": 7,
        "bgCount": 7
    },
    {
        "name": "mina",
        "value": "mina",
        "tag": "tank",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "azzenka",
        "value": "azzenka",
        "tag": "mage",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "lubu",
        "value": "lubu",
        "tag": "warrior",
        "skinsCount": 6,
        "bgCount": 6
    },
    {
        "name": "zanis",
        "value": "zanis",
        "tag": "warrior",
        "skinsCount": 6,
        "bgCount": 6
    },
    {
        "name": "valhein",
        "value": "valhein",
        "tag": "archer",
        "skinsCount": 6,
        "bgCount": 6
    },
    {
        "name": "thane",
        "value": "thane",
        "tag": "tank",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "ilumia",
        "value": "ilumia",
        "tag": "mage",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "lauriel",
        "value": "lauriel",
        "tag": "mage",
        "skinsCount": 5,
        "bgCount": 5
    },
    {
        "name": "nakroth",
        "value": "nakroth",
        "tag": "assassin",
        "skinsCount": 5,
        "bgCount": 5
    },
    {
        "name": "diaochan",
        "value": "diaochan",
        "tag": "mage",
        "skinsCount": 4,
        "bgCount": 4
    },
    {
        "name": "aleister",
        "value": "aleister",
        "tag": "mage",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "wukong",
        "value": "wukong",
        "tag": "assassin",
        "skinsCount": 6,
        "bgCount": 6
    },
    {
        "name": "krixi",
        "value": "krixi",
        "tag": "mage",
        "skinsCount": 6,
        "bgCount": 6
    },
    {
        "name": "gildur",
        "value": "gildur",
        "tag": "tank",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "kahli",
        "value": "kahli",
        "tag": "mage",
        "skinsCount": 4,
        "bgCount": 4
    },
    {
        "name": "chaugnar",
        "value": "chaugnar",
        "tag": "support",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "ormarr",
        "value": "ormarr",
        "tag": "warrior",
        "skinsCount": 4,
        "bgCount": 4
    },
    {
        "name": "alice",
        "value": "alice",
        "tag": "support",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "mganga",
        "value": "mganga",
        "tag": "mage",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "maloch",
        "value": "maloch",
        "tag": "warrior",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "taara",
        "value": "taara",
        "tag": "tank",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "preyta",
        "value": "preyta",
        "tag": "mage",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "cresht",
        "value": "cresht",
        "tag": "tank",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "fennik",
        "value": "fennik",
        "tag": "archer",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "grakk",
        "value": "grakk",
        "tag": "tank",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "natalya",
        "value": "natalya",
        "tag": "mage",
        "skinsCount": 5,
        "bgCount": 5
    },
    {
        "name": "lumburr",
        "value": "lumburr",
        "tag": "support",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "jinna",
        "value": "jinna",
        "tag": "mage",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "payna",
        "value": "payna",
        "tag": "support",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "arthur",
        "value": "arthur",
        "tag": "warrior",
        "skinsCount": 4,
        "bgCount": 4
    },
    {
        "name": "kriknak",
        "value": "kriknak",
        "tag": "assassin",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "airi",
        "value": "airi",
        "tag": "warrior",
        "skinsCount": 8,
        "bgCount": 8
    },
    {
        "name": "batman",
        "value": "batman",
        "tag": "assassin",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "slimz",
        "value": "slimz",
        "tag": "archer",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "skud",
        "value": "skud",
        "tag": "warrior",
        "skinsCount": 4,
        "bgCount": 4
    },
    {
        "name": "zuka",
        "value": "zuka",
        "tag": "warrior",
        "skinsCount": 6,
        "bgCount": 6
    },
    {
        "name": "murad",
        "value": "murad",
        "tag": "assassin",
        "skinsCount": 7,
        "bgCount": 7
    },
    {
        "name": "telannas",
        "value": "telannas",
        "tag": "archer",
        "skinsCount": 6,
        "bgCount": 6
    },
    {
        "name": "Zill",
        "value": "qier",
        "tag": "mage",
        "skinsCount": 4,
        "bgCount": 4
    },
    {
        "name": "ignis",
        "value": "ignis",
        "tag": "mage",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "joker",
        "value": "joker",
        "tag": "archer",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "superman",
        "value": "superman",
        "tag": "warrior",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "kilgroth",
        "value": "kilgroth",
        "tag": "warrior",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "xeniel",
        "value": "xeniel",
        "tag": "tank",
        "skinsCount": 5,
        "bgCount": 5
    },
    {
        "name": "arduin",
        "value": "arduin",
        "tag": "warrior",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "Ryoma",
        "value": "longma",
        "tag": "warrior",
        "skinsCount": 4,
        "bgCount": 4
    },
    {
        "name": "astrid",
        "value": "aicuisi",
        "tag": "warrior",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "moren",
        "value": "moen",
        "tag": "archer",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "wonderwoman",
        "value": "wonderwoman",
        "tag": "warrior",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "tulen",
        "value": "tulun",
        "tag": "mage",
        "skinsCount": 7,
        "bgCount": 7
    },
    {
        "name": "lindis",
        "value": "lindi",
        "tag": "archer",
        "skinsCount": 5,
        "bgCount": 5
    },
    {
        "name": "timi",
        "value": "timi",
        "tag": "support",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "omen",
        "value": "yecha",
        "tag": "warrior",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "max",
        "value": "maikesi",
        "tag": "warrior",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "liliana",
        "value": "lilian",
        "tag": "mage",
        "skinsCount": 6,
        "bgCount": 6
    },
    {
        "name": "wisp",
        "value": "lingling",
        "tag": "archer",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "arum",
        "value": "airui",
        "tag": "tank",
        "skinsCount": 4,
        "bgCount": 4
    },
    {
        "name": "rourke",
        "value": "luoke",
        "tag": "warrior",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "roxie",
        "value": "nuokexi",
        "tag": "warrior",
        "skinsCount": 4,
        "bgCount": 4
    },
    {
        "name": "baldum",
        "value": "bodun",
        "tag": "tank",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "marja",
        "value": "majia",
        "tag": "mage",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "emily",
        "value": "aimili",
        "tag": "warrior",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "annete",
        "value": "annaite",
        "tag": "support",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "y'bneth",
        "value": "gumu",
        "tag": "tank",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "elsu",
        "value": "su",
        "tag": "archer",
        "skinsCount": 5,
        "bgCount": 5
    },
    {
        "name": "richter/Riktor",
        "value": "ruike",
        "tag": "warrior",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "Sephera",
        "value": "lan",
        "tag": "mage",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "quillen",
        "value": "kuilun",
        "tag": "assassin",
        "skinsCount": 4,
        "bgCount": 4
    },
    {
        "name": "Darcy",
        "value": "daerxi",
        "tag": "mage",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "Capheny",
        "value": "kafenni",
        "tag": "archer",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "Verez",
        "value": "feilei",
        "tag": "warrior",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "Hayate",
        "value": "haiya",
        "tag": "archer",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "Errol",
        "value": "ailuo",
        "tag": "warrior",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "Florentino",
        "value": "foluolun",
        "tag": "warrior",
        "skinsCount": 3,
        "bgCount": 3
    },
    {
        "name": "Yena",
        "value": "yena",
        "tag": "warrior",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "Enzo",
        "value": "enzo",
        "tag": "assassin",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "Qi",
        "value": "qi",
        "tag": "warrior",
        "skinsCount": 2,
        "bgCount": 2
    },
    {
        "name": "Zip",
        "value": "zip",
        "tag": "support",
        "skinsCount": 2,
        "bgCount": 2
    }
];

const fonts = ["Staatliches", "Lilita One", "Germania One", "ZCOOL XiaoWei", "Baloo Chettan", "Arimo", "Assistant", "Libre Barcode 39", "Noto Serif", "Margarine", "Saira Extra Condensed", "Mrs Sheppards", "Sree Krushnadevaraya", "Encode Sans Expanded", "Italiana", "Iceberg", "Sniglet", "Bai Jamjuree", "Miss Fajardose", "Pavanam", "Noto Sans SC", "Scope One", "Gothic A1", "BioRhyme Expanded", "Noto Sans", "Lalezar", "Kumar One", "Heebo", "Sunflower", "Noto Serif TC", "Markazi Text", "Patrick Hand", "Flavors", "Dokdo", "Aleo", "Over the Rainbow", "Lovers Quarrel", "B612 Mono", "Playball", "Galada", "Unkempt", "Allerta Stencil", "Mukta Malar", "Spicy Rice", "Ruge Boogie", "Khula", "Srisakdi", "Mogra", "Faustina", "Tauri", "Mouse Memoirs", "Molengo", "Halant", "Esteban", "Combo", "Fresca", "IBM Plex Sans Condensed", "Electrolize", "Sumana", "Mallanna", "Do Hyeon", "Secular One", "Charm", "Angkor", "Lakki Reddy", "KoHo", "Sarala", "Nova Slim", "Black And White Picture", "Black Han Sans", "Major Mono Display", "Suravaram", "Astloch", "Overpass Mono", "Miltonian Tattoo", "Gilda Display", "Armata", "Butterfly Kids", "Gugi", "Bevan", "M PLUS 1p", "Barlow Condensed", "Give You Glory", "Dekko", "Abhaya Libre", "Annie Use Your Telescope", "Balthazar", "Alfa Slab One", "B612", "Love Ya Like A Sister", "Bungee", "Lemonada", "Kosugi", "Miriam Libre", "Kodchasan", "Archivo", "Pridi", "Rhodium Libre", "Nanum Pen Script", "Smythe", "Fugaz One", "Taprom", "Knewave", "Stylish", "Lateef", "Galindo", "Delius", "Diplomata SC", "Source Code Pro", "Fira Sans Condensed", "Tajawal", "Candal", "Bigelow Rules", "Six Caps", "Mrs Saint Delafield", "Yeon Sung", "Thasadith", "Amarante", "Alike", "Chewy", "Mr De Haviland", "Fasthand", "Unna", "Reenie Beanie", "Noto Sans TC", "Redressed", "Butcherman", "Press Start 2P", "Almendra Display", "Macondo", "Ropa Sans", "Rubik", "Cute Font", "Smokum", "Stint Ultra Expanded", "Aldrich", "Clicker Script", "Rajdhani", "IBM Plex Sans", "Italianno", "Nunito Sans", "Miniver", "Antic Didone", "Asset", "Purple Purse", "Euphoria Script", "Mitr", "Caesar Dressing", "Rum Raisin", "Play", "Noto Serif JP", "Graduate", "Cabin Condensed", "Varela", "Slabo 27px", "Nanum Gothic", "Nanum Myeongjo", "Poly", "El Messiri", "Space Mono", "Kreon", "Ramaraja", "Seymour One", "Sahitya", "Bilbo Swash Caps", "Almendra", "Dorsa", "Prosto One", "Jockey One", "IM Fell Great Primer", "Iceland", "Brawler", "Changa", "Donegal One", "Jacques Francois Shadow", "Quintessential", "Bowlby One", "Covered By Your Grace", "Ruthie", "Caudex", "Scada", "Rye", "Chelsea Market", "Libre Barcode 128", "Syncopate", "Duru Sans", "Oxygen Mono", "Unlock", "Jolly Lodger", "Zilla Slab Highlight", "Vollkorn SC", "Overlock SC", "IM Fell Great Primer SC", "Orbitron", "Catamaran", "Alegreya Sans SC", "Alegreya SC", "Encode Sans Semi Expanded", "UnifrakturCook", "Architects Daughter", "Mandali", "Sintony", "Megrim", "Ramabhadra", "Poor Story", "Barlow", "Cambay", "Kite One", "Caveat", "Croissant One", "Baloo Bhai", "Didact Gothic", "Pirata One", "Engagement", "Itim", "Fenix", "Quantico", "Norican", "Rosario", "Montez", "Cardo", "Delius Swash Caps", "Nova Flat", "Montserrat Alternates", "Mukta Mahee", "Miltonian", "Arvo", "Qwigley", "Gamja Flower", "Patrick Hand SC", "Fredericka the Great", "Metal Mania", "Kanit", "Suez One", "Belgrano", "Vidaloka", "Rufina", "Saira Condensed", "Kavivanar", "Cantarell", "Gentium Book Basic", "Noto Serif KR", "Cambo", "Uncial Antiqua", "Pragati Narrow", "Peralta", "Asul", "Athiti", "Anton", "Jua", "Eczar", "Prompt", "Nanum Brush Script", "Geostar Fill", "Englebert", "Audiowide", "Mukta", "Chivo", "Encode Sans", "Nunito", "Amaranth", "Ravi Prakash", "Swanky and Moo Moo", "Inknut Antiqua", "Libre Barcode 39 Text", "Vampiro One", "Londrina Shadow", "Princess Sofia", "Varela Round", "Sirin Stencil", "Cedarville Cursive", "Libre Barcode 39 Extended Text", "Bad Script", "Cormorant Unicase", "Allura", "Radley", "Noto Sans JP", "Petrona", "Creepster", "Simonetta", "Chakra Petch", "Ruda", "Lobster Two", "Ubuntu Condensed", "Passero One", "Pattaya", "Geostar", "Farsan", "Lekton", "Hind Siliguri", "Fascinate Inline", "Krona One", "Glass Antiqua", "Kurale", "Noto Sans KR", "Montserrat Subrayada", "Palanquin", "Keania One", "Oleo Script", "Saira", "Voces", "Federo", "Kosugi Maru", "Fira Mono", "Holtwood One SC", "Pathway Gothic One", "Vast Shadow", "Berkshire Swash", "Martel Sans", "Montserrat", "Original Surfer", "Open Sans Condensed", "Cutive Mono", "Actor", "Kranky", "Mountains of Christmas", "Sancreek", "Text Me One", "Oxygen", "Bungee Shade", "Hanalei", "Buenard", "Adamina", "Ribeye", "Scheherazade", "Asap", "PT Serif Caption", "Kaushan Script", "Biryani", "Teko", "Sedgwick Ave Display", "Nobile", "Rouge Script", "Sawarabi Gothic", "Noticia Text", "Spinnaker", "David Libre", "Crushed", "Merriweather", "Autour One", "Sacramento", "Modak", "Nanum Gothic Coding", "League Script", "Basic", "Inder", "Merriweather Sans", "La Belle Aurore", "Roboto Slab", "Permanent Marker", "Sawarabi Mincho", "Barrio", "Elsie Swash Caps", "Hind", "Marcellus", "Rancho", "Quattrocento", "Nova Cut", "Coming Soon", "Great Vibes", "Raleway", "Krub", "Alef", "Metrophobic", "Jacques Francois", "Cormorant Garamond", "The Girl Next Door", "Noto Serif SC", "Fjord One", "Mystery Quest", "Suranna", "Rasa", "Parisienne", "Libre Baskerville", "Fruktur", "Kotta One", "Judson", "IM Fell DW Pica SC", "Oswald", "Source Serif Pro", "Poppins", "Aubrey", "Amiri", "Trirong", "Fontdiner Swanky", "Revalia", "Cuprum", "Philosopher", "Taviraj", "Barlow Semi Condensed", "Work Sans", "Kalam", "Lora", "Baloo", "Julius Sans One", "Yanone Kaffeesatz", "Henny Penny", "Ruluko", "Emilys Candy", "Bitter", "Hammersmith One", "Spectral SC", "Caveat Brush", "Francois One", "Cinzel Decorative", "Cantata One", "Sevillana", "Aladin", "Chango", "Imprima", "Linden Hill", "Merienda One", "Fira Sans", "Vibur", "Allan", "Cherry Cream Soda", "Source Sans Pro", "Marko One", "Open Sans", "News Cycle", "Calligraffitti", "Enriqueta", "Days One", "Dynalight", "Rubik Mono One", "Tinos", "Amatic SC", "Volkhov", "IM Fell Double Pica SC", "Arbutus", "Average", "Ubuntu", "Kenia", "Oleo Script Swash Caps", "Exo 2", "Nothing You Could Do", "Arapey", "Sofia", "Trochut", "Josefin Sans", "Dancing Script", "Cabin", "Gidugu", "Mukta Vaani", "Courgette", "Roboto Condensed", "Prata", "Marcellus SC", "Squada One", "Trocchi", "Crimson Text", "Numans", "Paytone One", "Old Standard TT", "Maven Pro", "Quicksand", "IM Fell French Canon SC", "Monda", "Kristi", "IM Fell DW Pica", "Mako", "Mina", "Happy Monkey", "Goudy Bookletter 1911", "Allerta", "Sarina", "Cabin Sketch", "Homemade Apple", "Gaegu", "Tillana", "Titillium Web", "Codystar", "Average Sans", "Denk One", "Inconsolata", "Rationale", "Kavoon", "Faster One", "PT Serif", "Lily Script One", "Sarpanch", "Unica One", "Cutive", "Palanquin Dark", "Petit Formal Script", "Snowburst One", "Rakkas", "Playfair Display", "Damion", "Dosis", "Crete Round", "Signika", "Devonshire", "Junge", "Monsieur La Doulaise", "Buda", "Doppio One", "Sonsie One", "Arizonia", "Nixie One", "Fjalla One", "Yrsa", "Indie Flower", "Antic Slab", "Questrial", "Quattrocento Sans", "Yellowtail", "Habibi", "Khand", "Lobster", "Lato", "Sorts Mill Goudy", "Cairo", "Sarabun", "Comfortaa", "Averia Gruesa Libre", "Fauna One", "McLaren", "Neuton", "Reem Kufi", "Carrois Gothic SC", "Vollkorn", "Bangers", "Pangolin", "UnifrakturMaguntia", "Paprika", "Satisfy", "Dawning of a New Day", "Harmattan", "Sanchez", "Shadows Into Light", "Lancelot", "Cookie", "Federant", "Kirang Haerang", "PT Mono", "Poiret One", "Finger Paint", "Economica", "Just Me Again Down Here", "Bubblegum Sans", "Pacifico", "Flamenco", "GFS Neohellenic", "Share Tech Mono", "Ewert", "Carrois Gothic", "Stalemate", "Cormorant Infant", "Risque", "Signika Negative", "Share", "Aguafina Script", "Dhurjati", "Lemon", "Piedra", "Abril Fatface", "Roboto", "Grand Hotel", "IM Fell English", "Akronim", "Racing Sans One", "Leckerli One", "Changa One", "Stint Ultra Condensed", "Averia Sans Libre", "Cousine", "Bigshot One", "Acme", "VT323", "Gudea", "Overpass", "Amiko", "Nova Round", "IBM Plex Serif", "IM Fell Double Pica", "Metamorphous", "Abel", "Zeyada", "Freckle Face", "Meddon", "Pinyon Script", "Lustria", "Yesteryear", "Cagliostro", "IM Fell French Canon", "Andika", "Belleza", "Waiting for the Sunrise", "Muli", "Artifika", "Expletus Sans", "Russo One", "Michroma", "Yeseva One", "Trade Winds", "Josefin Slab", "Rambla", "Maitree", "PT Sans Caption", "Telex", "Arbutus Slab", "Kameron", "Chela One", "GFS Didot", "Bree Serif", "Archivo Black", "Spectral", "Ranchers", "Alike Angular", "Karla", "Charmonman", "Libre Franklin", "Monoton", "Fondamento", "Alegreya", "Just Another Hand", "Walter Turncoat", "Bayon", "Nova Mono", "Loved by the King", "Coda Caption", "Gravitas One", "Slackey", "Geo", "Pompiere", "Mr Bedfort", "Oldenburg", "Schoolbell", "Mali", "Archivo Narrow", "Katibeh", "Playfair Display SC", "Gabriela", "Galdeano", "Hanuman", "Wendy One", "Sue Ellen Francisco", "Gloria Hallelujah", "Erica One", "Fanwood Text", "Emblema One", "Black Ops One", "Magra", "Nova Oval", "Fira Sans Extra Condensed", "Anonymous Pro", "Libre Barcode 39 Extended", "Righteous", "Odor Mean Chey", "Seaweed Script", "Domine", "Patua One", "Marmelad", "Sofadi One", "Sura", "Hind Vadodara", "Sigmar One", "Coustard", "Short Stack", "Peddana", "Goblin One", "Alex Brush", "Della Respira", "Amita", "Hi Melody", "Herr Von Muellerhoff", "Wallpoet", "Londrina Outline", "Dr Sugiyama", "Wire One", "Yatra One", "Ultra", "Niconne", "Oregano", "Offside", "Eagle Lake", "Podkova", "Pontano Sans", "Neucha", "Overlock", "EB Garamond", "PT Sans", "Ledger", "Oranienbaum", "Spirax", "Hanalei Fill", "Headland One", "Kumar One Outline", "Cantora One", "Wellfleet", "Mr Dafoe", "BenchNine", "Mada", "Milonga", "Martel", "Snippet", "Freehand", "Shojumaru", "Salsa", "MedievalSharp", "Karma", "Cinzel", "Joti One", "New Rocker", "BioRhyme", "Marvel", "Sail", "Forum", "Montaga", "Trykker", "Concert One", "Eater", "Ceviche One", "Mate", "Glegoo", "Irish Grover", "Cormorant", "Bentham", "PT Sans Narrow", "Rokkitt", "Sunshiney", "Moulpali", "Advent Pro", "Tangerine", "Shanti", "Alice", "Asar", "Arsenal", "Bellefair", "Capriola", "Stardos Stencil", "Homenaje", "Slabo 13px", "Tenor Sans", "Meera Inimai", "Passion One", "Baloo Tammudu", "Tienne", "Mate SC", "Baloo Bhaina", "Notable", "Kelly Slab", "Fredoka One", "Baloo Thambi", "Boogaloo", "Meie Script", "Viga", "Carme", "Baloo Da", "Bubbler One", "Gentium Basic", "Crafty Girls", "Frijole", "Strait", "M PLUS Rounded 1c", "Saira Semi Condensed", "Romanesco", "Cormorant SC", "Sansita", "Londrina Sketch", "Skranji", "Raleway Dots", "Roboto Mono", "Quando", "Inika", "Sriracha", "Averia Serif Libre", "Alegreya Sans", "Nosifer", "Prociono", "Atma", "ABeeZee", "Stalinist One", "Almendra SC", "Ribeye Marrow", "Carter One", "Life Savers", "Limelight", "Rammetto One", "Atomic Age", "Kdam Thmor", "Orienta", "Monofett", "Port Lligat Slab", "Rock Salt", "Lusitana", "Julee", "Copse", "Vesper Libre", "Share Tech", "Mirza", "Special Elite", "Chau Philomene One", "Battambang", "Arima Madurai", "Macondo Swash Caps", "Manuale", "Gafata", "Handlee", "Merienda", "Gurajada", "Tulpen One", "Andada", "Chonburi", "Chathura", "Tenali Ramakrishna", "Preahvihear", "Bowlby One SC", "Maiden Orange", "Bahiana", "Titan One", "Rosarivo", "Fascinate", "Felipa", "Ovo", "Fahkwang", "Jaldi", "Plaster", "Exo", "Yantramanav", "Timmana", "Suwannaphum", "Gorditas", "Nokora", "Cherry Swash", "Jim Nightshade", "Averia Libre", "Bonbon", "Bungee Inline", "Luckiest Guy", "Khmer", "Content", "Marck Script", "Delius Unicase", "Warnes", "Antic", "Port Lligat Sans", "Bungee Hairline", "Griffy", "Song Myung", "Gochi Hand", "Nova Script", "Nova Square", "Siemreap", "Diplomata", "Poller One", "Baloo Paaji", "ZCOOL QingKe HuangYou", "Bungee Outline", "Condiment", "East Sea Dokdo", "Amethysta", "Baloo Tamma", "Gruppo", "Hind Madurai", "Baumans", "Libre Barcode 128 Text", "Anaheim", "Kantumruy", "Modern Antiqua", "Metal", "Shadows Into Light Two", "Londrina Solid", "Medula One", "Contrail One", "Chenla", "Stoke", "Rochester", "Coda", "Laila", "Molle", "Convergence", "Encode Sans Semi Condensed", "Supermercado One", "Jomhuria", "Ubuntu Mono", "Corben", "Jura", "ZCOOL KuaiLe", "Underdog", "Asap Condensed", "Zilla Slab", "Kadwa", "Voltaire", "Rozha One", "Hind Guntur", "IM Fell English SC", "Puritan", "Proza Libre", "Ruslan Display", "Frank Ruhl Libre", "Baloo Bhaijaan", "Aclonica", "Elsie", "Niramit", "Bilbo", "Istok Web", "Koulen", "Arya", "IBM Plex Mono", "Shrikhand", "Moul", "Bokor", "Chicle", "Dangrek", "NTR", "Aref Ruqaa", "Cormorant Upright", "Sedgwick Ave", "K2D", "Coiny", "Padauk", "Ranga", "Encode Sans Condensed"];
const custom_utils = ['penta', 'quad', 'triple', 'mvp', 'winstreak', 'legendary', '6kills', '7kills', '8kills', 'aov-logo-1', 'aov-logo-2', 'aov-logo-3', 'aov-logo-4', 'aov-logo-5', 'fire-splash', 'splash-blue', 'tencent-1'];

window.mobileAndTabletcheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

var is_tablet_or_mobile = mobileAndTabletcheck();
const screen_width = (screen.width * 0.8);
const screen_height = (screen.height * 0.8);
const screen_ratio = (window.devicePixelRatio + 0.5);

const desktop_width = 730;
const desktop_height = 410.625;
const desktop_ratio = 3;

//default phone size 
const initial_canvas_width = 540;
const initial_canvas_height = 960;
const initial_canvas_ratio = 2;

var tr = null;
var deleteButton = null;
var flipButton = null;

var loaded_fonts = ['Staatliches'];

//set cancvas size as device resolution
if (is_tablet_or_mobile) {
    var current_mode = 'mobile';
    var canvas_width = screen_width;
    var canvas_height = screen_height;
    var canvas_ratio = screen_ratio;
} else {
    var current_mode = 'mobile';
    var canvas_width = initial_canvas_width;
    var canvas_height = initial_canvas_height;
    var canvas_ratio = initial_canvas_ratio;
}

var isMobileApp = false;

if (window.location.href.indexOf("?mobile_app=true") > -1) {
    isMobileApp = true;
}

$(function () {
    if (isMobileApp) {
        $("#download-image").removeClass('btn-primary').addClass('btn-success');
        $("#download-image > span").text('Save Image to Device');
    }

    $('#aov-canvas-wrapper').css({
        "width": canvas_width,
        "height": canvas_height,
        "margin": is_tablet_or_mobile ? 'auto' : 'initial'
    });
    //render bg thumbs
    render_thumbnails('bg', $('#bg-wrapper > div'), '.jpg');
    //render skins thumb
    render_thumbnails('skins', $('#skin-wrapper > div'));
    //render custom util;
    render_custom_utils($('#util'));
    //render util;
    render_utils($('#util'), 14);
    //renderfonts
    render_fonts_select($('#text-font'));



    $('#selected-mode').change(function () {
        set_mode($(this).val());
    });

});

function set_mode(mode = 'default') {
    if (mode == 'default') {
        mode = current_mode;
    }

    if (mode == 'desktop') {
        set_desktop();
    } else if (mode == 'square') {
        set_square();
    } else {
        set_mobile();
    }

}

function set_desktop() {
    $('.main .canvas-section').removeClass('col-md-6').addClass('col-md-12');
    $('.main .tool-section').removeClass('col-md-6').addClass('col-md-8');
    stage.width(desktop_width);
    stage.height(desktop_height);
    canvas_ratio = desktop_ratio;
    stage.draw();
    $('#aov-canvas-wrapper').width(desktop_width).height(desktop_height);
    current_mode = 'desktop';
}


function set_mobile() {
    $('.main .canvas-section').removeClass('col-md-12').addClass('col-md-6');
    $('.main .tool-section').removeClass('col-md-8').addClass('col-md-6');
    if (is_tablet_or_mobile) {
        stage.width(screen_width);
        stage.height(screen_height);
        canvas_ratio = screen_ratio;
    } else {
        stage.width(initial_canvas_width);
        stage.height(initial_canvas_height);
        canvas_ratio = initial_canvas_ratio;
    }
    //console.log(screen_width);
    //console.log(screen_height);
    stage.draw();
    $('#aov-canvas-wrapper').width(stage.width()).height(stage.height());
    current_mode = 'mobile';
}

function set_square() {
    $('.main .canvas-section').removeClass('col-md-12').addClass('col-md-6');
    $('.main .tool-section').removeClass('col-md-8').addClass('col-md-6');
    if (is_tablet_or_mobile) {
        stage.width(screen_width);
        stage.height(screen_width);
        canvas_ratio = screen_ratio;
    } else {
        stage.width(initial_canvas_width);
        stage.height(initial_canvas_width);
        canvas_ratio = initial_canvas_ratio;
    }
    //console.log(screen_width);
    //console.log(screen_height);
    stage.draw();
    $('#aov-canvas-wrapper').width(stage.width()).height(stage.height());
    current_mode = 'mobile';
}

function render_custom_utils(container) {
    var html = '';
    var i = 1;
    $.each(custom_utils, function (i, data) {
        html = html + '<img loading="lazy" src="images/utils-thumb/' + data + '.jpg" data-source="images/utils/' + data + '.png" data-sub="custom-utils" height="70" /> ';
        i++;
    });
    container.append(html);
}

function render_utils(container, count = 0) {
    var html = '';
    for (var x = count; x >= 1; x--) {
        html = html + '<img loading="lazy" src="' + garena_wp + 'tw-title-thumb/' + x + '.jpg" data-sub="tw-title" width="140" data-number="' + x + '" /> ';
    }
    container.append(html);
}

function render_thumbnails(type, container) {
    var html = '';
    var i = 1;
    $.each(wp_data, function (i, data) {
        html = '';
        for (var x = 1; x <= data[type + 'Count']; x++) {
            //html = html + 'test';
            html = html + '<img loading="lazy" title="' + data['name'].toUpperCase() + '" data-hero="' + data['value'] + '" data-number=' + x + ' data-sub="' + type + '" class="' + type + ' ' + type + '-' + data['value'] + '" src="' + garena_cdn + data['value'] + '/' + type + '-thumb/' + x + '.jpg" width=50/>';
        }
        container.append(html);
    });
}

function render_fonts_select(container) {
    var font_options = '<option value="impact">Impact</option>';
    $.each(fonts, function (i, v) {
        font_options = font_options + '<option value="' + v + '">' + v + '</option>';
    });
    container.html(font_options);
}


// first we need to create a stage
window.stage = new Konva.Stage({
    container: 'container', // id of container <div>
    width: canvas_width,
    height: canvas_height
});

window.active_target = null;
// then create layer
window.layer = new Konva.Layer();

// draw the image
layer.draw();

window.tr = null;
window.deleteButton = null;

var menuNode = document.getElementById('context-menu');

stage.on('dragstart click tap', function (e) {
    activate_transform(e.target);
});

window.addEventListener('click', () => {
    // hide menu
    menuNode.style.display = 'none';
});

stage.on('dblclick dbltap', function (e) {
    showContextMenu(e);
});

stage.on('contextmenu', function (e) {
    // prevent default behavior
    showContextMenu(e);
});

function showContextMenu(e) {
    e.evt.preventDefault();
    if (e.target === stage) {
        // if we are on empty place of the stage we will do nothing
        return;
    }
    active_target = e.target;
    // show menu
    menuNode.style.display = 'initial';
    var containerRect = stage.container().getBoundingClientRect();
    menuNode.style.top =
        $(".canvas-section").offset().top + stage.getPointerPosition().y + 4 + 'px';
    menuNode.style.left =
        $(".canvas-section").offset().left + stage.getPointerPosition().x + 16 + 'px';
}

$('html').keyup(function (e) {
    if (e.keyCode == 46) {
        //alert('Delete key released');
        active_target.destroy();
        stage.find('Transformer').detach();
        layer.draw();

    }
});

$("#bf-button").click(function () {
    active_target.zIndex(active_target.zIndex() + 1);
    layer.draw();
});

$("#sb-button").click(function () {
    active_target.zIndex(active_target.zIndex() - 1);
    layer.draw();
});
$("#stb-button").click(function () {
    active_target.zIndex(0);
    layer.draw();
});

$("#btf-button").click(function () {
    active_target.zIndex(999998);
    layer.draw();
});
$("#fh-button").click(function () {
    flipHorizontal();
});

$("#fv-button").click(function () {
    flipVertical();
});
$("#delete-button").click(function () {
    delete_obj();
});


window.flipHorizontal = function () {
    activate_transform(active_target);
    var width = active_target.getWidth();
    active_target.scaleX(active_target.scaleX() * -1);
    layer.draw();
    if (active_target.getOffsetX() > 0) {
        active_target.setOffsetX(0);
    } else {
        active_target.setOffsetX(width);
    }

    layer.draw();

}

window.flipVertical = function () {
    activate_transform(active_target);

    var height = active_target.getHeight();
    active_target.scaleY(active_target.scaleY() * -1);
    layer.draw();
    if (active_target.getOffsetY() > 0) {
        active_target.setOffsetY(0);
    } else {
        active_target.setOffsetY(height);
    }

    layer.draw();
}

function activate_transform(target) {
    active_target = target;
    if (tr != null) {
        tr.attachTo(target);
        deleteButton.setX(tr.getWidth());
        tr.zIndex(999999);
        layer.draw();
        return;
    }

    // create new transformer
    tr = new Konva.Transformer({
        anchorStroke: 'red',
        anchorFill: 'yellow',
        anchorSize: 20,
        borderStroke: '#fff',
        borderDash: [3, 3],
        enabledAnchors: ['bottom-right'],
        centeredScaling: true
    });
    layer.add(tr);

    tr.attachTo(target);
    var deleteImageObj = new Image();
    deleteImageObj.setAttribute('crossOrigin', 'anonymous');
    deleteImageObj.onload = function () {

        deleteButton = new Konva.Image({
            x: tr.getWidth(),
            y: 0,
            image: deleteImageObj,
        });

        tr.add(deleteButton);
        layer.draw();

        tr.on('transform', () => {
            //active_target.clearCache();
            deleteButton.x(tr.getWidth());
            //tr.update();
            //active_target.cache();
            layer.draw();
        });

        deleteButton.on('click tap', () => {
            delete_obj();
        })
        deleteButton.on('mouseenter', function () {
            stage.container().style.cursor = 'pointer';
        });
        deleteButton.on('mouseleave', function () {
            stage.container().style.cursor = 'default';
        });
    }



    deleteImageObj.src = 'images/del.png';



    var flipImageObj = new Image();
    flipImageObj.setAttribute('crossOrigin', 'anonymous');
    flipImageObj.onload = function () {

        flipButton = new Konva.Image({
            x: 0,
            y: 0,
            image: flipImageObj,
        });

        tr.add(flipButton);
        layer.draw();

        tr.on('transform', () => {
            flipButton.x(0);
            //layer.draw();
        });

        flipButton.on('click tap', () => {
            flipHorizontal();
        });
        flipButton.on('mouseenter', function () {
            stage.container().style.cursor = 'pointer';
        });
        flipButton.on('mouseleave', function () {
            stage.container().style.cursor = 'default';
        });
    }

    flipImageObj.src = 'images/flip.png';

    //tr.attachTo(target);

    layer.draw();
}

function delete_obj() {
    tr.detach();
    active_target.destroy();
    layer.draw();
}

function add_text(text, color = 'orange', font = 'arial', text_align = 'left', stroke = "#000") {
    var stroke_width = (stroke != null) ? 1 : 0;
    var simpleText = new Konva.Text({
        x: stage.getWidth() / 2,
        y: 15,
        text: text,
        fontSize: 35,
        fontFamily: font,
        fill: color,
        stroke: stroke,
        strokeWidth: stroke_width,
        draggable: true,
        align: text_align
    });
    layer.add(simpleText);
    stage.add(layer);
    activate_transform(simpleText);
    //layer.draw();

}

$(function () {
    $('.clickable-image > div > img').click(function () {
        var sub = $(this).data('sub');
        var hero = $(this).data('hero');
        var number = $(this).data('number');
        var source = $(this).data('source');
        var ext = '.png';
        var baseon = 'width';
        if (sub == 'bg') {
            ext = '.jpg';
            if (current_mode == 'desktop') {
                baseon = 'contains';
            } else {
                baseon = 'height';
            }

        }

        var file = '';
        if (sub == 'tw-title') {
            file = garena_wp + sub + '/' + number + ext;
        } else if (sub === 'custom-utils') {
            file = source;
        } else {
            file = garena_cdn + hero + '/' + sub + '/' + number + ext;
        }
        //console.log(baseon);

        add_image(file, baseon);
    });

    $('#text-font').on('change', function () {
        var font = $(this).val();
        if ($.inArray(font, loaded_fonts) === -1 && font != "Impact") {
            addCSS("https://fonts.googleapis.com/css?family=" + font);
            loaded_fonts.push(font);
        }
        //console.log(loaded_fonts);        
    });

    $('#tambah-text').click(function () {
        var stroke_color_add = ($('#stroke-enabled').prop('checked') == "1") ? $('#stroke-color').val() : null;
        add_text($('#text').val(), $('#text-color').val(), $('#text-font').val(), $('#text-align').val(), stroke_color_add)
        if (is_tablet_or_mobile) {
            $('.collapse').removeClass('show');
        }
    });
    $('#download-image').click(function () {
        stage.find('Transformer').detach();
        downloadCanvas('aov-wallpaper.png');
    });

    $('#filter-hero').on('change keyup paste', function () {
        if ($(this).val() === '') {
            $('#skin-wrapper > div > img').show();
        } else {
            $('#skin-wrapper > div > img').hide();
            $('#skin-wrapper > div > img').filter(function () {
                return $(this).attr('title').toLowerCase().includes($('#filter-hero').val());
            }).show();
        }
    });

    $('#filter-bg').on('change keyup paste', function () {
        if ($(this).val() === '') {
            $('#bg-wrapper > div > img').show();
        } else {
            $('#bg-wrapper > div > img').hide();
            $('#bg-wrapper > div > img').filter(function () {
                return $(this).attr('title').toLowerCase().includes($('#filter-bg').val());
            }).show();
        }
    });

    $('#text, #text-color, #text-font, #text-align, #stroke-enabled, #stroke-color').on('change keyup paste', function () {
        var text = $('#text').val();
        var color = $('#text-color').val();
        var font = $('#text-font').val();
        var align = $('#text-align').val();
        var stroke = ($('#stroke-enabled').prop("checked") == true) ? 1 : 0;
        var stroke_color = $('#stroke-color').val();
        set_preview_text(text, color, font, align, stroke, stroke_color);
    });

    $('.menu-btn').click(function (e) {
        if ($($(this).data('target')).hasClass('show')) {
            return;
        }
        $(this).parent().parent().find('.collapse').removeClass('show');
    });

    $('#custom-image').on('change', function (e) {
        readUrl(this);
    });

    $(document).click((event) => {
        if (!$(event.target).closest('#left-wrapper').length) {
            // the click occured outside '#element'
            $('.collapse').removeClass('show');
        }
    });
});

function readUrl(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            add_image(e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


function set_preview_text(text = '', color = 'black', font = 'arial', align = 'left', stroke = 0, stroke_color = '#000') {
    if (text == '') {
        $('#text-prev-wrapper').html('');
        return;
    }

    $('#text-prev-wrapper').html('<center>Preview:</center><br /><p style="text-align:' + align + ';font-size:35px;color:' + color + ';font-family: \'' + font + '\';padding:10px; -webkit-text-stroke: ' + stroke + 'px ' + stroke_color + ';">' + text + '</p>');
}

function getLoadingWrapper() {
    if (is_tablet_or_mobile) {
        return $("#left-wrapper > div");
    }

    return $("#left-wrapper");
}
function add_image(file, baseon = 'width') {
    getLoadingWrapper().LoadingOverlay("show", {
        text: "Loading Image...",
        textResizeFactor: 0.3
    });
    var imageObj = new Image();
    imageObj.setAttribute('crossOrigin', 'anonymous');
    imageObj.onload = function () {
        getLoadingWrapper().LoadingOverlay("hide");
        if (is_tablet_or_mobile) {
            $('.collapse').removeClass('show');
        }
        var canvas = stage.attrs;
        var imageAspectRatio = imageObj.width / imageObj.height;
        var canvasAspectRatio = canvas.width / canvas.height;
        var renderableHeight, renderableWidth, xStart, yStart;

        // If image's aspect ratio is less than canvas's we fit on height
        // and place the image centrally along width
        if (imageAspectRatio < canvasAspectRatio || baseon == 'height') {
            renderableHeight = canvas.height;
            renderableWidth = imageObj.width * (renderableHeight / imageObj.height);
            xStart = (canvas.width - renderableWidth) / 2;
            yStart = 0;
        }

        // If image's aspect ratio is greater than canvas's we fit on width
        // and place the image centrally along height
        else if (imageAspectRatio > canvasAspectRatio) {
            renderableWidth = canvas.width
            renderableHeight = imageObj.height * (renderableWidth / imageObj.width);
            xStart = 0;
            yStart = (canvas.height - renderableHeight) / 2;
        }

        // Happy path - keep aspect ratio
        else {
            renderableHeight = canvas.height;
            renderableWidth = canvas.width;
            xStart = 0;
            yStart = 0;
        }

        if (baseon == 'contains') {
            if (renderableWidth < canvas.width) {
                renderableHeight = renderableHeight * (canvas.width / renderableWidth)
                renderableWidth = canvas.width;
            }

            if (renderableHeight < canvas.height) {
                renderableWidth = renderableWidth * (canvas.height / renderableHeight);
                renderableHeight = canvas.height;
            }
            xStart = 0;
            yStart = 0;
        }

        var newImage = new Konva.Image({
            x: xStart,
            y: yStart,
            image: imageObj,
            draggable: true,
            keepRatio: true,
            width: renderableWidth,
            height: renderableHeight
        });

        // add the shape to the layer
        layer.add(newImage);

        // add the layer to the stage
        stage.add(layer);
        stage.find('Transformer').detach();
        activate_transform(newImage);

        $('html, body').animate({
            scrollTop: $('#aov-canvas-wrapper').offset().top - 50
        }, 1000);

    };
    imageObj.src = file;
}


var downloadCanvas = function (name) {
    var link = document.createElement("a");
    var imgData = stage.toDataURL({
        pixelRatio: canvas_ratio
    });
    var strDataURI = imgData.substr(22, imgData.length);
    var blob = dataURLtoBlob(imgData);
    var objurl = URL.createObjectURL(blob);

    if (isMobileApp) {
        window.exportImage.postMessage(imgData);
    } else {
        link.download = name;

        link.href = objurl;
        link.click();
    }

}

function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
        type: mime
    });
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    link = null;
}

var lastDist = 0;
stage.getContent().addEventListener('touchmove', function (evt) {
    var touch1 = evt.touches[0];
    var touch2 = evt.touches[1];
    //console.log(touch1);


    //console.log(touch2.clientX);
    if (touch1 && touch2 && active_target) {
        var dist = getDistance({
            x: touch1.clientX,
            y: touch1.clientY
        }, {
            x: touch2.clientX,
            y: touch2.clientY
        });

        if (!lastDist) {
            lastDist = dist;
        }

        var scale = active_target.scaleX() * dist / lastDist;


        active_target.scaleX(scale);
        active_target.scaleY(scale);
        deleteButton.x(tr.getWidth());
        layer.draw();
        lastDist = dist;
    }
}, false);

stage.getContent().addEventListener('touchend', function () {
    lastDist = 0;
}, false);

function getDistance(p1, p2) {
    return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
}

// Include CSS file
function addCSS(filename) {
    var head = document.getElementsByTagName('head')[0];

    var style = document.createElement('link');
    style.href = filename;
    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);
}
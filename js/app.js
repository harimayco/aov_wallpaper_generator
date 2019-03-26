import Konva from 'konva';
window.$ = window.jQuery = require('jquery');
import 'bootstrap';
import 'gasparesganga-jquery-loading-overlay';


const garena_wp = 'https://cdngarenanow-a.akamaihd.net/webmain/static/resource/wallpaper/';
const garena_cdn = garena_wp + 'hero/';
const wp_data = [{
    "name": "toro",
    "value": "toro",
    "tag": "tank",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "raz",
    "value": "raz",
    "tag": "mage",
    "skinsCount": 4,
    "bgCount": 4
}, {
    "name": "zephys",
    "value": "zephys",
    "tag": "warrior",
    "skinsCount": 4,
    "bgCount": 4
}, {
    "name": "veera",
    "value": "veera",
    "tag": "mage",
    "skinsCount": 5,
    "bgCount": 5
}, {
    "name": "violet",
    "value": "violet",
    "tag": "archer",
    "skinsCount": 7,
    "bgCount": 7
}, {
    "name": "yorn",
    "value": "yorn",
    "tag": "archer",
    "skinsCount": 5,
    "bgCount": 5
}, {
    "name": "omega",
    "value": "omega",
    "tag": "tank",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "butterfly",
    "value": "butterfly",
    "tag": "assassin",
    "skinsCount": 7,
    "bgCount": 7
}, {
    "name": "mina",
    "value": "mina",
    "tag": "tank",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "azzenka",
    "value": "azzenka",
    "tag": "mage",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "lubu",
    "value": "lubu",
    "tag": "warrior",
    "skinsCount": 6,
    "bgCount": 6
}, {
    "name": "zanis",
    "value": "zanis",
    "tag": "warrior",
    "skinsCount": 5,
    "bgCount": 5
}, {
    "name": "valhein",
    "value": "valhein",
    "tag": "archer",
    "skinsCount": 6,
    "bgCount": 6
}, {
    "name": "thane",
    "value": "thane",
    "tag": "tank",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "ilumia",
    "value": "ilumia",
    "tag": "mage",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "lauriel",
    "value": "lauriel",
    "tag": "mage",
    "skinsCount": 5,
    "bgCount": 5
}, {
    "name": "nakroth",
    "value": "nakroth",
    "tag": "assassin",
    "skinsCount": 5,
    "bgCount": 5
}, {
    "name": "diaochan",
    "value": "diaochan",
    "tag": "mage",
    "skinsCount": 4,
    "bgCount": 4
}, {
    "name": "aleister",
    "value": "aleister",
    "tag": "mage",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "wukong",
    "value": "wukong",
    "tag": "assassin",
    "skinsCount": 4,
    "bgCount": 4
}, {
    "name": "krixi",
    "value": "krixi",
    "tag": "mage",
    "skinsCount": 6,
    "bgCount": 6
}, {
    "name": "gildur",
    "value": "gildur",
    "tag": "tank",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "kahli",
    "value": "kahli",
    "tag": "mage",
    "skinsCount": 4,
    "bgCount": 4
}, {
    "name": "chaugnar",
    "value": "chaugnar",
    "tag": "support",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "ormarr",
    "value": "ormarr",
    "tag": "warrior",
    "skinsCount": 4,
    "bgCount": 4
}, {
    "name": "alice",
    "value": "alice",
    "tag": "support",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "mganga",
    "value": "mganga",
    "tag": "mage",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "maloch",
    "value": "maloch",
    "tag": "warrior",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "taara",
    "value": "taara",
    "tag": "tank",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "preyta",
    "value": "preyta",
    "tag": "mage",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "cresht",
    "value": "cresht",
    "tag": "tank",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "fennik",
    "value": "fennik",
    "tag": "archer",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "grakk",
    "value": "grakk",
    "tag": "tank",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "natalya",
    "value": "natalya",
    "tag": "mage",
    "skinsCount": 5,
    "bgCount": 5
}, {
    "name": "lumburr",
    "value": "lumburr",
    "tag": "support",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "jinna",
    "value": "jinna",
    "tag": "mage",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "payna",
    "value": "payna",
    "tag": "support",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "arthur",
    "value": "arthur",
    "tag": "warrior",
    "skinsCount": 4,
    "bgCount": 4
}, {
    "name": "kriknak",
    "value": "kriknak",
    "tag": "assassin",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "airi",
    "value": "airi",
    "tag": "warrior",
    "skinsCount": 6,
    "bgCount": 6
}, {
    "name": "batman",
    "value": "batman",
    "tag": "assassin",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "slimz",
    "value": "slimz",
    "tag": "archer",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "skud",
    "value": "skud",
    "tag": "warrior",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "zuka",
    "value": "zuka",
    "tag": "warrior",
    "skinsCount": 5,
    "bgCount": 5
}, {
    "name": "murad",
    "value": "murad",
    "tag": "assassin",
    "skinsCount": 6,
    "bgCount": 6
}, {
    "name": "telannas",
    "value": "telannas",
    "tag": "archer",
    "skinsCount": 5,
    "bgCount": 5
}, {
    "name": "Zill",
    "value": "qier",
    "tag": "mage",
    "skinsCount": 2,
    "bgCount": 4
}, {
    "name": "ignis",
    "value": "ignis",
    "tag": "mage",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "joker",
    "value": "joker",
    "tag": "archer",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "superman",
    "value": "superman",
    "tag": "warrior",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "kilgroth",
    "value": "kilgroth",
    "tag": "warrior",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "xeniel",
    "value": "xeniel",
    "tag": "tank",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "arduin",
    "value": "arduin",
    "tag": "warrior",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "Ryoma",
    "value": "longma",
    "tag": "warrior",
    "skinsCount": 4,
    "bgCount": 4
}, {
    "name": "astrid",
    "value": "aicuisi",
    "tag": "warrior",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "moren",
    "value": "moen",
    "tag": "archer",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "wonderwoman",
    "value": "wonderwoman",
    "tag": "warrior",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "tulen",
    "value": "tulun",
    "tag": "mage",
    "skinsCount": 5,
    "bgCount": 5
}, {
    "name": "lindis",
    "value": "lindi",
    "tag": "archer",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "timi",
    "value": "timi",
    "tag": "support",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "omen",
    "value": "yecha",
    "tag": "warrior",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "max",
    "value": "maikesi",
    "tag": "warrior",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "liliana",
    "value": "lilian",
    "tag": "mage",
    "skinsCount": 4,
    "bgCount": 4
}, {
    "name": "wisp",
    "value": "lingling",
    "tag": "archer",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "arum",
    "value": "airui",
    "tag": "tank",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "rourke",
    "value": "luoke",
    "tag": "warrior",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "roxie",
    "value": "nuokexi",
    "tag": "warrior",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "baldum",
    "value": "bodun",
    "tag": "tank",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "marja",
    "value": "majia",
    "tag": "mage",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "emily",
    "value": "aimili",
    "tag": "warrior",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "annete",
    "value": "annaite",
    "tag": "support",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "y'bneth",
    "value": "gumu",
    "tag": "tank",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "elsu",
    "value": "su",
    "tag": "archer",
    "skinsCount": 3,
    "bgCount": 3
}, {
    "name": "richter/Riktor",
    "value": "ruike",
    "tag": "warrior",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "Sephera",
    "value": "lan",
    "tag": "mage",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "quillen",
    "value": "kuilun",
    "tag": "assassin",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "Darcy",
    "value": "daerxi",
    "tag": "mage",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "Capheny",
    "value": "kafenni",
    "tag": "archer",
    "skinsCount": 2,
    "bgCount": 2
}, {
    "name": "Verez",
    "value": "feilei",
    "tag": "warrior",
    "skinsCount": 2,
    "bgCount": 2
}];
const fonts = ['Staatliches', 'Bloodseeker', 'Miss Fajardose', 'Righteous', 'Luckiest Guy', 'Passion One', 'Bangers', 'Black Ops One', 'Arial', 'Arial Black', 'Georgia', 'Trebuchet MS', 'Courier New', 'Lucida Console', 'Comic Sans MS'];
const custom_utils = ['penta', 'quad', 'triple', 'mvp', 'winstreak', 'legendary', '6kills', '7kills', '8kills', 'aov-logo-1', 'aov-logo-2', 'aov-logo-3', 'aov-logo-4', 'aov-logo-5', 'fire-splash', 'splash-blue', 'tencent-1'];

window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a) {
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

$(function() {
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



    $('#selected-mode').change(function() {
        set_mode($(this).val());
    });

});

function set_mode(mode = 'default') {
    if (mode == 'default') {
        mode = current_mode;
    }

    if (mode == 'desktop') {
        set_desktop();
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
    if(is_tablet_or_mobile){
        stage.width(screen_width);
        stage.height(screen_height);
        canvas_ratio = screen_ratio;
    }else{
        stage.width(initial_canvas_width);
        stage.height(initial_canvas_height);
        canvas_ratio = initial_canvas_ratio;
    }
    console.log(screen_width);
    console.log(screen_height);
    stage.draw();
    $('#aov-canvas-wrapper').width(stage.width()).height(stage.height());
    current_mode = 'mobile';
}

function render_custom_utils(container) {
    var html = '';
    var i = 1;
    $.each(custom_utils, function(i, data) {
        html = html + '<img src="images/utils-thumb/' + data + '.jpg" data-source="images/utils/' + data + '.png" data-sub="custom-utils" height="70" /> ';
        i++;
    });
    container.append(html);
}

function render_utils(container, count = 0) {
    var html = '';
    for (var x = count; x >= 1; x--) {
        html = html + '<img src="' + garena_wp + 'tw-title-thumb/' + x + '.jpg" data-sub="tw-title" width="140" data-number="' + x + '" /> ';
    }
    container.append(html);
}

function render_thumbnails(type, container) {
    var html = '';
    var i = 1;
    $.each(wp_data, function(i, data) {
        html = '';
        for (var x = 1; x <= data[type + 'Count']; x++) {
            //html = html + 'test';
            html = html + '<img title="' + data['name'].toUpperCase() + '" data-hero="' + data['value'] + '" data-number=' + x + ' data-sub="' + type + '" class="' + type + ' ' + type + '-' + data['value'] + '" src="' + garena_cdn + data['value'] + '/' + type + '-thumb/' + x + '.jpg" width=50/>';
        }
        container.append(html);
    });
}

function render_fonts_select(container) {
    var font_options = '';
    $.each(fonts, function(i, v) {
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

$('html').keyup(function(e) {
    if (e.keyCode == 46) {
        //alert('Delete key released');
        active_target.destroy();
        stage.find('Transformer').destroy();
        layer.draw();

    }
});

stage.on('dragstart click tap', function(e) {
    activate_transform(e.target);
});

window.flipHorizontal = function(){
    var width = active_target.getWidth();
    active_target.scaleX(active_target.scaleX() * -1);
    layer.draw();
    if(active_target.getOffsetX() > 0 ){
        active_target.setOffsetX(0);
    }else{
        active_target.setOffsetX(width);
    }

    layer.draw();
    activate_transform(active_target);
}

function activate_transform(target) {
    active_target = target;
    // if click on empty area - remove all transformers
    if (target === stage) {
        stage.find('Transformer').destroy();
        layer.draw();
        return;
    }

    // remove old transformers
    // TODO: we can skip it if current rect is already selected
    stage.find('Transformer').destroy();

    // create new transformer
    tr = new Konva.Transformer({
        anchorStroke: 'red',
        anchorFill: 'yellow',
        anchorSize: 20,
        borderStroke: '#dedede',
        borderDash: [3, 3],
        enabledAnchors: ['bottom-right'],
        centeredScaling: true
    });
    layer.add(tr);


    var deleteImageObj = new Image();
    deleteImageObj.setAttribute('crossOrigin', 'anonymous');
    deleteImageObj.onload = function() {

        deleteButton = new Konva.Image({
            x: tr.getWidth(),
            y: 0,
            image: deleteImageObj,
        });

        tr.add(deleteButton);
        layer.draw();

        tr.on('transform', () => {
            deleteButton.x(tr.getWidth());
            //layer.draw();
        });

        deleteButton.on('click tap', () => {
            tr.destroy();
            active_target.destroy();
            layer.draw();
        })
        deleteButton.on('mouseenter', function () {
            stage.container().style.cursor = 'pointer';
        });
        deleteButton.on('mouseleave', function () {
            stage.container().style.cursor = 'default';
        });
    }



    deleteImageObj.src = 'images/del.png';

    tr.attachTo(target);

    var flipImageObj = new Image();
    flipImageObj.setAttribute('crossOrigin', 'anonymous');
    flipImageObj.onload = function() {

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

    tr.attachTo(target);

    layer.draw();
}

function add_text(text, color = 'orange', font = 'arial', text_align = 'left') {
    var simpleText = new Konva.Text({
        x: stage.getWidth() / 2,
        y: 15,
        text: text,
        fontSize: 30,
        fontFamily: font,
        fill: color,
        draggable: true,
        align: text_align
    });
    layer.add(simpleText);
    stage.add(layer);
    //layer.draw();

}

$(function() {
    $('.clickable-image > div > img').click(function() {
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
    $('#tambah-text').click(function() {
        add_text($('#text').val(), $('#text-color').val(), $('#text-font').val(), $('#text-align').val())
    });
    $('#download-image').click(function() {
        stage.find('Transformer').destroy();
        downloadCanvas('aov-wallpaper.png');
    });

    $('#filter-hero').on('change keyup paste', function() {
        if ($(this).val() === '') {
            $('#skin-wrapper > div > img').show();
        } else {
            $('#skin-wrapper > div > img').hide();
            $('#skin-wrapper > div > img').filter(function() {
                return $(this).attr('title').toLowerCase().includes($('#filter-hero').val());
            }).show();
        }
    });

    $('#filter-bg').on('change keyup paste', function() {
        if ($(this).val() === '') {
            $('#bg-wrapper > div > img').show();
        } else {
            $('#bg-wrapper > div > img').hide();
            $('#bg-wrapper > div > img').filter(function() {
                return $(this).attr('title').toLowerCase().includes($('#filter-bg').val());
            }).show();
        }
    });

    $('#text, #text-color, #text-font, #text-align').on('change keyup paste', function() {
        var text = $('#text').val();
        var color = $('#text-color').val();
        var font = $('#text-font').val();
        var align = $('#text-align').val();
        set_preview_text(text, color, font, align);
    });

    $('.menu-btn').click(function(e) {
        if ($($(this).data('target')).hasClass('show')) {
            return;
        }
        $(this).parent().parent().find('.collapse').removeClass('show');
    });

    $('#custom-image').on('change', function(e){
        readUrl(this);
    });
});

function readUrl(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      add_image(e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}


function set_preview_text(text = '', color = 'black', font = 'arial', align = 'left') {
    if (text == '') {
        $('#text-prev-wrapper').html('');
        return;
    }

    $('#text-prev-wrapper').html('<center>Preview:</center><br /><p style="text-align:' + align + ';font-size:35px;color:' + color + ';font-family: \'' + font + '\';background-color:#cacaca;padding:10px">' + text + '</p>');
}

function add_image(file, baseon = 'width') {
    $('#left-wrapper').LoadingOverlay("show", {
        text: "Loading Image...",
        textResizeFactor: 0.3
    });
    var imageObj = new Image();
    imageObj.setAttribute('crossOrigin', 'anonymous');
    imageObj.onload = function() {
        $('#left-wrapper').LoadingOverlay("hide");
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

        if(baseon == 'contains'){
            if(renderableWidth < canvas.width){
                renderableHeight = renderableHeight * (canvas.width / renderableWidth)
                renderableWidth = canvas.width;
            }

            if(renderableHeight < canvas.height){
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
        stage.find('Transformer').destroy();
        activate_transform(newImage);

        $('html, body').animate({
            scrollTop: $('#aov-canvas-wrapper').offset().top - 50
        }, 1000);

    };
    imageObj.src = file;
}


var downloadCanvas = function(name) {
    var link = document.createElement("a");
    var imgData = stage.toDataURL({
        pixelRatio: canvas_ratio
    });
    var strDataURI = imgData.substr(22, imgData.length);
    var blob = dataURLtoBlob(imgData);
    var objurl = URL.createObjectURL(blob);

    link.download = name;

    link.href = objurl;
    link.click();
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
stage.getContent().addEventListener('touchmove', function(evt) {
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

stage.getContent().addEventListener('touchend', function() {
    lastDist = 0;
}, false);

function getDistance(p1, p2) {
    return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
}
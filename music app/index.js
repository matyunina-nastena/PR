let currentObjectUrl = null; // Глобальная переменная для хранения текущей ссылки

function chooseFile(){ // при нажатии на кнопку выбора
const input = document.createElement('input');
input.type = 'file'
input.onchange = function (e) {
    const file = e.target.files[0];
    loadToPlayer(file)
}
input.click();
}

function processLink(){ //когда передадим ссылку
const link = document.getElementById('linkInput').value;
const player = document.getElementById('player');
player.src = link;
player.load();
}

function loadToPlayer(file){ // загружать выбранный файл в плеер
const player = document.getElementById('player');
const reader = new FileReader(); // это встроенный класс браузера (Web API). Браузер не позволяет JavaScript просто так читать файлы с компьютера пользователя в целях безопасности.
reader.onload = (e) => {
    const content = e.target.result; // это то, что прочитал 
    setSongInfo(content);
}
if (currentObjectUrl) {
        URL.revokeObjectURL(currentObjectUrl);
    }
reader.readAsArrayBuffer(file); // Возьми файл file и прочитай его как сырые бинарные данные (ArrayBuffer)". Как только он это сделает, сработает тот самый reader.onload (пункт 3), и данные уйдут в функцию setSongInfo для распаковки тегов.
player.src = URL.createObjectURL(file); // плеер ожидает строку (URL), а не объект файла. - создает локальную ссылку на файл
player.load(); //начни грузить контент
}

function decodeString(str) {
    if (!str) return '';
    try {
        // Превращаем строку в байты (предполагая, что там была Windows-1251)
        const bytes = new Uint8Array([...str].map(c => c.charCodeAt(0)));
        // Декодируем как Windows-1251
        return new TextDecoder('windows-1251').decode(bytes);
    } catch (e) {
        return str; // Если не получилось, возвращаем как есть
    }
}

function setSongInfo(fileContent){
const mp3tag = new MP3Tag(fileContent); // это работа с библиотекой
mp3tag.read();// запускает процесс парсинга (разбора) байтов.
const {v1: {title, artist}, v2: {APIC}} = mp3tag.tags;
const coverBytes = APIC[0].data;
const coverUrl = "data:image/png;base64," + btoa(String.fromCharCode.apply(null, new Uint8Array(coverBytes)));


document.getElementById('song').textContent = decodeString(title);
document.getElementById('artist').textContent = decodeString(artist);
document.getElementById('cover').src = coverUrl;
}

function initDropZone() { //инициализировать дроп зону
    const dropzone = document.getElementById('dropzone');
    dropzone.addEventListener('dragover', (e) => {// что бы сработал дроп, поскольку не принимает перетаскивание объектов
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'copy';
    });
    dropzone.addEventListener('drop', (e) => {
       e.preventDefault();
       e.stopPropagation(); 
       const file = e.dataTransfer.files[0]; // отвечает за то, какие элементы хранятся в перетаскиваемом файле (это встроенный объект браузерного API), хранит в виде списка
       loadToPlayer(file);
    });
}
    window.onload = () => {
        initDropZone()
    }

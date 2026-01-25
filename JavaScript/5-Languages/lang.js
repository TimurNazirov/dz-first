const languages = prompt('Выберите язык интерфейса:');

if (languages) {
switch (languages.trim().toLowerCase()) {
    case 'ru':
    console.log('Добрый день');
    break;
    case 'en':
        console.log('Hello');
        break;
          case 'de':
        console.log('Guten Tag');
        break;
          case 'fr':
        console.log('Bon après-midi');
        break;
        default:
            console.log('Languages not supported');
}
}

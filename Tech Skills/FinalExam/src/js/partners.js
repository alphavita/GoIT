function populatePartners() {

    var contentForPartnersTemplate = {
        partners: [{
            imageName: 'img/partners/foto-1.png',
            thumbnailName: 'img/partners/thumbnail-1.png',
            name: 'Bradley Hunter',
            description: 'Based in Chicago. I love playing tennis and loud music.'
        }, {
            imageName: 'img/partners/foto-2.png',
            thumbnailName: 'img/partners/thumbnail-2.png',
            name: 'Heather Walker',
            description: "I'm a happy person that loves cats and climbing on mountains."
        }, {
            imageName: 'img/partners/foto-3.png',
            thumbnailName: 'img/partners/thumbnail-3.png',
            name: 'Lucas Marsha',
            description: 'I get my inspiration from nature and objects around me. I have a passion to colours, typography and skateboards.'
        }, {
            imageName: 'img/partners/foto-4.png',
            thumbnailName: 'img/partners/thumbnail-4.png',
            name: 'Bradley Hunter',
            description: 'Based in Chicago. I love playing tennis and loud music.'
        }]
    };
    var htmlData = tmpl('partners__template', contentForPartnersTemplate);
    // не работает в ie 8   !!!  $(htmlData).insertBefore($('#partners__template'));
    var pc = document.querySelector('.partners__container');
    pc.innerHTML = pc.innerHTML.replace('<script',htmlData+'<script');
}
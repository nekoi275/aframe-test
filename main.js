AFRAME.registerComponent('change-on-hover', {
    schema: {
        color: { default: 'blue' },
        sound: {type: 'string'},
        sky: {type: 'string'},
        floor: {type: 'string'}
    },

    init: function () {
        let data = this.data;
        let el = this.el;
        this.el.addEventListener('mouseenter', function () {
            el.setAttribute('color', data.color);
            document.querySelector(`#${data.sound}`).components.sound.playSound();
            document.querySelector('a-sky').setAttribute('src', `#${data.sky}`);
            document.querySelector('a-plane').setAttribute('src', `#${data.floor}`);
        });
        el.addEventListener('mouseleave', function () {
            el.setAttribute('color', 'blue');
            document.querySelector(`#${data.sound}`).components.sound.pauseSound();
        });
    }
});
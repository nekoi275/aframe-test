AFRAME.registerComponent('change-color-on-hover', {
    schema: {
        color: { default: 'blue' },
        sound: {type: 'string'}
    },

    init: function () {
        let data = this.data;
        let el = this.el;
        this.el.addEventListener('mouseenter', function () {
            el.setAttribute('color', data.color);
            document.querySelector(`#${data.sound}`).components.sound.playSound();
        });
        el.addEventListener('mouseleave', function () {
            el.setAttribute('color', 'blue');
            document.querySelector(`#${data.sound}`).components.sound.pauseSound();
        });
    }
});
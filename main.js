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
            document.querySelectorAll('[sound]').forEach(s => s.components.sound.stopSound());
            el.setAttribute('color', data.color);
            document.querySelector(`#${data.sound}`).components.sound.playSound();
            document.querySelector('a-sky').setAttribute('src', `#${data.sky}`);
            document.querySelector('a-plane').setAttribute('src', `#${data.floor}`);
        });
        el.addEventListener('mouseleave', function () {
            el.setAttribute('color', 'blue');
        });
    }
});
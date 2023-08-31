AFRAME.registerComponent('change-on-hover', {
    schema: {
        sound: {type: 'string'},
        sky: {type: 'string'},
        floor: {type: 'string'},
        next: {type: 'string'}
    },

    init: function () {
        let data = this.data;
        let el = this.el;
        el.addEventListener('click', function () {
            document.querySelectorAll('[sound]').forEach(s => s.components.sound.stopSound());
            document.querySelector(`#${data.sound}`).components.sound.playSound();
            document.querySelector('a-sky').setAttribute('src', `#${data.sky}`);
            document.querySelector('a-plane').setAttribute('src', `#${data.floor}`);
        });
        el.addEventListener('mouseleave', function () {
            el.setAttribute('scale', '0 0 0')
            document.querySelector(`#${data.next}`).setAttribute('scale', '1 1 1');
        });
    }
});
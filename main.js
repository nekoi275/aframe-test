let soundEntity = document.querySelector('[sound]');
console.log(soundEntity)

AFRAME.registerComponent('change-color-on-hover', {
    schema: {
        color: { default: 'blue' }
    },

    init: function () {
        let data = this.data;
        let el = this.el;
        this.el.addEventListener('mouseenter', function () {
            el.setAttribute('color', data.color);
        });
        el.addEventListener('mouseleave', function () {
            el.setAttribute('color', 'blue');
        });
    }
});
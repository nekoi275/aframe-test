AFRAME.registerComponent('scale-on-mouseenter', {
    schema: {
        color: { default: 'blue' }
    },

    init: function () {
        var data = this.data;
        var el = this.el;
        this.el.addEventListener('mouseenter', function () {
            el.setAttribute('color', data.color);
        });
        el.addEventListener('mouseleave', function () {
            el.setAttribute('color', defaultColor);
        });
    }
});
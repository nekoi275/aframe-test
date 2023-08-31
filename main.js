AFRAME.registerComponent('change-on-click', {
    schema: {
        sound: { type: 'string' },
        sky: { type: 'string' },
        floor: { type: 'string' }
    },

    init: function () {
        let data = this.data;
        let el = this.el;
        const SCENES = [{ sound: 'starlitSound', sky: 'skyTexture', floor: 'groundTexture' },
        { sound: 'sublimeSound', sky: 'templeTexture', floor: 'grassTexture' },
        { sound: 'sunshineSound', sky: 'beachTexture', floor: 'sandTexture' }]

        let sceneNumber = 0;

        el.addEventListener('click', function () {
            if (sceneNumber < SCENES.length - 1) {
                sceneNumber++;
            } else {
                sceneNumber = 0;
            }

            document.querySelectorAll('[sound]').forEach(s => s.components.sound.stopSound());
            document.querySelector(`#${data.sound}`).components.sound.playSound();
            document.querySelector('a-sky').setAttribute('src', `#${data.sky}`);
            document.querySelector('a-plane').setAttribute('src', `#${data.floor}`);
            el.setAttribute('change-on-click', `sound: ${SCENES[sceneNumber].sound}; sky: ${SCENES[sceneNumber].sky}; floor: ${SCENES[sceneNumber].floor}`)
        });
    }
});
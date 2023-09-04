AFRAME.registerComponent('change-on-click', {
    schema: {},

    init: function () {
        let data = this.data;
        let el = this.el;
        const SCENES = [{ sound: 'moonSound', sky: 'skyTexture', floor: 'groundTexture' },
        { sound: 'forestSound', sky: 'forestTexture', floor: 'grassTexture' },
        { sound: 'beachSound', sky: 'beachTexture', floor: 'sandTexture' }]

        let sceneNumber = 0;

        el.addEventListener('click', function () {
            sceneNumber++;
            if (sceneNumber >= SCENES.length) sceneNumber = 0;
            document.querySelectorAll('[sound]').forEach(s => s.components.sound.stopSound());
            document.querySelector(`#${SCENES[sceneNumber].sound}`).components.sound.playSound();
            document.querySelector('a-sky').setAttribute('src', `#${SCENES[sceneNumber].sky}`);
            document.querySelector('a-plane').setAttribute('src', `#${SCENES[sceneNumber].floor}`);
        });
    }
});
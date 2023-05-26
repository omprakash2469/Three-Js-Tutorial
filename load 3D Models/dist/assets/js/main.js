let glasses = document.getElementById('glasses')
let modelUrls = ["assets/model/glass-1.glb", "assets/model/glass-2.glb"]
let posterUrls = ["assets/model/poster/glass-poster-1.webp", "assets/model/poster/glass-poster-2.webp"]

// ========= Change Frames
let frames = document.getElementById('frames').children
for (let i = 0; i < frames.length; i++) {
    frames[i].addEventListener('click', () => {
        // Inactive all frames
        for (let j = 0; j < frames.length; j++) {
            frames[j].classList.replace('border-slate-400', 'border-white')
        }
        frames[i].classList.replace('border-white', 'border-slate-400')
        glasses.src = modelUrls[i]
    })
}

// ========= Change Colours
let colors = document.querySelector('#color-controls')
colors.addEventListener('click', (event) => {
    const colorString = event.target.dataset.color;
    const [material] = glasses.model.materials;
    material.pbrMetallicRoughness.setBaseColorFactor(colorString);
})

// ========= Change and Create Texure
const modelViewerTexture = document.querySelector("model-viewer#glasses");

modelViewerTexture.addEventListener("load", () => {

    let textures = document.querySelector('#normals2')

    const createAndApplyTexture = async (channel, event) => {
        const texture = await modelViewerTexture.createTexture(event.target.value);
        const material = modelViewerTexture.model.materials[0];

        if (channel.includes('base') || channel.includes('metallic')) {
            material.pbrMetallicRoughness[channel].setTexture(texture);
        } else {
            material[channel].setTexture(texture);
        }

        // if (event.target.value == "None") {
        //     // Clears the texture.
        //     material[channel].setTexture(null);
        // } else if (event.target.value) {
        //     // Creates a new texture.
        //     const texture = await modelViewerTexture.createTexture(event.target.value);
        //     // Set the texture name
        //     material[channel].setTexture(texture);
        // }
    }

    textures.addEventListener('click', (event) => {
        createAndApplyTexture('baseColorTexture', event);
    });
});
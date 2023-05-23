let glasses = document.getElementById('glasses')
let modelUrls = ["assets/model/glass-1.glb", "assets/model/glass-2.glb"]

// Change Frames
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
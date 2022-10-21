
// modalOpen

const openBtn = document.querySelector('#modalOpen')
const dialog = document.querySelector('dialog')
const closeBtn = dialog.querySelector('button')

openBtn.onclick = () => dialog.showModal()

closeBtn.onclick = () => dialog.close()
console.log(closeBtn);

// server

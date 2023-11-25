const cancelBtn = document.getElementsByClassName('cancel-svg');
const planPopUp = document.getElementsByClassName('plan_option')

// cancelBtn.addEventListener('click', function() {
//     planPopUp.style.display = 'none'
// })
const closePlanPopup = () => {
    planPopUp[0].style.display = 'none'
}
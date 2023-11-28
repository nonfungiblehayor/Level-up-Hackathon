const planPopUp = document.getElementsByClassName('plan_option')
const arrowDown = document.getElementsByClassName('arrow-down')
const arrowUp = document.getElementsByClassName('arrow-up')

const closePlanPopup = () => {
    planPopUp[0].style.display = 'none'
}

const showArrowUp = () => {
    arrowDown[0].style.display = 'none'
    arrowUp[0].style.display = 'flex'
}

const showArrowDown = () => {
    arrowDown[0].style.display = 'flex'
    arrowUp[0].style.display = 'none'
}

const showPopup = (popup) => {
    const targetPopup = document.getElementsByClassName(popup)
    if(targetPopup[0].style.display === '') {
        targetPopup[0].style.display = 'flex'
    } else if(targetPopup[0].style.display === 'flex') {
        targetPopup[0].style.display = 'none'
    } else if(targetPopup[0].style.display = 'none') {
        targetPopup[0].style.display = 'flex'
    }
}

const showPanel = (panel) => {
    const target = document.getElementsByClassName('setup-content')
    for(const item of target) {
        if (item.style.display === 'flex') {
            item.style.display = 'none'
        }
    }
    target[panel].style.display = 'flex'
}

const markPanel = (nextPanel, currentPanel, event, width) => {
    const mark = document.getElementsByClassName('mark')
    const unmark = document.getElementsByClassName('unmark')
    const target = document.getElementsByClassName('setup-content')
    const spanProgress = document.getElementsByClassName('progress-number')
    const progress = document.getElementsByClassName('actual-progress')
    event.stopPropagation()
    if(unmark[currentPanel].style.display === '') {
        mark[currentPanel].style.display = 'flex'
        unmark[currentPanel].style.display = 'none'
        target[nextPanel].style.display = 'flex'
        target[currentPanel].style.display = 'none'
        spanProgress[0].innerHTML = `${currentPanel + 1} / 5 completed` 
        progress[0].style.width = `${width}px`
        if(currentPanel === 4) {
            target[currentPanel].style.display = 'flex'
        }
    } else if (mark[currentPanel].style.display === 'flex') {
        mark[currentPanel].style.display = 'none'
        unmark[currentPanel].style.display = 'flex'
        target[nextPanel].style.display = 'none'
        target[currentPanel].style.display = 'flex'
        spanProgress[0].innerHTML = `${nextPanel - 1} / 5 completed`
        if(currentPanel === 4) {
            spanProgress[0].innerHTML = `${5 - 1} / 5 completed`
        }
        progress[0].style.width = `${width}px`
    }
}
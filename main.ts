basic.forever(function () {
    let Amoniac = 0
    if (Amoniac < 400) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.showNumber(Amoniac)
})

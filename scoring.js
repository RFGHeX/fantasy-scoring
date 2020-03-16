const calculateScore = (player) => {
    switch (player.position) {
        case 'QB':
            return passingPoints(player) + rushingPoints(player)

        case 'WR':

        case 'RB':
            return rushingPoints(player) + receivingPoints(player) + kickScore(player)

        case 'TE':
            return receivingPoints(player)



        default:
            return 0
    }
}
const passingPoints = (player) => {
    const yrd = player.stats.passing.yards / 25
    const td = player.stats.passing.touchdowns * 6
    const int = player.stats.passing.interceptions * -3

    return yrd + td + int
}
const rushingPoints = (player) => {
    const yrd = player.stats.rushing.yards / 10
    const td = player.stats.rushing.touchdowns * 6
    const fmbl = player.stats.rushing.fumbles * -3

    return yrd + td + fmbl
}
const receivingPoints = (player) => {
    const receptions = player.stats.receiving.receptions
    const yrd = player.stats.receiving.yards / 10
    const td = player.stats.receiving.touchdowns * 6
    const fmbl = player.stats.receiving.fumbles * -3

    return receptions + yrd + td + fmbl
}
const kickScore = (player) => {
    const kickYrd = player.stats.return.kickreturn.yards / 15
    const kickTd = player.stats.return.kickreturn.touchdowns * 6
    const kickFmbl = player.stats.return.kickreturn.fumbles * -3
    const pntYrd = player.stats.return.puntreturn.yards / 15
    const pntTd = player.stats.return.puntreturn.touchdowns * 6
    const pntFmbl = player.stats.return.puntreturn.fumbles * -3

    return kickYrd + kickTd + kickFmbl + pntYrd + pntTd + pntFmbl
}

module.exports = calculateScore
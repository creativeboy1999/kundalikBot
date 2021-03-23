groups = {
    group317_18:  {
        dushanba:() => ({
            fanlar: ['Dasturiy ta`minot sifatini ta`minlash(ma`ruza )', 'Dasturiy ta`minot arxitekturasi (pr amaliy)', 'Dasturiy ta`minot sifatini ta`minlash (pr amaliy)'],
            xonalar: ['A408', 'D309', 'D309']
        }),
            seshanba: () => ({
                fanlar: ['Axborot va murabbiylik soati', 'Mobil ilovalarni ishlab chiqish (Mirzayeva N)', 'Mobil ilovalarni ishlab chiqish (ma`ruza Doshanova M)'],
                xonalar: ['A315', 'D310', 'D301']
            }),
            chorshanba: () => ({
                fanlar: ['Operatsion tizimlar (ma`ruza Shoazizova M)', 'tanlov fan', 'tanlov fan'],
                xonalar: ['B413', 'o`sha gap', 'o`sha gap']
            }),
            payshanba: () => ({
                fanlar: ['Operatsion tizimlar (ma`ruza Shoazizova M)', 'Dasturiy ta`minot sifatini ta`minlash(ma`ruza )', 'Operatsion tizimlar(pr Yo``ldosheva S)'],
                xonalar: ['A125', 'A02', 'B01']
            }),
        juma: juma = () => 'Jumaga boring birodar!',
        shanba: () => ({
                fanlar: ['Mobil ilovalarni ishlab chiqish (Mirzayeva N)', 'Dasturiy ta`minot arxitekturasi(ma`ruza Baydullayev R)', 'Dasturiy ta`minot arxitekturasi(ma`ruza Baydullayev R)'],
                xonalar: ['A010', 'D213', 'A327']  
            }),
            yakshanba: () => 'yakshanba kuni ham o`qiydimi!'
    }
}
module.exports = function jadval(gr, day) {
    let j = groups.group317_18[day]
    if(typeof(j()) === 'object')
    return(
            `${day.toUpperCase()}\n\n${j().fanlar[0]} <b>${j().xonalar[0]}</b>\n${j().fanlar[1]} <b>${j().xonalar[1]}</b>\n${j().fanlar[2]} <b>${j().xonalar[2]}</b>`
    ) 
    else
        return  `<b>${j().toUpperCase()}</b>`
}
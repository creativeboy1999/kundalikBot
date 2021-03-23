let admins = {
    Umar: {
        id: 334307783,
        is_bot: false,
        first_name: 'Umar',
        last_name: 'عُمَر',
        username: 'Nano_Code',
        isAdmin: true,
        isSuperAdmin: true
    }
}
let map = new Map(Object.entries(admins))
module.exports = isSuperAdmin = function (id) {
    for(admin of map.keys()){
        admins[admin].id == id ?
            (admins[admin].isSuperAdmin ? res = true : res = false) : 
            res = 'noId'
    }
    return res    
}
module.exports = isAdmin = function (id) {
    for(admin of map.keys()){
        admins[admin].id == id ?
            (admins[admin].isAdmin ? res = true : res = false) : 
            res = 'noId'
    }
    return res
} 
module.exports = function nervous (text, reply_to_message) {
    console.log(typeof(text))
    text == '!flood' || '!FLOOD' || '!Flood' ? `
    Flood inglizchada "toshqin" ma'nosini beradi. 
    Sizni guruhni "flood" qilganlikda ayblashyapti. Shoshmang, guruhni suv bosdi demadim :-) 
    Guruhda uzundan-uzoq keraksiz xabar yozishni ham "flood" deyishadi. 
    Yozgan xabaringiz orqali 2K odamning vaqti va asablarini isrof qilmang. 
    O'zingiz va boshqalarni hurmat qiling.
    ` : 'no reply'
    // return 'asdasd'
}
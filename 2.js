function manufacture(gifts, materials) {
    const finalListOfGifts = []

    gifts.map((gift) => {
        const giftArr = gift.split("")

        const giftIsPosibleArr = giftArr.filter((g) => materials.includes(g))

        const giftIsPosible = giftIsPosibleArr.join("")
        
        giftIsPosible === gift && finalListOfGifts.push(giftIsPosible)
    })

    return finalListOfGifts;
}
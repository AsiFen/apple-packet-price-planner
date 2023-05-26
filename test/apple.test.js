describe('Apple Price Planner for Packets', () => {

    it('should calculate the number of packets', () => {
        var apples = ApplePacketPricePlanner()
        apples.GetNumberOfApples(30)
        apples.getPacketSize(4)
        assert.equal(28, apples.CalculateNoOfPacks())
    })
    it('get price of apples', () => {
        var apples = ApplePacketPricePlanner()
        apples.GetNumberOfApples(30)
        apples.getBoxCost(302)
        assert.equal(10.07, apples.costOfApple())

    })

    it('get cost of packet', () => {
        var apples = ApplePacketPricePlanner()
        apples.GetNumberOfApples(30)
        apples.getPacketSize(4)
        apples.getBoxCost(302)
        apples.costOfApple()
        assert.equal(75.50, apples.costOfPacket())

    })

    it('get recommended price to sell apples at', () => {
        var apples = ApplePacketPricePlanner()
        apples.GetNumberOfApples(30)
        apples.getPacketSize(4)
        apples.getBoxCost(302)
        apples.costOfApple()
        apples.getPacketSize()
        apples.CalculateNoOfPacks()
        apples.getProfit(10)
        assert.equal(110, apples.calculateSellPrice())
    })
 
})
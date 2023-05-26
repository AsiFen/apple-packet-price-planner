//divide by the number of apple they want in a packet box/
//get how many apples there are in a packet 
// send the remaining apples to local storage or store it 

function ApplePacketPricePlanner() {
    var remainder = 0
    var costprice = 0
    var packetprice = 0
    var packet_size = 0
    var number_apples = 0
    var boxCost = 0
    var sellingPrice = 0
    var profit = 0

    function getBoxCost(boxCosts) {
        boxCost = boxCosts
        return boxCost
    }

    function GetNumberOfApples(number_apple) {
        number_apples = number_apple
        return number_apples
    }

    function getPacketSize(packet_sizes) {
        packet_size = packet_sizes
        return packet_size
    }

    function getProfit(profits) {
        profit = profits
        return profit
    }

    function CalculateNoOfPacks() {

        var applesInPacket = 0
        if ((number_apples) % (packet_size) === 0) {
            return (number_apples) / (packet_size)
        }
        else {
            applesInPacket = (number_apples) / (packet_size)
            remainder = (number_apples) - ((packet_size) * Math.floor(applesInPacket))
            return number_apples - remainder
        }
    }

    function costOfApple() {
        costprice = boxCost / (number_apples)
        return costprice.toFixed(2)
    }
    function costOfPacket() {
        packetprice = boxCost / packet_size
        return packetprice.toFixed(2)
    }
    function calculateSellPrice() {
        sellingPrice = costprice + (costprice * profit)
        return Math.floor(sellingPrice)
    }


    return {
        getBoxCost,
        getProfit,
        getPacketSize,
        GetNumberOfApples,
        CalculateNoOfPacks,
        costOfApple,
        costOfPacket,
        calculateSellPrice
    }

}

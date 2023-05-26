//refferences
var appleBoxCostElem = document.querySelector('.cost_of_applebox')
var noOfApplesInBoxElem = document.querySelector('.no_of_apples_in_box')
var packet_sizeElem = document.querySelector('.packet_size')
var required_profitElem = document.querySelector('.required_profit')

var btnCalculate = document.querySelector('.calculate')

var no_packets = document.querySelector('.no_packets')
var cost_apple = document.querySelector('.cost_apple')
var cost_packet = document.querySelector('.cost_packet')
var recommended_packet_price = document.querySelector('.recommended_packet_price')

//instance of factory
var apples = ApplePacketPricePlanner()

btnCalculate.addEventListener('click', () => {
    apples.getBoxCost(appleBoxCostElem.value)
    apples.getPacketSize(packet_sizeElem.value)
    apples.GetNumberOfApples(noOfApplesInBoxElem.value)
    apples.getProfit(required_profitElem.value)

    cost_apple.innerHTML = apples.costOfApple()
    cost_packet.innerHTML = apples.costOfPacket()
    no_packets.innerHTML = apples.CalculateNoOfPacks()
    recommended_packet_price.innerHTML = apples.calculateSellPrice()




})
document.getElementById('calculate').addEventListener('click', function(){
    const perPlayerCost = getInput('player-input');
    const orderList = document.getElementById('text-player');
    const orderListChild = orderList.childNodes.length;
    const perCost = perPlayerCost * orderListChild;
    const playerExpenseAmount = getAmount('expense');
    setValue('expense', perCost);

})

document.getElementById('calculate-total').addEventListener('click', function(){
    const manager = getInput('manager-input');
    const coach = getInput('coach-input');
    const playerExpenseAmount = getAmount('expense');
    const total = getAmount('total');
    const totalCost = playerExpenseAmount + manager + coach;
    setValue('total', totalCost);
})
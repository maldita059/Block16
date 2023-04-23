function calculateMedicineCost(name,
    pricePerRefill,numOfRefills,
    hasSubscription,hasCoupon){
        let totalCost = pricePerRefill*
        numOfRefills;

    if(hasSubscription){
        totalCost*=0.9;//10% discount for subscription
    }

    if(hasCoupon){
        totalCost*=0.95;//5% discount for coupon
    }

    return`${name}'s total cost is $${totalCost+(totalCost*0.05)}including tax.`;
    }

    const Timmy=["Timmy",30,5,true,true];
    console.log(calculateMedicineCost(...Timmy));

    const Sarah=["Sarah",50,1,true,false];
    console.log(calculateMedicineCost(...Sarah));

    const Rocky=["Rocky",25,5,false,true];
    console.log(calculateMedicineCost(...Rocky));

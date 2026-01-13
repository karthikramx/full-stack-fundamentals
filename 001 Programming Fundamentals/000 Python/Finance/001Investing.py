

def invested_lumpsum_gains(monthly_contribution, annual_stepup, years,xirr):
    lumpsum = 0
    gains = 0
    for i in range(0,years):
        lumpsum += 12 * monthly_contribution * (annual_stepup**i)
        gains += lumpsum*xirr
    return round(lumpsum,0),round(gains,0)


xirr = 1.13
annual_stepup=1.1
time_period = 10

total,gains = invested_lumpsum_gains(60000,annual_stepup=annual_stepup,years=time_period,xirr=xirr)
print(f"total amount invested with {annual_stepup} annual step-up:",total)
print(f"total amount with {xirr} xirr", gains)


def invested_lumpsum_gains(monthly_contribution, yearly_stepup, years,xirr):
    lumpsum = 0
    gains = 0
    for i in range(0,years):
        lumpsum += 12 * monthly_contribution * (yearly_stepup**i)
        gains += lumpsum*xirr
    return lumpsum,gains


total,gains = invested_lumpsum_gains(60000,1.1,10,1.13)
print(total)
print(gains)
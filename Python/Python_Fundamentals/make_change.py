
def change(cents):
    coins = {'dollars':0, 'half-dollars':0, 'quarter':0, 'dime': 0, 'nickel': 0, 'penny': 0}
    if cents >= 100:
        coins['dollars'] = cents / 100
    cents = cents - ((cents/100)*100)
    if cents >= 50:
        coins['half-dollars'] = cents / 50
    cents = cents - ((cents/50)*50)
    if cents >= 25:
        coins['quarter']= cents / 25
    cents = cents - ((cents/25)*25)
    if cents >= 10:
        coins['dime']= cents / 10
    cents = cents - ((cents/10)*10)
    if cents >= 5:
        coins['nickel']= cents / 5
    cents = cents - ((cents/5)*5)
    coins['penny'] = cents / 1
    print coins
change(888)


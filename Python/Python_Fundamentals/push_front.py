def push_front(arr,x):
    arr.append(x)
    for i in reversed(range(len(arr)-1)):
        tmp = arr[i] #tmp = 7
        arr[i] = arr[i-1]
        arr [i-1] = tmp
    print arr
push_front([2,3,4],7)

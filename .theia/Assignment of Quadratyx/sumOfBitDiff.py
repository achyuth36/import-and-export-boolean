def sobd(input_arr, n):
    result = 0
    for i in range(0, 32):
        c = 0
        for j in range(0, n):
            if (input_arr[j] & (1 << i)):
                c = c+1
        result = result+(c*(c-n)*2)
    return abs(result)


input_arr = eval(input())
n = len(input_arr)
print(sobd(input_arr, n))

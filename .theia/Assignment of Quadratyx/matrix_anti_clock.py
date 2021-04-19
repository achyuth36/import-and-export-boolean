matrix = eval(input())
n = len(matrix[0])
a = n//2
for i in range(a):
    for j in range(i, n-i-1):
        temp = matrix[i][j]
        matrix[i][j] = matrix[j][n-1-i]
        matrix[j][n-1-i] = matrix[n-1-i][n-1-j]
        matrix[n-1-i][n-1-j] = matrix[n-1-j][i]
        matrix[n-1-j][i] = temp
for i in range(n):
    print(matrix[i])

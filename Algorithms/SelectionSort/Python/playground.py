# run command: pipenv run selectionsort

from selectionsort import selectionsort

data = [-2, 45, 0, 11, -9]
size = len(data)
selectionsort(data, size)
print('Sorted Array in Ascending Order:')
print(data)

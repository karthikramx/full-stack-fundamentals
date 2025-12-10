def binary_search(arr: list, element:int): 

    mid = int(len(arr)/2)
    if arr[mid] == element:
        return mid
    if arr[mid] < element:
        arr = arr[mid:]
    if arr[mid] > element:
        arr = arr[0:mid]
    print("Element not found - mid:",mid," arr:",arr)
    binary_search(arr,element=element)


if __name__ == "__main__":
    arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    ans = binary_search(arr1, 3)
    print(ans)
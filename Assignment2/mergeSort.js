function mergeLists(list1, list2) {
  const mergedList = [];
  if (list1.length === 0 && list2.length === 0) return mergedList;
  else if (list1.length === 0 && list2.length > 0)
    mergedList.push(list2.shift());
  else if (list2.length === 0 && list1.length > 0)
    mergedList.push(list1.shift());
  else if (list1.length > 0 && list2.length > 0) {
    const value1 = list1[0];
    const value2 = list2[0];

    if (value1 < value2) mergedList.push(list1.shift());
    if (value2 < value1) mergedList.push(list2.shift());
    if (value1 === value2) mergedList.push(list1.shift());
  }
  return mergedList.concat(mergeLists(list1, list2));
}

function splitListLeft(list) {
  const halfWay = Math.floor(list.length / 2);
  return list.slice(0, halfWay);
}

function splitListRight(list) {
  const halfWay = Math.floor(list.length / 2);
  return list.slice(halfWay);
}

function mergeSort(list) {
  if (list.length <= 0) return;
  if (list.length === 1) return list;
  else {
    const list1 = mergeSort(splitListLeft(list));
    const list2 = mergeSort(splitListRight(list));
    return mergeLists(list1, list2);
  }
}

console.log(mergeSort([1, 5, 4, 7, 22, 56, 34, 90, 78, 15])); // Output: [1,  4,  5,  7, 15, 22, 34, 56, 78, 90]
const testList5 = [4, 1, 2, 4, 3, 2, 1];
console.log(mergeSort(testList5)); // Output: [1, 1, 2, 2, 3, 4, 4]

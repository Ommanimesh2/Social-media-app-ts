export default function intersect(arr1, arr2) {
    var commonValues = [];
    var i, j;
    var arr1Length = arr1.length;
    var arr2Length = arr2.length;
    
    for (i = 0; i < arr1Length; i++) {
        for (j = 0; j < arr2Length; j++) {
            if (arr1[i] === arr2[j]) {
                commonValues.push(arr1[i]);
            }
        }
    }
    return commonValues
}

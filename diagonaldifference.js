function diagonalDifference(n, arr) {
    let fDiag = 0;
    let sDiag = 0;
    for (let i = 0; i < n; i++) {
	console.log(arr[i][i]);
        fDiag += arr[i][i];
	console.log(fDiag);
    }

    let j = 0;
    for (let i = n - 1; i >= 0; i--) {
        console.log(arr[i][j]);
	sDiag += arr[i][j];
	console.log(sDiag);
	j++;
    }

    return fDiag;
}

diagonalDifference(3, [[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
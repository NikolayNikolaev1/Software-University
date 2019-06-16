function lastKNUmbersSequnce(n, k) {
    let arr = [1]

    for (let i = 1; i < n; i++) {
        arr[i] = arr
            .slice(Math.max(0, arr.length - k), i + k)
            .reduce((a, b) => {return a + b}, 0)
    }

    console.log(arr.join(' '));
}

lastKNUmbersSequnce(6, 3)
// Async/Await Snippet

// Function returning a promise
function getData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

// Async function using await to wait for the promise
async function fetchAndDisplayData(url) {
    try {
        const data = await getData(url);
        console.log(data);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

// Usage
fetchAndDisplayData('https://api.example.com/data');
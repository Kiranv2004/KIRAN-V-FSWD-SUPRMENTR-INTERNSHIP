let folders = {};

function createFolder() {
    let name = document.getElementById("folderName").value;

    if (name === "") {
        alert("Enter folder name");
        return;
    }

    folders[name] = [];
    displayFolders();
}

function addFile(folderName) {
    let file = prompt("Enter file name:");
    if (file) {
        folders[folderName].push(file);
        displayFolders();
    }
}

function displayFolders() {
    let container = document.getElementById("folders");
    container.innerHTML = "";

    for (let folder in folders) {
        let div = document.createElement("div");
        div.className = "folder";

        let filesList = folders[folder].map(f => `<li>${f}</li>`).join("");

        div.innerHTML = `
            <h3>${folder}</h3>
            <button onclick="addFile('${folder}')">Add File</button>
            <ul>${filesList}</ul>
        `;

        container.appendChild(div);
    }
}
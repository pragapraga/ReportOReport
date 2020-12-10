

function CapturePng() {
    /*const uiBranch = document.getElementById('branch').value;
    document.getElementById("branchVal").innerHTML = uiBranch;
    document.getElementById("branch").style.display = "none";

    const beBranch = document.getElementById('beBranch').value;
    document.getElementById("beBranchVal").innerHTML = beBranch;
    document.getElementById("beBranch").style.display = "none";*/

    const node = document.getElementById("test-report");
    domtoimage
        .toPng(node, { bgcolor: "#FFFFFF" })
        .then(function (dataUrl) {
            const link = document.createElement("a");
            console.log(link);
            link.download = "Screenshot.png";
            link.href = dataUrl;
            link.click();
        })
        .catch(function (error) {
            console.error("oops, something went wrong!", error);
        });
}
const downloadButton = document.getElementById("downloadBtn");
downloadButton.addEventListener("click", function () {
    CapturePng();
});

function getDate(){
    var d = new Date();
    console.log(d)
}

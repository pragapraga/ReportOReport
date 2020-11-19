

function CapturePng() {
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

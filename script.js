function convertToPDF() {
    const text = document.getElementById('textInput').value;
    const fileInput = document.getElementById('fileInput').files[0];
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    if (text) {
        doc.text(text, 10, 10);
    }
    
    if (fileInput) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function() {
                doc.addImage(img, 'JPEG', 10, 20, img.width / 10, img.height / 10);
                doc.save('converted.pdf');
            }
        }
        reader.readAsDataURL(fileInput);
    } else {
        doc.save('converted.pdf');
    }
}

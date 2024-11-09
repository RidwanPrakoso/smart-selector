const laptopData = {
    "Ideapad Slim 1": {
        brand: "LENOVO Ideapad Slim 1",
        role: "Pelajar",
        segment: "Office",
        material: "Full ABS Plastic",
        keyboardBacklight: "NON LED",
        processor: "Celeron N4020",
        gpu: "Intel UHD",
        panel: "TN",
        storage: "",
        displaySize: "14\"",
        displaySpecs: "1366x768, 220 nits, 45% NTSC, 60Hz",
        note: "",
        considerations: "",
        basePrice: 3500000 // Harga dasar
    },
    "V14 G3 IAP": {
        brand: "LENOVO V14 G3 IAP",
        role: "Pelajar",
        segment: "Office, Coding",
        material: "Full ABS Plastic",
        keyboardBacklight: "NON LED",
        processor: "Core i3 1215U",
        gpu: "Intel UHD",
        panel: "TN",
        storage: "",
        displaySize: "14\"",
        displaySpecs: "1920x1080p, 250 nits, 45% NTSC, 60Hz",
        note: "",
        considerations: "",
        basePrice: 4000000 // Harga dasar
    },
    "Ideapad Slim 3": {
        brand: "LENOVO Ideapad Slim 3",
        role: "Mahasiswa",
        segment: "Coding, Office",
        material: "Full ABS Plastic",
        keyboardBacklight: "NON LED",
        processor: "Core i3 1215U",
        gpu: "Intel UHD",
        panel: "TN",
        storage: "",
        displaySize: "14\"",
        displaySpecs: "1920x1080p, 250 nits, 45% NTSC, 60Hz",
        note: "",
        considerations: "",
        basePrice: 5000000
    },
    "V14 G4 RYZEN 5": {
        brand: "LENOVO V14 G4 RYZEN 5",
        role: "Karyawan",
        segment: "Coding, Office, Multimedia",
        material: "Full ABS Plastic",
        keyboardBacklight: "NON LED",
        processor: "Ryzen 5 7430U",
        gpu: "AMD Integrated",
        panel: "IPS",
        storage: "",
        displaySize: "14\"",
        displaySpecs: "1920x1080p, 300 nits, 45% NTSC, 60Hz",
        note: "",
        considerations: "",
        basePrice: 7549000
    },
    "Ideapad Slim 3 14": {
        brand: "LENOVO Ideapad Slim 3 14",
        role: "Karyawan",
        segment: "Coding, Office, Multimedia",
        material: "Full ABS Plastic",
        keyboardBacklight: "White LED",
        processor: "Core i5 12450H",
        gpu: "Intel UHD",
        panel: "IPS",
        storage: "",
        displaySize: "14\"",
        displaySpecs: "1920x1080p, 300 nits, 45% NTSC, 60Hz",
        note: "Sudah mendukung Full Function Type C\nSudah menggunakan DDR5",
        considerations: "",
        basePrice: 8279000
    },
    "Ideapad Duet 3i 11 Touch": {
        brand: "LENOVO Ideapad Duet 3i 11 Touch",
        role: "Profesional",
        segment: "Outdoor, Office, Coding, Multimedia",
        material: "Full ABS Plastic",
        keyboardBacklight: "NON LED",
        processor: "Celeron N200",
        gpu: "Intel UHD",
        panel: "IPS",
        storage: "",
        displaySize: "11.5\"",
        displaySpecs: "2000x1200p, 400 nits, 97.5% DCI-P3, 60Hz, Touch Screen",
        note: "Laptop yang lebih cocok untuk penggunaan entertainment:\n- Menggunakan DDR5\n- Layar Sentuh, Akurasi warna bagus, 2K dan terang untuk dibawa keluar rumah",
        considerations: "Masih menggunakan Celeron",
        basePrice: 8999000
    },
    "IDEAPAD FLEX 5 14": {
        brand: "LENOVO IDEAPAD FLEX 5 14",
        role: "Profesional",
        segment: "Multimedia, Outdoor, Office, Editing, Coding",
        material: "Full Aluminium",
        keyboardBacklight: "White LED",
        processor: "Core i5 1315U",
        gpu: "Intel UHD",
        panel: "IPS",
        storage: "",
        displaySize: "14\"",
        displaySpecs: "1920x1200p, 300 nits, 45% NTSC, 60Hz, Touch Screen",
        note: "",
        considerations: "",
        basePrice: 10249000
    },
    "LOQ 15 RTX 2050": {
        brand: "LENOVO LOQ 15 RTX 2050",
        role: "Profesional",
        segment: "3D / Render & Modeling, Coding, Editing, Office, Gaming, Multimedia",
        material: "Full ABS Plastic",
        keyboardBacklight: "NON LED",
        processor: "Core i5 12450H",
        gpu: "RTX 2050 4GB",
        panel: "IPS",
        storage: "",
        displaySize: "15.6\"",
        displaySpecs: "1920x1080p, 300 nits, 100% SRGB, 144Hz",
        note: "",
        considerations: "",
        basePrice: 10749000
    },
    "Ideapad Slim 5 Light 14": {
        brand: "LENOVO Ideapad Slim 5 Light 14",
        role: "Profesional",
        segment: "3D / Render & Modeling, Coding, Editing, Office, Gaming, Multimedia",
        material: "Aluminium (Top) ABS (Bottom)",
        keyboardBacklight: "White LED",
        processor: "Ryzen 7 7730U",
        gpu: "AMD Integrated",
        panel: "IPS",
        storage: "",
        displaySize: "15.6\"",
        displaySpecs: "1920x1080p, 300 nits, 100% SRGB, 60Hz",
        note: "",
        considerations: "",
        basePrice: 10949000
    },
    "Ideapad Slim 5": {
        brand: "LENOVO Ideapad Slim 5",
        role: "Profesional",
        segment: "Editing, Multimedia",
        material: "Full Aluminium",
        keyboardBacklight: "White LED",
        processor: "Ryzen 7 7730U",
        gpu: "AMD Integrated",
        panel: "OLED",
        storage: "",
        displaySize: "14\"",
        displaySpecs: "1920x1200p, 400 nits, 100% DCI-P3, 60Hz",
        note: "",
        considerations: "",
        basePrice: 11299000
    },
    "Ideapad Slim 5 (Gaming)": {
        brand: "LENOVO Ideapad Slim 5 (Gaming)",
        role: "Profesional",
        segment: "Editing, Gaming, Multimedia",
        material: "Full Aluminium",
        keyboardBacklight: "White LED",
        processor: "Core ULTRA 5 125H",
        gpu: "Arc 7X",
        panel: "OLED",
        storage: "",
        displaySize: "14\"",
        displaySpecs: "1920x1200p, 400 nits, 100% DCI-P3, 60Hz",
        note: "",
        considerations: "",
        basePrice: 12199000
    },
    "LOQ 15 RTX 3050": {
        brand: "LENOVO LOQ 15 RTX 3050",
        role: "Profesional",
        segment: "3D / Render & Modeling, Coding, Editing, Office, Gaming, Multimedia",
        material: "Full ABS Plastic",
        keyboardBacklight: "White LED",
        processor: "Core i5 12450H",
        gpu: "RTX 3050 6GB",
        panel: "IPS",
        storage: "",
        displaySize: "15.6\"",
        displaySpecs: "1920x1080p, 300 nits, 100% SRGB, 60Hz",
        note: "",
        considerations: "",
        basePrice: 13490000
    }
};

// Harga tambahan berdasarkan RAM dan penyimpanan
const additionalPrice = {
    "8GB DDR4": 500000,
    "16GB DDR4": 1000000,
    "8GB LPDDR5": 500000,
    "12GB DDR5": 750000,
    "16GB LPDDR5x": 1500000,
    "NVME 3.0 256GB": 0,  // Sesuaikan format dengan yang ada pada laptopData
    "512GB NVME 3.0": 500000,

};




// Fungsi untuk memperbarui daftar model berdasarkan peran
function updateModels() {
    const role = document.getElementById('role').value;
    const modelSelect = document.getElementById('model');
    modelSelect.innerHTML = '<option value="" disabled selected>Pilih Model</option>';
    let availableModels = [];

    if (role === "Pelajar") {
        availableModels = ["Ideapad Slim 1", "V14 G3 IAP"];
    } else if (role === "Mahasiswa") {
        availableModels = ["Ideapad Slim 3"];
    } else if (role === "Karyawan") {
        availableModels = ["V14 G4 RYZEN 5", "Ideapad Slim 3 14"];
    } else if (role === "Profesional") {
        availableModels = [
            "Ideapad Duet 3i 11 Touch", "IDEAPAD FLEX 5 14", 
            "LOQ 15 RTX 2050", "Ideapad Slim 5 Light 14", 
            "Ideapad Slim 5","Ideapad Slim 5 (Gaming)", "LOQ 15 RTX 3050"
        ];
    }

    availableModels.forEach(model => {
        modelSelect.innerHTML += `<option value="${model}">${model}</option>`;
    });
}

// Fungsi untuk memperbarui pilihan RAM berdasarkan model yang dipilih
function updateRAMOptions() {
    const model = document.getElementById('model').value;
    const ramSelect = document.getElementById('ram');

    // Bersihkan opsi RAM sebelumnya
    ramSelect.innerHTML = '<option value="" disabled selected>Pilih RAM</option>';

    let validRAMOptions = [];

    // Tentukan opsi RAM berdasarkan model yang dipilih
    switch(model) {
        case "Ideapad Slim 1":
        case "V14 G3 IAP":
            validRAMOptions = ["8GB DDR4", "16GB DDR4"];
            break;
        case "Ideapad Slim 3":
            validRAMOptions = ["8GB DDR4", "16GB DDR4"];
            break;
        case "V14 G4 RYZEN 5":
            validRAMOptions = ["8GB DDR4", "16GB DDR4"];
            break;
        case "Ideapad Slim 3 14":
            validRAMOptions = ["8GB LPDDR5", "16GB LPDDR5"];
            break;
        case "IDEAPAD FLEX 5 14":
            validRAMOptions = ["12GB LPDDR4X", "16GB LPDDR4X"];
            break;
        case "LOQ 15 RTX 3050":
            validRAMOptions = ["12GB DDR5", "16GB DDR5"];
            break;
        case "Ideapad Duet 3i 11 Touch":
            validRAMOptions = ["8GB LPDDR5", "16GB LPDDR5"];
            break;
        case "LOQ 15 RTX 2050":
            validRAMOptions = ["16GB DDR5", "12GB DDR5"];
            break;
        case "Ideapad Slim 5 Light 14":
            validRAMOptions = ["8GB DDR4", "16GB DDR4"];
            break;
        case "Ideapad Slim 5":
            validRAMOptions = ["8GB LPDDR5x", "16GB LPDDR5x"];
            break;
        case "Ideapad Slim 5 (Gaming)":
            validRAMOptions = ["8GB LPDDR5x", "16GB LPDDR5x"];
            break;
        default:
            validRAMOptions = [];
    }

    // Tambahkan opsi RAM yang valid ke dropdown
    validRAMOptions.forEach(option => {
        ramSelect.innerHTML += `<option value="${option}">${option}</option>`;
    });
}




// Fungsi untuk memperbarui pilihan segmen berdasarkan model dan role
function updateSegmentOptions() {
    const role = document.getElementById("role").value;
    const model = document.getElementById("model").value;
    const segmentSelect = document.getElementById("segment");

    segmentSelect.innerHTML = '<option value="" disabled selected>Pilih Segmen</option>';
    let validSegments = [];
    switch (role) {
        case "Pelajar":
            if (model === "Ideapad Slim 1") {
                validSegments = ["Office"];
            } else if (model === "V14 G3 IAP") {
                validSegments = ["Coding, Office"];
            }
            break;
    
        case "Mahasiswa":
            if (model === "Ideapad Slim 3") {
                validSegments = ["Coding, Office"];
            }
            break;
    
        case "Karyawan":
            if (model === "V14 G4 RYZEN 5" || model === "Ideapad Slim 3 14") {
                validSegments = ["Coding, Office, Multimedia"];
            }
            break;
    
            case "Profesional":
                if (model === "LOQ 15 RTX 2050" || model === "Ideapad Slim 5 Light 14" || model === "LOQ 15 RTX 3050") {
                    validSegments = ["3D / Render & Modeling, Coding, Editing, Office, Gaming, Multimedia"];
                } else if (model === "Ideapad Duet 3i 11 Touch") {
                    validSegments = ["Outdoor, Office, Coding, Multimedia"];
                } else if (model === "IDEAPAD FLEX 5 14") {
                    validSegments = ["Multimedia, Outdoor, Office, Editing, Coding"];
                } else if (model === "Ideapad Slim 5") {
                    validSegments = ["Editing, Multimedia"];
                } else if (model === "Ideapad Slim 5 (Gaming)") {  // Nama sesuai dengan data di laptopData
                    validSegments = ["Editing, Multimedia, Gaming"];
                }
                break;
            
    }
    
    // Tambahkan segmen yang valid ke dropdown jika validSegments tidak kosong
   
    
    validSegments.forEach(segment => {
        segmentSelect.innerHTML += `<option value="${segment}">${segment}</option>`;
    });
}


    

function displaySpecifications() {
    const role = document.getElementById('role').value;
    const model = document.getElementById('model').value;
    const segment = document.getElementById('segment').value;
    const ram = document.getElementById('ram').value;
    const storage = document.getElementById('storage').value;

    if (!role || !model || !segment || !ram || !storage) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Mohon pilih semua opsi sebelum menampilkan spesifikasi.'
        });
        return;
    }

    const laptop = laptopData[model];
    const ramPrice = additionalPrice[ram] || 0;
    const storagePrice = additionalPrice[storage] || 0;
    const totalPrice = laptop.basePrice + ramPrice + storagePrice;

    Swal.fire({
        title: 'Spesifikasi Laptop',
        html: `
            <div style="text-align: left;">
                <strong>Brand:</strong> ${laptop.brand}<br>
                <strong>Role:</strong> ${laptop.role}<br>
                <strong>Segment:</strong> ${laptop.segment}<br>
                <strong>Processor:</strong> ${laptop.processor}<br>
                <strong>GPU:</strong> ${laptop.gpu}<br>
                <strong>Panel:</strong> ${laptop.panel}<br>
                <strong>RAM:</strong> ${ram}<br>
                <strong>Storage:</strong> ${storage}<br>
                <strong>Display Size:</strong> ${laptop.displaySize}<br>
                <strong>Display Specs:</strong> ${laptop.displaySpecs}<br>
                <strong>Note:</strong> ${laptop.note || 'N/A'}<br>
                <strong>Considerations:</strong> ${laptop.considerations || 'N/A'}<br>
                <strong>Total Price:</strong> Rp ${totalPrice.toLocaleString()}<br>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'Selesai',
        confirmButtonColor: '#28a745',
        background: '#f8f9fa',
        width: '600px',
        padding: '20px',
        customClass: {
            title: 'font-weight-bold',
            htmlContainer: 'text-start',
            confirmButton: 'btn-large'  // Tambahkan kelas CSS khusus untuk memperbesar tombol
        }
    });
    
}
    

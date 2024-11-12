const laptopData = {
    "Ideapad Slim 1": {
        brand: "LENOVO Ideapad Slim 1",
        role: "Pelajar",
        segment: ["Office"],
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
        basePrice: 3500000,
        imageUrl: "/assets/IDEA SLIM1.png"
    },
    "V14 G3 IAP": {
        brand: "LENOVO V14 G3 IAP",
        role: "Pelajar",
        segment: ["Coding", "Office"],
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
        basePrice: 4000000,
        imageUrl: "/assets/v14 g3.png"
    },
    "Ideapad Slim 3": {
        brand: "LENOVO Ideapad Slim 3",
        role: "Mahasiswa",
        segment: ["Coding", "Office"],
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
        basePrice: 5000000,
        imageUrl: "/assets/SLIM 3 I3.png"
    },
    "V14 G4 RYZEN 5": {
        brand: "LENOVO V14 G4 RYZEN 5",
        role: "Karyawan",
        segment: ["Coding", "Office", "Multimedia"],
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
        basePrice: 7549000,
        imageUrl: "/assets/V14 G4.png"
    },
    "Ideapad Slim 3 14": {
        brand: "LENOVO Ideapad Slim 3 14",
        role: "Karyawan",
        segment: ["Coding", "Office", "Multimedia"],
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
        basePrice: 8279000,
        imageUrl: "/assets/SLIM3.png"
    },
    "Ideapad Duet 3i 11 Touch": {
        brand: "LENOVO Ideapad Duet 3i 11 Touch",
        role: "Profesional",
        segment: ["Outdoor", "Office", "Coding", "Multimedia"],
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
        basePrice: 8999000,
        imageUrl: "/assets/IDEAPAD 3I.png"
    },
    "IDEAPAD FLEX 5 14": {
        brand: "LENOVO IDEAPAD FLEX 5 14",
        role: "Profesional",
        segment: ["Multimedia", "Outdoor", "Office", "Editing", "Coding"],
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
        basePrice: 10249000,
        imageUrl: "/assets/FLEX5.png"
    },
    "LOQ 15 RTX 2050": {
        brand: "LENOVO LOQ 15 RTX 2050",
        role: "Profesional",
        segment: ["3D / Render & Modeling", "Coding", "Editing", "Office", "Gaming", "Multimedia"],
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
        basePrice: 10749000,
        imageUrl: "/assets/LOQ2050.png"
    },
    "Ideapad Slim 5 Light 14": {
        brand: "LENOVO Ideapad Slim 5 Light 14",
        role: "Profesional",
        segment: ["3D / Render & Modeling", "Coding", "Editing", "Office", "Gaming", "Multimedia"],
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
        basePrice: 10949000,
        imageUrl: "/assets/SLIM 5 LIGHT.png"
    },
    "Ideapad Slim 5": {
        brand: "LENOVO Ideapad Slim 5",
        role: "Profesional",
        segment: ["Editing", "Multimedia"],
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
        basePrice: 11299000,
        imageUrl: "/assets/SLIM5.png"
    },
    "Ideapad Slim 5 (Gaming)": {
        brand: "LENOVO Ideapad Slim 5 (Gaming)",
        role: "Profesional",
        segment: ["Editing", "Gaming", "Multimedia"],
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
        basePrice: 12199000,
        imageUrl: "/assets/SLIM5.png"
    },
    "LOQ 15 RTX 3050": {
        brand: "LENOVO LOQ 15 RTX 3050",
        role: "Profesional",
        segment: ["3D / Render & Modeling", "Coding", "Editing", "Office", "Gaming", "Multimedia"],
        material: "Full ABS Plastic",
        keyboardBacklight: "White LED",
        processor: "Core i5 13420H",
        gpu: "RTX 3050 6GB",
        panel: "IPS",
        storage: "",
        displaySize: "15.6\"",
        displaySpecs: "1920x1080p, 300 nits, 100% SRGB, 144Hz",
        note: "",
        considerations: "",
        basePrice: 13490000,
        imageUrl: "/assets/LOQ 3050.png"
    }
};


// Harga tambahan berdasarkan RAM dan penyimpanan
const additionalPrice = {
    "8GB DDR4": 500000,
    "16GB DDR4": 1000000,
    "8GB LPDDR5": 500000,
    "16GB LPDDR5": 1500000,
    "12GB DDR5": 750000,
    "16GB DDR5": 1700000,
    "16GB LPDDR5X":2500000,
    "8GB LPDDR5X": 1500000,
    "16GB LPDDR4X":2000000,
    "8GB LPDDR4X": 1000000,
    "NVME 3.0 256GB": 0,  // Sesuaikan format dengan yang ada pada laptopData
    "512GB NVME 3.0": 1500000,

};

// Daftar model yang valid untuk setiap role
const validModelsForRole = {
    "Pelajar": ["Ideapad Slim 1", "V14 G3 IAP"],
    "Mahasiswa": ["Ideapad Slim 3"],
    "Karyawan": ["V14 G4 RYZEN 5", "Ideapad Slim 3 14"],
    "Profesional": [
        "Ideapad Duet 3i 11 Touch", "IDEAPAD FLEX 5 14",
        "LOQ 15 RTX 2050", "Ideapad Slim 5 Light 14",
        "Ideapad Slim 5", "Ideapad Slim 5 (Gaming)", "LOQ 15 RTX 3050"
    ]
};

// Fungsi untuk memperbarui opsi model berdasarkan role
function updateModelOptions() {
    const role = document.getElementById("role").value; // Mendapatkan nilai role dari dropdown
    const modelSelect = document.getElementById("model"); // Mendapatkan elemen model dropdown

    if (!role) {
        console.error('Role tidak dipilih!');
        return;
    }

    // Reset pilihan model dan tampilkan semua model
    modelSelect.innerHTML = '<option value="" disabled selected>Pilih Model</option>';
    const allModels = [
        "Ideapad Slim 1", "V14 G3 IAP", "Ideapad Slim 3", "V14 G4 RYZEN 5",
        "Ideapad Slim 3 14", "Ideapad Duet 3i 11 Touch", "IDEAPAD FLEX 5 14",
        "LOQ 15 RTX 2050", "Ideapad Slim 5 Light 14", "Ideapad Slim 5",
        "Ideapad Slim 5 (Gaming)", "LOQ 15 RTX 3050"
    ];

    // Menampilkan semua model di dropdown
    allModels.forEach(model => {
        modelSelect.innerHTML += `<option value="${model}">${model}</option>`;
    });

    // Menambahkan event listener untuk memeriksa kecocokan model dengan role
    modelSelect.addEventListener("change", checkModelRole); 
}

// Fungsi untuk memeriksa apakah model sesuai dengan role yang dipilih
function checkModelRole() {
    const role = document.getElementById("role").value;
    const model = document.getElementById("model").value;

    // Pengecekan model yang valid berdasarkan role
    if (role === "Pelajar") {
        if (model === "Ideapad Slim 1" || model === "V14 G3 IAP") {
            isValid = true;
        }
    } else if (role === "Mahasiswa") {
        if (model === "Ideapad Slim 3") {
            isValid = true;
        }
    } else if (role === "Karyawan") {
        if (model === "V14 G4 RYZEN 5" || model === "Ideapad Slim 3 14") {
            isValid = true;
        }
    } else if (role === "Profesional") {
        if (
            model === "Ideapad Duet 3i 11 Touch" || model === "IDEAPAD FLEX 5 14" ||
            model === "LOQ 15 RTX 2050" || model === "Ideapad Slim 5 Light 14" ||
            model === "Ideapad Slim 5" || model === "Ideapad Slim 5 (Gaming)" ||
            model === "LOQ 15 RTX 3050"
        ) {
            isValid = true;
        }
    }

    // Jika model tidak sesuai dengan role yang dipilih, tampilkan SweetAlert
    if (!isValid) {
        Swal.fire({
            icon: 'error',
            title: 'Model Tidak Sesuai!',
            text: `Model '${model}' tidak sesuai dengan role '${role}'. Pilih model yang valid untuk role tersebut.`,
        });
       
    }
}

// Fungsi untuk memperbarui opsi RAM berdasarkan model yang dipilih
function updateRAMOptions() {
    const model = document.getElementById('model').value;
    const ramSelect = document.getElementById('ram');

    ramSelect.innerHTML = '<option value="" disabled selected>Pilih RAM</option>';

    let validRAMOptions = [];

    switch(model) {
        case "Ideapad Slim 1":
        case "V14 G3 IAP":
            validRAMOptions = ["8GB DDR4", "16GB DDR4"];
            break;
        case "Ideapad Slim 3":
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
        case "Ideapad Slim 5 (Gaming)":
            validRAMOptions = ["8GB LPDDR5X", "16GB LPDDR5X"];
            break;
        default:
            validRAMOptions = [];
    }

    validRAMOptions.forEach(option => {
        ramSelect.innerHTML += `<option value="${option}">${option}</option>`;
    });
}

// Panggil fungsi untuk memperbarui model saat role dipilih
document.getElementById("role").addEventListener("change", updateModelOptions);

// Daftar segmen untuk setiap model
const validSegmentsForModel = {
    "Ideapad Slim 1": ["Office"],
    "V14 G3 IAP": ["Coding", "Office"],
    "Ideapad Slim 3": ["Coding", "Office"],
    "V14 G4 RYZEN 5": ["Coding", "Office", "Multimedia"],
    "Ideapad Slim 3 14": ["Coding", "Office", "Multimedia"],
    "LOQ 15 RTX 2050": ["3D / Render & Modeling", "Coding", "Editing", "Office", "Gaming", "Multimedia"],
    "Ideapad Slim 5 Light 14": ["3D / Render & Modeling", "Coding", "Editing", "Office", "Gaming", "Multimedia"],
    "LOQ 15 RTX 3050": ["3D / Render & Modeling", "Coding", "Editing", "Office", "Gaming", "Multimedia"],
    "Ideapad Duet 3i 11 Touch": ["Outdoor", "Office", "Coding", "Multimedia"],
    "IDEAPAD FLEX 5 14": ["Multimedia", "Outdoor", "Office", "Editing", "Coding"],
    "Ideapad Slim 5": ["Editing", "Multimedia"],
    "Ideapad Slim 5 (Gaming)": ["Editing", "Multimedia", "Gaming"]
};

// Fungsi untuk memperbarui opsi segmen
function updateSegmentOptions() {
    const segmentSelect = document.getElementById("segment");

    // Reset pilihan segmen dan tampilkan semua segmen
    segmentSelect.innerHTML = '<option value="" disabled selected>Pilih Segmen</option>';
    const allSegments = ["Office", "Editing", "Gaming", "Multimedia", "Outdoor", "Coding", "3D / Render & Modeling"];

    // Menampilkan semua segmen di dropdown
    allSegments.forEach(segment => {
        segmentSelect.innerHTML += `<option value="${segment}">${segment}</option>`;
    });
}

// Fungsi untuk memeriksa apakah segmen sesuai dengan model yang dipilih
function checkSegment() {
    const model = document.getElementById("model").value;
    const segment = document.getElementById("segment").value;
    let validSegments = [];

    // Pengecekan segmen yang valid berdasarkan model menggunakan if-else if
    if (model === "Ideapad Slim 1") {
        validSegments = ["Office"];
    } else if (model === "V14 G3 IAP") {
        validSegments = ["Coding", "Office"];
    } else if (model === "Ideapad Slim 3") {
        validSegments = ["Coding", "Office"];
    } else if (model === "V14 G4 RYZEN 5") {
        validSegments = ["Coding", "Office", "Multimedia"];
    } else if (model === "Ideapad Slim 3 14") {
        validSegments = ["Coding", "Office", "Multimedia"];
    } else if (model === "LOQ 15 RTX 2050") {
        validSegments = ["3D / Render & Modeling", "Coding", "Editing", "Office", "Gaming", "Multimedia"];
    } else if (model === "Ideapad Slim 5 Light 14") {
        validSegments = ["3D / Render & Modeling", "Coding", "Editing", "Office", "Gaming", "Multimedia"];
    } else if (model === "LOQ 15 RTX 3050") {
        validSegments = ["3D / Render & Modeling", "Coding", "Editing", "Office", "Gaming", "Multimedia"];
    } else if (model === "Ideapad Duet 3i 11 Touch") {
        validSegments = ["Outdoor", "Office", "Coding", "Multimedia"];
    } else if (model === "IDEAPAD FLEX 5 14") {
        validSegments = ["Multimedia", "Outdoor", "Office", "Editing", "Coding"];
    } else if (model === "Ideapad Slim 5") {
        validSegments = ["Editing", "Multimedia"];
    } else if (model === "Ideapad Slim 5 (Gaming)") {
        validSegments = ["Editing", "Multimedia", "Gaming"];
    }

    // Jika segmen tidak sesuai dengan model yang dipilih, tampilkan SweetAlert
    if (segment && !validSegments.includes(segment)) {
        Swal.fire({
            icon: 'error',
            title: 'Segmen Tidak Sesuai!',
            text: `Segmen '${segment}' tidak sesuai dengan model '${model}'. Pilih segmen yang valid.`,
        });
 // Reset segment ke pilihan pertama
        document.getElementById("segment").selectedIndex = 0;
        
        return false; // Menghentikan proses lebih lanjut
    }
    return true; // Jika segmen sesuai
}

// Fungsi untuk menampilkan spesifikasi laptop
// Fungsi untuk menampilkan spesifikasi laptop
function displaySpecifications() {
    // Ambil nilai dari semua elemen select
    const role = document.getElementById("role").value;
    const model = document.getElementById("model").value;
    const segment = document.getElementById("segment").value;
    const ram = document.getElementById("ram").value;
    const storage = document.getElementById("storage").value;

    let isValid = false;

    // Validasi berdasarkan role dan model yang sesuai
    if (role === "Pelajar") {
        if (model === "Ideapad Slim 1" || model === "V14 G3 IAP") {
            isValid = true;
        }
    } else if (role === "Mahasiswa") {
        if (model === "Ideapad Slim 3") {
            isValid = true;
        }
    } else if (role === "Karyawan") {
        if (model === "V14 G4 RYZEN 5" || model === "Ideapad Slim 3 14") {
            isValid = true;
        }
    } else if (role === "Profesional") {
        if (
            model === "Ideapad Duet 3i 11 Touch" || model === "IDEAPAD FLEX 5 14" ||
            model === "LOQ 15 RTX 2050" || model === "Ideapad Slim 5 Light 14" ||
            model === "Ideapad Slim 5" || model === "Ideapad Slim 5 (Gaming)" ||
            model === "LOQ 15 RTX 3050"
        ) {
            isValid = true;
        }
    }

    // Jika model tidak valid, tampilkan SweetAlert dan hentikan eksekusi
    if (!isValid) {
        Swal.fire({
            icon: 'error',
            title: 'Model Tidak Sesuai',
            text: `Model '${model}' tidak sesuai dengan Role '${role}'. Harap pilih model yang sesuai.`,
            confirmButtonColor: '#007bff',
        });
        return; // Menghentikan eksekusi jika model tidak valid
    }

    // Validasi jika ada pilihan yang kosong
    if (!role || !model || !segment || !ram || !storage) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Semua pilihan harus diisi!',
            confirmButtonColor: '#007bff',
        });
        return; // Menghentikan eksekusi jika ada pilihan yang kosong
    }

    const laptop = laptopData[model];
    const ramPrice = additionalPrice[ram] || 0;
    const storagePrice = additionalPrice[storage] || 0;
    const totalPrice = laptop.basePrice + ramPrice + storagePrice;

    Swal.fire({
        title: 'Spesifikasi Laptop',
        html: `
            <div style="text-align: left;">
                <img src="${laptop.imageUrl}" alt="${model}" 
                     style="width:100%; max-width: 200px; height:auto; display: block; margin: 0 auto 10px; border-radius: 6px;">
                <p style="font-size: 1em; line-height: 1.3; color: #333; margin: 0;">
                    <strong>Brand:</strong> ${laptop.brand}<br>
                    <strong>Role:</strong> ${laptop.role}<br>
                    <strong>Segment:</strong> ${segment}<br>
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
                </p>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'Selesai',
        confirmButtonColor: '#28a745',
        background: '#f8f9fa',
        width: '450px', // Lebar SweetAlert disesuaikan agar tidak terlalu besar
        padding: '15px', // Padding dikurangi untuk tampilan yang lebih ringkas
        customClass: {
            title: 'font-weight-bold',
            htmlContainer: 'text-start',
            confirmButton: 'btn-small'
        }
    });
}    

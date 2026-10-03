// Danh Sách Môn Học Theo Cấp
const subjectOptionsMap = {
    "primary": ["Toán", "Tiếng Việt", "Tự Nhiên & Xã Hội", "Tin Học", "Âm Nhạc", "Mĩ Thuật", "GDTC", "Tiếng Anh"],
    "secondary": ["Toán", "Ngữ Văn", "Khoa Học Tự Nhiên", "Lịch Sử & Địa Lý", "GDCD", "Tin Học", "Âm Nhạc", "Mĩ Thuật", "GDTC", "Tiếng Anh"],
    "high": ["Toán", "Ngữ Văn", "Vật Lý", "Hóa Học", "Sinh Học", "Lịch Sử", "Địa Lý", "GDKT & Pháp Luật", "Tin Học", "Âm Nhạc", "Mĩ Thuật", "GDTC", "Tiếng Anh"]
};

// Cơ Sở Dữ Liệu Học Liệu Chi Tiết
const worksheetData = {
    "10": {
        "Toán": { "1": { title: "Mệnh Đề Và Tập Hợp (Toán 10)", theory: ["<b>Mệnh đề:</b> Phát biểu khẳng định đúng hoặc sai.", "<b>Mệnh đề phủ định:</b> Phủ định của P là P̅."], example: "Cho P: 'Phủ Lý là thủ phủ Hà Nam'. P̅: 'Phủ Lý không phải thủ phủ Hà Nam'.", exercises: ["1. Xác định tính đúng sai của mệnh đề.", "2. Lập mệnh đề phủ định."] } },
        "Ngữ Văn": { "1": { title: "Sử Thi & Thần Thoại Dân Gian (Ngữ Văn 10)", theory: ["<b>Sử thi:</b> Tác phẩm tự sự quy mô lớn kể về sự kiện trọng đại.", "<b>Nghệ thuật:</b> Phóng đại, so sánh trùng điệp."], example: "Sức mạnh phi thường của Đăm Săn trong chiến đấu.", exercises: ["1. Phân tích nghệ thuật so sánh trong sử thi Đăm Săn.", "2. Nêu ý nghĩa bài học."] } },
        "Tin Học": { "1": { title: "Thông Tin Và Xử Lý Thông Tin (Tin Học 10)", theory: ["<b>Khái niệm thông tin:</b> Dữ liệu sau khi được xử lý mang lại hiểu biết cho con người.", "<b>Quá trình xử lý:</b> Thu nhận ➔ Xử lý ➔ Lưu trữ ➔ Truyền tải thông tin."], example: "Dữ liệu nhiệt độ 37.5°C sau khi xử lý thành thông tin: Cảnh báo sốt nhẹ.", exercises: ["1. Phân biệt sự khác nhau giữa dữ liệu và thông tin.", "2. Trình bày các thành phần cơ bản của hệ thống máy tính."] } },
        "Âm Nhạc": { "1": { title: "Lý Thuyết Âm Nhạc Cơ Bản & Đọc Nhạc (Âm Nhạc 10)", theory: ["<b>Lý thuyết âm nhạc:</b> Nhận biết các nốt nhạc trên khuông nhạc và các giá trị nốt.", "<b>Hát tập thể:</b> Luyện hơi, phát âm chuẩn xác và giữ đúng nhịp."], example: "Nốt Đô nằm ở dòng kẻ phụ thứ nhất bên dưới khuông nhạc khóa Sol.", exercises: ["1. Đọc tên các nốt nhạc trên khuông nhạc khóa Sol.", "2. Tập vỗ tay theo tiết tấu phách 2/4."] } },
        "Mĩ Thuật": { "1": { title: "Nghệ Thuật Tạo Hình & Bố Cục (Mĩ Thuật 10)", theory: ["<b>Yếu tố hình họa:</b> Đường nét, hình khối, màu sắc và ánh sáng trong tạo hình.", "<b>Nguyên lý bố cục:</b> Cân bằng, tương phản, nhịp điệu và điểm nhấn."], example: "Sử dụng cặp màu tương phản (Đỏ - Xanh lá) để tạo điểm nhấn nổi bật cho bức tranh.", exercises: ["1. Trình bày các bước phác thảo một bức tranh phong cảnh.", "2. Phân biệt bố cục đối xứng và bố cục tự do."] } }
    }
};

// Chuyển Đổi Danh Sách Môn Khi Chọn Lớp
function onGradeChange() {
    const gradeSelect = document.getElementById('gradeSelect');
    if (!gradeSelect) return;
    
    const grade = parseInt(gradeSelect.value);
    const subjectSelect = document.getElementById('subjectSelect');
    
    let category = "high";
    if (grade <= 5) category = "primary";
    else if (grade <= 9) category = "secondary";

    const subjects = subjectOptionsMap[category];
    subjectSelect.innerHTML = subjects.map(s => `<option value="${s}">${s}</option>`).join('');

    updateWorksheet();
}

// Cập Nhật Nội Dung Phiếu Học Tập
function updateWorksheet() {
    const grade = document.getElementById('gradeSelect').value;
    const subject = document.getElementById('subjectSelect').value;
    const week = document.getElementById('weekSelect').value;

    document.getElementById('wsBadge').innerText = `${subject} Lớp ${grade} - Tuần ${week}`;
    
    let data = null;
    if (worksheetData[grade] && worksheetData[grade][subject] && worksheetData[grade][subject][week]) {
        data = worksheetData[grade][subject][week];
    } else {
        data = {
            title: `Tóm Tắt Kiến Thức Cốt Lõi (${subject} - Lớp ${grade} - Tuần ${week})`,
            theory: [
                `<b>Kiến thức trọng tâm:</b> Tổng hợp nội dung lý thuyết tuần ${week} môn ${subject} do Giáo viên bộ môn biên soạn.`,
                `<b>Chuẩn kiến thức:</b> Bám sát chương trình khung của Bộ GD&ĐT, bảo đảm kiến thức chuyển tiếp ngắn hạn.`
            ],
            example: `Ví dụ minh họa chi tiết cho bài học Tuần ${week} giúp học sinh tự học hiệu quả tại nhà.`,
            exercises: [
                `1. Bài tập vận dụng cơ bản Tuần ${week} (${subject} Lớp ${grade}).`,
                `2. Bài tập rèn luyện tư duy tự giải do giáo viên thiết kế.`
            ]
        };
    }

    document.getElementById('wsTitle').innerText = data.title;

    const contentBox = document.getElementById('wsContent');
    contentBox.innerHTML = `
        <div>
            <h5 class="font-bold text-blue-900 mb-1">I. Kiến Thức Cốt Lõi (Trích dẫn bài giảng):</h5>
            <ul class="list-disc list-inside space-y-1 pl-2 text-slate-600">
                ${data.theory.map(t => `<li>${t}</li>`).join('')}
            </ul>
        </div>
        <div>
            <h5 class="font-bold text-blue-900 mb-1">II. Ví Dụ Minh Họa:</h5>
            <p class="pl-2 italic text-slate-600">${data.example}</p>
        </div>
        <div>
            <h5 class="font-bold text-blue-900 mb-1">III. Bài Tập Tự Luyện (Giáo viên tự biên soạn):</h5>
            <p class="pl-2 text-slate-600">
                ${data.exercises.map(e => `${e}<br>`).join('')}
            </p>
        </div>
    `;
}

// Chuyển Tab Giao Diện
function showTab(tabName) {
    document.getElementById('tab-worksheet').classList.add('hidden');
    document.getElementById('tab-edubank').classList.add('hidden');
    document.getElementById('tab-legal').classList.add('hidden');

    const navIds = ['nav-worksheet', 'nav-edubank', 'nav-legal'];
    navIds.forEach(id => {
        const btn = document.getElementById(id);
        btn.classList.remove('border-yellow-400', 'text-yellow-400', 'bg-blue-800/50');
        btn.classList.add('border-transparent');
    });

    document.getElementById('tab-' + tabName).classList.remove('hidden');

    const activeBtn = document.getElementById('nav-' + tabName);
    activeBtn.classList.remove('border-transparent');
    activeBtn.classList.add('border-yellow-400', 'text-yellow-400', 'bg-blue-800/50');
}

// In / Lưu File PDF
function downloadSheet() {
    window.print();
}

// Xử Lý Form Mượn Sách
function handleBorrow(e) {
    e.preventDefault();
    const name = document.getElementById('borrowName').value.trim();
    const classSchool = document.getElementById('borrowClassSchool').value.trim();
    const contact = document.getElementById('borrowContact').value.trim();
    const series = document.getElementById('borrowSeries').value;

    const checkedSubjects = Array.from(document.querySelectorAll('input[name="borrowSubject"]:checked')).map(cb => cb.value);

    const classSchoolRegex = /^(.{2,})\s*-\s*(.{3,})$/;
    if (!classSchoolRegex.test(classSchool)) {
        Swal.fire({
            title: '⚠️ ĐỊNH DẠNG CHƯA ĐÚNG!',
            html: `
                <div class="text-left text-sm text-slate-700 space-y-2 mt-2">
                    <p class="text-red-600 font-semibold">Vui lòng nhập đúng định dạng Lớp và Trường!</p>
                    <div class="bg-amber-50 p-3 rounded-lg border border-amber-200 text-xs text-amber-900 space-y-1">
                        <p>💡 <b>Cú pháp chuẩn:</b> <code>[Tên Lớp] - [Tên Trường]</code></p>
                        <p>📌 <b>Ví dụ:</b> <code>Lớp 10A1 - THPT Nguyễn Trãi</code></p>
                        <p><i>(Bắt buộc phải có dấu gạch ngang '-' ở giữa).</i></p>
                    </div>
                </div>
            `,
            icon: 'warning',
            confirmButtonText: 'Nhập Lại',
            confirmButtonColor: '#d97706',
            borderRadius: '1rem'
        });
        return;
    }

    if (checkedSubjects.length === 0) {
        Swal.fire({
            title: '⚠️ CHƯA CHỌN MÔN HỌC!',
            text: 'Vui lòng tích chọn ít nhất 01 môn học bạn cần mượn sách!',
            icon: 'warning',
            confirmButtonText: 'Chọn Môn Tích',
            confirmButtonColor: '#d97706',
            borderRadius: '1rem'
        });
        return;
    }

    Swal.fire({
        title: '🎉 ĐĂNG KÝ THÀNH CÔNG!',
        html: `
            <div class="text-left text-sm text-slate-700 space-y-3 mt-2">
                <p class="text-center font-medium text-slate-600">Cảm ơn em <b class="text-blue-900">${name}</b> (${classSchool}) đã đăng ký!</p>
                <div class="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 space-y-1">
                    <p>📞 <b>Liên hệ:</b> ${contact}</p>
                    <p>📖 <b>Bộ sách:</b> ${series}</p>
                    <p>📚 <b>Môn đăng ký (${checkedSubjects.length} môn):</b> ${checkedSubjects.join(', ')}</p>
                    <p>📍 <b>Địa điểm nhận:</b> Thư viện trường (Cán bộ Thư viện)</p>
                    <p>⏰ <b>Thời gian:</b> Giờ ra chơi ngày làm việc tiếp theo</p>
                </div>
            </div>
        `,
        icon: 'success',
        confirmButtonText: 'Đã Hiểu & Hoàn Tất',
        confirmButtonColor: '#1e3a8a',
        borderRadius: '1rem'
    });

    e.target.reset();
}

// Tích Chọn Tất Cả Môn Quyên Góp
function toggleSelectAllDonate(source) {
    const checkboxes = document.querySelectorAll('input[name="donateSubject"]');
    checkboxes.forEach(cb => cb.checked = source.checked);
}

// Xử Lý Form Quyên Góp Sách
function handleDonate(e) {
    e.preventDefault();
    const name = document.getElementById('donateName').value.trim();
    const classSchool = document.getElementById('donateClassSchool').value.trim();
    const contact = document.getElementById('donateContact').value.trim();
    const grade = document.getElementById('donateGrade').value;
    const series = document.getElementById('donateSeries').value;
    const quantity = document.getElementById('donateQuantity').value || 1;

    const checkedSubjects = Array.from(document.querySelectorAll('input[name="donateSubject"]:checked')).map(cb => cb.value);

    const classSchoolRegex = /^(.{2,})\s*-\s*(.{3,})$/;
    if (!classSchoolRegex.test(classSchool)) {
        Swal.fire({
            title: '⚠️ ĐỊNH DẠNG CHƯA ĐÚNG!',
            html: `
                <div class="text-left text-sm text-slate-700 space-y-2 mt-2">
                    <p class="text-red-600 font-semibold">Vui lòng nhập đúng định dạng Lớp/Khóa và Trường!</p>
                    <div class="bg-amber-50 p-3 rounded-lg border border-amber-200 text-xs text-amber-900 space-y-1">
                        <p>💡 <b>Cú pháp chuẩn:</b> <code>[Lớp/Khóa/Vai trò] - [Tên Trường]</code></p>
                        <p>📌 <b>Ví dụ:</b> <code>Cựu học sinh 12A1 - THPT Nguyễn Trãi</code></p>
                        <p><i>(Bắt buộc phải có dấu gạch ngang '-' ở giữa).</i></p>
                    </div>
                </div>
            `,
            icon: 'warning',
            confirmButtonText: 'Nhập Lại',
            confirmButtonColor: '#d97706',
            borderRadius: '1rem'
        });
        return;
    }

    if (checkedSubjects.length === 0) {
        Swal.fire({
            title: '⚠️ CHƯA CHỌN MÔN HỌC!',
            text: 'Vui lòng tích chọn ít nhất 01 môn học bạn quyên góp / trao tặng!',
            icon: 'warning',
            confirmButtonText: 'Chọn Môn Tích',
            confirmButtonColor: '#d97706',
            borderRadius: '1rem'
        });
        return;
    }

    Swal.fire({
        title: '❤️ CẢM ƠN TẤM LÒNG VÀNG!',
        html: `
            <div class="text-left text-sm text-slate-700 space-y-3 mt-2">
                <p class="text-center font-medium text-slate-600">Hệ thống đã ghi nhận thông tin trao tặng từ <b class="text-emerald-700">${name}</b> (${classSchool}).</p>
                <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900 space-y-1">
                    <p>📞 <b>Liên hệ:</b> ${contact}</p>
                    <p>🎓 <b>Dành cho khối:</b> ${grade}</p>
                    <p>📖 <b>Bộ sách trao tặng:</b> ${series}</p>
                    <p>📦 <b>Số lượng:</b> ${quantity} bộ sách giáo khoa cũ</p>
                    <p>📚 <b>Các môn quyên góp (${checkedSubjects.length} môn):</b> ${checkedSubjects.join(', ')}</p>
                    <p>🤝 <b>Tiếp nhận:</b> Bộ phận Thư viện / Đoàn Trường sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
                </div>
            </div>
        `,
        icon: 'success',
        confirmButtonText: 'Tuyệt Vời!',
        confirmButtonColor: '#059669',
        borderRadius: '1rem'
    });

    e.target.reset();
}

// Tự Động Khởi Tạo Khi Tải Trang
window.onload = function() {
    onGradeChange();
};

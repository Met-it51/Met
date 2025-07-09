// สร้างเอกสารใหม่
var เอกสารใหม่ = app.documents.add(800, 600, 72, "งานออกแบบของฉัน");

// ตั้งค่าสีพื้นหลังเป็นสีแดง
app.backgroundColor.rgb.red = 255;
app.backgroundColor.rgb.green = 0;
app.backgroundColor.rgb.blue = 0;

// สร้างเลเยอร์ใหม่
var เลเยอร์ใหม่ = เอกสารใหม่.artLayers.add();
เลเยอร์ใหม่.name = "เลเยอร์สีฟ้า";
เลเยอร์ใหม่.kind = LayerKind.NORMAL;

// เติมเลเยอร์ด้วยสีน้ำเงิน
app.foregroundColor.rgb.red = 0;
app.foregroundColor.rgb.green = 0;
app.foregroundColor.rgb.blue = 255;
เอกสารใหม่.selection.selectAll();
เอกสารใหม่.selection.fill(app.foregroundColor);
เอกสารใหม่.selection.deselect();
